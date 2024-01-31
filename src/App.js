import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import Movies from "./components/Movies";
import SavedMovies from "./components/SavedMovies";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import Preloader from "./components/Preloader";
import * as MainApi from "./utils/MainApi";
import { getToken, removeToken, setToken } from "./utils/Token";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const token = getToken();

  useEffect(() => {
    if (token) {
      MainApi.getCurrentUser(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoading(true);
          setEmail(user.email);
          setName(user.name);
          setLoggedIn({ ...user });
          setIsRegister(true);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
      MainApi.getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isRegister]);

  function checkSavedMovies(movie) {
    return savedMovies.some(
      (i) => i._id === movie._id || i.movieId === movie.id
    );
  }

  const deleteMovie = (movie) => {
    setIsLoading(true);
    const movieId = movie._id;
    MainApi.deleteMovie(movieId)
      .then(() => {
        setIsLoading(true);
        setSavedMovies((movie) => {
          return movie.filter((savedMovie) => savedMovie._id !== movieId);
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function savedMovie(movie) {
    MainApi.saveMovie(movie)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function cbLogin(dataLogin) {
    setIsLoading(true);
    MainApi.signin(dataLogin)
      .then((dataLogin) => {
        setIsLoading(true);
        setToken(dataLogin.token);
        setLoggedIn(dataLogin);
        setIsRegister(true);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function cbRegister(dataRegister) {
    MainApi.signup(dataRegister)
      .then((dataRegister) => {
        setIsLoading(true);
        setLoggedIn(dataRegister);
        setEmail(dataRegister.email);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function cbLogout() {
    setIsLoading(false);
    removeToken();
    setEmail("");
    setIsRegister(false);
    setLoggedIn(null);
    localStorage.removeItem("allMovies");
    localStorage.removeItem("searchInputString");
    localStorage.removeItem("isShort");
    localStorage.removeItem("savedSearchInputString");
    localStorage.removeItem("savedIsShort");
  }

  function editProfile(dataProfile) {
    setIsLoading(true);
    MainApi.editUserProfile(dataProfile)
      .then((dataProfile) => {
        setIsLoading(true);
        setEmail(dataProfile.email);
        setName(dataProfile.name);
        setSuccess("Данные профиля изменены");
      })
      .catch((err) => {
        setSuccess("Ошибка при сохранении");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleClickMenuPopup() {
    setIsOpenPopup(true);
  }

  function closeAll() {
    setIsOpenPopup(false);
  }

  return isLoading ? (
    <Preloader />
  ) : (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                isRegister={isRegister}
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
                  isRegister={isRegister}
                  onCheck={checkSavedMovies}
                  onSaved={savedMovie}
                  cards={savedMovies}
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
                  isRegister={isRegister}
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
                  isRegister={isRegister}
                  onEdit={editProfile}
                  onEmail={email}
                  onName={name}
                  onLogout={cbLogout}
                  onClickMenuIsClose={closeAll}
                  onClickMenu={isOpenPopup}
                  onClickMenuIsOpen={handleClickMenuPopup}
                  success={success}
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
