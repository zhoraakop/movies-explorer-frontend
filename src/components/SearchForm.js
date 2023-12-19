import submit from "../images/find-3.svg";

const SearchForm = () => {
  return (
    <section className="search-form">
      <form className="form">
        <input className="form__input" placeholder="Фильм"></input>
        <button className="form__button" type="submit">
          <img alt="Кнопка" src={submit}></img>
        </button>
      </form>
      <div className="filter">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <p className="search-form__subtitle">Короткометражки</p>
      </div>
      <p className="border"></p>
    </section>
  );
};
export default SearchForm;
