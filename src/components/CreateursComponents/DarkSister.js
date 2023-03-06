import Darksister from "../../img/createurs/DarkSister.png"
import {AnimationOnScroll} from "react-animation-on-scroll";

export default function DarkSister() {

    const darkSister_data = {
        portrait: Darksister,
        first_color: "white",
        second_color: "red",
        description: "",
    }




     return <div className={"Darksister-div"}>
        <AnimationOnScroll offset={350} duration={1.1}
                           animateIn={"animate__flip "}
                           animateOut={"animate__fadeOutUp"}>
            <div className="div-img-main-createur">
                <img className={"main-createur-img"} src={darkSister_data.portrait}/>
                <div className="div-description-main-createur">
                    <p style={{
                        webkitTextStroke: `1.7px ${darkSister_data.second_color}`,
                        color: `${darkSister_data.first_color}`
                    }} className={"main-createur-description"}>{darkSister_data.description}</p>
                </div>
            </div>
        </AnimationOnScroll>

    </div>
}
