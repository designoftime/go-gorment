import React, { useState } from 'react'
import './CustomerCaursel.css'
import CCImage1 from './images/CustomereCaurselimg1.png'
import CCImage2 from './images/CustomerCaurselimg2.png'
import CCImage3 from './images/CustomerCaurselimg3.png'
import CCImage4 from './images/CustomerCaurselimg4.png'
import SliderArrow from './images/slider-rightarrow.svg'
import Stockistimg1 from './images/stockist-1.svg'
import Stockistimg2 from './images/stockist-2.svg'
import Stockistimg3 from './images/stockist-3.svg'
import Stockistimg4 from './images/stockist-4.svg'
import Stockistimg5 from './images/stockist-5.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { sliderVal } from '../../../utils/Constants'
import { useSelector } from 'react-redux'

export const CustomerCaursel = () => {
    const [toggleAni, setToggleAni ] = useState(false);
    const customerCaurselData = useSelector(store => store.storeSettings?.bottom_slider);
    if (!customerCaurselData) {
        return;
    }

    return (
        <>
        {
        (customerCaurselData?.first_img) ? (
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
                        if (!customerCaurselData[`${val}_img`]) {
                            return;
                        }

                        return <SwiperSlide key={val} className='customer-slide'>
                            <div className="customer-image">
                                <img src={customerCaurselData[`${val}_img`] ? customerCaurselData[`${val}_img`] : CCImage1} alt="" className={!toggleAni ? "active-animation" : ""} />
                            </div>
                            <div className="review ">
                                <p>{customerCaurselData[`${val}_title`]?.en}</p>
                                <span className='customer-name'>{customerCaurselData[`${val}_description`]?.en}</span>
                            </div>

                            </SwiperSlide>
                    })
                }
                </Swiper>


                    </div>
            </section>
        </div> ) : null
        }
        <div className="container-fluid g-0">
                <div className="Stockist-section container py-4  mx-auto">
                    <div className="Stockist-main">
                        <div className="Stockist-content">
                            <img src={Stockistimg1} alt="" />
                        </div>
                        <div className="Stockist-content">
                            <img src={Stockistimg2} alt="" />
                        </div>
                        <div className="Stockist-content">
                            <img src={Stockistimg3} alt="" />
                        </div>
                        <div className="Stockist-content">
                            <img src={Stockistimg4} alt="" />
                        </div>
                        <div className="Stockist-content">
                            <img src={Stockistimg5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
