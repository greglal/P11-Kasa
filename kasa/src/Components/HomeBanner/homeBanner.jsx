import falaise from '../../Assets/falaise.png'

export default function Banniere() {
    return (
        <div className='ban'>
            <img src={falaise} alt="paysage falaise bord de mer" className='banniere'/>
            <h1 className='title'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}