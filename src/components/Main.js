import Promo from "./Promo";
import AboutProject from "./AboutProject";
import Techs from "./Techs";
import AboutMe from "./AboutMe";

const Main = () => {
    return(
        <main className="content">
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
        </main>
    )
}
export default Main;