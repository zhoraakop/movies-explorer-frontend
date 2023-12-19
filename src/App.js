import logo from "./images/logo.svg";
import Movies from "./components/Movies";
import SavedMovies from "./components/SavedMovies";
import SearchForm from "./components/SearchForm";
import Profile from "./components/Profile";
const log = true;

function App() {
  return (
    <div className="page">
      {!log && (
        <header className="header">
          <img alt="Лого"src={logo} className="header__image"></img>
          <button className="header__button">Регистрация</button>
          <button className="header__button">Войти</button>
        </header>
        )
      }
      {log && (
        <header className="header login">
          <img alt="Лого"src={logo} className="header__image"></img>
          <button className="header__button-movies">Фильмы</button>
          <button className="header__button-movies">Сохраненные фильмы</button>
          <button className="header__button-profile">Аккаунт</button>
        </header>
        )
      }
      <Profile />
      <footer className="footer">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__block">
          <p className="footer__block_year">© 2023</p>
          <p className="footer__block_yandex">Яндекс.Практикум</p>
          <a href="https://github.com/zhoraakop" className="footer__block_github">Github</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
