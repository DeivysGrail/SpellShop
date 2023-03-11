import "../../css/Login_css/LoginScreen.scss"
import {useState, useEffect, React} from "react";
import day_login_background from "../../video/day_login_background.mp4"
import night_login_background from "../../video/night_login_background.mp4"


export default function LoginScreen(props) {


    const overlay_formulaire = document.querySelector(".overlay-formulaire")
    const now = new Date().getHours() // Récupère l'heure pour changer le bg en fonction de l'heure
    const [show, setShow] = useState(false);
    const [backgroundImg, setBackgroundImg] = useState(day_login_background)

    const change_bg = () => {
        if (now <= 17) setBackgroundImg(day_login_background)
        else setBackgroundImg(night_login_background)
    }

        window.onload = function () {
        change_bg()
    }


    return (
        <div className="overlay-formulaire">
            <video autoPlay muted loop className={"login-bg-video"} src={backgroundImg}></video>
            <h1 className={"titre-du-formulaire"}></h1>
            <div className={" formulaire"}>
                <form action="">
                    <input className={"champ-utilisateur"} type="text" placeholder={"  Nom d'utilisateur"}/> <br/>
                    <input className={"champ-mot-de-passe"} type="password" placeholder={"  Mot de passe "}/>
                </form>
            </div>
        </div>
    );
}


