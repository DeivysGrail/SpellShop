import Ismael_img from "../../img/createurs/Ismael.png"
import {AnimationOnScroll} from "react-animation-on-scroll";

export default function Ismael() {


    const ismael_data = {
        portrait: Ismael_img, first_color: "white", second_color: "blue", description: "Le petit Ismaël",
    }


   return <div className={"Enaline-div"}>
        <AnimationOnScroll offset={350} duration={1.1}
                           animateIn={"animate__flip "}
                           animateOut={"animate__fadeOutUp"}>
            <div className="div-img-main-createur">
                <img className={"main-createur-img"} src={ismael_data.portrait}/>
                <div className="div-description-main-createur">
                    <p style={{
                        webkitTextStroke: `1.7px ${ismael_data.second_color}`,
                        color: `${ismael_data.first_color}`
                    }} className={"main-createur-description"}>{ismael_data.description}</p>
                </div>
            </div>
        </AnimationOnScroll>

    </div>
}
