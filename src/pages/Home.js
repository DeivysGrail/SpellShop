import HomeNavbar from "../components/HomeComponents/HomeNavbar";
import HomeSlider from "../components/HomeComponents/HomeSlider";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import Feedback from "../components/HomeComponents/Feedback";
import HomeFooter from "../components/HomeComponents/HomeFooter";
import HomeMenuBurger from "../components/HomeComponents/HomeMenuBurger";

export default function Home() {

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
