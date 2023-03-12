import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import "../../css/Home_css/Slider.css"
import Grimmy from "../../img/invocation/Grimmy.jpg"
import Jouvence from "../../img/potions/potionDeJouvence.jpg"
import Floral_invocation from "../../img/spells/Floral_spell.jpg"
import background_for_carousel from "../../video/background_carousel.mp4"
import {useState} from "react";

export default function HomeSlider() {


    const spells_data = [{
        id: 1,
        image: Jouvence,
        titre: "Potion de Jouvence",
        description: "Offre la vie éternelle",
        price: "7000WD",
        color: "cyan"
    }, {
        id: 2,
        image: Grimmy,
        titre: "Grimmy's call",
        description: "Invoque Grimmy la peluche démon",
        price: "1300WD",
        color: "red"
    }, {
        id: "floral-picture",
        image: Floral_invocation,
        titre: "Invocation floral",
        description: "Fais apparaître des fleurs",
        price: "400WD",
        color: "greenyellow"
    }]

    return (<div className={"div_for_video"}>
            <video src={background_for_carousel} autoPlay loop muted></video>
            <Carousel
                renderArrowPrev={(clickHandler) => (
                    <div className={"div_bouton_precedent"}>
                        <button onClick={clickHandler} className={"bouton_precedent boutons"}/>
                    </div>
                )}
                renderArrowNext={(clickHandler) => (
                    <div className={"div_bouton_suivant"}>
                        <button onClick={clickHandler} className={"bouton_suivant boutons"}/>
                    </div>
                )}
                axis={"horizontal" /* axe*/}
                showStatus={false /* indique 1/4*/}
                thumbWidth={150}
                autoPlay={true /* changement automatique */}
                infiniteLoop={true}
                interval={1900}
                stopOnHover={true}
            >
                {spells_data.map((element) => (
                    <div key={element.id} className={"div_for_img"}>
                        <div className={"div_for_title"}>
                            <h1 className={"nom-de-l'article"} style={{filter: `drop-shadow(0 0 20px ${element.color})`}}>{element.titre}</h1>
                        </div>
                        <img id={element.color}
                            style={{filter: `drop-shadow(0 0 30px ${element.color})`}} className={"img_in_carousel"}
                             src={element.image}/>
                        <div className={"div_for_texte"}>
                            <h2 className={"description-article"} >{element.description}</h2>
                            <h3>{`Prix : ${element.price}`}</h3>
                        </div>
                    </div>

                ))}

            </Carousel>
        </div>
    )


}