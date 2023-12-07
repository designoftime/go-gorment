import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import bannerimage from "../images/bannerhome.jpg";
import Greatetaste from "../images/greate_taste.png";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import { sliderVal } from "../../../utils/Constants";
import { Link } from "react-router-dom";

const HomeCarousel = () => {

    const homeSliderData = useSelector((store) => store.storeSettings?.slider);

    if (!homeSliderData) {
        return;
    }

  return (
    (!homeSliderData.static_content && !homeSliderData.both_slider && !homeSliderData.bottom_dots && !homeSliderData.left_right_arrow) ? null : <div className="main-home">
        <Swiper
          className="main-swiper-home"
          spaceBetween={50}
          slidesPerView={1}
          navigation={!homeSliderData?.static_content}
          pagination={{
            dynamicBullets: true,
          }}
          scrollbar={{ draggable: true }}
          onSlideChange={console.log()}
          onSwiper={console.log()}
          modules={[Pagination, Navigation]}
        >
          {sliderVal.map((val) => {
            if ((homeSliderData?.static_content && val != "first") || (!homeSliderData[`${val}_img`] && val != "first")) {
              return;
            }

            return (
              <SwiperSlide key={val}>
                <div
                  className="Banner-section"
                  style={{
                    backgroundImage: `url(${
                      homeSliderData[`${val}_img`]})`,
                  }}
                >
                  <div className="Banner-content">
                    <div className="banner-left">
                      <div className="product-component__rating hero-rating ">
                        <span className="rating-count text-white bold">
                          489
                        </span>
                        <span />
                        <span data-score="4.89" className="stars">
                          <span className="jdgm-star jdgm--on text-white bold">
                            <BsFillStarFill />
                          </span>
                          <span />
                          <span className="jdgm-star jdgm--on text-white bold">
                            <BsFillStarFill />
                          </span>
                          <span />
                          <span className="jdgm-star jdgm--on text-white bold">
                            <BsFillStarFill />
                          </span>
                          <span />
                          <span className="jdgm-star jdgm--on text-white bold">
                            <BsFillStarFill />
                          </span>
                          <span />
                          <span className="jdgm-star jdgm--on text-white bold">
                            <BsFillStarFill />
                          </span>
                          <span />
                        </span>
                        <span className="text-white bold">2165 Reviews</span>
                      </div>
                      {homeSliderData[`${val}_title`]?.en && (
                        <h1 className="animate__animated animate__fadeInUp Bannerheader text-white ">
                          {homeSliderData[`${val}_title`]?.en}
                        </h1>
                      )}
                      {homeSliderData[`${val}_description`]?.en && (
                        <div className="text-white bannerpara">
                          {homeSliderData[`${val}_description`]?.en}
                        </div>
                      )}
                      {homeSliderData[`${val}_button`]?.en && <div>
                        <Link to={homeSliderData[`${val}_link`]} className="btn btn-outline-light shopbanner ">
                          {homeSliderData[`${val}_button`].en}
                        </Link>
                      </div>}
                    </div>
                    <div className="banner-right">
                      <div className="greatetaste">
                        <img
                          src={Greatetaste}
                          className="greatetasteimg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>  
  )
}

export default HomeCarousel