import Card from './Card/Card'
import './Team.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import bia from '../../../images/cards/bia.png'
import vitoria from '../../../images/cards/vitoria.png'
import pedro from '../../../images/cards/pedro.png'
import lucas from '../../../images/cards/lucas.png'

function Team() {
    const settings = {
        breakpoints: {
            480: {
                width: 480,
                slidesPerView: 1,
            },
            1024: {
                width: 1024,
                slidesPerView: 3,
            }
        },
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