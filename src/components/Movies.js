import Footer from "./Footer";
import Header from "./Header";
import MoviesAddCard from "./MoviesAddCard";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function Movies({ onClickMenu, onClickMenuIsOpen, onClickMenuIsClose }) {
  const logReg = true;
  return (
    <>
      <Header
        onClickMenuIsClose={onClickMenuIsClose}
        onClickMenu={onClickMenu}
        onClickMenuIsOpen={onClickMenuIsOpen}
        logReg={logReg}
      />
      <main className="content all">
        <SearchForm />
        <MoviesCardList />
        <MoviesAddCard />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
