import { Link } from "react-router-dom";
import Header from "./Header";

function Register() {
  return (
    <div className="register">
      <Header />
      <form className="register__form">
        <p className="register__form-title">Имя</p>
        <input
          className="register__form-input"
          type="text"
          placeholder="Имя"
          required
        ></input>
        <p className="register__form-title">E-mail</p>
        <input
          className="register__form-input"
          placeholder="E-mail"
          required
        ></input>
        <p className="register__form-title" type="text">
          Пароль
        </p>
        <input
          className="register__form-input"
          type="password"
          placeholder="Пароль"
          required
        ></input>
        <button type="submit" className="register__form-button">
          Зарегистрироваться
        </button>
        <p className="register__form-questian">
          Уже зарегистрированы? <Link to="/signin">Войти</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
