import Yasmae_img from "../../img/createurs/Yasmae.png"
import {AnimationOnScroll} from "react-animation-on-scroll";

export default function Yasmae() {

    const yasmae_data = {
            portrait: Yasmae_img,
            first_color: "golden",
            second_color: "stealblue",
            description: "Grand frère de Enaline, Yasmae connait lui aussi l'admiration totale de la part de tous. " + " Il est réputé pour être l'un des mages les plus puissants qui soit et ceux grâce à l'entrainement intensif que Ioltor " + "lui a fait subir. De nos jours, Yasmae vient de finir ses 15ans dans l'armée. Il veut désormais se reconvertir dans la " + "programmation python."
        }



   return <div className={"Yasmar-div"}>
        <AnimationOnScroll offset={350} duration={1.1}
                           animateIn={"animate__flip "}
                           animateOut={"animate__fadeOutUp"}>
            <div className="div-img-main-createur">
                <img className={"main-createur-img"} src={yasmae_data.portrait}/>
                <div className="div-description-main-createur">
                    <p style={{
                        webkitTextStroke: `1.7px ${yasmae_data.second_color}`,
                        color: `${yasmae_data.first_color}`
                    }} className={"main-createur-description"}>{yasmae_data.description}</p>
                </div>
            </div>
        </AnimationOnScroll>

    </div>
}
