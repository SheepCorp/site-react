import './Projetos.scss'
import logoSolar from '../../images/LogoSolar.png'
import logoRav from '../../images/logoRav.jpg'

function Projetos() {
    return (
        <section id='portifolio' className='projects'>
            <h2>ESSES SÃO ALGUNS DE NOSSOS TRABALHOS QUE ESTÃO NA WEB</h2>
            <div className='services'>
                <div className='card-projects'>
                    <a href=""><img src={logoSolar} alt="" /></a>
                </div>
                <div className='card-projects'>
                    <a href=""><img src={logoRav} alt="" /></a>
                </div>
            </div>
        </section>
    )
}

export default Projetos