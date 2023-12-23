import Portfolio from "./Portfolio";

const AboutMe = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="title">Студент</h2>
      <div className="portfolio__block">
        <div className="portfolio__image-block"></div>
        <h2 className="portfolio__title-block">Георгий</h2>
        <h3 className="portfolio__subtitle-block">
          Начинающий Фронтенд-разработчик, 20 лет
        </h3>
        <p className="portfolio__quote-block">
          Я родился в Белгороде, переехал в Санкт-Петербург и живу сейчас в
          общежитии. Учусь на факультете защиты информации в СПБГУАП. Я люблю
          слушать музыку, а ещё профессиально занимался плаванием и спорт
          является неотъемлемой частью моей жизни. Кодить начал в 11 классе на
          базовом уровне. Надеюсь после курсов я смогу себя проявить в хорошей
          компании.
        </p>
        <a
          target="blank"
          href="https://github.com/zhoraakop"
          className="portfolio__github-block"
        >
          Github
        </a>
        <p className="portfolio__title-block">Портфолио</p>
        <Portfolio />
      </div>
    </section>
  );
};

export default AboutMe;
