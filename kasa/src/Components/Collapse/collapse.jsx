import { useState } from 'react'
import UpArrow from '../../Assets/UpArrow.png'
import '../../Styles/Collapse.css'

export default function Collapse({title, content}) {
    const  [active, setActive] = useState(false)

    const handleToggle = () => {
        setActive(!active)
    }

    return (
        <div className={`description ${(active && "active")}`}>
            <div className='description-title'> {title} <img src = {UpArrow} alt='' className='collapse-arrow' onClick={handleToggle} /></div>
            <div className='description-content' >{content}</div>
        </div>
    )
}