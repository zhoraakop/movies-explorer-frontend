import Portfolio from "./Portfolio";

const AboutMe = () => {
  return (
    <section className="portfolio">
      <h2 className="title">Студент</h2>
      <div className="portfolio__block">
        <div className="portfolio__block-image"></div>
        <h2 className="portfolio__block-title">Георгий</h2>
        <h3 className="portfolio__block-subtitle">
          Начинающий Фронтенд-разработчик, 20 лет
        </h3>
        <p className="portfolio__block-quote">
          Я родился в Белгороде, переехал в Санкт-Петербург и живу сейчас в
          общежитии. Учусь на факультете защиты информации в СПБГУАП. Я люблю
          слушать музыку, а ещё профессиально занимался плаванием и спорт
          является неотъемлемой частью моей жизни. Кодить начал в 11 классе на
          базовом уровне. Надеюсь после курсов я смогу себя проявить в хорошей
          компании.
        </p>
        <a
          href="https://github.com/zhoraakop"
          className="portfolio__block-github"
        >
          Github
        </a>
        <p className="portfolio__block-title">Портфолио</p>
        <Portfolio />
      </div>
    </section>
  );
};

export default AboutMe;
