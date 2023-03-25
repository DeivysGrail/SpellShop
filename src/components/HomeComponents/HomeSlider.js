import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import "../../css/Home_css/Slider.css"
import Grimmy from "../../img/familiers/Grimmy.jpg"
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
        price: "70000WD",
        color: "cyan"
    }, {
        id: 2,
        image: Grimmy,
        titre: "Grimmy",
        description: "Invoque Grimmy la peluche démon",
        price: "20000WD",
        color: "red"
    }, {
        id: "floral-picture",
        image: Floral_invocation,
        titre: "Invocation floral",
        description: "Fais apparaître des fleurs",
        price: "4000WD",
        color: "greenyellow"
    }]

    return (<div className={"div_for_video"}>
            <video src={background_for_carousel} autoPlay loop muted></video> {/*Background du carousel */}
            <Carousel
                renderArrowPrev={(clickHandler) => ( /* Gestion du rendu de la fleche de gauche*/
                    <div className={"div_bouton_precedent"}>
                        <button onClick={clickHandler} className={"bouton_precedent boutons"}/>
                        {/* clickHandler est déjà par défaut dans le pckages react-responsive-carousel */}
                    </div>
                )}
                renderArrowNext={(clickHandler) => ( /* Pareil que tout à l'heure mais pour la flèche de droite */
                    <div className={"div_bouton_suivant"}>
                        <button onClick={clickHandler} className={"bouton_suivant boutons"}/>
                    </div>
                )}
                axis={"horizontal" /* axe*/}
                showStatus={false /* indique 1/4*/}
                thumbWidth={150} /* Taille des miniatures*/
                autoPlay={true /* changement automatique */}
                infiniteLoop={true} /* Retourne à la première image lorsqu'on arrive à la fin */
                interval={1900} /* Défile seul toutes les 1.9s */
                stopOnHover={true} /* S'arrête au survol de la souris */
            >
                {spells_data.map((element) => ( /* Itération à travers toutes les infos pour les retourner en jsx */
                    <div key={element.id} className={"div_for_img"}>
                        <div className={"div_for_title"}>
                            <h1 className={"nom-de-l'article"} style={{filter: `drop-shadow(0 0 20px ${element.color})`}}>{element.titre}</h1>
                        </div>
                        <img id={element.color}
                            style={{filter: `drop-shadow(0 0 30px ${element.color})`}} className={"img_in_carousel"}
                             /* Customise un peu chaque image avec des effets d'ombres propres à chaque image */
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