import '../../css/Home_css/Footer.css'
import {Link} from "react-router-dom";
import Wiztagram from "../../img/icons/Wiztagram.png"
import Spellbook from "../../img/icons/SpellBook.png"
import Snapcat from "../../img/icons/SnapCat.png"




export default function HomeFooter() {

    return <div className={"footer-div"}>
        <h1>Subscribe & get a random spell</h1>
        <div className={"tous-les-ul-du-footer"}>
            <div className="first-footer-ul">
                <div className="first-ul-title ul-title">
                    <h4>Infos</h4>
                </div>
                <ul>
                    <li className={"footer-li"}><a href="src/components/HomeComponents/HomeFooter.js">CGU</a></li>
                    <li  className={"footer-li"}><Link  to={"/createurs"}>Qui sommes-nous ?</Link></li>
                    <li className={"footer-li"}><a href="src/components/HomeComponents/HomeFooter.js">Compte</a></li>
                    <li className={"footer-li"}><a href="src/components/HomeComponents/HomeFooter.js">Informations légales</a></li>
                </ul>
            </div>
            <div className="second-footer-ul">
                <div className="second-ul-title ul-title">
                    <h4>Nos réseaux</h4>
                </div>
                <ul className={"ul-reseaux"}>
                    <li className={"footer-li"}><a href={"https://instagram.com"}><img className={"img-reseaux"} src={Wiztagram}/></a><span className={"span-reseaux"}>Wiztagram</span></li>
                    <li className={"footer-li"}><a href={"https://spellbook.com"}><img className={"img-reseaux"} src={Spellbook}/></a><span className={"span-reseaux"}>Spellbook</span></li>
                    <li className={"footer-li"}><a href={"https://snapchat.com"}><img className={"img-reseaux"} src={Snapcat}/></a><span className={"span-reseaux"}>Snapcat</span></li>
                </ul>
            </div>
            <div className="last-footer-ul">
                <div className="last-footer-title ul-title">
                    <h4>Aide</h4>
                </div>
                <div className="ul-aide">
                    <ul>
                        <li className={"footer-li"}><a href="src/components/HomeComponents/HomeFooter.js">Nous contacter</a></li>
                        <li className={"footer-li"}><a href="src/components/HomeComponents/HomeFooter.js">FAQ</a></li>
                        <li className={"footer-li"}><a href="src/components/HomeComponents/HomeFooter.js">SAV</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
