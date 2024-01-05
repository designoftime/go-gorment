import React from 'react';
import { featurePromo } from '../../../utils/Constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowInnerWidth from '../../hooks/useWindowInnerWidth';
import { Autoplay } from "swiper/modules";
import "swiper/css";

const FeaturePromo = ({featurePromoData}) => {

  const showValue = useWindowInnerWidth();

  if(!featurePromoData){
    return;
  }

  return (
    <div className="container-fluid g-0">
        <div className="Stockist-section container py-4  mx-auto">
            <div className="Stockist-main">
            <Swiper
              className='swiper'
              spaceBetween={0}
              slidesPerView={(showValue > 767) ? 5 : 1}
              modules={(showValue > 767) ? [] : [Autoplay]}
              loop={true}
              autoplay={{
                  delay: 1000,
              }}>
            {
                featurePromo.map((val,idx) => {
                    if(!featurePromoData[`feature_promo_${val}_img`]) return;

                    return (
                      <SwiperSlide key={idx}>
                        <div className="Stockist-content">
                            <img src={featurePromoData[`feature_promo_${val}_img`]} alt="" />
                        </div>
                      </SwiperSlide>
                    )
                })
            }
            </Swiper>
            </div>
        </div>
    </div>
  )
}

export default FeaturePromo;