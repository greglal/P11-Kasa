import '../../Styles/style.css'
import logo_white from '../../Assets/logo_white.png'

export default function Footer () {
    return (
        <div className="kasa-footer">
            <img src={logo_white} alt="Logo Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}