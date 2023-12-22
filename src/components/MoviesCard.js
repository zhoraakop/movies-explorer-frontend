import film_one from "../images/pic__COLOR_pic.svg";
import deleteButton from "../images/deleteButton.svg";
import okButton from "../images/save3.svg";
import film_two from "../images/pic__COLOR2_pic.svg";
import film_three from "../images/pic__COLOR3_pic.svg";
import film_four from "../images/pic__COLOR4_pic.svg";
import film_five from "../images/pic__COLOR5_pic.svg";
import film_six from "../images/pic__COLOR6_pic.svg";
import film_seven from "../images/pic__COLOR7_pic.svg";
import film_eight from "../images/pic__COLOR8_pic.svg";
import film_nine from "../images/pic__COLOR9_pic.svg";
import film_ten from "../images/pic__COLOR10_pic.svg";
import film_eleven from "../images/pic__COLOR11_pic.svg";
import film_twelve from "../images/pic__COLOR12_pic.svg";

function MoviesCard() {
  return (
    <div className="movies__card">
      <img alt="Фильм" className="movies__card-image" src={film_one}></img>
      <h2 className="movies__card-title">33 слова о дизайне</h2>
      <div className="movies__card_background">
        <p className="movies__card-subtitle">1ч 17м</p>
      </div>
      <img className="movies__card-button_ok" src={deleteButton}></img>
      <img className="movies__card-button_delete" src={deleteButton}></img>
      <button className="movies__card-button">Сохранить</button>
    </div>
  );
}

export default MoviesCard;
