const Techs = () => {
  return (
    <section className="technology" id="techs">
      <div className="technology__block">
        <h2 className="title">Технологии</h2>
        <div className="technology__information">
          <h2 className="technology__title">7 технологий</h2>
          <p className="technology__subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <div className="button-information">
            <button className="button">HTML</button>
            <button className="button">CSS</button>
            <button className="button">JS</button>
            <button className="button">React</button>
            <button className="button">Git</button>
            <button className="button">Express.js</button>
            <button className="button">mongoDB</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techs;
