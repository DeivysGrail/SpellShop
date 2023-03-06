import Ioltor_img from "../../img/createurs/Ioltor.png"
import {AnimationOnScroll} from "react-animation-on-scroll";
import "../../css/Createurs_css/Ioltor.css"

export default function Ioltor() {

    const ioltor_data = {
        portrait: Ioltor_img,
        first_color: "darkblue",
        second_color: "grey",
        description: "Ioltor fut le premier mage à réellement s'affirmer en tant que mage." + "Il est celui qui lança la grande révolution en 1622 avant J-c, et qui permit aux mages de pouvoir vivre une vie normal.\n" + "C'est en 2022 qu'il décida de lancer sa propre boutique de e-commerce.",
    }

    return <div className={"Ioltor-div"}>
        <AnimationOnScroll offset={350} duration={1.1}
                           animateIn={"animate__fadeIn "}
                           animateOut={"animate__fadeOutUp"}>
            <div className="container-Ioltor">
                <img className={"image-de-Ioltor"} src={ioltor_data.portrait}/>
                <div className="div-de-la-description-de-Ioltor">
                    <p style={{
                        webkitTextStroke: `1.7px ${ioltor_data.second_color}`,
                        color: `${ioltor_data.first_color}`
                    }} className={"description-de-Ioltor"}>{ioltor_data.description}</p>
                </div>
            </div>
        </AnimationOnScroll>

    </div>



}
