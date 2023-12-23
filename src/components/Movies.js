import Footer from "./Footer";
import Header from "./Header";
import MoviesAddCard from "./MoviesAddCard";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function Movies({ onClickMenu, onClickMenuIsOpen, onClickMenuIsClose }) {
  return (
    <div className="all">
      <Header
        onClickMenuIsClose={onClickMenuIsClose}
        onClickMenu={onClickMenu}
        onClickMenuIsOpen={onClickMenuIsOpen}
      />
      <SearchForm />
      <MoviesCardList />
      <MoviesAddCard />
      <Footer />
    </div>
  );
}

export default Movies;
