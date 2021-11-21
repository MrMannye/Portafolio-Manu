import { useState } from "react";

export default function Skills() {


    return (
        <section className='skills section'>
            <div className="skills__container container">
                <div>
                    {/* SKILLS 1 */}
                    <div className={`skills__content ${open && `skills__open`}`} onClick={() => openData()}>
                        <div className="skills__header">
                            <i className="uil uil-brackets-curly skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Frontend developer</h1>
                                <span className='skills_subtitle'>More than 2 years</span>
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
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-server-network skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Backend developer</h1>
                                <span className='skills_subtitle'>More than 1 years</span>
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
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-swatchbook skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Designer developer</h1>
                                <span className='skills_subtitle'>More than 1 years</span>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
