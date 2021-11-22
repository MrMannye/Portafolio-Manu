export default function About() {
    return (
        <div>
            <div className="about__container container grid">
                <img src="/img/about.jpg" className='about__img' />
                <div className='about__data'>
                    <p className='about__description'>
                        Web Developer, with extensive knowledge and years of experencie, working
                        in web Technologies, and UI / UX design, delivering quality work.
                    </p>
                    <div className='about__info'>
                        <div>
                            <span className='about__info-title'>03+</span>
                            <span className='about__info-name'>Years <br /> experience</span>
                        </div>
                        <div>
                            <span className='about__info-title'>10+</span>
                            <span className='about__info-name'>Completed <br /> projects</span>
                        </div>
                        <div>
                            <span className='about__info-title'>02+</span>
                            <span className='about__info-name'>Companies <br /> worked</span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a href="/cv.pdf" className='about__button bg-gradient-to-r from-blue-500 to-green-400'>
                            <i className="uil uil-download-alt about__icon"></i>
                            Download CV
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
