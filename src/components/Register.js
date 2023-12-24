import { Link } from "react-router-dom";
import Header from "./Header";

function Register() {
  const reg = true;
  return (
    <main className="content register">
      <Header reg={reg} />
      <form className="register__form">
        <p className="register__title-form">Имя</p>
        <input
          className="register__input-form"
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        ></input>
        <p className="register__title-form">E-mail</p>
        <input
          className="register__input-form"
          type="email"
          placeholder="E-mail"
          minLength="2"
          maxLength="40"
          required
        ></input>
        <p className="register__title-form" type="text">
          Пароль
        </p>
        <input
          className="register__input-form"
          type="password"
          placeholder="Пароль"
          minLength="2"
          maxLength="40"
          required
        ></input>
      </form>
      <div className="register__block">
        <button type="submit" className="register__button">
          Зарегистрироваться
        </button>
        <p className="register__questian">
          Уже зарегистрированы? <Link to="/signin">Войти</Link>
        </p>

      </div>
    </main>
  );
}

export default Register;
