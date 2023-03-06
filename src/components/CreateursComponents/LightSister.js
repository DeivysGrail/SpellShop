import LightSister_img from "../../img/createurs/LightSister.png";
import {AnimationOnScroll} from "react-animation-on-scroll";


export default function LightSister() {


    const lightSister_data = {
        portrait: LightSister_img, first_color: "white", second_color: "red", description: "",
    }


    return <div className={"Enaline-div"}>
        <AnimationOnScroll offset={350} duration={1.1}
                           animateIn={"animate__flip "}
                           animateOut={"animate__fadeOutUp"}>
            <div className="div-img-main-createur">
                <img className={"main-createur-img"} src={lightSister_data.portrait}/>
                <div className="div-description-main-createur">
                    <p style={{
                        webkitTextStroke: `1.7px ${lightSister_data.second_color}`,
                        color: `${lightSister_data.first_color}`
                    }} className={"main-createur-description"}>{lightSister_data.description}</p>
                </div>
            </div>
        </AnimationOnScroll>

    </div>
}





