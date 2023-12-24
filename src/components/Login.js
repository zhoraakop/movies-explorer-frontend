import { Link } from "react-router-dom";
import Header from "./Header";

function Login() {
  const log = true;
  return (
    <main className="content login">
      <Header log={log} />
      <form className="login__form register__form">
        <p className="register__title-form">E-mail</p>
        <input
          className="register__input-form"
          type="email"
          required
          minLength="2"
          maxLength="40"
          placeholder="E-mail"
        ></input>
        <p className="register__title-form" type="text">
          Пароль
        </p>
        <input
          className="register__input-form"
          type="password"
          id="password"
          minLength="2"
          maxLength="40"
          placeholder="Пароль"
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
    </main>
  );
}

export default Login;
