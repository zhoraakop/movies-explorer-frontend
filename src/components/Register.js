import { Link } from "react-router-dom";
import Header from "./Header";

function Register() {
  return (
    <div className="register">
      <Header />
      <form className="register__form">
        <p className="register__title-form">Имя</p>
        <input
          className="register__input-form"
          type="text"
          placeholder="Имя"
          required
        ></input>
        <p className="register__title-form">E-mail</p>
        <input
          className="register__input-form"
          placeholder="E-mail"
          required
        ></input>
        <p className="register__title-form" type="text">
          Пароль
        </p>
        <input
          className="register__input-form"
          type="password"
          placeholder="Пароль"
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
    </div>
  );
}

export default Register;
