import "../css/Article_css/Manuscrits.scss"

import {AnimationOnScroll} from "react-animation-on-scroll";
import "animate.css"
import Bestiaire from "../img/manuscrits/Bestiaire.jpg";
import Encyclopedie from "../img/manuscrits/L'encyclopédieDesSorts.jpg";
import LaMagieParLordGanblin from "../img/manuscrits/LaMagieParLordGamblin.jpg";
import LeManuelDuTemps from "../img/manuscrits/LeManuelDuTemps.jpg";
import OdeAuxEnfers from "../img/manuscrits/OdeAuxEnfers.jpg";
import ManuscritsData from "../data/manuscrits.json";
import Back from "../components/Back"


export default function Manuscrits() {

    function getImage(manuscrit) { // Permet de retourner l'image correspondante au lien dans le fichier json
        switch (manuscrit.miniature) {
            case "../img/manuscrits/Bestiaire.jpg":
                return Bestiaire;
            case "../img/manuscrits/L'encylopédieDesSorts.jpg":
                return Encyclopedie;
            case "../img/manuscrits/LaMagieParLordGamblin.jpg":
                return LaMagieParLordGanblin;
            case "../img/manuscrits/LeManuelDuTemps.jpg":
                return LeManuelDuTemps;
            case "../img/manuscrits/OdeAuxEnfers.jpg":
                return OdeAuxEnfers;
            default:
                return "";
        }
    }

    return <div className={"manuscrit-global-div"}>
        <Back/>
        {ManuscritsData.map((manuscrit) => ( /* Itération à travers le fichier json */
            <AnimationOnScroll initiallyVisible={true} offset={100} duration={1.2} animateIn={"animate__slide"} animateOnce={true}>
                <div key={manuscrit.nom} className={"div-manuscrit"}>
                    <div className="image-manuscrit-div">
                        <img className={manuscrit.classname} src={getImage(manuscrit)}/>
                    </div>
                    <div className="manuscrit-nom-div">
                        <h1 className="nom-manuscrit-h1">{manuscrit.titre}</h1>
                        <h2 className="nom-manuscrit-h1">Exemplaires disponibles : {manuscrit.exemplaires}</h2>
                    </div>
                    <div className="prix-manuscrit-div">
                        <h3 className="prix-manuscrit">Prix : {manuscrit.prix}</h3>
                    </div>
                </div>
            </AnimationOnScroll>
        ))}

    </div>
}
