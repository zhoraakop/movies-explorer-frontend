import Footer from "./Footer";
import Header from "./Header";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function SavedMovies({ onClickMenu, onClickMenuIsOpen, onClickMenuIsClose }) {
  const logReg = true;
  return (
    <>
      <Header
        onClickMenuIsClose={onClickMenuIsClose}
        onClickMenu={onClickMenu}
        onClickMenuIsOpen={onClickMenuIsOpen}
        logReg={logReg}
      />
      <main className="content saved">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
