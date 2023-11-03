import {anounces} from '../../Datas/Anounces'
import '../../Styles/Anounces.css'
import {Outlet, Link} from 'react-router-dom'

export default function AnounceSection() {
    return (
            <div className='Kasa-anounces'>
                {anounces.map((anounce) => (
                    <div className='anounce'>
                        <Link to={`card/${anounce.id}`} key = {anounce.id.toString()} className="card-link">
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