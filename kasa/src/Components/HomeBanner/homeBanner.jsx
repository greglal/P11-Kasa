import falaise from '../../Assets/falaise_full.png'

export default function Banniere() {
    return (
        <div className='ban'>
            <img src={falaise} alt="" className='banniere'/>
            <h1 className='title'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}