import {Carousel} from "react-responsive-carousel" // Composant pour le carousel

// Image des mages qui ont laissé un  commentaire + le fichier Feedback.css
import Ganblin from "../../img/wizard_pdp/LordGanblin.png"
import Aphrodine from "../../img/wizard_pdp/Aphrodine.png"
import Dumbledargent from "../../img/wizard_pdp/Dumbledargent.png"
import Elizard from "../../img/wizard_pdp/Elizard.png"

import "../../css/Home_css/Feedback.css"

// Représente la section des commentaires laissés par les clients
export default function Feedback() {
    // mages contient les données de tous les mages qui ont laissé un commentaire
    const mages = [{
        id: 1,
        nom: "Lord Ganblin",
        domaine: "Magie noire",
        pdp: Ganblin,
        feedback: "Tout simplemenet le meilleur site pour les mages, que ce soit pour les juniors ou les seniors. " +
            "Le seul site qui a proposé le Avada Kedavra en dessous de 40 000WD."
        , color: "#2e000e",
        notes: 5
    }, {
        id: 2,
        nom: "Aphrodine",
        domaine: "Magie de soutien",
        pdp: Aphrodine,
        feedback: "Je recommande à 100% !! Les sorts sont efficaces et pas chères, c'est la magie que j'préfères"
        , color: "#6d72e8",
        notes: 5
    }, {
        id: 3,
        nom: "Elizard",
        domaine: "Magie élémentaire",
        pdp: Elizard,
        feedback: "Je panse de lwouin qu'il s'agi du méilleur site de magie poçible ! Si ca seré possible joré mit 6 étoile"
        , color: "#e4bc9f",
        notes: 5
    }, {
        id: 4,
        nom: "Dumbledargent",
        domaine: "Magie ancestrale",
        pdp: Dumbledargent,
        feedback: "J'ai commencé grâce à SpellShop, et je continue de l'utiliser depuis 126ans, je recommande !"
        , color: "#010118",
        notes: 5
    }]

    return (
        <div className="main-div-feedback">
            <div className="div-title-section">
                <h1 className={"feedback-title"}>FeedBack</h1>
            </div>
            <Carousel /* composant Carousel avec tous les props */
      /* clickHandler est prédéfinie dans react responsive carousel*/ renderArrowNext={(clickHandler) =><div className={"div-next-button boutons-feedback"}><button onClick={clickHandler} /* gestion du bouton suivant*/ className={"next-button"}></button></div>  }
                    renderArrowPrev={(clickHandler, hasPrev) => hasPrev && <div className={"div-previous-button boutons-feedback"}><button onClick={clickHandler} className={"previous-button"}></button></div>}
                    stopOnHover={true} /* s'arrête lorsque le curseur est sur le carousel */
                      infiniteLoop={true} /* Reviens à l'image 1 après la dernière image*/
                      className={"wizard-carousel"}
                      axis={"vertical"} /* Carousel vertical */
                      showStatus={false} /* Cache le '1/4'*/
                      showThumbs={false} /* Cache les miniatures */
            >
                {mages.map((element) => ( /* Itération à travers les données de la variable mage */
                        <div className="div-of-each-wizard">
                            <div style={{background: `${element.color}`}} className="div-pdp"> {/* container des photos de profils */}
                                <img src={element.pdp} alt="" className="pdp"/> {/* photo de profil */}
                            </div>
                            <div className="div-wizard-name"> {/* container des noms des sorciers*/}
                                <h1 className="name">{element.nom}</h1> {/* Nom des sorciers*/}
                            </div>
                            <div className="div-feedback"> {/* container des commentaires*/}
                                <p className="feedback">{element.feedback}</p> {/* Commentaires*/}
                            </div>
                        </div>
                    )
                )}
            </Carousel>

        </div>
    )

}