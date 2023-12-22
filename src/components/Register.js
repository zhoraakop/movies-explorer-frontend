function Register() {
  return (
    <div className="register">
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
          Уже зарегистрированы? <a href="#">Войти</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
