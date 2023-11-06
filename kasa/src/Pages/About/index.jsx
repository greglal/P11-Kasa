import AboutBanner from "../../Components/AboutBanner/aboutBanner";
import Collapse from "../../Components/Collapse/collapse";
import '../../Styles/About.css';

export default function About() {

    const fiability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes" +
        " aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";

    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire" +
        " ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";

    const Security = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque" +
        " logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à" +
        " l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous" +
        " organisons également des ateliers sur la sécurité domestique pour nos hôtes."


    return(
        <div>
            <AboutBanner />
            <div className="principes">
                <Collapse title="Fiabilité" content ={fiability} width="100%" />
                <Collapse title="Respect" content ={respect} width="100%" />
                <Collapse title="Service" content ={respect} width="100%" />
                <Collapse title="Sécurité" content ={Security} width="100%" />
            </div>
        </div>
    )
}
