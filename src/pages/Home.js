import HomeNavbar from "../components/HomeComponents/HomeNavbar";
import HomeSlider from "../components/HomeComponents/HomeSlider";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import Feedback from "../components/HomeComponents/Feedback";
import HomeFooter from "../components/HomeComponents/HomeFooter";
import HomeMenuBurger from "../components/HomeComponents/HomeMenuBurger";

export default function Home() {

    setTimeout(() => alert("Toutes les pages de ce projet ne sont pas terminées. Ce site m'a servi d'entraînement pour React, je passe donc à un nouveau projet. En espérant que SpellShop vous plaise."), 3000)

     return (
    <div className="App">
        <HomeMenuBurger/>
        <HomeNavbar/>
        <HomeBanner/>
        <HomeSlider/>
        <Feedback/>
        <HomeFooter/>
    </div>
  );
}
