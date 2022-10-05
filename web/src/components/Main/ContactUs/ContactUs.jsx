import './ContactUs.scss'

function ContactUs() {
    return (
        <section className='contactUs'>
            <div className="row input-container">
                <h1 className="title_contato">Fale Conosco</h1>

                <form method="post" action="#">
                    <div className="style-form-input full">
                        <input type="text" name="nome" required />
                        <label><i className="icon icon-user-1"></i>  Nome Completo</label>
                    </div>

                    <div className="style-form-input">
                        <input type="text" name="email" required />
                        <label><i className="icon icon-mail-1"></i> E-mail</label>
                    </div>

                    <div className="style-form-input right">
                        <input type="text" name="assunto" required />
                        <label><i className="icon icon-info-circled"></i> Telefone</label>
                    </div>

                    <div className="style-form-input full">
                        <textarea name="mensagem" required></textarea>
                        <label><i className="icon icon-comments"></i> Mensagem</label>
                    </div>

                    <div className="style-form-input full">

                        <button className="btn-submit">Enviar</button>

                    </div>
                </form>
            </div>
        </section>

    )
}

export default ContactUs