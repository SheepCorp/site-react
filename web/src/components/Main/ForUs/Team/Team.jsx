import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import Card from './Card/Card'
import './Team.scss'

function Team() {
    const mediaMobile = window.matchMedia('(max-width: 600px)')
    const mediaDesk = window.matchMedia('(min-width: 600px)')
    let settings
    
    if (mediaMobile.matches) {
        settings = {
            spaceBetween: 50,
            slidesPerView: 1,
        }
    }

    if (mediaDesk.matches) {
        settings = {
            spaceBetween: 50,
            slidesPerView: 4,
        }
    }
    return (
        <Swiper
            {...settings}
        >
                <SwiperSlide><Card name='Lucas Ferreira - CEO' src='' alt=''/></SwiperSlide>
                <SwiperSlide><Card name='Pedro Augusto - DEV' src='' alt=''/></SwiperSlide>
                <SwiperSlide><Card name='Pedro Augusto - DEV' src='' alt=''/></SwiperSlide>
                <SwiperSlide><Card name='Pedro Augusto - DEV' src='' alt=''/></SwiperSlide>
        </Swiper>
    )
}

export default Team