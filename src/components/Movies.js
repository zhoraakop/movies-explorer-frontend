import Footer from "./Footer";
import Header from "./Header";
import MoviesAddCard from "./MoviesAddCard";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function Movies({ onClickMenu, onClickMenuIsOpen, onClickMenuIsClose }) {
  const logReg = true;
  return (
    <main className="content all">
      <Header
        onClickMenuIsClose={onClickMenuIsClose}
        onClickMenu={onClickMenu}
        onClickMenuIsOpen={onClickMenuIsOpen}
        logReg={logReg}
      />
      <SearchForm />
      <MoviesCardList />
      <MoviesAddCard />
      <Footer />
    </main>
  );
}

export default Movies;
