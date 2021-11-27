import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper';
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

export default function Works() {
    return (
        <section className='portafolio'>
            <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="portafolio__container mySwiper"> 
                    <SwiperSlide className="portafolio__content">
                        <img src="/img/portfolio1.jpg" alt=""/>
                        <div className="portafolio__data">
                            <h3 className='portafolio__title'>Google Clone</h3>
                            <p className='portafolio__description'>Pagina Clone del buscador mas famoso del mundo, realizado con finalidades educativas</p>
                            <a href="#" className='button portafolio__button'>
                                Demo
                                <i className='uil uil-arrow-right portafolio__icon'></i>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="portafolio__content">
                        <img src="/img/portfolio2.jpg" alt=""/>
                        <div className="portafolio__data">
                            <h3 className='portafolio__title'>Netflix Clone</h3>
                            <p className='portafolio__description'>Pagina Clone del buscador mas famoso del mundo, realizado con finalidades educativas</p>
                            <a href="#" className='button portafolio__button'>
                                Demo
                                <i className='uil uil-arrow-right portafolio__icon'></i>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="portafolio__content">
                        <img src="/img/portfolio3.jpg" alt=""/>
                        <div className="portafolio__data">
                            <h3 className='portafolio__title'>Hulu Clone</h3>
                            <p className='portafolio__description'>Pagina Clone del buscador mas famoso del mundo, realizado con finalidades educativas</p>
                            <a href="#" className='button portafolio__button'>
                                Demo
                                <i className='uil uil-arrow-right portafolio__icon'></i>
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </section>
    )
}
