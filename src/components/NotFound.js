function NotFound() {
    return (
        <div className="error">
            <h2 className="error__title">404</h2>
            <p className="error__subtitle">Страница не найдена</p>
            <a href="#" className="error__button">Назад</a>
        </div>
    );
}

export default NotFound;