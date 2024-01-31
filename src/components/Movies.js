import Footer from "./Footer";
import Header from "./Header";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";
import getMovies from "../utils/MoviesApi";
import { useLocation } from "react-router-dom";
import Preloader from "./Preloader";
import { DURATION } from "../utils/const";

function Movies({
  onClickMenu,
  onClickMenuIsOpen,
  onClickMenuIsClose,
  onSaved,
  onCheck,
  cards,
  isRegister,
  onDelete,
  savedMovies,
  setIsLoading,
  isLoading
}) {
  const logReg = true;
  const { pathname } = useLocation();
  const [allMovies, setAllMovies] = useState(
    JSON.parse(localStorage.getItem("allMovies")) || []
  );
  const [filtredMovies, setFiltredMovies] = useState(allMovies);
  const [searchInputString, setSearchInputString] = useState(
    localStorage.getItem("searchInputString") || ""
  );
  const [isShort, setIsShort] = useState(
    JSON.parse(localStorage.getItem("isShort") || false)
  );
  const [isValid, setIsValid] = useState(true);
  const [serverError, setServerError] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(search);
    setIsLoading(false)
  };

  function search(e) {
    setIsLoading(true);
    const value = e.target.value;
    setSearchInputString(value);
    localStorage.setItem("searchInputString", value);
  }

  function searchMovies() {
    if (!searchInputString) {
      setIsValid(false);
    }
    if (allMovies.length === 0 && searchInputString) {
      getMovies()
        .then((res) => {
          setIsValid(true);
          setAllMovies(res);
          setServerError(false);
          localStorage.setItem("allMovies", JSON.stringify(res));
        })
        .catch((err) => {
          setServerError(true);
          console.log(`Ошибка: ${err}`);
        });
    } else if (searchInputString) {
      setIsValid(true);
      handleSubmitSearch();
    }
  }

  function handleSubmitSearch() {
    const filtredMovies = allMovies.filter((movie) =>
      isShort
        ? movie.nameRU
            .toLowerCase()
            .includes(searchInputString.toLowerCase()) && movie.duration <= DURATION
        : movie.nameRU.toLowerCase().includes(searchInputString.toLowerCase())
    );

    setFiltredMovies(filtredMovies);
  }

  useEffect(() => {
    handleSubmitSearch();
    setIsValid(true);
  }, [allMovies, isShort]);

  function checkShort(e) {
    const value = e.target.checked;
    setIsShort(value);
    localStorage.setItem("isShort", value);
  }
  return (
    <>
      <Header
        isRegister={isRegister}
        onClickMenuIsClose={onClickMenuIsClose}
        onClickMenu={onClickMenu}
        onClickMenuIsOpen={onClickMenuIsOpen}
        logReg={logReg}
      />
      <main className="content all">
        <SearchForm
          value={searchInputString}
          onChange={search}
          onSubmit={handleSearch}
          checked={isShort}
          handleChange={checkShort}
          isValid={isValid}
          serverError={serverError}
        />
        {isLoading ? (<Preloader />) : (
          <MoviesCardList
            savedMovies={savedMovies}
            onDelete={onDelete}
            cards={filtredMovies}
            onSaved={onSaved}
            onCheck={onCheck}
          />

        )}
        {serverError && (
          <div className="movies__error">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </div>
        )}

        {(filtredMovies.length === 0 ||
          (filtredMovies.length === 0 && cards.length !== 0)) && isLoading !== true &&
          localStorage.allMovies && (
            <div className="movies__error">Ничего не найдено.</div>
          )}

        {filtredMovies.length === 0 && isLoading !== true &&
          pathname === "/movies" &&
          !localStorage.allMovies && (
            <div className="movies__error">
              Чтобы увидеть список фильмов, выполните поиск.
            </div>
          )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
