import '../../css/Footer.css'

export default function Footer() {

    return <div className={"footer-div"}>
        <h1>Subscribe & get a random spell</h1>
        <div className={"tous-les-ul-du-footer"}>
            <div className="first-footer-ul">
                <div className="first-ul-title ul-title">
                    <h4>Infos</h4>
                </div>
                <ul>
                    <li className={"footer-li"}><a href="src/components/HomeComponents/Footer">CGU</a></li>
                    <li className={"footer-li"}><a href="src/components/HomeComponents/Footer">Qui sommes-nous ?</a></li>
                    <li className={"footer-li"}><a href="src/components/HomeComponents/Footer">Compte</a></li>
                    <li className={"footer-li"}><a href="src/components/HomeComponents/Footer">Informations légales</a></li>
                </ul>
            </div>
            <div className="second-footer-ul">
                <div className="second-ul-title ul-title">
                    <h4>Nos réseaux</h4>
                </div>
                <ul className={"ul-reseaux"}>
                    <li className={"footer-li"}><a><img src="src/components/HomeComponents/Footer" alt=""/>Wiztagram</a></li>
                    <li className={"footer-li"}><a><img src="src/components/HomeComponents/Footer" alt=""/>Spellbook</a></li>
                    <li className={"footer-li"}><a><img src="src/components/HomeComponents/Footer" alt=""/>Pinterel</a></li>
                    <li className={"footer-li"}><a><img src="src/components/HomeComponents/Footer" alt=""/>Snapcat</a></li>
                </ul>
            </div>
            <div className="last-footer-ul">
                <div className="last-footer-title ul-title">
                    <h4>Aide</h4>
                </div>
                <div className="ul-aide">
                    <ul>
                        <li className={"footer-li"}><a href="src/components/HomeComponents/Footer">Nous contacter</a></li>
                        <li className={"footer-li"}><a href="src/components/HomeComponents/Footer">FAQ</a></li>
                        <li className={"footer-li"}><a href="src/components/HomeComponents/Footer">SAV</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
