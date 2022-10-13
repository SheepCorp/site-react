import Card from './Card/Card'
import './Team.scss'

import bia from '../../../images/cards/bia.png'
import vitoria from '../../../images/cards/vitoria.png'
import pedro from '../../../images/cards/pedro.png'
import lucas from '../../../images/cards/lucas.png'



import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";

const settings = {
    items: [
        <Card name='Lucas Ferreira - CEO' src={lucas} alt='Foto Lucas' />,
        <Card name='Pedro Augusto - DEV' src={pedro} alt='Foto Pedro' />,
        <Card name='Bia Moraes - Designer' src={bia} alt='Foto Bia' />,
        <Card name='Bia Moraes - Designer' src={vitoria} alt='Foto Bia' />
    ],
    responsive: {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    },
    constrolsStrategy: 'responsive',
    touchTracking: true,
    renderPrevButton: true,
    renderNextButton: true,
}

function Team() {
    return (
        <AliceCarousel {...settings} />
    )
}




















// import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

// function Team() {
//     return (
//         <Carousel className='carousel'>
//             <Card name='Lucas Ferreira - CEO' src={lucas} alt='Foto Lucas' />
//             <Card name='Pedro Augusto - DEV' src={pedro} alt='Foto Pedro' />
//             <Card name='Bia Moraes - Designer' src={bia} alt='Foto Bia' />
//         </Carousel>
//     );
// }



// function Team() {
//     const mediaMobile = window.matchMedia('(max-width: 600px)')
//     const mediaDesk = window.matchMedia('(min-width: 600px)')
//     let settings

//     if (mediaMobile.matches) {
//         settings = {
//             spaceBetween: 50,
//             slidesPerView: 1,
//         }
//     }

//     if (mediaDesk.matches) {
//         settings = {
//             spaceBetween: 50,
//             slidesPerView: 4,
//         }
//     }
//     return (
//         <Swiper
//             {...settings}
//         >
//             <SwiperSlide><Card name='Lucas Ferreira - CEO' src={lucas} alt='Foto Lucas' /></SwiperSlide>
//             <SwiperSlide><Card name='Pedro Augusto - DEV' src={pedro} alt='Foto Pedro' /></SwiperSlide>
//             <SwiperSlide><Card name='Bia Moraes - Designer' src={bia} alt='Foto Bia' /></SwiperSlide>
//             <SwiperSlide><Card name='Vitória' src='' alt='Foto Vitória' /></SwiperSlide>
//         </Swiper>
//     )
// }


export default Team