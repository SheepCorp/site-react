import './Projects.scss'

function Projects(props) {
    return (
        <div className="cardProjects">
            <h3>{props.title}</h3>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default Projects