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
                        <video src="/videos/video.mp4" autoPlay loop className='portafolio__img'></video>
                        <div className="portafolio__data">
                            <h3 className='portafolio__title'>Google Clone</h3>
                            <p className='portafolio__description'>El buscador de Google o buscador web de Google (en inglés Google Search) es un motor de búsqueda en la web propiedad y el principal producto de Google.</p>
                            <div className='flex space-x-4 items-center'>
                                <a href="https://google-clone-mhnecu5mh-mrmannye.vercel.app/" target='_blank' className='button portafolio__button'>
                                    Demo
                                    <i className='uil uil-arrow-right portafolio__icon'></i>
                                </a>
                                <a href="#" data-toggle='popover' title='Pagina en Servidor Firebase' datra-trigger='trigger'
                                    data-content='Hover' className='dark:text-white text-black'
                                >
                                    <i class="uil uil-info-circle"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="portafolio__content grid">
                        <video src="/videos/video1.mp4" autoPlay loop className='portafolio__img'></video>
                        <div className="portafolio__data">
                            <h3 className='portafolio__title'>Netflix Clone</h3>
                            <p className='portafolio__description'>Servicio principal es la distribución de contenidos audiovisuales a través de una plataforma en línea o servicio de video bajo demanda por streaming.</p>
                            <div className='flex space-x-4 items-center'>
                                <a href="#" target='_blank' className='button portafolio__button'>
                                    Demo
                                    <i className='uil uil-arrow-right portafolio__icon'></i>
                                </a>
                                <a href="#" data-toggle='popover' title='Pagina en Servidor Firebase' datra-trigger='trigger'
                                    data-content='Hover' className='dark:text-white text-black'
                                >
                                    <i class="uil uil-info-circle"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="portafolio__content grid">
                        <video src="/videos/video2.mp4" autoPlay loop className='portafolio__img'></video>
                        <div className="portafolio__data">
                            <h3 className='portafolio__title'>Hulu Clone</h3>
                            <p className='portafolio__description'>Hulu latino, es un servicio de streaming similar a Netflix, donde el usuario paga una suscripción mensual de US $11,99 para poder acceder a todo el catálogo.</p>
                            <div className='flex space-x-4 items-center'>
                                <a href="https://hulu-clone-bempa1ga4-mrmannye.vercel.app/" target='_blank' className='button portafolio__button'>
                                    Demo
                                    <i className='uil uil-arrow-right portafolio__icon'></i>
                                </a>
                                <a href="#" data-toggle='popover' title='Pagina en Servidor Vercel' datra-trigger='trigger'
                                    data-content='Hover' className='dark:text-white text-black'
                                >
                                    <i class="uil uil-info-circle"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </section>
    )
}
