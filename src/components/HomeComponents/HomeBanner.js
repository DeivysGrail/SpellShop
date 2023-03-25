import banniere from "../../video/banner.mp4" // Video de la bannière avec une sorte de plasma qui se déplace
import "../../css/Home_css/Banner.css"
import {useState} from "react";

// Représente la bannière qui contient uniquement le nom du site ainsi qu'un phrase d'introduction avec un petit animation zoom-in
export default function HomeBanner() {


    return <div className={"header"}>
        <h1 className={"header_title"}>SpellShop</h1> {/* Nom du site*/}
        {/* Phrase d'intro*/} <p className={"header_description"}>Tu veux être mage ? <br/> Alors fais comme tes
        prochains
        sorts.. <br/> Lance-toi !</p>
        <video className={"header_video"} controls={false} autoPlay muted loop>
            <source src={banniere} type={"video/mp4"}/> {/*Video de la bannière */}
        </video>
    </div>


}