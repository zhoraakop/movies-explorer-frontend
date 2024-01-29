import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import getMovies from "./utils/MoviesApi";
import Movies from "./components/Movies";
import SavedMovies from "./components/SavedMovies";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import { getSavedMovies } from "./utils/MainApi";
import * as MainApi from "./utils/MainApi";
import { getToken, removeToken, setToken } from "./utils/Token";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const token = getToken();

  useEffect(() => {
    if (token) {
      Promise.all([MainApi.getCurrentUser(token), getSavedMovies()])
        .then(([user, movies]) => {
          if (user) {
            setCurrentUser(user);
            setEmail(user.email);
            setName(user.name);
            setLoggedIn({ ...user });
            setSavedMovies(movies);
            setIsRegister(true);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isRegister]);
  useEffect(() => {
    getMovies()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function checkSavedMovies(movie) {
    return savedMovies.some(
      (i) => i._id === movie._id || i.movieId === movie.id
    );
  }

  const deleteMovie = (movie) => {
    const movieId = movie._id;
    MainApi.deleteMovie(movieId)
      .then(() => {
        setSavedMovies((movie) => {
          return movie.filter((savedMovie) => savedMovie._id !== movieId);
        });
      })
      .catch(console.error);
  };


  function savedMovie(movie) {
    MainApi.saveMovie(movie)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
      })
      .catch(console.error);
  }

  function cbLogin(dataLogin) {
    MainApi.signin(dataLogin)
      .then((dataLogin) => {
        setToken(dataLogin.token);
        setLoggedIn(dataLogin);
        setIsRegister(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function cbRegister(dataRegister) {
    MainApi.signup(dataRegister)
      .then((dataRegister) => {
        setLoggedIn(dataRegister);
        setEmail(dataRegister.email);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function cbLogout() {
    removeToken();
    setEmail("");
    setLoggedIn(null);
  }

  function editProfile(dataProfile) {
    MainApi.editUserProfile(dataProfile)
      .then((dataProfile) => {
        setEmail(dataProfile.email);
        setName(dataProfile.name);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleClickMenuPopup() {
    setIsOpenPopup(true);
  }

  function closeAll() {
    setIsOpenPopup(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                onClickMenuIsClose={closeAll}
                onClickMenu={isOpenPopup}
                onClickMenuIsOpen={handleClickMenuPopup}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute user={loggedIn} isRegister={isRegister}>
                <Movies
                  onCheck={checkSavedMovies}
                  onSaved={savedMovie}
                  cards={cards}
                  onClickMenuIsClose={closeAll}
                  onClickMenu={isOpenPopup}
                  onClickMenuIsOpen={handleClickMenuPopup}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute user={loggedIn} isRegister={isRegister}>
                <SavedMovies
                  onDelete={deleteMovie}
                  onCheck={checkSavedMovies}
                  cards={savedMovies}
                  onClickMenuIsClose={closeAll}
                  onClickMenu={isOpenPopup}
                  onClickMenuIsOpen={handleClickMenuPopup}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={loggedIn} isRegister={isRegister}>
                <Profile
                  onEdit={editProfile}
                  onEmail={email}
                  onName={name}
                  onLogout={cbLogout}
                  onClickMenuIsClose={closeAll}
                  onClickMenu={isOpenPopup}
                  onClickMenuIsOpen={handleClickMenuPopup}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedRoute
                user={loggedIn}
                onlyUnAuth
                isRegister={isRegister}
              >
                {" "}
                <Login onLogin={cbLogin} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute
                user={loggedIn}
                onlyUnAuth
                isRegister={isRegister}
              >
                <Register onRegister={cbRegister} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
