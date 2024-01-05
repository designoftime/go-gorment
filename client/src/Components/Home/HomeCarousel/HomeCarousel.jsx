import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import bannerimage from "../images/bannerhome.jpg";
import Greatetaste from "../images/greate_taste.png";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getStylesLan, sliderVal } from "../../../utils/Constants";
import { Link } from "react-router-dom";
import useWindowInnerWidth from "../../hooks/useWindowInnerWidth";
import requests from "../../../Services/httpService";

const HomeCarousel = ({ homeSliderData }) => {
    const showValue = useWindowInnerWidth();
    const [reviews, setReviews] = useState({});

    useEffect(() => {

        const fetchAllReviews = async () => {
            const res = await requests.get("/reviews/all");
            setReviews(res);
        }

        fetchAllReviews();
    }, []);

    if (!homeSliderData) {
        return;
    }
    const styles = getStylesLan(
        homeSliderData,
        "slider_first_background_color",
        "slider_first_text_color"
    );

    const getRating = (reviews) => {

        let finalRating = (((5*reviews?.fiveStar) + (4*reviews?.fourStar) + (3*reviews?.threeStar) + (2*reviews?.twoStar) + (reviews?.oneStar)) / (reviews.fiveStar+reviews?.fourStar+reviews?.threeStar+reviews?.twoStar+reviews?.oneStar)).toFixed(2);
        
        return finalRating;
    }

    return !homeSliderData.static_content &&
        !homeSliderData.both_slider &&
        !homeSliderData.bottom_dots &&
        !homeSliderData.left_right_arrow ? null : (
        <div className="main-home" style={styles.fullBg}>
            <Swiper
                className="main-swiper-home"
                spaceBetween={50}
                slidesPerView={1}
                navigation={
                    (showValue > 767) ? true : false
                }
                pagination={
                {dynamicBullets : (showValue < 767)? true : false }}
                scrollbar={{ draggable: true }}
                modules={
                    (showValue > 767) ? [Navigation] : [Navigation, Pagination]
                }
            >
                {sliderVal.map((val) => {
                    if (
                        (homeSliderData?.static_content && val != "first") ||
                        (!homeSliderData[`${val}_img`] && val != "first")
                    ) {
                        return;
                    }

                    return (
                        <SwiperSlide key={val}>
                            <div
                                className="Banner-section"
                                style={{
                                    backgroundImage: `url(${
                                        homeSliderData[`${val}_img`]
                                    })`,
                                }}
                            >
                                <div className="Banner-content">
                                    <div className="banner-left">
                                        <div className="product-component__rating hero-rating ">
                                            <span
                                                className="rating-count bold"
                                                style={styles.color}
                                            >
                                                {getRating(reviews)}
                                            </span>
                                            <span />
                                            <span
                                                data-score="4.89"
                                                className="stars"
                                            >
                                                <span className="jdgm-star jdgm--on  bold">
                                                    <BsFillStarFill />
                                                </span>
                                                <span />
                                                <span className="jdgm-star jdgm--on  bold">
                                                    <BsFillStarFill />
                                                </span>
                                                <span />
                                                <span className="jdgm-star jdgm--on  bold">
                                                    <BsFillStarFill />
                                                </span>
                                                <span />
                                                <span className="jdgm-star jdgm--on  bold">
                                                    <BsFillStarFill />
                                                </span>
                                                <span />
                                                <span className="jdgm-star jdgm--on  bold">
                                                    <BsFillStarFill />
                                                </span>
                                                <span />
                                            </span>
                                            <span
                                                className=" bold"
                                                style={styles.color}
                                            >
                                                {reviews.totalReviews} Reviews
                                            </span>
                                        </div>
                                        {homeSliderData[`${val}_title`]?.en && (
                                            <h1
                                                className="animate__animated animate__fadeInUp Bannerheader  "
                                                style={styles.color}
                                            >
                                                {
                                                    homeSliderData[
                                                        `${val}_title`
                                                    ]?.en
                                                }
                                            </h1>
                                        )}
                                        {homeSliderData[`${val}_description`]
                                            ?.en && (
                                            <div
                                                className=" bannerpara"
                                                style={styles.color}
                                            >
                                                {
                                                    homeSliderData[
                                                        `${val}_description`
                                                    ]?.en
                                                }
                                            </div>
                                        )}
                                        {homeSliderData[`${val}_button`]
                                            ?.en && (
                                            <div>
                                                <Link
                                                    to={
                                                        homeSliderData[
                                                            `${val}_link`
                                                        ]
                                                    }
                                                    className="btn btn-outline-light shopbanner "
                                                    style={styles.color}
                                                >
                                                    {
                                                        homeSliderData[
                                                            `${val}_button`
                                                        ].en
                                                    }
                                                </Link>
                                            </div>
                                        )}
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
    );
};

export default HomeCarousel;
