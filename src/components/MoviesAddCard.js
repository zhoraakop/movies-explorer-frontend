function MoviesAddCard({ count, onAdd, cards }) {
  return (
    <section className="movies-add">
      <button
        onClick={onAdd}
        type="button"
        className={`movies-add__button ${
          count >= cards.length && "movies-add__button_disabled"
        }`}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesAddCard;
