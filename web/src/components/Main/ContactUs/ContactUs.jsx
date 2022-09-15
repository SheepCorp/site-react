import './ContactUs.scss'

function ContactUs() {
    return (
        <section className='contactUs'>
            <div className="title">
                <div className="feedback">
                    <h2>
                        MANDE SEU
                        <br/>
                        <span>
                            FEEDBACK
                        </span>
                    </h2>
                </div>
                <span>ou</span>
                <div className="budget">
                    <h2>
                        FAÇA SEU
                        <br/>
                        <span>
                            ORÇAMENTO
                        </span>
                    </h2>
                </div>
            </div>
            <form action="">
                <label htmlFor="name">Nome*</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email" />
                <br />
                <label htmlFor="message">Mensagem*</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button type="submit"></button>
            </form>
        </section>
    )
}

export default ContactUs