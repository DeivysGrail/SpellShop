import "../../css/Login_css/LoginScreen.scss"
import {useState, useEffect, React} from "react";
import day_login_background from "../../video/day_login_background.mp4"
import night_login_background from "../../video/night_login_background.mp4"


export default function LoginScreen(props) {

    const [bgVideo, setBgVideo] = useState(day_login_background); // Définition du fond par défaut

    useEffect(() => { // Action à réaliser
    const hour = new Date().getHours(); // Récupération de l'heure
    if (hour < 8 || hour >= 18) { // Si l'heure est entre 8h et 18h le fond d'écran est dans sa version jour
      setBgVideo(night_login_background); // Changement d'état du fond
    } else { // Si l'heure est entre 19h et 7h le fond d'écran est dans sa version nuit
      setBgVideo(day_login_background); // Changement d'état du fond
    }
}, []);

    return (
        <div className="overlay-formulaire">
            <video autoPlay muted loop className={"login-bg-video"} src={bgVideo}></video>
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


