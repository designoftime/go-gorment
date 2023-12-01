import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.css';
import 'swiper/css';
import demo from '../../../assets/demo.png';
import img1 from './images/img1.svg';
import img2 from './images/img2.svg';
import img3 from './images/img3.svg';
import img4 from './images/img4.svg';
import { useState } from 'react';

export const CarouselSection = () => {

    const [activeSlider, setActiveSlider] =  useState(0);
    const allImage = [img1,img2,img3,img4]
    return (
        <>
            <div className="main-swiper">
                <Swiper
                    className='swiper'
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={(e) => {
                        setActiveSlider(e.activeIndex)
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className='slide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laudantium ut nostrum atque,</SwiperSlide>

                    <SwiperSlide className='slide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laudantium ut nostrum atque, consequatur corporis </SwiperSlide>

                    <SwiperSlide className='slide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laudantium ut nostrum atque, consequatur corporis </SwiperSlide>

                    <SwiperSlide className='slide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laudantium ut nostrum atque, consequatur corporis </SwiperSlide>
                </Swiper>

                <div className="slide-logos mt-4">

                    {
                        allImage.map((img, idx) => {
                            return (<img src={img} alt="" className={idx==activeSlider && "active-logo"}/>)
                        })
                    }
                </div>
            </div>
        </>
    )
}