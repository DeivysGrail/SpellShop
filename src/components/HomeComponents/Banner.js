import banniere from "../../video/banner.mp4"
import "../../css/Banner.css"
import {useState} from "react";

export default function Banner() {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    const texte = document.querySelectorAll(".header_description")// Texte du paragraphe
    const texte_length = texte.length

// Fonctionne pour modifier la couleur



    /* VÉRIFIER LES ERREURS LORS DE LA PROCHAINE SESSION !!!
        ESSAYER DE SIMPLEMENT LANCER UNE APPARAITION DU TEXTE AU CHARGEMENT
    */

    // setRed(255)
    //     setBlue(255)
    //     setGreen(255)


    /* rendu de la bannière :
    - Vidéo mp4 en fond
    - Texte de présentation au-dessus
    */

    return <div className={"header"}>
        <h1 className={"header_title"}>SpellShop</h1>
            <p className={"header_description"}>Tu veux être mage ? <br/> Alors fais comme tes prochains
            sorts.. <br/> Lance-toi !</p>
        <video className={"header_video"} controls={false} autoPlay muted loop>
            <source src={banniere} type={"video/mp4"}/>
        </video>
    </div>


}