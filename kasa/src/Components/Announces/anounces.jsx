import {anounces} from '../../Datas/Anounces'
import '../../Styles/Anounces.css'
import {Outlet, Link} from 'react-router-dom'

/**
 * create a card for each house
 * contain a cover pic and the anounce's title
 * link to house's anounce
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function AnounceSection() {
    return (
            <div className='Kasa-anounces'>
                {anounces.map((anounce) => (
                    <div className='anounce' key={anounce.id.toString()}>
                        <Link to={`card/${anounce.id}`}  className="card-link">
                            <div className='bg-anounce'>
                                <img src={anounce.cover} alt={anounce.title} className="anounce-cover" />
                            </div>
                            <h2>{anounce.title}</h2>
                        </Link>
                        <Outlet />
                    </div>
                    ))}
            </div>
    )
}