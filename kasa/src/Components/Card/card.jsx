import {useParams} from 'react-router-dom'
import {anounces} from '../../Datas/Anounces'
import Collapse from '../../Components/Collapse/collapse'
import Carousel from '../../Components/Carousel/carousel'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  {faStar} from '@fortawesome/free-solid-svg-icons'

import '../../Styles/Card.css'


/**
 * house description with carousel, title, location, host, ratings, description and equipment
 *
 * @returns {JSX.Element}
 * @constructor
 */
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
        <div className="home-card">

            <Carousel pictures={anounce.pictures} />
            <div className="title-tag-host">

                {/*title, location and tags*/}
                <div className="Hometitle">
                    {/*title and location*/}
                    <div className="home-title">
                        <h1>{anounce.title}</h1>
                        <p>{anounce.location}</p>
                    </div>

                    {/*tags*/}
                    <div className="tags">
                        {tags.map((tag) => (
                            <div className="tag" key={tag}>{tag}</div>
                        ))}
                    </div>
                </div>

                {/*host and rates*/}
                <div className = "host-and-rate">
                    {/*host name and picture*/}
                    <div className="host">
                        <p>{anounce.host.name}</p>
                        <img src={anounce.host.picture} alt={anounce.host.name}/>
                    </div>

                    {/*ratings */}
                    <div className="ratings">
                        { stars.map(element=> {
                            const nbStars = parseInt(anounce.rating);
                            console.log(element);
                            return(
                                <FontAwesomeIcon icon ={faStar} key={"star-"+element.toString()} style={(element <= nbStars) ? {color: "#FF6060", height:"36px"} : {color: "lightgrey",height:"36px"}}></FontAwesomeIcon>
                            )
                        })}
                    </div>
                </div>
            </div>


            <div className='home-collapse'>
                <div className="desc">
                    <Collapse title ='Description' content ={anounce.description}  />

                </div>
                <div className="desc">
                    <Collapse title ='Equipements' content ={equipments} />

                </div>
            </div>

        </div>

    )
}

