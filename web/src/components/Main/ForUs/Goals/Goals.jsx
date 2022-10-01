import './Goals.scss'
import CardProjects from './Projects/Projects'

function Goals() {
    return (
        <div className='metas'>
            <p>Nossa meta é lançar alguns aplicativos e sites responsivos no mercado para que exista mais pessoas utilizando nossos serviços e aumentando o rendimento do seu próprio negócio</p>
            <div className='projects'>
                <CardProjects title='BARBEARIA' src='' alt='card barbearia' />
                <CardProjects title='IGREJA' src='' alt='card igreja' />
                <CardProjects title='LANCHONETE' src='' alt='card lanchonete' />
            </div>
        </div>
    )
}

export default Goals