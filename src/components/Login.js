function Login() {
  return (
    <div className="login">
      <form className="login register__form">
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
          Войти
        </button>
        <p className="register__form-questian">
          Ещё не зарегистрированы? <a href="#">Регистрация</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
