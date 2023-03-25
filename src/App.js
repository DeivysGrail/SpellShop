import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import Home from "./pages/Home";
import Createurs from "./pages/Createurs"
import Login from "./pages/Login";
import Armes from "./pages/Armes";
import Potions from "./pages/Potions";
import Familiers from "./pages/Familiers";
import Manuscrits from "./pages/Manuscrits";
import Sorts from "./pages/Sorts";
import Accessoires from "./pages/Accessoires"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => { // Permet au navigateur de revenir en haut de la page lors du chargement de celle ci
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/createurs"} element={<Createurs/>}/>
          <Route path={"/login"} element={<Login/>}/>
           <Route path={"/armes"} element={<Armes/>}/>
           <Route path={"/potions"}  element={<Potions/>}/>
           <Route path={"/manuscrits"} element={<Manuscrits/>}/>
           <Route path={"/sorts"} element={<Sorts/>}/>
           <Route path={"/familiers"} element={<Familiers/>}/>
           <Route path={"/objets"} element={<Accessoires/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
