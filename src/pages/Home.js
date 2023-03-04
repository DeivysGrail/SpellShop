import Navbar from "../components/HomeComponents/Navbar";
import Slider from "../components/HomeComponents/Slider";
import Banner from "../components/HomeComponents/Banner";
import Feedback from "../components/HomeComponents/Feedback";
import Footer from "../components/HomeComponents/Footer";
import MenuBurger from "../components/HomeComponents/MenuBurger";

export default function Home() {
     return (
    <div className="App">
        <MenuBurger/>
        <Navbar/>
        <Banner/>
        <Slider/>
        <Feedback/>
        <Footer/>
    </div>
  );
}
