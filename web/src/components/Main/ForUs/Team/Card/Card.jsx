import './Card.scss'

function Card(props) {
    return (
        <div className='forUs-card'>
            <h3>{props.name}</h3>
            <img src={props.img} alt='Imagem Integrantes' />
        </div>
    )
}

export default Card