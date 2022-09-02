import "./Header.scss"
import logo from '../images/logologo.png'

function Header() {
    return (
        <header>
            <a className="logo" href="#"><img src={logo} alt="Logo SheepCorp" /></a>
            <nav className="nav">
                <ul className="nav-bar">
                    <li><a href="#">Página Inicial</a></li>
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Portifólio</a></li>
                </ul>
            </nav>
            <a className="talk-me" href="#">Fale Conosco</a>
        </header>
    )
}

export default Header