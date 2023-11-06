import {useParams} from 'react-router-dom'
import {anounces} from '../../Datas/Anounces'
import Collapse from '../../Components/Collapse/collapse'

import '../../Styles/Card.css'



export default function Card() {
    const {anounceId} = useParams()
    const anounce = anounces.find((anounce) => anounce.id === anounceId);
    const tags = anounce.tags
    const equipments = anounce.equipments.map((equipment)=> (<ul className="eq-list">
            <li className="stuff">{equipment}</li>
        </ul>)
    )

    return (
        <div>

            {/*div carrousel*/}

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

            <div className = "tags-and-rate">
                <div className="tags">
                    {tags.map((tag) => (
                        <div className="tag">{tag}</div>
                    ))}
                </div>
                <div>stars</div>
            </div>


            <div className='home-collapse'>
                <Collapse title ='Description' content ={anounce.description} />
                <Collapse title ='Equipements' content ={equipments} />
            </div>

        </div>

    )
}

