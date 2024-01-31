import Promo from "./Promo";
import AboutProject from "./AboutProject";
import Techs from "./Techs";
import AboutMe from "./AboutMe";
import Header from "./Header";
import Footer from "./Footer";

function Main({
  onClickMenu,
  onClickMenuIsOpen,
  onClickMenuIsClose,
  isRegister,
}) {
  return (
    <>
      <Header
        isRegister={isRegister}
        onClickMenuIsClose={onClickMenuIsClose}
        onClickMenu={onClickMenu}
        onClickMenuIsOpen={onClickMenuIsOpen}
      />
      <main className="content">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default Main;
