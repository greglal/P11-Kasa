import {useParams} from 'react-router-dom'
import {anounces} from '../../Datas/Anounces'

import '../../Styles/Card.css'

export default function Card() {
    const {anounceId} = useParams()
    const anounce = anounces.find((anounce) => anounce.id === anounceId);

    return(
        <div className="home-card">
            <img src={anounce.cover} alt={anounce.title} className="home-pic"/>
            <HomeTitle />
            <HomeTags />
            <HomeDescription />
        </div>
    )
}

function HomeTitle() {
    const {anounceId} = useParams()
    const anounce = anounces.find((anounce) => anounce.id === anounceId);

    return (
        <div className="Hometitle">
            <div className="home-title">
                <h1>{anounce.title}</h1>
                <p>{anounce.location}</p>
            </div>

            <div className="host">
                <p>{anounce.host.name}</p>
                <img src={anounce.host.picture} alt={anounce.host.name}/>
            </div>
        </div>
    )
}

function HomeTags(){
    const {anounceId} = useParams()
    const anounce = anounces.find((anounce) => anounce.id === anounceId);
    const tags = anounce.tags

    return (
        <div className="tags">
            {tags.map((tag) => (
                <div className="tag">{tag}</div>
            ))}
        </div>
    )
}

function HomeDescription() {
    const {anounceId} = useParams()
    const anounce = anounces.find((anounce) => anounce.id === anounceId);
    const equipments = anounce.equipments

    return (
        <div className='home-description'>
            <div className="description">
                <h2 className="description-title">Description</h2>
                <p>{anounce.description}</p>
            </div>
            <div className='equipments'>
                <h2 className="description-title">Equipements</h2>
                {equipments.map((equipment)=> (
                    <div className="list-container">
                        <ul className="eq-list">
                            <li className="stuff">{equipment}</li>
                        </ul>
                    </div>

                ))}
            </div>

        </div>
    )
}
