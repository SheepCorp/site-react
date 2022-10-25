import './ContactUs.scss'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';


function ContactUs() {


    const [statusEmail, setStatusEmail] = useState(true)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleChangeFormData = (value, field) => {
        setFormData({ ...formData, [field]: value })
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_7r3xhes',
            'template_u6qscra',
            {
                nome: formData.name,
                email: formData.email,
                telefone: formData.phone,
                message: formData.message
            },
            'hWB5hdEdNicJWApdM'
        )
            .then((result) => {
                setFormData({ name: '', email: '', phone: '', message: '' })
                setStatusEmail({ statusEmail })

            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <section id='contato' className='contactUs'>
            <div className="row input-container">
                <h1 className="title_contato">Fale Conosco</h1>

                {/* <form method="post" action="#"> */}
                <div className="style-form-input full">
                    <input
                        type="text"
                        value={formData.name}
                        onChange={
                            (e) => handleChangeFormData(e.target.value, 'name')
                        }
                        required
                    />
                    <label><i className="icon icon-user-1"></i>  Nome Completo</label>
                </div>

                <div className="style-form-input">
                    <input
                        type="text"
                        value={formData.email}
                        onChange={
                            (e) => handleChangeFormData(e.target.value, 'email')
                        }
                        required
                    />
                    <label><i className="icon icon-mail-1"></i> E-mail</label>
                </div>

                <div className="style-form-input right">
                    <input
                        type="text"
                        value={formData.phone}
                        onChange={
                            (e) => handleChangeFormData(e.target.value, 'phone')
                        }
                        required
                    />
                    <label><i className="icon icon-info-circled"></i> Telefone</label>
                </div>

                <div className="style-form-input full">
                    <textarea
                        value={formData.message}
                        onChange={
                            (e) => handleChangeFormData(e.target.value, 'message')
                        }
                        required>

                    </textarea>
                    <label><i className="icon icon-comments"></i> Mensagem</label>
                </div>

                <div className="style-form-input full">

                    <button className="btn-submit" type="button" onClick={sendEmail}>Enviar</button>

                </div>
                {/* </form> */}
            </div>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={true}
                onChange={(e) => setStatusEmail(e.target.value,)}
            >
                <Alert onClose={() => null} severity="success" sx={{ fontWeight: 'bold', fontSize: '2rem', backgroundColor: '#4E9A51', color: 'white', width: '100%' }}>
                    Email enviado com sucesso!
                </Alert>

            </Snackbar>
        </section>

    )
}


export default ContactUs