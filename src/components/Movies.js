import MoviesAddCard from "./MoviesAddCard";
import MoviesCardList from "./MoviesCardList";

function Movies() {
  return (
    <div className="all">
      <MoviesCardList />
      <MoviesAddCard />
    </div>
  );
}

export default Movies;
