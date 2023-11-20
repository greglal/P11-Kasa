import { useState } from 'react'
import LeftArrow from '../../Assets/LeftArrow.png'
import RightArrow from '../../Assets/RightArrow.png'
import '../../Styles/style.css'

/**
 * carousel whith counter, previous arrow and next arrow
 *
 * @param pictures
 * @returns {JSX.Element}
 * @constructor
 */
export default function Carousel ({pictures}) {
    const [index, setIndex] = useState(0)
    const totPic = pictures.length-1

    if(index<0) setIndex(totPic) /* if index <0 goes to last pic */
    if(index>totPic) setIndex(0)  /* if last pic and go next, goes to 1st pic */

    return (
        <div className="Carousel">
            <div className="pictures">
                <img src={pictures[index]} alt="" className="pics"/>
            </div>

            {totPic > 0 && (
                <div className="arrows-count">
                    {/* on click on left arrow, go to next pic (or 1st pic if it's the last one)*/}
                    <img src={LeftArrow} alt="photo précédente" className="previous" onClick={() => setIndex(index-1)}/>
                    <p className="pic-counter">{index+1} / {totPic+1}</p>
                    {/* on click on right arrow, go to previous pic (or last pic if it's the first one)*/}
                    <img src={RightArrow} alt="photo suivante" className="next" onClick={() => setIndex(index+1)}/>
                </div>
            )}
        </div>
    )


}
