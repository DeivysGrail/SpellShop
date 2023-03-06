import Nixy_img from "../../img/createurs/Nixy.png"
import {AnimationOnScroll} from "react-animation-on-scroll";

export default function Nixy() {


    const nixy_data = {
        portrait: Nixy_img, first_color: "white", second_color: "red", description: "La petite Nixy",
    }


    return <div className={"Enaline-div"}>
        <AnimationOnScroll offset={350} duration={1.1}
                           animateIn={"animate__flip "}
                           animateOut={"animate__fadeOutUp"}>
            <div className="div-img-main-createur">
                <img className={"main-createur-img"} src={nixy_data.portrait}/>
                <div className="div-description-main-createur">
                    <p style={{
                        webkitTextStroke: `1.7px ${nixy_data.second_color}`,
                        color: `${nixy_data.first_color}`
                    }} className={"main-createur-description"}>{nixy_data.description}</p>
                </div>
            </div>
        </AnimationOnScroll>

    </div>
}
