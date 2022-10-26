import Card from './Card/Card'
import './Team.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import bia from '../../../images/cards/bia.png'
import vitoria from '../../../images/cards/vitoria.png'
import pedro from '../../../images/cards/pedro.png'
import lucas from '../../../images/cards/lucas.png'

function Team() {
    const settings = {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 50,
        breakpoints: {
            300: {
                width: 300,
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            800: {
                width: 800,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            1200: {
                width: 1200,
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1600: {
                width: 1600,
                slidesPerView: 4,
                slidesPerGroup: 4,
            }
        },
        navigation: true,

    }

    const items = [
        {
            name: "Lucas Ferreira - CEO",
            src: {...lucas},
            alt: "Foto Lucas"
        },
        {
            name: "Pedro Augusto - DEV",
            src: {...pedro},
            alt: "Foto Pedro"
        },
        {
            name: "Bia Moraes - Designer",
            src: {...bia},
            alt: "Foto Bia"
        },
        {
            name: "Vitória",
            src: {...vitoria},
            alt: "Foto Vitória"
        }
    ]
    
    return (
        <Swiper
            {...settings}
        >
            {/* {items.map((item, idx) => {
                <SwiperSlide><Card key={idx} {...item}/></SwiperSlide>
            })} */}
            <SwiperSlide><Card name='Lucas Ferreira - CEO' src={lucas} alt='Foto Lucas' /></SwiperSlide>
            <SwiperSlide><Card name='Pedro Augusto - DEV' src={pedro} alt='Foto Pedro' /></SwiperSlide>
            <SwiperSlide><Card name='Bia Moraes - Designer' src={bia} alt='Foto Bia' /></SwiperSlide>
            <SwiperSlide><Card name='Vitória - CTO' src={vitoria} alt='Foto Vitória' /></SwiperSlide>
        </Swiper>
    )
}


export default Team