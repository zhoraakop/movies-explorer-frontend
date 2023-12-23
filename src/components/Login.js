import { Link } from "react-router-dom";
import Header from "./Header";

function Login() {
  return (
    <div className="login">
      <Header />
      <form className="login__form register__form">
        <p className="register__title-form">E-mail</p>
        <input
          className="register__input-form"
          required
        ></input>
        <p className="register__title-form" type="text">
          Пароль
        </p>
        <input
          className="register__input-form"
          type="password"
          id="password"
          required
        ></input>
      </form>
      <div className="login__block">
        <button type="submit" className="login__button">
          Войти
        </button>
        <p className="login__questian">
          Ещё не зарегистрированы? <Link to="/signup">Регистрация</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
