import MoviesCard from "./MoviesCard";

function MoviesCardList({ cards, onSaved, onCheck, onDelete }) {
  return (
    <ul className="movies">
      {cards.map((card) => (
        <li>
          <MoviesCard
             key={card.movieId || card._id}
            card={card}
            onSaved={onSaved}
            onCheck={onCheck}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}

export default MoviesCardList;
