import Header from "./Header";

const name = "Георгий";
const email = "akopovzh@yandex.ru";

function Profile({ onClickMenu, onClickMenuIsOpen, onClickMenuIsClose }) {
  const logReg = true;
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
          <h1 className="profile__title">Привет, Георгий!</h1>
          <form className="profile__form">
            <p className="profile__title-form">Имя</p>
            <input
              className="profile__input-form profile__input-name"
              value={name}
              type="text"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
            ></input>
            <div className="border"></div>
            <p className="profile__subtitle-form">E-mail</p>
            <input
              className="profile__input-form profile__input-email"
              value={email}
              type="email"
              minLength="2"
              maxLength="40"
              placeholder="E-mail"
            ></input>
          </form>
          <button type="button" className="profile__edit-button">
            Редактировать
          </button>
          <button type="button" className="profile__exit-button">
            Выйти из аккаунта
          </button>
        </section>
      </main>
    </>
  );
}

export default Profile;
