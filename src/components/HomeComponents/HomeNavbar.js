// BARRE DE NAVIGATION | HomeNavbar
import("../../css/Home_css/Navbar.css")
export default function HomeNavbar() {
    // state :


    // render :
    return <div className={"navbar"}>
        <ul className={"navbar_ul"}> {/*Renvoie vers différents onglets communément omnipresent sur une navbar */}
            <li><a href="/public">Accueil</a></li>
            <li><a href="/public">Boutique</a></li>
            <li><a href="/public">Nouveautés</a></li>
            <li><a href="/public">FAQ</a></li>
            <li><a href="/public">Contact</a></li>

                   </ul>
    </div>

}