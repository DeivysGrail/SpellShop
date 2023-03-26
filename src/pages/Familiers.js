import "../css/Article_css/Familiers.scss"
import Back from "../components/Back"

import Glazrk from "../img/familiers/Glazrk.jpg";
import Grimmy from "../img/familiers/Grimmy.jpg";
import LeChevalierDechu from "../img/familiers/LeChevalierDechu.jpg";
import Minia from "../img/familiers/Minia.jpg";
import Wolfo from "../img/familiers/Wolfo.jpg";
import InvocationsData from "../data/familiers.json";

export default function Familiers() {
    function getImage(familier) { //Permet de retourner l'image correspondante au lien dans le fichier json
        switch (familier.miniature) {
            case "../img/familiers/Glazrk.jpg":
                return Glazrk;
            case "../img/familiers/Grimmy.jpg":
                return Grimmy;
            case "../img/familiers/LeChevalierDechu.jpg":
                return LeChevalierDechu;
            case "../img/familiers/Minia.jpg":
                return Minia;
            case "../img/familiers/Wolfo.jpg":
                return Wolfo;
            default:
                return "";
        }
    }

    return <div className={"familier-global-div"}>
        <div style={{position: "absolute", transform: "translateX(30vh)"}}>
        <Back/>
        </div>
        {InvocationsData.map((familier) => ( /* Itération à travers le fichier json */
            <div key={familier.className} className={`div-familier ${familier.classname}`}>
                <div className={`image-familier-div `}>
                    <img className={familier.nom} src={getImage(familier)}></img>
                    <div className="info-familier">
                        <h1 style={familier.styleTxt} className="nom-familier-h1">{familier.nom}</h1>
                        <h2 style={familier.styleTxt} className="prix-familier">{familier.prix}</h2>
                        <p className={"description-familier"}>{familier.description}</p>
                    </div>
                </div>
                <div className="familier-nom-div">
                </div>
                <div className="prix-familier-div">
                </div>
            </div>
        ))}

    </div>
}
