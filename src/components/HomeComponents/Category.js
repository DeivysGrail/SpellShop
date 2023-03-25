import "../../css/Home_css/Category.css"
import fleche from "../../img/icons/category-arrow.svg"
import {Link} from 'react-router-dom'

// Représente les différentes catégories présentent dans le composant HomeMenuBurger.js
export default function Category() {

    const refresh =() => window.location.reload(true)

    return <div className={"category-main-div"}>
        <li><a id={"category"} className={"menu-item-"}>Catégories</a></li>
        <div className="div-ul-category">
            <img className={"fleche-category"} src={fleche}/>
            <ul className={"ul-category"}> {/* Tous les li renvoie chacun à un composant */}
                <li className={"li-category  a"}><Link to={"/sorts"} href="src/components/HomeComponents/Category">Sorts</Link></li>
                <li onClick={() => refresh()} className={"li-category  b"}><Link to={"/potions"} href="src/components/HomeComponents/Category">Potions</Link></li>
                <li className={"li-category  d"}><Link to={"/familiers"} href="src/components/HomeComponents/Category">Familiers</Link></li>
                <li className={"li-category  c"}><Link to={"/manuscrits"} href="src/components/HomeComponents/Category">Manuscrits</Link></li>
                <li className={"li-category  e"}><Link to={"/objets"} href="src/components/HomeComponents/Category">Objets magiques</Link></li>
                <li className={"li-category  f"}><Link to={"/armes"}>Armes enchantées</Link></li>
            </ul>
        </div>

    </div>
};
