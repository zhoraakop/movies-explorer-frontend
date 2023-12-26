import { Link } from "react-router-dom";

const NavTab = () => {
  return (
    <ul className="button-information">
      <li href="#info" className="button">
        О проекте
      </li>
      <li href="#techs" className="button">
        Технологии
      </li>
      <li href="#portfolio" className="button">
        Студент
      </li>
    </ul>
  );
};

export default NavTab;
