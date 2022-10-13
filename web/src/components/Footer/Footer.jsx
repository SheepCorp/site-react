import './Footer.scss'
import logo from '../images/logologo.png'
import insta from '../images/instagram-logo.svg'
import git from '../images/github-logo.svg'

function Footer() {
    return (
        <footer>
            <a href="#"><img className='logo' src={logo} alt="Logo SheepCorp" /></a>
            <span>Todos os direitos reservados à Sheep Corporation © 2022</span>
            <div className="social">
                <a href="https://www.instagram.com/sheep.corp" target="_blank"><img src={insta} alt="Logo Instagram" /></a>
                <a href="#"><img src={git} alt="Logo Github" /></a>
            </div>
        </footer>
    )
}

export default Footer