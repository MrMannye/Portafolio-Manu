export default function About() {
    return (
        <div>
            <div className="about__container container grid">
                <div className='about__content'>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#60A5FA" d="M45.7,-74.9C59.1,-71.3,70,-59,73,-45.1C75.9,-31.1,71,-15.6,71.7,0.4C72.4,16.4,78.8,32.8,74.4,44.2C69.9,55.5,54.6,61.8,40.4,64.7C26.2,67.7,13.1,67.2,-1.6,69.9C-16.3,72.6,-32.5,78.6,-42.7,73.3C-52.8,68,-56.8,51.6,-64.8,37.5C-72.8,23.4,-84.7,11.7,-85.3,-0.4C-85.9,-12.4,-75.3,-24.9,-66.5,-37.6C-57.8,-50.4,-51,-63.5,-40.2,-68.6C-29.5,-73.7,-14.7,-70.9,0.7,-72.1C16.1,-73.2,32.2,-78.4,45.7,-74.9Z" transform="translate(100 100)" />
                    </svg>
                    <img src="/img/about.jpg" className='about__img' />
                </div>
                
                <div className='about__data'>
                    <p className='about__description'>
                        Web Developer for 2 years, with extensive knowledge and years of experencie, working
                        in web Technologies, and UI / UX design, delivering quality work. Currently working as a frontend developer for Soft Shimpony.
                    </p>
                    <div className='about__info'>
                        <div>
                            <span className='about__info-title'>02+</span>
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
                        <a href="/CV.pdf" target='_blank' className='about__button bg-gradient-to-r from-blue-500 to-green-400 link'>
                            <div className='about__button-icon'>
                                <i className="uil uil-download-alt about__icon"></i>
                            </div>
                            <div>
                                Download CV
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}
