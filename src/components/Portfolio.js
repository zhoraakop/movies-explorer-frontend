import url from '../images/text__COLOR_font-main.svg';

const Portfolio = () => {
    return(
        <div className="portfolio__block">
            <p className="portfolio__block_url">Статичный сайт<a href="https://github.com/zhoraakop/how-to-learn"><img className="portfolio__block_url-image" src={url}></img></a></p>
            <p className="portfolio__block_url">Адаптивный сайт<a href="https://zhoraakop.github.io/russian-travel"><img className="portfolio__block_url-image" src={url}></img></a></p>
            <p className="portfolio__block_url">Одностраничное приложение<a href="https://github.com/zhoraakop/react-mesto-api-full-gha"><img className="portfolio__block_url-image" src={url}></img></a></p>
        </div>
    )
}

export default Portfolio;