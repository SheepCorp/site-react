import Card from './Card/Card'
import './Team.scss'

import bia from '../../../images/cards/bia.png'
import vitoria from '../../../images/cards/vitoria.png'
import pedro from '../../../images/cards/pedro.png'
import lucas from '../../../images/cards/lucas.png'


/*
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";


const settings = {
    items: [
        <Card name='Lucas Ferreira - CEO' src={lucas} alt='Foto Lucas' />,
        <Card name='Pedro Augusto - DEV - Front End' src={pedro} alt='Foto Pedro' />,
        <Card name='Bia Moraes - Social Media' src={bia} alt='Foto Bia' />,
        <Card name='Vitoria Ferreira - Designer' src={vitoria} alt='Foto Bia' />
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
*/

import Slider from "react-slick";




function Team() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    );
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