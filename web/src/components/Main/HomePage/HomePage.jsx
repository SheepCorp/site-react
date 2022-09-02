import './HomePage.scss'
import logoCentral from '../../images/logoCenter.svg'
import "@fontsource/lexend-zetta";


function HomePage() {
    return (
        <div className='center-page'>
            <img src={logoCentral} alt="Logo central" />
            <h1>SHEEP CORP</h1>
            <h2>DESENVOLVEDOR DE SOFTWARE</h2>
        </div>
    )
}

export default HomePage