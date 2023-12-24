import submit from "../images/find-3.svg";

const SearchForm = () => {
  return (
    <section className="search-form">
      <div className="search-form__block">
        <form className="form">
          <input className="form__input" placeholder="Фильм" required ></input>
          <button className="form__button" type="submit">
            <img alt="Кнопка" src={submit} />
          </button>
        <div className="filter">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p className="search-form__subtitle">Короткометражки</p>
        </div>
        </form>

      </div>
    </section>
  );
};
export default SearchForm;
