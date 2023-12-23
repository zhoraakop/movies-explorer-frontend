import { Link } from "react-router-dom";

const NavTab = () => {
  return (
    <div className="button-information">
      <a href="#info" className="button">
        О проекте
      </a>
      <a href="#techs" className="button">
        Технологии
      </a>
      <a href="#portfolio" className="button">
        Студент
      </a>
    </div>
  );
};

export default NavTab;
