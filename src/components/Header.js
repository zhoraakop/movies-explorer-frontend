import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

function Header({
  onClickMenu,
  onClickMenuIsOpen,
  onClickMenuIsClose,
  log,
  reg,
  logReg,
  isRegister,
}) {
  const main = isRegister ? true : false;

  return (
    <>
      {!logReg && reg && !log ? (
        <header className="header-register">
          <div className="header-register__block">
            <Link to="/" className="header-register__image">
              <img alt="Лого" src={logo} />
            </Link>
            <h2 className="header-register__title">Добро пожаловать!</h2>
          </div>
        </header>
      ) : null}
      {!logReg && !reg && log ? (
        <header className="header-register">
          <div className="header-register__block">
            <Link to="/" className="logo header-register__image">
              <img alt="Лого" src={logo} />
            </Link>
            <h2 className="header-register__title">Рады видеть!</h2>
          </div>
        </header>
      ) : null}
      {!logReg && !reg && !log && !main ? (
        <header className="header">
          <nav className="header__navigation">
            <Link to="/" className="header__image">
              <img alt="Лого" src={logo} />
            </Link>
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button">
              Войти
            </Link>
          </nav>
        </header>
      ) : null}
      {logReg || main ? (
        <header className="header">
          <Link to="/" className="header__image">
            <img alt="Лого" src={logo} />
          </Link>
          <button
            type="button"
            onClick={onClickMenuIsOpen}
            className="header__menu-button"
          ></button>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `header__movies-button ${
                isActive ? "header__movies-button_active" : ""
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `header__movies-button ${
                isActive ? "header__movies-button_active" : ""
              }`
            }
          >
            Сохраненные фильмы
          </NavLink>
          <Link to="/profile" className="header__profile-button">
            Аккаунт
          </Link>
          <div className={`popup ${onClickMenu ? "popup_active" : ""}`}>
            <div className="popup__content">
              <button
                type="button"
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
