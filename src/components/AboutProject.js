const AboutProject = () => {
  return (
    <section className="information" id="info">
      <h2 className="title">О проекте</h2>
      <h3 className="information__title">Дипломный проект включал 5 этапов</h3>
      <h3 className="information__title">
        На выполнение диплома ушло 5 недель
      </h3>
      <p className="information__subtitle">
        Составление плана, работу над бэкендом, вёрстку, добавление
        функциональности и финальные доработки.
      </p>
      <p className="information__subtitle">
        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
        соблюдать, чтобы успешно защититься.
      </p>
      <p className="information__greenLine">1 неделя</p>
      <p className="information__grayLine">4 недели</p>
      <p className="information__subtitle-greenLine">Back-end</p>
      <p className="information__subtitle-grayLine">Front-end</p>
    </section>
  );
};

export default AboutProject;
