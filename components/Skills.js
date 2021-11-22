import { useState } from "react";

export default function Skills() {

    const [open, setOpen] = useState(false);
    const [backend, setBackend] = useState(false);
    const [designer, setDesigner] = useState(false);
    const [marketing, setMarketing] = useState(false)

    const openData = () => {
        setOpen(!open);
    }
    const openBackend = () => {
        setBackend(!backend);
    }
    const openDesigner = () => {
        setDesigner(!designer);
    }
    const openMarketing = () => {
        setMarketing(!marketing);
    }

    return (
        <section className='skills flex items-center justify-center tracking-wider'>
            <div className="skills__container grid">
                <div>
                    {/* SKILLS 1 */}
                    <div className={`skills__content ${open ? `skills__open` : `skills__close`}`} onClick={() => openData()}>
                        <div className="skills__header">
                            <i className="uil uil-brackets-curly skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Frontend developer</h1>
                                <span className='skills__subtitle'>More than 2 years</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__numer">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__numer">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills__numer">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__java"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__numer">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__react"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SKILLS 2 */}
                    <div className={`skills__content ${backend ? `skills__open` : `skills__close`}`} onClick={() => openBackend()}>
                        <div className="skills__header">
                            <i className="uil uil-server-network skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Backend developer</h1>
                                <span className='skills__subtitle'>More than 1 years</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">PHP</h3>
                                    <span className="skills__numer">50%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__php"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Node Js</h3>
                                    <span className="skills__numer">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__node"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills__numer">50%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__python"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Firebase</h3>
                                    <span className="skills__numer">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__firebase"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {/* SKILLS 3 */}
                    <div className={`skills__content ${designer ? `skills__open` : `skills__close`}`} onClick={() => openDesigner()}>
                        <div className="skills__header">
                            <i className="uil uil-swatchbook skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Designer developer</h1>
                                <span className='skills__subtitle'>More than 1 years</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Figma</h3>
                                    <span className="skills__numer">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__figma"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Sketch</h3>
                                    <span className="skills__numer">40%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__sketch"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Photoshop</h3>
                                    <span className="skills__numer">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__photoshop"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Canva</h3>
                                    <span className="skills__numer">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__photoshop"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SKILLS 4 */}
                    <div className={`skills__content ${marketing ? `skills__open` : `skills__close`}`} onClick={() => openMarketing()}>
                        <div className="skills__header">
                            <i className="uil uil-swatchbook skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Marketing</h1>
                                <span className='skills__subtitle'>More than 1 years</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Canva</h3>
                                    <span className="skills__numer">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__canva"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">SEO</h3>
                                    <span className="skills__numer">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__seo"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">SEM</h3>
                                    <span className="skills__numer">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__sem"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
