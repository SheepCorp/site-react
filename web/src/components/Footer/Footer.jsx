import './Footer.scss'
import logo from '../images/logologo.png'
import insta from '../images/instagram-logo.svg'
import git from '../images/github-logo.svg'

function Footer() {
    return (
        <footer>
            <div className="social">
                <a href="#"><img className='logo' src={logo} alt="Logo SheepCorp" /></a>
                <a href="https://www.instagram.com/sheep.corp" target="_blank"><img src={insta} alt="Logo Instagram" /></a>
                <a href="#"><img src={git} alt="Logo Github" /></a>
            </div>
            <span>Todos os direitos reservados à Sheep Corporation © 2022</span>
        </footer>
    )
}

export default Footer