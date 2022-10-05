import './Goals.scss'
import CardProjects from './Projects/Projects'
import logoBarb from '../../../images/cards/cardBarbearia.png'
import logoChur from '../../../images/cards/cardIgreja.png'
import logoFood from '../../../images/cards/cardLanchonete.png'

function Goals() {
    return (
        <div className='metas'>
            <p>Nossa meta é lançar alguns aplicativos e sites responsivos no mercado para que exista mais pessoas utilizando nossos serviços e aumentando o rendimento do seu próprio negócio</p>
            <div className='projects'>
                <CardProjects src={logoBarb} alt='card barbearia' />
                <CardProjects src={logoChur} alt='card igreja' />
                <CardProjects src={logoFood} alt='card lanchonete' />
            </div>
        </div>
    )
}

export default Goals