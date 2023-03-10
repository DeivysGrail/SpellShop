import "../../css/Home_css/MenuBurger.css"
import "../../css/Login_css/LoginScreen.scss"
import {useState} from "react";
import {push as Menu} from 'react-burger-menu'
import Category from "./Category";
import {BrowserRouter, Link} from "react-router-dom";
import LoginScreen from '../LoginComponents/LoginScreen';
import Login from "../../pages/Login";
export default function HomeMenuBurger(props) {

    const [show, setShow] = useState(false);
    const [button, setButton] = useState(true)
    const [classe, setClasse] = "closed"

    function  toggleModal() {
        setShow(!show)

    }


    // rendu
    return <div id={"outer-container"}>
        {/*<button onClick={() => handleVisibility()} className={"burger-menu-button"}></button>*/}
        <Menu right
              width={"50%"}
              isOpen={!button}
              className={"burger-menu"}
              outerContainerId={"outer-container"}
              pageWrapId={"page-wrap"}
              burgerButtonClassName={!button ? "open" : "closed"}
              onOpen={function () {
                  document.querySelector(".bm-burger-button").classList.remove("closed")
                  document.querySelector(".bm-burger-button").classList.add("open")
                  setButton(!button)
              }}
              onClose={function () {
                  document.querySelector(".bm-burger-button").classList.remove("closed")
                  document.querySelector(".bm-burger-button").classList.add("open")
                  // setButton(!button)
              }
              }

        >
            <main id={"page-wrap"}>
                <ul className={"burger-menu-ul"}>
                    <li className={"menu-item"} href={"/public"}><Link to={"/login"}>Se connecter</Link></li>
                    <Category/>
                    <li><a id={"learn"} href="/public" className={"menu-item"}>Apprendre à être mage</a>
                    </li>
                    <li><a id={"promo"} href="/public" className={"menu-item"}>Offres du moment</a>
                    </li>
                </ul>
            </main>
        </Menu>

    </div>
}