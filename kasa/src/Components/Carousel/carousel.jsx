import { useState } from 'react'
import LeftArrow from '../../Assets/LeftArrow.png'
import RightArrow from '../../Assets/RightArrow.png'
import '../../Styles/Carousel.css'

export default function Carousel ({pictures}) {
    const [index, setIndex] = useState(0)
    const totPic = pictures.length-1

    if(index<0) setIndex(totPic)
    if(index>totPic) setIndex(0)

    return (
        <div className="Carousel">
            <div className="pictures">
                <img src={pictures[index]} alt="" className="pics"/>
            </div>

            {totPic > 0 && (
                <div className="arrows-count">
                    <img src={LeftArrow} alt="photo précédente" className="previous" onClick={() => setIndex(index-1)}/>
                    <p className="pic-counter">{index+1} / {totPic+1}</p>
                    <img src={RightArrow} alt="photo suivante" className="next" onClick={() => setIndex(index+1)}/>

                </div>
            )}
        </div>
    )


}
