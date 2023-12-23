import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="error">
      <h2 className="error__title">404</h2>
      <p className="error__subtitle">Страница не найдена</p>
      <Link to="/" className="error__button">
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
