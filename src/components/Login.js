import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";

function Login({ onLogin }) {
  const log = true;

  const [userData, setUserData] = useState({});

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!userData) {
      return;
    }
    onLogin(userData);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }


  return (
    <>
    <Header log={log} />
    <main className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <p className="register__title-form">E-mail</p>
        <input
          className="register__input-form"
          type="email"
          name="email"
          required
          minLength="2"
          maxLength="40"
          placeholder="E-mail"
          value={userData.email || ""}
          onChange={handleChange}
        ></input>
        <p className="register__title-form">
          Пароль
        </p>
        <input
          className="register__input-form"
          type="password"
          id="password"
          name="password"
          minLength="2"
          maxLength="40"
          placeholder="Пароль"
          required
          value={userData.password || ""}
          onChange={handleChange}
        ></input>
        <div className="register__block login">
          <button type="submit" className="register__button-block">
            Войти
          </button>
          <p className="register__questian-block">
            Ещё не зарегистрированы? <Link to="/signup">Регистрация</Link>
          </p>
        </div>
      </form>
    </main>
    </>
  );
}

export default Login;
