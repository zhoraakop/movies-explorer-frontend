import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="error">
      <h2 className="error__title">404</h2>
      <p className="error__subtitle">Страница не найдена</p>
      <a onClick={() => navigate(-1)} className="error__button">
        Назад
      </a>
    </div>
  );
}

export default NotFound;
