import './ContactUs.scss'
import emailjs from '@emailjs/browser';

function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7r3xhes', 'template_u6qscra', form.current, 'hWB5hdEdNicJWApdM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        return (
            <section id='contato' className='contactUs'>
                <div className="row input-container">
                    <h1 className="title_contato">Fale Conosco</h1>

                    <form method="post" action="#">
                        <div className="style-form-input full">
                            <input type="text" name="user_name" required />
                            <label><i className="icon icon-user-1"></i>  Nome Completo</label>
                        </div>

                        <div className="style-form-input">
                            <input type="text" name="user_email" required />
                            <label><i className="icon icon-mail-1"></i> E-mail</label>
                        </div>

                        <div className="style-form-input right">
                            <input type="text" name="assunto" required />
                            <label><i className="icon icon-info-circled"></i> Telefone</label>
                        </div>

                        <div className="style-form-input full">
                            <textarea name="message" required></textarea>
                            <label><i className="icon icon-comments"></i> Mensagem</label>
                        </div>

                        <div className="style-form-input full">

                            <button className="btn-submit" value={send}>Enviar</button>

                        </div>
                    </form>
                </div>
            </section>

        )
    }
}

export default ContactUs