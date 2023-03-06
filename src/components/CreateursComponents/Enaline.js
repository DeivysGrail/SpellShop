import Enaline_img from "../../img/createurs/Enaline.png"
import {AnimationOnScroll} from "react-animation-on-scroll";



export default function Enaline() {

    const enaline_data = {
        portrait: Enaline_img,
        first_color: "pink",
        second_color: "yellowgreen",
        description: "Petite soeur de Yasmae, elle est la première orpheline récupérée par Ioltor. Autrefois, elle était admirée " + "par la population mondiale pour sa beauté, son intelligence et sa magie dévastatrice. " + "De nos jours Enaline fait du contenu Twitch, principalement Minecraft, HotTubes, ou League Of Legends.   "
    }


    return <div className={"Enaline-div"}>
        <AnimationOnScroll offset={350} duration={1.1}
                           animateIn={"animate__flip "}
                           animateOut={"animate__fadeOutUp"}>
            <div className="div-img-main-createur">
                <img className={"main-createur-img"} src={enaline_data.portrait}/>
                <div className="div-description-main-createur">
                    <p style={{
                        webkitTextStroke: `1.7px ${enaline_data.second_color}`,
                        color: `${enaline_data.first_color}`
                    }} className={"main-createur-description"}>{enaline_data.description}</p>
                </div>
            </div>
        </AnimationOnScroll>

    </div>
}
