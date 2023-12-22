import logo from "../images/logo.svg";
const log = false;
const reg = false;
const logReg = true;


function Header() {
  return (
    <>
      {!logReg && reg && !log ? (
        <header className="header register">
          <img alt="Лого" src={logo} className="header__image"></img>
          <h2 className="header__title">Добро пожаловать!</h2>
        </header>
      ) : null}
      {!logReg && !reg && log ? (
        <header className="header register">
          <img alt="Лого" src={logo} className="header__image"></img>
          <h2 className="header__title">Рады видеть!</h2>
        </header>
      ) : null}
      {!logReg && !reg && !log ? (
        <header className="header">
          <img alt="Лого"src={logo} className="header__image"></img>
          <button className="header__button">Регистрация</button>
          <button className="header__button">Войти</button>
        </header>
        ) : null}
        {logReg ? (
          <header className="header login">
            <img alt="Лого"src={logo} className="header__image"></img>
            <button className="header__button-menu"></button>
            <button className="header__button-movies">Фильмы</button>
            <button className="header__button-movies">Сохраненные фильмы</button>
            <button className="header__button-profile">Аккаунт</button>
            <div className="popup">
              <div className="popup__content">
                <button className="popup__close-button"></button>
                <button className="popup__movies-button">Главная</button>
                <button className="popup__movies-button popup__movies-button_active">Фильмы</button>
                <button className="popup__movies-button">Сохраненные фильмы</button>
                <button className="popup__profile-button">Аккаунт</button>
              </div>
            </div>
          </header>
        ) : null}
    </>
  );
}

export default Header;
