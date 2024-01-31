function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <ul className="footer__block">
        <li className="footer__year-block">© 2023</li>
        <li className="footer__yandex-block">
          <a target="blank" href="https://ya.ru/">
            Яндекс.Практикум
          </a>
        </li>
        <li className="footer__github-block">
          <a target="blank" href="https://github.com/zhoraakop">
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
