import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
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
import Cookies from "js-cookie";


function App() {
  const navigate = useNavigate();
  const pathname = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorText, setErrorText] = useState('');
  const token = getToken();

  useEffect(() => {
    if (token) {
      MainApi.getCurrentUser(token)
        .then((user) => {
          setCurrentUser(user);
          setEmail(user.email);
          setName(user.name);
          setLoggedIn({ ...user });
          setIsRegister(true);
        })
        .catch((err) => {
          console.error(err);
        })
      MainApi.getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isRegister]);

  useEffect(() => {
    setErrorText('');
    setSuccess('');
  }, [pathname]);

  function checkSavedMovies(movie) {
    return savedMovies.some(
      (i) => i._id === movie._id || i.movieId === movie.id
    );
  }

  const deleteMovie = (movie) => {
    const movieID = movie.id;
    const movieId = movie._id;
    if(movieId !== undefined){
      MainApi.deleteMovie(movieId)
        .then(() => {
          setSavedMovies((oldMovies) => {
            console.log(oldMovies.filter((item) => item._id !== movieId))
            return oldMovies.filter((item) => item._id !== movieId) ;
          });
        })
        .catch((err) => {
          console.error(err);
        })
    }else{
      savedMovies.map((card) => {
        console.log(card)
        if(card.movieId === movieID){
          const newId = card._id;

          MainApi.deleteMovie(newId)
            .then(() => {
              setSavedMovies((oldMovie) => {
                return oldMovie.filter((savedMovie) => savedMovie.id !== newId) ;
              });
            })
            .catch((err) => {
              console.error(err);
            })
        }
      })
    }
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
    MainApi.signin(dataLogin.email, dataLogin.password)
      .then(() => {
        setErrorText('');
        setCurrentUser(dataLogin)
        setName(dataLogin.name);
        setToken(dataLogin.token);
        setLoggedIn(dataLogin);
        setIsRegister(true);
        navigate('/movies')
      })
      .catch((err) => {
        console.error(err)
        setErrorText('Не удалось авторизоваться');
      })
  }

  function cbRegister(dataRegister) {
    MainApi.signup(dataRegister.email, dataRegister.password, dataRegister.name)
      .then(() => {
        setErrorText('');
        setLoggedIn(dataRegister);
        setName(dataRegister.name);
        setEmail(dataRegister.email);
        cbLogin(dataRegister)
        setIsRegister(true);
      })
      .catch((err) => {
        console.error(err)
        setErrorText('Не удалось зарегистрироваться');
      })
  }

  function cbLogout() {
    MainApi.logout()
    .then(() => {
      removeToken();
      setEmail("");
      setIsRegister(false);
      setLoggedIn(null);
      setCurrentUser({}) 
      localStorage.removeItem("allMovies");
      localStorage.removeItem("searchInputString");
      localStorage.removeItem("isShort");
      localStorage.removeItem("savedSearchInputString");
      localStorage.removeItem("savedIsShort");
      navigate('/');

    })
  }

  function editProfile(dataProfile) {
    setIsLoading(true);
    MainApi.editUserProfile(dataProfile)
      .then((dataProfile) => {
        setEmail(dataProfile.email);
        setName(dataProfile.name);
        setSuccess("Данные профиля изменены");
      })
      .catch((err) => {
        setSuccess("Ошибка при сохранении");
        console.error(err);
      })
  }

  function handleClickMenuPopup() {
    setIsOpenPopup(true);
  }

  function closeAll() {
    setIsOpenPopup(false);
  }

  return(
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
              <ProtectedRoute user={currentUser} isRegister={isRegister}>
                <Movies
                  setCards={setSavedMovies}
                  setIsLoading={setIsLoading}
                  isLoading={isLoading}
                  setSavedMovies={setSavedMovies}
                  isRegister={isRegister}
                  onCheck={checkSavedMovies}
                  onDelete={deleteMovie}
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
              <ProtectedRoute user={currentUser} isRegister={isRegister}>
                <SavedMovies
                  setCards={setSavedMovies}
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
              <ProtectedRoute user={currentUser} isRegister={isRegister}>
                <Profile
                  isRegister={isRegister}
                  onEdit={editProfile}
                  onEmail={email}
                  onName={name}
                  setEmail={setEmail}
                  setName={setName}
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
                user={currentUser}
                onlyUnAuth
                isRegister={isRegister}
              >
                {" "}
                <Login onLogin={cbLogin} errorText={errorText}/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute
                user={currentUser}
                onlyUnAuth
                isRegister={isRegister}
              >
                <Register onRegister={cbRegister} errorText={errorText}/>
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
