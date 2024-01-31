import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";

import Header from "./Header";
import { emailRegex } from "../utils/const";
import useForm from "../hooks/useForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Login({ onLogin }) {
  const log = true;

  const { formValues, formErrors, handleChange, setFormValues, resetForm } =
    useForm();

  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    resetForm();
    setFormValues({
      password: currentUser.password,
      email: currentUser.email,
    });
  }, [resetForm, setFormValues, currentUser]);
  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({ email: formValues.email, password: formValues.password });
  }

  return (
    <>
      <Header log={log} />
      <main className="register">
        <form className="register__form" onSubmit={handleSubmit}>
          <p className="register__title-form">E-mail</p>
          <input
            className={`register__input-form ${
              !formErrors && "register__input-form_active"
            }`}
            type="email"
            name="email"
            required
            minLength="2"
            maxLength="40"
            placeholder="E-mail"
            onChange={handleChange}
            pattern={emailRegex}
          ></input>
          <span className="form-error">{formErrors.email}</span>
          <p className="register__title-form">Пароль</p>
          <input
            className={`register__input-form ${
              !formErrors && "register__input-form_active"
            }`}
            id="password"
            name="password"
            minLength="2"
            maxLength="40"
            placeholder="Пароль"
            required
            onChange={handleChange}
          ></input>
          <span className="form-error">{formErrors.password}</span>
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
