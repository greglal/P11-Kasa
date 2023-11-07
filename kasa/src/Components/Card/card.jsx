import {useParams} from 'react-router-dom'
import {anounces} from '../../Datas/Anounces'
import Collapse from '../../Components/Collapse/collapse'
import Carousel from '../../Components/Carousel/carousel'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  {faStar} from '@fortawesome/free-solid-svg-icons'

import '../../Styles/Card.css'



export default function Card() {
    const {anounceId} = useParams()
    const anounce = anounces.find((anounce) => anounce.id === anounceId);
    const tags = anounce.tags
    const equipments = anounce.equipments.map((equipment)=> (<ul key={equipment} className="eq-list">
            <li className="stuff" >{equipment}</li>
        </ul>)
    )
    const stars= [1,2,3,4,5];

    return (
        <div>

            <Carousel pictures={anounce.pictures} />

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
                        <div className="tag" key={tag}>{tag}</div>
                    ))}
                </div>

                <div className="ratings">
                    { stars.map(element=> {
                        const nbStars = parseInt(anounce.rating);
                        return(
                            <FontAwesomeIcon icon ={faStar} key={"star-"+element.toString()} style={(element <= nbStars) ? {color: "#FF6060", height:"36px"} : {color: "lightgrey",height:"36px"}}></FontAwesomeIcon>
                        )
                    })}
                </div>
            </div>


            <div className='home-collapse'>
                <Collapse title ='Description' content ={anounce.description} width="45%" />
                <Collapse title ='Equipements' content ={equipments} width="45%" />
            </div>

        </div>

    )
}

