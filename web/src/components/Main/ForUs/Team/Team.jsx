import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card/Card'
import './Team.scss'

import bia from '../../../images/cards/bia.png'
import pedro from '../../../images/cards/pedro.png'
import lucas from '../../../images/cards/lucas.png'

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
                <SwiperSlide><Card name='Lucas Ferreira - CEO' src={lucas} alt='Foto Lucas'/></SwiperSlide>
                <SwiperSlide><Card name='Pedro Augusto - DEV' src={pedro} alt='Foto Pedro'/></SwiperSlide>
                <SwiperSlide><Card name='Bia - Designer' src={bia} alt='Foto Bia'/></SwiperSlide>
                <SwiperSlide><Card name='Vitória' src='' alt='Foto Vitória'/></SwiperSlide>
        </Swiper>
    )
}

export default Team