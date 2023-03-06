import Nasmina_img from "../../img/createurs/Nasmina.png"
import {AnimationOnScroll} from "react-animation-on-scroll";


export default function Nasmina() {


    const nasimna_data = {
            portrait: Nasmina_img, first_color: "white", second_color: "red", description: "La petite Nasmina",
        }


    return <div className={"Enaline-div"}>
        <AnimationOnScroll offset={350} duration={1.1}
                           animateIn={"animate__flip "}
                           animateOut={"animate__fadeOutUp"}>
            <div className="div-img-main-createur">
                <img className={"main-createur-img"} src={nasimna_data.portrait}/>
                <div className="div-description-main-createur">
                    <p style={{
                        webkitTextStroke: `1.7px ${nasimna_data.second_color}`,
                        color: `${nasimna_data.first_color}`
                    }} className={"main-createur-description"}>{nasimna_data.description}</p>
                </div>
            </div>
        </AnimationOnScroll>

    </div>
}
