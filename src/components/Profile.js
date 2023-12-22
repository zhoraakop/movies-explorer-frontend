const name = 'Георгий';
const email = 'akopovzh@yandex.ru';

function Profile() {
    return (
        <div className="profile">
        <h2 className="profile__title">Привет, Георгий!</h2>
        <form className="profile__form">
          <p className="profile__form-title">Имя</p>
          <input className="profile__input-name" value={name}></input>
          <div className="border"></div>
          <p className="profile__form-subtitle">E-mail</p>
          <input className="profile__input-email" value={email}></input>
        </form>
        <button className="profile__button-edit">Редактировать</button>
        <button className="profile__button-exit">Выйти из аккаунта</button>
      </div>
    );
}

export default Profile;