import { ArrowUp, WhatsappLogo } from "phosphor-react"
import './Float.scss'


function Float() {
    function backToTop() {
        window.scrollTo(0, 0)
    }

    return (
        <div className="float">
            <a onClick={backToTop} id="arrowUp" className="logo">
                <ArrowUp size={32} />
            </a>
            <a id="wpp" className="logo" href="https://wa.me/+5521969600862?text=Olá, vim pelo site e queria mais informações!" target="_blank" >
                <WhatsappLogo size={32} />
            </a>
        </div>
    )

}

export default Float