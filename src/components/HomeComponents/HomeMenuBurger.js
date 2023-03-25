// import des css + useState
import "../../css/Home_css/MenuBurger.css"
import "../../css/Login_css/LoginScreen.scss"
import {useState} from "react";

// import des composants de react-burger-menu et react-router-dom
import {push as Menu} from 'react-burger-menu'
import Category from "./Category";
import {BrowserRouter, Link} from "react-router-dom";
import LoginScreen from '../LoginComponents/LoginScreen';
import Login from "../../pages/Login";


//             Représente le menu burger situé en haut à droite de la page
export default function HomeMenuBurger(props) {

    const [show, setShow] = useState(false); // Gére l'état de si oui ou non le menu est visible
    const [button, setButton] = useState(true) // Gère l'état du bouton
    const [classe, setClasse] = "closed" // Gère la classe du bouton du burger menu

    // Fonction pour activer ou désactiver la présence de la page
    function  toggleModal() {
        setShow(!show)

    }

    const refresh =() => window.location.reload(true) // permet d'actualiser lors du clique


    // rendu
    return <div id={"outer-container"}>
        <Menu right // composant d react burger menu présent à droite

              width={"50%"} // taille de la moitié de l'écran

              isOpen={!button} /* Définie si oui ou non le menu est visible
                                  isOpen est égale à l'inverse du button donc par défaut isOpen = false*/

              className={"burger-menu"} // Classe du burger menu

              outerContainerId={"outer-container"} // Je sais plus à quoi ça équivaut

              pageWrapId={"page-wrap"} // Ça non plus, mais j'en ai besoin pour une certaine animation je crois

              burgerButtonClassName={!button ? "open" : "closed"} // La classe du bouton dépend de son état

              onOpen={function () { // Lorsque le burger menu est ouvert :
                  document.querySelector(".bm-burger-button").classList.remove("closed") // suppression de l'état fermé
                  document.querySelector(".bm-burger-button").classList.add("open") // ajout de l'état ouvert
                  setButton(!button) /* changement de l'état du bouton qui passe à l'inverse de sa valeur actuelle
                   donc laà il passe de true à false et vice versa */
              }}


              onClose={function () {
                  document.querySelector(".bm-burger-button").classList.remove("closed")
                  document.querySelector(".bm-burger-button").classList.add("open")
                  setButton(!button)
              }
              }

        >
            <main id={"page-wrap"}>
                <ul className={"burger-menu-ul"}> {/* Différentes rubriques du burger-menu */}
                    <li onClick={() => refresh()} className={"menu-item"}><Link to={"/login"}>Se connecter</Link></li> {/* Renvoie au composant Login*/}
                    <Category/> {/* Composant qui contient les diverses catégories d'articles */}
                    <li><a id={"learn"} href="/public" className={"menu-item"}>Apprendre à être mage</a> {/* Pas définie */}
                    </li>
                    <li><a id={"promo"} href="/public" className={"menu-item"}>Offres du moment</a> {/* Pas définie */}
                    </li>
                </ul>
            </main>
        </Menu>

    </div>
}