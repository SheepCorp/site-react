import './Card.scss'

function Card(props) {
    return (
        <div className='forUs-card'>
            <h3>{props.name}</h3>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default Card