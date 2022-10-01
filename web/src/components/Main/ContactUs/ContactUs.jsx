import './ContactUs.scss'

function ContactUs() {
    return (
        <section className='contactUs'>
            <div class="row input-container">
                <h1 class="title_contato">Fale Conosco</h1>

                <form method="post" action="#">
                    <div class="style-form-input full">
                        <input type="text" name="nome" required />
                        <label><i class="icon icon-user-1"></i>  Nome Completo</label>
                    </div>

                    <div class="style-form-input">
                        <input type="text" name="email" required />
                        <label><i class="icon icon-mail-1"></i> E-mail</label>
                    </div>

                    <div class="style-form-input right">
                        <input type="text" name="assunto" required />
                        <label><i class="icon icon-info-circled"></i> Telefone</label>
                    </div>

                    <div class="style-form-input full">
                        <textarea name="mensagem" required></textarea>
                        <label><i class="icon icon-comments"></i> Mensagem</label>
                    </div>

                    <div class="style-form-input full">

                        <button class="btn-submit">Enviar</button>

                    </div>
                </form>
            </div>
        </section>

    )
}

export default ContactUs