import Header from "./Header";

const name = "Георгий";
const email = "akopovzh@yandex.ru";

function Profile({ onClickMenu, onClickMenuIsOpen, onClickMenuIsClose }) {
  return (
    <>
      <Header
        onClickMenuIsClose={onClickMenuIsClose}
        onClickMenu={onClickMenu}
        onClickMenuIsOpen={onClickMenuIsOpen}
      />
      <div className="profile">
        <h2 className="profile__title">Привет, Георгий!</h2>
        <form className="profile__form">
          <p className="profile__title-form">Имя</p>
          <input className="profile__input-form profile__input-name" value={name}></input>
          <div className="border"></div>
          <p className="profile__subtitle-form">E-mail</p>
          <input className="profile__input-form profile__input-email" value={email}></input>
        </form>
        <button className="profile__edit-button">Редактировать</button>
        <button className="profile__exit-button">Выйти из аккаунта</button>
      </div>
    </>
  );
}

export default Profile;
