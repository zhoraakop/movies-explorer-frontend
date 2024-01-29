import { useState, useContext, useEffect } from "react";
import Header from "./Header";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Profile({
  onLogout,
  onClickMenu,
  onClickMenuIsOpen,
  onClickMenuIsClose,
  onEdit,
  onName,
  onEmail
}) {
  const logReg = true;
  const currentUser = useContext(CurrentUserContext);
  const [userData, setUserData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!name && !email) {
      return;
    }
    onEdit({
      name: name,
      email: email
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

  return (
    <>
      <Header
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
              type="text"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
            ></input>
            <div className="border"></div>
            <p className="profile__subtitle-form">E-mail</p>
            <input
              className="profile__input-form profile__input-email"
              value={email ? email : ""}
              onChange={handleChangeEmail}
              type="email"
              minLength="2"
              maxLength="40"
              placeholder="E-mail"
            ></input>
            <button
              type="submit"
              className={((name === onName) && (email === onEmail)) ? "profile__edit-button profile__edit-button_disabled" : "profile__edit-button"}
              disabled={((name === onName) && (email === onEmail)) ? false : true}
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
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
