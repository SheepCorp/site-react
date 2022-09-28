import './Dreams.scss'
import Dream from '../../../images/sonho.svg'

function Dreams() {
    return (
        <div className="dreams">
            <div className="text">
                <p>Nosso <span className="dream">sonho</span> é expandir a nossa empresa, fazer com que ela possa atingir as 7 esferas da sociedade com total aproveitamento.</p>
                <p>Nossa empresa nunca deixará de <span className="dream">sonhar</span>, pois quando nós conseguirmos realizar esse <span className="dream">sonhos</span>, iremos continuar sonhando com objetivos cada vez maiores.</p>
                <div className="center">
                    <span>NUNCA DEIXE DE <span className="dream">SONHAR</span>!</span>
                    <span>E REALIZE SEU <span className="dream">SONHO</span> DE TER UM APP/SITE CONOSCO.</span>
                </div>
            </div>
            <img src={Dream} alt="Imagem Sonho" />
        </div>
    )
}

export default Dreams