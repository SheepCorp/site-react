import './Projetos.scss'
import logoSolar from '../../images/LogoSolar.png'

function Projetos() {
    return (
        <section id='portifolio' className='projects'>
            <h2>ESSES SÃO ALGUNS DE NOSSOS TRABALHOS QUE ESTÃO NA WEB</h2>
            <div className='card-projects'>
                <a href=""><img src={logoSolar} alt="" /></a>
            </div>
        </section>
    )
}

export default Projetos