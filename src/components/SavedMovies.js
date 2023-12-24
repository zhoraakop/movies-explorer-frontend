import Footer from "./Footer";
import Header from "./Header";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function SavedMovies({ onClickMenu, onClickMenuIsOpen, onClickMenuIsClose }) {
  return (
    <main className="content saved">
      <Header
        onClickMenuIsClose={onClickMenuIsClose}
        onClickMenu={onClickMenu}
        onClickMenuIsOpen={onClickMenuIsOpen}
      />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  );
}

export default SavedMovies;
