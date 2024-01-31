import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "./Header";
import { emailRegex } from "../utils/const";
import useForm from "../hooks/useForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Register({ onRegister, errorText }) {
  const reg = true;

  const { formIsValid, formValues, formErrors, handleChange, setFormValues } =
    useForm();

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setFormValues({
      name: currentUser.name,
      password: currentUser.password,
      email: currentUser.email,
    });
  }, [setFormValues, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    });
  };

  return (
    <>
      <Header reg={reg} />
      <main className="register">
        <form className="register__form" onSubmit={handleSubmit} noValidate>
          <p className="register__title-form">Имя</p>
          <input
            className={`register__input-form ${
              !formErrors && "register__input-form_active"
            }`}
            type="text"
            name="name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
            onChange={handleChange}
          ></input>
          <span className="form-error">{formErrors.name}</span>
          <p className="register__title-form">E-mail</p>
          <input
            className={`register__input-form ${
              !formErrors && "register__input-form_active"
            }`}
            pattern={emailRegex}
            type="email"
            name="email"
            placeholder="E-mail"
            minLength="2"
            maxLength="40"
            required
            onChange={handleChange}
          ></input>
          <span className="form-error">{formErrors.email}</span>
          <p className="register__title-form">Пароль</p>
          <input
            className={`register__input-form ${
              !formErrors && "register__input-form_active"
            }`}
            type="password"
            name="password"
            placeholder="Пароль"
            minLength="2"
            maxLength="40"
            required
            onChange={handleChange}
          ></input>
          <span className="form-error">{formErrors.password}</span>
          <div className="register__block">
          <span className='register__error-block'>{errorText}</span>
            <button type="submit" className="register__button-block" disabled={!formIsValid}>
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
