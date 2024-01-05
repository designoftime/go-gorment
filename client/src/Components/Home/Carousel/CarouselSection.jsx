import { React, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.css';
import { useState } from 'react';
import { sliderVal } from '../../../utils/Constants';
import useWindowInnerWidth from '../../hooks/useWindowInnerWidth';
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const CarouselSection = ({secondSliderData}) => {

    const first = useRef();
    const [activeSlider, setActiveSlider] = useState(0);
    const showValue = useWindowInnerWidth();

    if(!secondSliderData){
        return;
    }

    return secondSliderData?.second_slider_status && (
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
                    pagination={{ dynamicBullets: (showValue > 767) ? false : true }}
                    modules={(showValue > 767) ? [Autoplay] : [Pagination,Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true
                    }}
                >
                    {
                        sliderVal.map((val,idx) => {

                            if(!secondSliderData[`${val}_description`].en) return;

                            return (
                                <SwiperSlide key={val} className='slide'> { secondSliderData[`${val}_description`].en}
                                {
                                    (showValue < 767) ? (<><br/><img key={idx} src={secondSliderData[`${val}_img`]} alt="" className={idx == activeSlider ? "active-logo" : null} /></>) : null
                                }
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

                {
                    (showValue > 767) ?
                        (<div className="slide-logos mt-4">
                            {
                                sliderVal.map((val, idx) => {
                                    return (<img key={idx} src={secondSliderData[`${val}_img`]} alt="" className={idx == activeSlider ? "active-logo" : null} onClick={(e) => {
                                        setActiveSlider(idx)
                                        first.current.swiper.slideTo(idx);
                                    }} />)
                                })
                            }
                        </div>) : null
                }
            </div>
        </>
    )
}