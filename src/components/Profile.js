import { useState, useContext, useEffect } from "react";
import Header from "./Header";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import useForm from "../hooks/useForm";
import { emailRegex } from "../utils/const";

function Profile({
  onLogout,
  onClickMenu,
  onClickMenuIsOpen,
  onClickMenuIsClose,
  onEdit,
  success,
  isRegister,
}) {
  const logReg = true;
  const { formErrors, setFormIsValid } = useForm();

  const currentUser = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    setFormIsValid(evt.target.closest("form").checkValidity());
    setFormIsValid(false);
    setIsEdit(false);
    if (!name && !email) {
      return;
    }
    onEdit({
      name: name,
      email: email,
    });
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleFormEdit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  return (
    <>
      <Header
        isRegister={isRegister}
        onClickMenuIsClose={onClickMenuIsClose}
        onClickMenu={onClickMenu}
        onClickMenuIsOpen={onClickMenuIsOpen}
        logReg={logReg}
      />
      <main className="content">
        <section className="profile">
          <h1 className="profile__title">{`Привет, ${name}!`}</h1>
          <form className="profile__form" onSubmit={handleSubmit}>
            <p className="profile__title-form">Имя</p>
            <input
              className="profile__input-form profile__input-name"
              value={name ? name : ""}
              onChange={handleChangeName}
              disabled={!isEdit}
              type="text"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
            ></input>
            <span className="form-error">{formErrors.name}</span>
            <div className="border"></div>
            <p className="profile__subtitle-form">E-mail</p>
            <input
              className="profile__input-form profile__input-email"
              value={email ? email : ""}
              onChange={handleChangeEmail}
              pattern={emailRegex}
              disabled={!isEdit}
              type="email"
              minLength="2"
              maxLength="40"
              placeholder="E-mail"
            ></input>
            <span className="form-error">{formErrors.email}</span>
            {isEdit ? (
              <button
                type="submit"
                className={`profile__save-button ${
                  isEdit && "profile__save-button_unactive"
                }`}
                disabled={
                  name === currentUser.name && email === currentUser.email
                    ? true
                    : false
                }
              >
                Сохранить
              </button>
            ) : (
              <>
                <span
                  className={
                    success === "Данные профиля изменены"
                      ? "profile__success-edit"
                      : "profile__unsuccess-edit"
                  }
                >
                  {success}
                </span>
                <button
                  className="profile__edit-button"
                  onClick={handleFormEdit}
                >
                  Редактировать
                </button>
                <button
                  type="button"
                  className="profile__exit-button"
                  onClick={onLogout}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
