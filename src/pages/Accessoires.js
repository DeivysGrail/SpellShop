import "../css/Article_css/Accessoires.scss"
import BouleDeCristal from "../img/accessoires/BouleDeCristal.jpg";
import bg_objets from "../img/accessoires/bg_accessoires.jpg"
// import DarkAxe from "../img/accessoires/DarkAxe.jpg";
// import DeathShield from "../img/accessoires/DeathShield.jpg";
// import MagicOrb from "../img/accessoires/MagicOrb.jpg";
// import SharpGloves from "../img/accessoires/SharpGloves.jpg";
import ArmesData from "../data/accessoires.json";

export default function Accessoires() {

    function getImage(accessoire) { //Permet de retourner l'image correspondante au lien dans le fichier json
        switch (accessoire.miniature) {
            case "../img/accessoires/BouleDeCristal.jpg":
                return BouleDeCristal;
            // case "../img/accessoires/DarkAxe.jpg":
            //     return DarkAxe;
            // case "../img/accessoires/DeathShield.jpg":
            //     return DeathShield;
            // case "../img/accessoires/MagicOrb.jpg":
            //     return MagicOrb;
            // case "../img/accessoires/SharpGloves.jpg":
            //     return SharpGloves;
            default:
                return "";
        }
    }

    return <div className={"accessoire-global-div"} style={{
        background: `url("${bg_objets}")`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}>
        {ArmesData.map((accessoire) => (
            <div key={accessoire.nom} className={`image div-accessoire ${accessoire.classname}`}>
                <div className="image-accessoire-div">
                    <img className={accessoire.nom} src={getImage(accessoire)}/>
                </div>
                <div className="accessoire-nom-div">
                    <h1 className="nom-accessoire-h1">{accessoire.nom}</h1>
                </div>
                <div className="prix-accessoire-div">
                    <h2 className="prix-accessoire">{accessoire.prix}</h2>
                </div>
            </div>
        ))}

    </div>
}
