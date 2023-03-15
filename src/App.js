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
import Invocations from "./pages/Invocations";
import Manuscrits from "./pages/Manuscrits";
import Sorts from "./pages/Sorts";
import Accessoires from "./pages/Accessoires"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
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
           <Route path={"/weapons"} element={<Armes/>}/>
           <Route path={"/potions"} element={<Potions/>}/>
           <Route path={"/manuscrits"} element={<Manuscrits/>}/>
           <Route path={"/spells"} element={<Sorts/>}/>
           <Route path={"/invocations"} element={<Invocations/>}/>
           <Route path={"/accessories"} element={<Accessoires/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
