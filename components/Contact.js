import { useState } from "react"
import { Collapse , Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Contact() {
    
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState(false);
    const [location, setLocation] = useState(false);


    return (
        <section className='contact'>
            <div className='contact__container container grid'>
                <div className='contact__data'>
                    <div className='contact__information'>
                        <i className='uil uil-phone contact__icon'></i>
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className='contact__subtitle'>55-6400-7133</span>
                            <div className='mt-2'>
                                <Button
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                >
                                    Mas información
                                </Button>
                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                        Información sobre mi telefono por si gustan contactarme para realizar algun 
                                        proyecto de manera directa.
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='contact__information'>
                            <i className='uil uil-envelope contact__icon'></i>
                            <div>
                                <h3 className="contact__title">Email</h3>
                                <span className='contact__subtitle'>superbrandon2018@gmail.com</span>
                                <div className='mt-2'>
                                    <Button
                                        onClick={() => setEmail(!email)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={email}
                                    >
                                        Mas información
                                    </Button>
                                    <Collapse in={email}>
                                        <div id="example-collapse-text">
                                            Pueden contactarme via gmail teniendo una idea de proyecto y yo la pueda 
                                            realizar.
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='contact__information'>
                            <i className='uil uil-map-marker contact__icon'></i>
                            <div>
                                <h3 className="contact__title">Location</h3>
                                <adress className='contact__subtitle'>CDMX-Av. Villa Franqueza Iztapalapa</adress>
                                <div className='mt-2'>
                                    <Button
                                        onClick={() => setLocation(!location)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={location}
                                    >
                                        Mas información
                                    </Button>
                                    <Collapse in={location}>
                                        <div id="example-collapse-text">
                                            Contacto directo donde trabajo para realizar proyectos en persona
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form action="" className='contact__form grid'>
                    <div className='contact__inputs grid'>
                        <div className='contact__content'>
                            <label htmlFor="Name" className='contact__label'>Name</label>
                            <input name='Name' type="text" className='contact__input' />
                        </div>
                        <div className='contact__content'>
                            <label htmlFor="Email" className='contact__label'>Email</label>
                            <input name='Email' type="email" className='contact__input' />
                        </div>
                    </div>

                    <div className='contact__content'>
                        <label htmlFor="Project" className='contact__label'>Project</label>
                        <input name='Project' type="email" className='contact__input' />
                    </div>
                    <div className='contact__content'>
                        <label htmlFor="Message" className='contact__label'>Message</label>
                        <textarea name='Message' cols='0' rows='7' className='contact__input' />
                    </div>

                    {/* Boton de envio a correo */}
                    <div className='contact__buttons'>
                        <a href="#" className='contact__button bg-gradient-to-r from-blue-500 to-green-400 button--flex link'>
                            <span>Send Message</span>
                            <i className="uil uil-message contact__button-icon" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}
