import React, { useState } from 'react'
import './CustomerCaursel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { sliderVal } from '../../../utils/Constants'

export const CustomerCaursel = ({bottomSliderData}) => {
    const [toggleAni, setToggleAni ] = useState(false);
    
    if (!bottomSliderData) {
        return;
    }

    return (
        <>
        {
        (bottomSliderData?.first_img) ? (
        <div>
            <section className='main-customer-review'>
                <div className="container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    onSlideChange={(e) => {
                        setToggleAni(!toggleAni)
                    }}
                    className='customer-slider'
                    modules={[Navigation]}
                >
                {
                    sliderVal.map((val) => {
                        if (!bottomSliderData[`${val}_img`]) {
                            return;
                        }

                        return <SwiperSlide key={val} className='customer-slide'>
                            <div className="customer-image">
                                <img src={bottomSliderData[`${val}_img`]} alt="" className={!toggleAni ? "active-animation" : ""} />
                            </div>
                            <div className="review ">
                                <p>{bottomSliderData[`${val}_title`]?.en}</p>
                                <span className='customer-name'>{bottomSliderData[`${val}_description`]?.en}</span>
                            </div>

                            </SwiperSlide>
                    })
                }
                </Swiper>


                    </div>
            </section>
        </div> ) : null
        }
        </>
    )
}
