import "../css/Article_css/Armes.scss"


import BloodSword from "../img/armes/BloodSword.jpg";
import DarkAxe from "../img/armes/DarkAxe.jpg";
import DeathShield from "../img/armes/DeathShield.jpg";
import MagicOrb from "../img/armes/MagicOrb.jpg";
import SharpGloves from "../img/armes/SharpGloves.jpg";
import ArmesData from "../data/armes.json";

export default function Sorts() {

    function getImage(arme) {
        switch (arme.miniature) {
            case "../img/armes/BloodSword.jpg":
                return BloodSword;
            case "../img/armes/DarkAxe.jpg":
                return DarkAxe;
            case "../img/armes/DeathShield.jpg":
                return DeathShield;
            case "../img/armes/MagicOrb.jpg":
                return MagicOrb;
            case "../img/armes/SharpGloves.jpg":
                return SharpGloves;
            default:
                return "";
        }
    }

    return <div className={"arme-global-div"}>
        {ArmesData.map((arme) => (
            <div key={arme.nom} className={"div-arme"}>
                <div className="image-arme-div">
                    <img className={arme.nom} src={getImage(arme)}/>
                </div>
                <div className="arme-nom-div">
                    <h1 className="nom-arme-h1">{arme.nom}</h1>
                </div>
                <div className="prix-arme-div">
                    <h2 className="prix-arme">{arme.prix}</h2>
                </div>
            </div>
        ))}

    </div>
}
