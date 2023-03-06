import Origines from "../../img/createurs/Origines.jpg"
// import AcademyBackground from "../../video/background_origines.mp4"
import {AnimationOnScroll} from "react-animation-on-scroll";
import "../../css/Createurs_css/CreateursBanner.scss"

export default function CreateursBanner() {




    return <div className={"CreateursBanner-root"}>
        {/*<AnimationOnScroll animateOnce={true} animateIn={"animate__animated animate__fadeInDownBig"}>*/}
                <div className={"Banner--root"}>
                    <div className="origine" >
                        <img className={"origine__img"} src={Origines}/>
                        <div className="div-origine-description">
                            <p className={"origines__txt"}>Voici les mages de Melas, petite ville à l'importance
                                cruciale. <br/> C'est cette ville qui
                                permit aux mages de vivre libre. <br/> C'est également ici que les 8 mages ont commencés
                                à
                                revendiquer leurs droits, et l'égalité qui jusqu'à ces jours ne l"était pas. <br/> C'est
                                également ces 8 mages qui sont derrières SpellShop.</p>
                        </div>
                    </div>
                </div>
            {/*</AnimationOnScroll>*/}
    </div>
}
