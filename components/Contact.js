export default function Contact() {
    return (
        <section className='contact'>
            <div className='contact__container container grid'>
                <div>
                    <div className='contact__information'>
                        <i className='uil uil-phone contact__icon'></i>
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className='contact__subtitle'>55-6400-7133</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='contact__information'>
                        <i className='uil uil-envelope contact__icon'></i>
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className='contact__subtitle'>superbrandon2018@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='contact__information'>
                        <i className='uil uil-map-marker contact__icon'></i>
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className='contact__subtitle'>CDMX-Av. Villa Franqueza Iztapalapa</span>
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
                            <a href="#" className='contact__button bg-gradient-to-r from-blue-500 to-green-400 button--flex'>
                                <span>Send Message</span>
                                <i className="uil uil-message contact__icon"/>
                            </a>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    )
}
