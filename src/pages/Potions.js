import "../css/Article_css/Potions.scss"

// import de tous les fichiers jpg + potion.json
import Jouvence from "../img/potions/potionDeJouvence.jpg";
import Boost from "../img/potions/PotionBoost.jpg";
import Mana from "../img/potions/PotionDeMana.jpg";
import Mort from "../img/potions/PotionDeMort.jpg";
import Soin from "../img/potions/PotionDeSoin.jpg";
import backgroundJouvence from "../img/potions/bg_jouvence_potion.jpg"
import backgroundDeath from "../img/potions/bg_death_potion.jpg"
import backgroundMana from "../img/potions/bg_mana_potion.jpg"
import backgroundBoost from "../img/potions/bg_boost_potion.jpg"
import backgroundHeal from "../img/potions/bg_heal_potion.jpg"
import PotionsData from "../data/potions.json";

// import dess fichiers react
import {AnimationOnScroll} from "react-animation-on-scroll";
import "animate.css"
import {useState} from "react";


// Représente la page des potions
export default function Potions() {

/*    Récupère le chemin de la miniature de l'article présent dans 'potions.json' et retourne l'image importée correspondante */
    function getPotionImage(potion) {
        switch (potion.miniature) {
            case "../img/potions/potionDeJouvence.jpg":
                return Jouvence;
            case "../img/potions/PotionBoost.jpg":
                return Boost;
            case "../img/potions/PotionDeMana.jpg":
                return Mana;
            case "../img/potions/PotionDeMort.jpg":
                return Mort;
            case "../img/potions/PotionDeSoin.jpg":
                return Soin;
            default:
                return "";
        }
    }

    function getPotionBackground(potion) { // Permet de retourner l'image correspondante au lien dans le fichier json
        switch (potion.backgroundPotion) {
            case "../img/potions/bg_jouvence_potion.jpg":
                return backgroundJouvence;
            case "../img/potions/bg_death_potion.jpg":
                return backgroundDeath;
            case "../img/potions/bg_mana_potion.jpg":
                return backgroundMana;
            case "../img/potions/bg_boost_potion.jpg":
                return backgroundBoost;
            case "../img/potions/bg_heal_potion.jpg":
                return backgroundHeal;
            default:
                return "";
        }
    }



    return <div className="global-div-potion">
        {PotionsData.map((potion) => (  /* Itère à travers 'potions.json pour retourner les informations de chaque article'*/
           /* Retourne le fond d'écran de chaque div correspondante à l'article*/
            <div style={{
                background: `url("${getPotionBackground(potion)}")`,
                backgroundSize: 'cover',
                backgroundPosition: ""
            }} className="div-de-chaque-potion">
                {/* Animation de chaque div lorsqu'elle apparaît à l'écran*/}
                <AnimationOnScroll
                    initiallyVisible={true} /* Permet d'afficher le premier article sans qu'il y ai de défilement à effectuer */
                    offset={0}
                    animateIn={"animate__animated animate__potion"}>
                    <div className="div-pour-image">
                        <img className={potion.classname} style={potion.styleImg} src={getPotionImage(potion)} alt=""/> {/* Image de l'article*/}
                    </div> {/* Div des images */}
                </AnimationOnScroll>
                <div className="div-pour-nom-potion"> {/* Toute la partie texte de l'article */}
                    <h1 className={'potion-nom'} style={potion.styleTxt}>{potion.nom}</h1> {/* Nom de la potion*/}
                    <div className={"div-description-potion"}>
                        <p style={potion.styleDscrpt} className="potion-description">{potion.description}</p>
                    </div>
                    <h2 className={"potion-prix"} style={potion.styleTxt}>{potion.prix}</h2>
                </div>
            </div>
        ))}
    </div>


}
