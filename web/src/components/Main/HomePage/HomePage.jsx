import './HomePage.scss'
import logoCentral from '../../images/logoCenter.svg'


function HomePage() {
    return (
        <section id='homePage   ' className='center-page'>
            <div className='title'>
                <img src={logoCentral} alt="Logo central" />
                <h1>SHEEP CORP</h1>
                <h2>DESENVOLVEDOR DE SOFTWARE</h2>
            </div>
            <div className='buttons-title'>
                <a href="#">CONTATO</a>
                <a href="#">PROJETOS</a>
            </div>
        </section>
    )
}

export default HomePage