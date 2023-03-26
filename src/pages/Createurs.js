import "../css/Createurs_css/Createurs.css"
import {AnimationOnScroll} from "react-animation-on-scroll";
import "../../node_modules/animate.css/animate.css"
import CreateursBanner from "../components/CreateursComponents/CreateursBanner";
import Yasmae from "../components/CreateursComponents/Yasmae";
import Ioltor from "../components/CreateursComponents/Ioltor";
import Enaline from "../components/CreateursComponents/Enaline";
import DarkSister from "../components/CreateursComponents/DarkSister";
import LightSister from "../components/CreateursComponents/LightSister";
import Ismael from "../components/CreateursComponents/Ismael";
import Nasmina from "../components/CreateursComponents/Nasmina";
import Nixy from "../components/CreateursComponents/Nixy";
import Back from "../components/Back"

export default function Createurs() {



    return <div className={"App"}>
        <div>
        <Back>  </Back>
        </div>
        <h1 style={{color: "red", background: "white"}}>PAGE EN TRAVAUX ! JUGÉE BEAUCOUP TROP MOCHE À MON GOUT, J'Y REVIENDRAI LORSQUE J'AURAI FINI LE RESTE</h1>
        <div className="Createurs-root">
            <div className="Origines">
                <CreateursBanner/>
            </div>
            <div className="Ioltor">
                <Ioltor/>
            </div>
            <div style={{display: "flex"}} className="Yasmae-et-Enaline">
                <Yasmae/>
                <Enaline/>
            </div>
            <div style={{display: "flex"}} className="les-enfants">
                <Ismael/>
                <Nasmina/>
                <Nixy/>
            </div>
            <div style={{display: "flex"}} className="les-soeurs">
                <DarkSister/>
                <LightSister/>
            </div>
        </div>
    </div>

}