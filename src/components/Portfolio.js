import url from "../images/text__COLOR_font-main.svg";

const Portfolio = () => {
  return (
    <nav className="portfolio__url-block">
      <a
        className="portfolio__url"
        target="blank"
        href="https://github.com/zhoraakop/how-to-learn"
      >
        Статичный сайт
        <img alt="Кнопка" className="portfolio__image-url" src={url} />
      </a>
      <a
        className="portfolio__url"
        target="blank"
        href="https://zhoraakop.github.io/russian-travel"
      >
        Адаптивный сайт
        <img alt="Кнопка" className="portfolio__image-url" src={url} />
      </a>
      <a
        className="portfolio__url"
        target="blank"
        href="https://github.com/zhoraakop/react-mesto-api-full-gha"
      >
        Одностраничное приложение
        <img alt="Кнопка" className="portfolio__image-url" src={url} />
      </a>
    </nav>
  );
};

export default Portfolio;
