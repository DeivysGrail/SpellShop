import {Carousel} from "react-responsive-carousel"
import Ganblin from "../../img/wizard_pdp/LordGanblin.png"
import Aphrodine from "../../img/wizard_pdp/Aphrodine.png"
import Dumbledargent from "../../img/wizard_pdp/Dumbledargent.png"
import Elizard from "../../img/wizard_pdp/Elizard.png"
import "../../css/Home_css/Feedback.css"

export default function Feedback() {
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
            <Carousel
                    renderArrowNext={(clickHandler) =><div className={"div-next-button boutons-feedback"}><button onClick={clickHandler} className={"next-button"}></button></div>  }
                    renderArrowPrev={(clickHandler, hasPrev) => hasPrev && <div className={"div-previous-button boutons-feedback"}><button onClick={clickHandler} className={"previous-button"}></button></div>}
                    stopOnHover={true}
                      infiniteLoop={true}
                      className={"wizard-carousel"}
                      axis={"vertical"}
                      showStatus={false}
                      showThumbs={false}
            >
                {mages.map((element) => (
                        <div className="div-of-each-wizard">
                            <div style={{background: `${element.color}`}} className="div-pdp">
                                <img src={element.pdp} alt="" className="pdp"/>
                            </div>
                            <div className="div-wizard-name">
                                <h1 className="name">{element.nom}</h1>
                            </div>
                            <div className="div-feedback">
                                <p className="feedback">{element.feedback}</p>
                            </div>
                        </div>
                    )
                )}
            </Carousel>

        </div>
    )

}