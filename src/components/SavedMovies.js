import Footer from "./Footer";
import Header from "./Header";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SavedMovies({
  onClickMenu,
  onClickMenuIsOpen,
  onClickMenuIsClose,
  onCheck,
  onDelete,
  onSaved,
  cards,
  isRegister,
  setCards,
}) {
  const logReg = true;
  const [searchInputString, setSearchInputString] = useState(
    localStorage.getItem("savedSearchInputString") || ""
  );
  const [isValid, setIsValid] = useState(true);
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [isShort, setIsShort] = useState(
    JSON.parse(localStorage.getItem("savedIsShort") || false)
  );
  const pathname = useLocation();

  useEffect(() => {
      setCards(cards.reverse());
  }, []);


  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(search);
  };

  function search(e) {
    const value = e.target.value;
    setSearchInputString(value);
    localStorage.setItem("savedSearchInputString", value);
  }

  function searchMovies() {
    if (!searchInputString) {
      setIsValid(false);
    } else if (searchInputString) {
      setIsValid(true);
      handleSubmitSearch();
    }
  }

  function handleSubmitSearch() {
    const filtredMovies = cards.filter((movie) =>
      isShort
        ? movie.nameRU
            .toLowerCase()
            .includes(searchInputString.toLowerCase()) && movie.duration <= 40
        : movie.nameRU.toLowerCase().includes(searchInputString.toLowerCase())
    );

    setFiltredMovies(filtredMovies);
  }

  useEffect(() => {
    handleSubmitSearch();
    setIsValid(true);
  }, [cards, isShort]);

  function checkShort(e) {
    const value = e.target.checked;
    setIsShort(value);
    localStorage.setItem("savedIsShort", value);
  }
  useEffect(() => {
    setIsShort(false);
    setSearchInputString("");
  }, [pathname]);
  return (
    <>
      <Header
        isRegister={isRegister}
        onClickMenuIsClose={onClickMenuIsClose}
        onClickMenu={onClickMenu}
        onClickMenuIsOpen={onClickMenuIsOpen}
        logReg={logReg}
      />
      <main className="content saved">
        <SearchForm
          value={searchInputString}
          onChange={search}
          onSubmit={handleSearch}
          checked={isShort}
          isValid={isValid}
          handleChange={checkShort}
        />
        <MoviesCardList
          cards={filtredMovies}
          onSaved={onSaved}
          onCheck={onCheck}
          onDelete={onDelete}
        />
        {cards.length === 0 && (
        <div className='movies__error'>Список сохранённых фильмов пуст.</div>
      )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
