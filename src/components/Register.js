import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";

function Register({ onRegister }) {
  const reg = true;

  const [userData, setUserData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (!userData) {
      return;
    }
    onRegister(userData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  return (
    <>
      <Header reg={reg} />
      <main className="register">
        <form className="register__form" onSubmit={handleSubmit}>
          <p className="register__title-form">Имя</p>
          <input
            className="register__input-form"
            type="text"
            name="name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
            value={userData.name || ""}
            onChange={handleChange}
          ></input>
          <p className="register__title-form">E-mail</p>
          <input
            className="register__input-form"
            type="email"
            name="email"
            placeholder="E-mail"
            minLength="2"
            maxLength="40"
            required
            value={userData.email || ""}
            onChange={handleChange}
          ></input>
          <p className="register__title-form">Пароль</p>
          <input
            className="register__input-form"
            type="password"
            name="password"
            placeholder="Пароль"
            minLength="2"
            maxLength="40"
            required
            value={userData.password || ""}
            onChange={handleChange}
          ></input>
          <div className="register__block">
            <button type="submit" className="register__button-block">
              Зарегистрироваться
            </button>
            <p className="register__questian-block">
              Уже зарегистрированы? <Link to="/signin">Войти</Link>
            </p>
          </div>
        </form>
      </main>
    </>
  );
}

export default Register;
