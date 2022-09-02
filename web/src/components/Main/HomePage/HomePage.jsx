import './HomePage.scss'
import logoCentral from '../../images/logoCenter.svg'


function HomePage() {
    return (
        <section className='center-page'>
            <img src={logoCentral} alt="Logo central" />
            <h1>SHEEP CORP</h1>
            <h2>DESENVOLVEDOR DE SOFTWARE</h2>
        </section>
    )
}

export default HomePage