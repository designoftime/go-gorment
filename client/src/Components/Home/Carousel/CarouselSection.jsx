import { React, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.css';
import 'swiper/css';
import { useState } from 'react';
import { sliderVal } from '../../../utils/Constants';

export const CarouselSection = ({secondSliderData}) => {

    const first = useRef();
    const [activeSlider, setActiveSlider] = useState(0);

    if(!secondSliderData){
        return;
    }
    return (
        <>
            <div className="main-swiper-carousel">
                <Swiper
                    className='swiper'
                    ref={first}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={(e) => {
                        setActiveSlider(e.activeIndex)
                    }}
                >
                    {
                        sliderVal.map((val) => {
                            return (
                                <SwiperSlide key={val} className='slide'> { secondSliderData[`${val}_description`].en} </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

                <div className="slide-logos mt-4">
                    {
                        sliderVal.map((val, idx) => {
                            return (<img key={idx} src={secondSliderData[`${val}_img`]} alt="" className={idx == activeSlider ? "active-logo" : null} onClick={(e) => {
                                setActiveSlider(idx)
                                first.current.swiper.slideTo(idx);
                            }} />)
                        })
                    }
                </div>
            </div>
        </>
    )
}