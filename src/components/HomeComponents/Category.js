import "../../css/Home_css/Category.css"
import fleche from "../../img/icons/category-arrow.svg"
import {Link} from 'react-router-dom'

export default function Category() {

    return <div className={"category-main-div"}>
        <li><a id={"category"} className={"menu-item-"}>Catégories</a></li>
        <div className="div-ul-category">
            <img className={"fleche-category"} src={fleche}/>
            <ul className={"ul-category"}>
                <li className={"li-category  a"}><Link to={"/spells"} href="src/components/HomeComponents/Category">Sorts</Link></li>
                <li className={"li-category  b"}><Link to={"/potions"} href="src/components/HomeComponents/Category">Potions</Link></li>
                <li className={"li-category  c"}><Link to={"/manuscrits"} href="src/components/HomeComponents/Category">Manuscrits</Link></li>
                <li className={"li-category  d"}><Link to={"/invocations"} href="src/components/HomeComponents/Category">Invocations</Link></li>
                <li className={"li-category  e"}><Link to={"/accessories"} href="src/components/HomeComponents/Category">Objets magiques</Link></li>
                <li className={"li-category  f"}><Link to={"/weapons"}>Armes enchantées</Link></li>
            </ul>
        </div>

    </div>
};
