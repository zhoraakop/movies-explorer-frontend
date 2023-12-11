import logo from './images/logo.svg';
import greenLine from './images/back__COLOR_main-1.svg';
import './App.css';

function App() {
  return (
    <div className="page">
      <header className='header'>
        <img src={logo} className='header__image'></img>
        <button className='header__button'>Регистрация</button>
        <button className='header__button'>Войти</button>
      </header>
      <main className='content'>
        <section className='content__about'>
            <h1 className='content__about_description'>Учебный проект студента факультета Веб-разработки.</h1>
            <div className='content__about-information'>
              <button className='content__about_navigation'>О проекте</button>
              <button className='content__about_navigation'>Технологии</button>
              <button className='content__about_navigation'>Студент</button>
            </div>
        </section>
        <section className='information'>
          <h2 className='title'>О проекте</h2>
          <h2 className='information__title'>Дипломный проект включал 5 этапов</h2>
          <h2 className='information__title'>На выполнение диплома ушло 5 недель</h2>
          <p className='information__subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className='information__subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          <p className='information__greenLine'>1 неделя</p>
          <p className='information__grayLine'>4 недели</p>
          <p className='information__greenLine-subtitle'>Back-end</p>
          <p className='information__grayLine-subtitle'>Front-end</p>
        </section>

      </main>
    </div>
  );
}

export default App;
