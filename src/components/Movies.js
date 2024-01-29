import Footer from "./Footer";
import Header from "./Header";
import Preloader from "./Preloader";
import MoviesAddCard from "./MoviesAddCard";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function Movies({ onClickMenu, onClickMenuIsOpen, onClickMenuIsClose, cards, onSaved, onCheck }) {
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
        <MoviesCardList cards={cards} onSaved={onSaved} onCheck={onCheck}/>
        <MoviesAddCard />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
