import BanniereAcc from "../../Components/HomeBanner/homeBanner";
import '../../Styles/Home.css'
import AnounceSection from "../../Components/Announces/anounces";

export default function Accueil(){
    return <div className="home">
        <BanniereAcc />
        <AnounceSection />
    </div>
}

