import "../css/Createurs.css"
import Ioltor from "../img/createurs/Ioltor.png"
import Yasmae from "../img/createurs/Yasmae.png"
import Enaline from "../img/createurs/Enaline.png"
import Nixy from "../img/createurs/Nixy.png"
import Nasmina from "../img/createurs/Nasmina.png"
import Ismael from "../img/createurs/Ismael.png"
import LightSister from "../img/createurs/LightSister.png"
import DarkSister from "../img/createurs/DarkSister.png"
import Origines from "../img/createurs/Origines.jpg"
import AcademyBackground from "../video/background_origines.mp4"
import {AnimationOnScroll} from "react-animation-on-scroll";
import "../../node_modules/animate.css/animate.css"

export default function Createurs() {

    const main_createurs = [

        {
            portrait: Enaline,
            first_color: "pink",
            second_color: "yellowgreen",
            description: "Petite soeur de Yasmae, elle est la première orpheline récupérée par Ioltor. Autrefois, elle était admirée " +
                "par la population mondiale pour sa beauté, son intelligence et sa magie dévastatrice. " +
                "De nos jours Enaline fait du contenu Twitch, principalement Minecraft, HotTubes, ou League Of Legends.   "
        },
        {
            portrait: Yasmae,
            first_color: "golden",
            second_color: "stealblue",
            description: "Grand frère de Enaline, Yasmae connait lui aussi l'admiration totale de la part de tous. " +
                " Il est réputé pour être l'un des mages les plus puissants qui soit et ceux grâce à l'entrainement intensif que Ioltor " +
                "lui a fait subir. De nos jours, Yasmae vient de finir ses 15ans dans l'armée. Il veut désormais se reconvertir dans la " +
                "programmation python."
        }

    ]
    const ioltor = {
        portrait: Ioltor,
        first_color: "darkblue",
        second_color: "grey",
        description: "Ioltor fut le premier mage à réellement s'affirmer en tant que mage." +
            "Il est celui qui lança la grande révolution en 1622 avant J-c, et qui permit aux mages de pouvoir vivre une vie normal.\n" +
            "C'est en 2022 qu'il décida de lancer sa propre boutique de e-commerce.",

    }

    const kid_createurs = [
        {
            portrait: Ismael,
            first_color: "white",
            second_color: "blue",
            description: "Le petit Ismaël",
        },

        {
            portrait: Nasmina,
            first_color: "white",
            second_color: "red",
            description: "La petite Nasmina",
        },
        {
            portrait: Nixy,
            first_color: "white",
            second_color: "red",
            description: "La petite Nixy",
        }]

    const sister = [{
        portrait: DarkSister,
        first_color: "white",
        second_color: "red",
        description: "",
    },
        {
            portrait: LightSister,
            first_color: "white",
            second_color: "red",
            description: "",
        }]

    return <div className="video-container">
        <video src={AcademyBackground} autoPlay muted loop></video>
        <div class Name="root-origines">


            <AnimationOnScroll animateOnce={true} offset={300} animateIn={"animate__animated animate__fadeInDownBig"}>
                <div className={"div-first-picture"}>
                    <div className="div-img">
                        <img className={"origines"} src={Origines}/>
                        <div className="div-description-origines">
                            <p className={"description-origines"}>Voici les mages de Melas, petite ville à l'importance
                                cruciale. <br/> C'est cette ville qui
                                permit aux mages de vivre libre. <br/> C'est également ici que les 8 mages ont commencés
                                à
                                revendiquer leurs droits, et l'égalité qui jusqu'à ces jours ne l"était pas. <br/> C'est
                                également ces 8 mages qui sont derrières SpellShop.</p>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
            <div className="div-main-createur">
                <div className="div-Ioltor">
                    <AnimationOnScroll offset={300} duration={1.1}
                                       animateIn={"animate__animated animate__slide "}
                                       animateOut={"animate__fadeOutDown"}>
                        <div className="div-img-main-createur">
                            <img className={"main-createur-img"} src={ioltor.portrait}/>
                            <div className="div-description-Ioltor  ">
                                <p style={{
                                    webkitTextStroke: `1.7px ${ioltor.second_color}`,
                                    color: `${ioltor.first_color}`
                                }} className={"Ioltor-description"}>{ioltor.description}</p>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className="YasmaEnaline">
                    {main_createurs.map((perso) => (
                        <div key={perso.first_color} className="main-createur">
                            <AnimationOnScroll offset={350} duration={1.1}
                                               animateIn={"animate__flip "}
                                               animateOut={"animate__fadeOutUp"}>
                                <div className="div-img-main-createur">
                                    <img className={"main-createur-img"} src={perso.portrait}/>
                                    <div className="div-description-main-createur">
                                        <p style={{
                                            WebkitTextStroke: `1.7px ${perso.second_color}`,
                                            color: `${perso.first_color}`
                                        }} className={"main-createur-description"}>{perso.description}</p>
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    ))}
                </div>
            </div>
            <div className="div-kid-createur">
                {kid_createurs.map((enfant) => (
                    <AnimationOnScroll offset={300} animateIn={'animate__jackInTheBox'}
                                       animateOut={"animate__fadeOutUp"}>
                        <div className="kid-createur">
                            <img className={"kid"} src={enfant.portrait}/>
                            <div className="div-description-enfant">
                                <p style={{
                                    webkitTextStroke: `1.7px ${enfant.second_color}`,
                                    color: `${enfant.first_color}`
                                }} className="description">{enfant.description}</p>
                            </div>
                        </div>
                    </AnimationOnScroll>
                ))}
            </div>
            <div className="div-sister-creatrice">

            </div>
        </div>
    </div>


    // return <div className={"origines"}>
    //     <div className={"createurs"}>
    //         <div className="principaux-createurs">
    //             <AnimationOnScroll animateIn={" animate__slide"}> <img id={"Yasmae"} src={Yasmae}
    //                                                                    className={"img-createur main-createur"}/>
    //             </AnimationOnScroll>
    //             <AnimationOnScroll animateIn={" animate__slide2"}><img id={"Ioltor"} src={Ioltor}
    //                                                                    className={"img-createur main-createur"}/>
    //             </AnimationOnScroll>
    //             <AnimationOnScroll animateIn={" animate__slide"}> <img id={"Enaline"} src={Enaline}
    //                                                                    className={"img-createur main-createur"}/>
    //             </AnimationOnScroll>
    //             <AnimationOnScroll></AnimationOnScroll>
    //             <AnimationOnScroll></AnimationOnScroll>
    //             <AnimationOnScroll></AnimationOnScroll>
    //             <AnimationOnScroll></AnimationOnScroll>
    //         </div>
    //         <div className="enfants-createurs">
    //             <img id={"Nixy"} src={Nixy} className={"img-createur kid-createur"}/>
    //             <img id={"Ismael"} src={Ismael} className={"img-createur kid-createur"}/>
    //             <img id={"Nasmina"} src={Nasmina} className={"img-createur kid-createur"}/>
    //         </div>
    //         <div className="soeurs-creatrices">
    //             <img id={"DarkSister"} src={DarkSister} className={"img-createur sister-creatrice"}/>
    //             <img id={"LightSister"} src={LightSister} className={"img-createur sister-creatrice"}/>
    //         </div>
    //     </div>
    // </div>

}