import logo from "./images/logo.svg";
import portfolio from "./images/portfolio.jpg";
import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="header">
        <img src={logo} className="header__image"></img>
        <button className="header__button">Регистрация</button>
        <button className="header__button">Войти</button>
      </header>
      <main className="content">
        <section className="content__about">
          <h1 className="content__about_title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <div className="button-information">
            <button className="button">О проекте</button>
            <button className="button">Технологии</button>
            <button className="button">Студент</button>
          </div>
        </section>
        <section className="information">
          <h2 className="title">О проекте</h2>
          <h2 className="information__title">
            Дипломный проект включал 5 этапов
          </h2>
          <h2 className="information__title">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="information__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
          <p className="information__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
          <p className="information__greenLine">1 неделя</p>
          <p className="information__grayLine">4 недели</p>
          <p className="information__greenLine-subtitle">Back-end</p>
          <p className="information__grayLine-subtitle">Front-end</p>
        </section>
        <section className="technology">
          <div className="technology__block">
            <h2 className="title">Технологии</h2>
            <div className="technology__block-information">
              <h2 className="technology__block_title">7 технологий</h2>
              <p className="technology__block_subtitle">
                На курсе веб-разработки мы освоили технологии, которые применили
                в дипломном проекте.
              </p>
              <div className="button-information">
                <button className="button">HTML</button>
                <button className="button">CSS</button>
                <button className="button">JS</button>
                <button className="button">React</button>
                <button className="button">Git</button>
                <button className="button">Express.js</button>
                <button className="button">mongoDB</button>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio">
          <h2 className="title">Студент</h2>
          <div className="portfolio__block">
            <h2 className="portfolio__block_title">Георгий</h2>
            <h3 className="portfolio__block_subtitle">
              Начинающий Фронтенд-разработчик, 20 лет
            </h3>
            <p className="portfolio__block_quote">
              Я родился в Белгороде, переехал в Санкт-Петербург и живу сейчас в
              общежитии. Учусь на факултете защиты информации в СПБГУАП. Я люблю
              слушать музыку, а ещё профессиально занимался плаванием, сейчас
              увлекаюсь залом. Кодить начал в 11 классе на базовом уровне.
              Надеюсь после курсов я смогу себя проявить в хорошей компании.
            </p>
            <p className="github">Github</p>
            <img className="portfolio__block_image" src={portfolio}></img>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
