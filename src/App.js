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

function App() {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [savedCards, setSavedCards] = useState([]);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(null);
  const [email, setEmail] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    getMovies()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.error(err);
      });
    getSavedMovies()
      .then((res) => {
        setSavedCards(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const token = getToken();
  useEffect(() => {
    MainApi.getCurrentUser(token)
      .then((res) => {
        if (token) {
          setCurrentUser(res);
          setEmail(res.email);
          setLoggedIn({ ...res });
          setIsRegister(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [isRegister]);

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
              <Movies
                cards={cards}
                onClickMenuIsClose={closeAll}
                onClickMenu={isOpenPopup}
                onClickMenuIsOpen={handleClickMenuPopup}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                cards={savedCards}
                onClickMenuIsClose={closeAll}
                onClickMenu={isOpenPopup}
                onClickMenuIsOpen={handleClickMenuPopup}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                onClickMenuIsClose={closeAll}
                onClickMenu={isOpenPopup}
                onClickMenuIsOpen={handleClickMenuPopup}
              />
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register onRegister={cbRegister}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
