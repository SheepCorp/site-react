import { useState } from "react";
import "./Header.scss";
import logo from "../images/logologo.png";

function Header() {
    const [btn, setBtn] = useState("btn-mobile");
    const [nav, setNav] = useState("nav");
    function toggleMenu() {
        if (btn.indexOf("active") === -1) {
            setBtn("btn-mobile active");
            setNav("nav active");
        } else {
            setBtn("btn-mobile");
            setNav("nav");
        }
    }
    return (
        <header>
            <a className="logo" href="#">
                <img src={logo} alt="Logo SheepCorp" />
            </a>
            <nav className={nav}>
                <button className={btn} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className="menu" role="menu">
                    <li>
                        <a href="#homePage">Página Inicial</a>
                    </li>
                    <li>
                        <a href="#forUs">Sobre nós</a>
                    </li>
                    <li>
                        <a href="#portifolio">Portifólio</a>
                    </li>
                    <li>
                        <a href="#projects">Projetos</a>
                    </li>
                </ul>
            </nav>
            <a className="talk-me" href="#contato">
                Fale Conosco
            </a>
        </header>
    );
}

export default Header;
