import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Works() {
    return (
        <section className='portafolio'>
            <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} className="portafolio__container container swiper">
                <div className="swiper-wrapper">
                <SwiperSlide className="portafolio__content grid">
                        <img src='img/ISIA.jpg'  className='portafolio__img'></img>
                        <div className="portafolio__data">
                            <h3 className='portafolio__title'>Soft Symponhy</h3>
                            <p className='portafolio__description'>Somos un equipo de profesionales dedicado al diseño, fabricación e instalación de sistemas para la automatización de entradas, control de accesos automáticos.</p>
                            <div className='flex space-x-4 items-center'>
                                <a href="https://www.isia.com.mx/" target='_blank' className='button portafolio__button link'>
                                    Pagina
                                    <i className='uil uil-arrow-right portafolio__icon'></i>
                                </a>
                                <a href="#" data-toggle='popover' title='Pagina en Servidor Vercel' datra-trigger='trigger'
                                    data-content='Hover' className='dark:text-white text-black'
                                >
                                    <i className="uil uil-info-circle"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="portafolio__content grid">
                        <video src="http://drive.google.com/uc?export=view&id=1yndyHaShMraXSZsEgJtEc6TNMR3PJdwB" autoPlay muted={true} loop className='portafolio__img'></video>
                        <div className="portafolio__data">
                            <h3 className='portafolio__title'>Google Clone</h3>
                            <p className='portafolio__description'>El buscador de Google o buscador web de Google (en inglés Google Search) es un motor de búsqueda en la web propiedad y el principal producto de Google.</p>
                            <div className='flex space-x-4 items-center'>
                                <a href="https://google-clone-mhnecu5mh-mrmannye.vercel.app/" target='_blank' className='button portafolio__button link'>
                                    Demo
                                    <i className='uil uil-arrow-right portafolio__icon'></i>
                                </a>
                                <a href="#" data-toggle='popover' title='Pagina en Servidor Vercel' datra-trigger='trigger'
                                    data-content='Hover' className='dark:text-white text-black'
                                >
                                    <i className="uil uil-info-circle"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="portafolio__content grid">
                        <video src="http://drive.google.com/uc?export=view&id=1M9fY6-m6B6SDFkY58ZbX75zxWueDzjYn"  autoPlay muted={true} loop className='portafolio__img'></video>
                        <div className="portafolio__data">
                            <h3 className='portafolio__title'>Netflix Clone</h3>
                            <p className='portafolio__description'>Servicio principal es la distribución de contenidos audiovisuales a través de una plataforma en línea o servicio de video bajo demanda por streaming.</p>
                            <div className='flex space-x-4 items-center'>
                                <a href="#" target='_blank' className='button portafolio__button link'>
                                    Demo
                                    <i className='uil uil-arrow-right portafolio__icon'></i>
                                </a>
                                <a href="#" data-toggle='popover' title='Pagina en Servidor Firebase' datra-trigger='trigger'
                                    data-content='Hover' className='dark:text-white text-black'
                                >
                                    <i className="uil uil-info-circle"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="portafolio__content grid">
                        <video src="http://drive.google.com/uc?export=view&id=12mEclydsFd9A2dxzWxn8cC8-BifJlL-q" autoPlay muted={true} loop className='portafolio__img'></video>
                        <div className="portafolio__data">
                            <h3 className='portafolio__title'>Hulu Clone</h3>
                            <p className='portafolio__description'>Hulu latino, es un servicio de streaming similar a Netflix, donde el usuario paga una suscripción mensual de US $11,99 para poder acceder a todo el catálogo.</p>
                            <div className='flex space-x-4 items-center'>
                                <a href="https://hulu-clone-bempa1ga4-mrmannye.vercel.app/" target='_blank' className='button portafolio__button link'>
                                    Demo
                                    <i className='uil uil-arrow-right portafolio__icon'></i>
                                </a>
                                <a href="#" data-toggle='popover' title='Pagina en Servidor Vercel' datra-trigger='trigger'
                                    data-content='Hover' className='dark:text-white text-black'
                                >
                                    <i className="uil uil-info-circle"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="portafolio__content grid">
                        <img src='img/spotify.jpeg'  className='portafolio__img'></img>
                        <div className="portafolio__data">
                            <h3 className='portafolio__title'>Uber Clone</h3>
                            <p className='portafolio__description'>Aplicacion Clone de Uber con las tecnologias de React Native (Navigation, Redux, TailwindCSS y Google) proporciona a sus clientes vehículos de transporte con conductor</p>
                            <div className='flex space-x-4 items-center'>
                                <a href="https://uber-mrmannye.vercel.app/" target='_blank' className='button portafolio__button link'>
                                    Demo
                                    <i className='uil uil-arrow-right portafolio__icon'></i>
                                </a>
                                <a href="#" data-toggle='popover' title='Pagina en Servidor Vercel' datra-trigger='trigger'
                                    data-content='Hover' className='dark:text-white text-black'
                                >
                                    <i className="uil uil-info-circle"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="portafolio__content grid">
                        <img src='img/spotify.jpeg'  className='portafolio__img'></img>
                        <div className="portafolio__data">
                            <h3 className='portafolio__title'>Spotify Clone</h3>
                            <p className='portafolio__description'>Pagina Clone de Spotify la cual es una empresa de servicios multimedia, en este proyecto desarrollada con NEXT.JS 12.0 (Middleware, Spotify API, Tailwind, NextAuth, Recoil)</p>
                            <div className='flex space-x-4 items-center'>
                                <a href="https://spotify-clone-puce-ten.vercel.app/login" target='_blank' className='button portafolio__button link'>
                                    Demo
                                    <i className='uil uil-arrow-right portafolio__icon'></i>
                                </a>
                                <a href="#" data-toggle='popover' title='Pagina en Servidor Vercel' datra-trigger='trigger'
                                    data-content='Hover' className='dark:text-white text-black'
                                >
                                    <i className="uil uil-info-circle"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </section>
    )
}
