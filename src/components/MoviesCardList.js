import MoviesCard from "./MoviesCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MoviesAddCard from "./MoviesAddCard";
import {
  MAX_WIDTH_SCREEN,
  MIN_WIDTH_SCREEN,
  CARD_MAX,
  CARD_MEDIUM,
  CARD_MIN,
  MAX_WIDTH,
  MEDIUM_WIDTH,
} from "../utils/const";

function MoviesCardList({ cards, onSaved, onCheck, onDelete }) {
  const { pathname } = useLocation();
  const [count, setCount] = useState("");
  const visibleCards = cards.slice(0, count);

  function addCards() {
    const counter = { init: CARD_MAX, step: MAX_WIDTH };
    if (window.innerWidth < MAX_WIDTH_SCREEN) {
      counter.init = CARD_MEDIUM;
      counter.step = MEDIUM_WIDTH;
    }
    if (window.innerWidth < MIN_WIDTH_SCREEN) {
      counter.init = CARD_MIN;
      counter.step = MEDIUM_WIDTH;
    }
    return counter;
  }

  useEffect(() => {
    if (pathname === "/movies") {
      setCount(addCards().init);
      function printCardsForResize() {
        if (window.innerWidth >= MAX_WIDTH_SCREEN) {
          setCount(addCards().init);
        }
        if (window.innerWidth < MAX_WIDTH_SCREEN) {
          setCount(addCards().init);
        }
        if (window.innerWidth < MIN_WIDTH_SCREEN) {
          setCount(addCards().init);
        }
      }
      window.addEventListener("resize", printCardsForResize);
      return () => window.removeEventListener("resize", printCardsForResize);
    }
  }, [pathname, cards]);

  function AddMovie() {
    setCount(count + addCards().step);
  }

  return (
    <>
      <ul className="movies">
        {pathname === "/movies" && visibleCards.length !== 0
          ? visibleCards.map((card) => (
              <li>
                <MoviesCard
                  key={card.movieId || card._id}
                  card={card}
                  onSaved={onSaved}
                  onCheck={onCheck}
                  onDelete={onDelete}
                />
              </li>
            ))
          : cards.map((card) => (
              <li>
                <MoviesCard
                  key={card.movieId || card._id}
                  card={card}
                  onSaved={onSaved}
                  onCheck={onCheck}
                  onDelete={onDelete}
                />
              </li>
            ))}
      </ul>

      {pathname === "/movies" && cards.length > 0 && (
        <MoviesAddCard count={count} cards={cards} onAdd={AddMovie} />
      )}
    </>
  );
}

export default MoviesCardList;
