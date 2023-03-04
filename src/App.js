import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Createurs from "./pages/Createurs"
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={"/"} index element={<Home/>}/>
                    <Route path={"/createurs"} element={<Createurs/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
