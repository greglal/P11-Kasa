import { NavLink } from 'react-router-dom'
import '../../Styles/style.css'
import logo from '../../Assets/logo.png'

export default function Header() {
    return (
        <div className='kasa-header'>
            <img src={logo} alt='Logo Kasa' className='kasa-logo' />

            {/* navbar with page's name underlined when active*/}
            <nav className='kasa-nav'>
                <NavLink to="/"
                         className={({isActive}) => (isActive ? 'active-link-nav' : 'link-nav')}>Accueil</NavLink>
                <NavLink to="/About"
                         className={({isActive}) => (isActive ? 'active-link-nav' : 'link-nav')}>A Propos</NavLink>
            </nav>
        </div>
    )
}