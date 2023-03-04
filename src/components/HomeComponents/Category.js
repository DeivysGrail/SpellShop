import "../../css/Category.css"
import fleche from "../../img/icons/category-arrow.svg"

export default function Category() {

    return <div className={"category-main-div"}>
        <li onClick={() => alert("zefze")}><a id={"category"} href={"https://google.com"} className={"menu-item-"}>Catégories</a></li>
        <div className="div-ul-category">
            <img className={"fleche-category"} src={fleche}/>
            <ul className={"ul-category"}>
                <li className={"li-category  a"}><a href="src/components/HomeComponents/Category">Sorts</a></li>
                <li className={"li-category  b"}><a href="src/components/HomeComponents/Category">Potions</a></li>
                <li className={"li-category  c"}><a href="src/components/HomeComponents/Category">Invocations</a></li>
                <li className={"li-category  d"}><a href="src/components/HomeComponents/Category">Objets magiques</a></li>
                <li className={"li-category  e"}><a href="src/components/HomeComponents/Category">Armes enchantées</a></li>
            </ul>
        </div>

    </div>
};
