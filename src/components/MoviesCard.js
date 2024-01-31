import { useLocation } from "react-router-dom";
import deleteButton from "../images/deleteButton.svg";
import okButton from "../images/save3.svg";

function MoviesCard({ card, onSaved, onCheck, onDelete }) {
  const page = useLocation();
  const saved = onCheck(card);
  function handleDeleteMovie() {
    onDelete(card);
  }
  function handleSavedMovie() {
    onSaved(card);
  }
  return (
    <div className="movies__card">
      <img
        alt={card.image.name}
        className="movies__image-card"
        src={
          page.pathname === "/movies"
            ? `https://api.nomoreparties.co${card.image.url}`
            : card.image
        }
      />
      <h2 className="movies__title-card">{card.nameRU}</h2>
      <div className="movies__background-card">
        <p className="movies__subtitle-card">
          {card.duration / 60 === 0
            ? `${card.duration}м`
            : `${Math.round(card.duration / 60)}ч ${card.duration % 60}м`}
        </p>
      </div>
      {page.pathname === "/movies" && saved === true ? (
        <img alt="Галочка" className="movies__button-card_ok" src={okButton} />
      ) : (
        <button
          type="button"
          className="movies__button-card"
          onClick={handleSavedMovie}
        >
          Сохранить
        </button>
      )}
      {page.pathname === "/saved-movies" && (
        <img
          alt="Удаление"
          className="movies__button-card_delete"
          src={deleteButton}
          onClick={handleDeleteMovie}
        />
      )}
    </div>
  );
}

export default MoviesCard;
