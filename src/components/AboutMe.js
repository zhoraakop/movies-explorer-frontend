import Portfolio from "./Portfolio";
import portfolio from "../images/portfolio.jpg";

const AboutMe = () => {
    return(
        <section className="portfolio">
          <h2 className="title">Студент</h2>
          <div className="portfolio__block">
            <h2 className="portfolio__block_title">Георгий</h2>
            <h3 className="portfolio__block_subtitle">
              Начинающий Фронтенд-разработчик, 20 лет
            </h3>
            <p className="portfolio__block_quote">
              Я родился в Белгороде, переехал в Санкт-Петербург и живу сейчас в
              общежитии. Учусь на факультете защиты информации в СПБГУАП. Я люблю
              слушать музыку, а ещё профессиально занимался плаванием и спорт является неотъемлемой частью моей жизни. Кодить начал в 11 классе на базовом уровне.
              Надеюсь после курсов я смогу себя проявить в хорошей компании.
            </p>
            <a href="https://github.com/zhoraakop" className="portfolio__block_github">Github</a>
            <img className="portfolio__block_image" src={portfolio}></img>
            <p className="portfolio__block_title">Портфолио</p>
            <Portfolio></Portfolio>
          </div>
        </section>
    )
}

export default AboutMe;