import url from '../images/text__COLOR_font-main.svg';

const Portfolio = () => {
    return(
        <div className="portfolio__block">
            <a className="portfolio__url" target="blank" href="https://github.com/zhoraakop/how-to-learn">Статичный сайт<img className="portfolio__url-image" src={url}></img></a>
            <a className="portfolio__url" target="blank" href="https://zhoraakop.github.io/russian-travel">Адаптивный сайт<img className="portfolio__url-image" src={url}></img></a>
            <a className="portfolio__url" target="blank" href="https://github.com/zhoraakop/react-mesto-api-full-gha">Одностраничное приложение<img className="portfolio__url-image" src={url}></img></a>
        </div>
    )
}

export default Portfolio;