export default function Project() {
    return (
        <div className='project'>
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className='project__data'>
                        <h2 className='project__title'>Do you have a new project?</h2>
                        <p className="project__description">Contact me to mi gmail or phone number now and get 30% discount in your project.</p>
                        <a href="#contact" className='button'>
                            Contact Me
                            <i className="uil uil-message project__icon"></i>
                        </a>
                    </div>
                </div>
                <div className='project__video'>
                        <video src="videos/project.mp4" autoPlay loop alt="Imagen Mia" className='project__img' />
                    </div>
            </div>
        </div>
    )
}
