import './Dreams.scss'
import Dream from '../../../images/sonho.svg'

function Dreams() {
    return (
        <div className="dreams">
            <div className="text">
                <p className="txt-1">Nosso <span className="dream-txt1">sonho</span> é expandir a nossa empresa, fazer com que ela possa atingir as 7 esferas da sociedade com total aproveitamento.</p>
                <p className="txt-2">Nossa empresa nunca deixará de <span className="dream-txt2">sonhar</span>, pois quando nós conseguirmos realizar esse <span className="dream-txt2">sonhos</span>, iremos continuar sonhando com objetivos cada vez maiores.</p>
                <div className="center">
                    <span className="center-1">NUNCA DEIXE DE <span className="dream1">SONHAR</span>!</span>
                    <span className="center-2">E REALIZE SEU <span className="dream2">SONHO</span> DE TER UM APP/SITE CONOSCO.</span>
                </div>
            </div>
            <img src={Dream} alt="Imagem Sonho" />
        </div>
    )
}

export default Dreams