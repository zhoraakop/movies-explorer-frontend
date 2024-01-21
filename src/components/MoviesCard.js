import film_one from "../images/pic__COLOR_pic.svg";
import deleteButton from "../images/deleteButton.svg";
import okButton from "../images/save3.svg";

function MoviesCard({card}) {
  return (
    <div className="movies__card">
      <img alt={card.image.name} className="movies__image-card" src={`https://api.nomoreparties.co${card.image.url}`} />
      <h2 className="movies__title-card">{card.nameRU}</h2>
      <div className="movies__background-card">
        <p className="movies__subtitle-card">{card.duration/60 === 0 ? (`${card.duration}м`) : (`${Math.round(card.duration/60)}ч ${card.duration%60}м`) }</p>
      </div>
      <img alt="Галочка" className="movies__button-card_ok" src={okButton} />
      <img alt="Удаление" className="movies__button-card_delete" src={deleteButton} />
      <button type="button" className="movies__button-card">Сохранить</button>
    </div>
  );
}

export default MoviesCard;
