import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
const log = false;
const reg = false;
const logReg = false;

function Header({ onClickMenu, onClickMenuIsOpen, onClickMenuIsClose }) {
  return (
    <>
      {!logReg && reg && !log ? (
        <header className="header register">
          <Link to="/" className="logo">
            <img alt="Лого" src={logo} className="header__image" />
          </Link>
          <h2 className="header__title">Добро пожаловать!</h2>
        </header>
      ) : null}
      {!logReg && !reg && log ? (
        <header className="header register">
          <Link to="/" className="logo">
            <img alt="Лого" src={logo} className="header__image" />
          </Link>
          <h2 className="header__title">Рады видеть!</h2>
        </header>
      ) : null}
      {!logReg && !reg && !log ? (
        <header className="header">
          <Link to="/">
            <img alt="Лого" src={logo} className="header__image"></img>
          </Link>
          <Link to="/signup" className="header__button">
            Регистрация
          </Link>
          <Link to="/signin" className="header__button">
            Войти
          </Link>
        </header>
      ) : null}
      {logReg ? (
        <header className="header login">
          <Link to="/">
            <img alt="Лого" src={logo} className="header__image"></img>
          </Link>
          <button
            onClick={onClickMenuIsOpen}
            className="header__button-menu"
          ></button>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `header__button-movies ${
                isActive ? "header__button-movies_active" : ""
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `header__button-movies ${
                isActive ? "header__button-movies_active" : ""
              }`
            }
          >
            Сохраненные фильмы
          </NavLink>
          <Link to="/profile" className="header__button-profile">
            Аккаунт
          </Link>
          {console.log(onClickMenu)}
          <div className={`popup ${onClickMenu ? "popup_active" : ""}`}>
            <div className="popup__content">
              <button
                onClick={onClickMenuIsClose}
                className="popup__close-button"
              ></button>
              <NavLink
                to="/"
                onClick={onClickMenuIsClose}
                className={({ isActive }) =>
                  `popup__movies-button ${
                    isActive ? "popup__movies-button_active" : ""
                  }`
                }
              >
                Главная
              </NavLink>
              <NavLink
                to="/movies"
                onClick={onClickMenuIsClose}
                className={({ isActive }) =>
                  `popup__movies-button ${
                    isActive ? "popup__movies-button_active" : ""
                  }`
                }
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                onClick={onClickMenuIsClose}
                className={({ isActive }) =>
                  `popup__movies-button ${
                    isActive ? "popup__movies-button_active" : ""
                  }`
                }
              >
                Сохраненные фильмы
              </NavLink>
              <NavLink
                to="/profile"
                onClick={onClickMenuIsClose}
                className="popup__profile-button"
              >
                Аккаунт
              </NavLink>
            </div>
          </div>
        </header>
      ) : null}
    </>
  );
}

export default Header;
