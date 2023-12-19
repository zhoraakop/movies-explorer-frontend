import logo from "./images/logo.svg";
import Main from "./components/Main";

function App() {
  return (
    <div className="page">
      <header className="header">
        <img src={logo} className="header__image"></img>
        <button className="header__button">Регистрация</button>
        <button className="header__button">Войти</button>
      </header>
      <Main/>
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
