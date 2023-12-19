import React, { useEffect, useMemo, useState } from 'react'
import './CustomerCaursel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { sliderVal } from '../../../utils/Constants'
import useWindowInnerWidth from '../../hooks/useWindowInnerWidth';

export const CustomerCaursel = ({ bottomSliderData }) => {
    const showValue = useWindowInnerWidth();

    // if (!bottomSliderData) {
    //     return;
    // }
    const [toggleAni, setToggleAni] = useState(false);
    const [backgroundStyle, setBackgroundStyle] = useState({
        fullBg: {
            backgroundColor: bottomSliderData[`bottom_slider_background_color_first`]?.en,
            color: bottomSliderData[`bottom_slider_text_color_first`]?.en
        },
        color: {
            color: bottomSliderData[`bottom_slider_text_color_first`]?.en
        },
        bg: {
            backgroundColor: bottomSliderData[`bottom_slider_background_color_first`]?.en,
        }
    });


    const getStyle = (val) => {
        return {
            fullBg: {
                backgroundColor: bottomSliderData[`bottom_slider_background_color_${val}`]?.en,
                color: bottomSliderData[`bottom_slider_text_color_${val}`]?.en
            },
            color: {
                color: bottomSliderData[`bottom_slider_text_color_${val}`]?.en
            },
            bg: {
                backgroundColor: bottomSliderData[`bottom_slider_background_color_${val}`]?.en,
            }
        }
    }

    const handleStyleChange = (idx) => {
        const val = sliderVal[idx];
        const styles = getStyle(val);
        setBackgroundStyle(styles);
    }

    return (
        <>
            {
                (bottomSliderData?.bottom_slider_status) ? (
                    <div>
                        <section className='main-customer-review' style={backgroundStyle.fullBg}>
                            <div className="container">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation={showValue < 767 ? false : true}
                                    onSlideChange={(e) => {
                                        setToggleAni(!toggleAni)
                                        handleStyleChange(e.activeIndex);
                                    }}
                                    pagination={{
                                        dynamicBullets:true,
                                    }}
                                    className='customer-slider'
                                    modules={ showValue < 767 ?[Pagination] : [Navigation]}
                                >
                                    {
                                        sliderVal.map((val) => {
                                            if (!bottomSliderData[`${val}_img`]) {
                                                return;
                                            }

                                            return <SwiperSlide key={val} className='customer-slide'>
                                                <div className='customer-content'>
                                                    <div className="customer-image">
                                                        <img src={bottomSliderData[`${val}_img`]} alt="" className={!toggleAni ? "active-animation" : ""} />
                                                    </div>
                                                    <div className="review">
                                                        <p style={backgroundStyle.color}>{bottomSliderData[`${val}_title`]?.en}</p>
                                                        <span className='customer-name' style={backgroundStyle.color}>{bottomSliderData[`${val}_description`]?.en}</span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        })
                                    }
                                </Swiper>


                            </div>
                        </section>
                    </div>) : null
            }
        </>
    )
}
