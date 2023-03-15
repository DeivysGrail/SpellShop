import "../css/Article_css/Potions.scss"
import Jouvence from "../img/potions/potionDeJouvence.jpg";
import Boost from "../img/potions/PotionBoost.jpg";
import Mana from "../img/potions/PotionDeMana.jpg";
import Mort from "../img/potions/PotionDeMort.jpg";
import Soin from "../img/potions/PotionDeSoin.jpg";
import PotionsData from "../data/potions.json";






export default function Potions() {

    function getImage(potion) {
        switch (potion.miniature) {
            case "../img/potions/potionDeJouvence.jpg":
                return Jouvence;
            case "../img/potions/PotionBoost.jpg":
                return Boost;
            case "../img/potions/PotionDeMana.jpg":
                return Mana;
            case "../img/potions/PotionDeMort.jpg":
                return Mort;
            case "../img/potions/PotionDeSoin.jpg":
                return Soin;
            default:
                return "";
        }
    }

    return <div className={"potion-global-div"}>
        {PotionsData.map((potion) => (
            <div key={potion.nom} className={"div-potion"}>
                <div className="image-potion-div">
                    <img style={potion.style} className={potion.nom} src={getImage(potion)}/>
                </div>
                <div className="potion-nom-div">
                    <h1 className="nom-potion-h1">{potion.nom}</h1>
                </div>
                <div className="prix-potion-div">
                    <h2 className="prix-potion">{potion.prix}</h2>
                </div>
            </div>
        ))}

    </div>
}
