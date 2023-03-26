import "../css/Article_css/Sorts.scss"


import Floral_spell from "../img/spells/Floral_spell.jpg";
import IceBall from "../img/spells/IceBall.jpg";
import ThunderBall from "../img/spells/ThunderBall.jpg";
import Water_spell from "../img/spells/Water_spell.jpg";
import RempartDeDefense from "../img/spells/RempartDeDefense.jpg";
import SortsData from "../data/sorts.json";
import Back from "../components/Back"

export default function Sorts() {

    function getImage(sort) {
        switch (sort.miniature) {
            case "../img/spells/Floral_spell.jpg":
                return Floral_spell;
            case "../img/spells/IceBall.jpg":
                return IceBall;
            case "../img/spells/ThunderBall.jpg":
                return ThunderBall;
            case "../img/spells/Water_spell.jpg":
                return Water_spell;
            case "../img/spells/RempartDeDefense.jpg":
                return RempartDeDefense;
            default:
                return "";
        }
    }

    return <div className={"sort-global-div"}>
        <Back></Back>
        {SortsData.map((sort) => ( /* Itération à travers le fichier json */
            <div className={`${sort.classname} div-sort`}>
                <div className="image-sort-div">
                    <img id={sort.nom} src={getImage(sort)}/>
                </div>
                <div className="sort-nom-div">
                    <h1 className="nom-sort-h1">{sort.nom}</h1>
                </div>
                <div className="prix-sort-div">
                    <h2 className="prix-sort">{sort.prix}</h2>
                </div>
            </div>
        ))}

    </div>
}
