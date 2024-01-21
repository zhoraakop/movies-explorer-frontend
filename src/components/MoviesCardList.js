import MoviesCard from "./MoviesCard";

function MoviesCardList({cards}) {
  return (
    <ul className="movies">
      {cards.map((card) => (
        <li><MoviesCard key={card._id} card={card} /></li>
      ))
      }

    </ul>
  );
}

export default MoviesCardList;
