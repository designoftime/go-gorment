import React from 'react'
import PretzelThings from '../images/Screenshot_PretzelThingsimg.avif'
import Olives from '../images/Screenshot_Olivesimg.avif'
import ChocoPretzel from '../images/Screenshot_ChocoPretzelimg.avif'
import Bundles from '../images/Screenshot_Bundlesimg.avif'
import { Link } from 'react-router-dom'
import "../primaryProduct.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const categoriesMobile = ({categoriesData}) => {
    return (
        <div className='main-primary-pro'>
            <div className='PrimaryProduct-section my-5 '>
                <div className='PPCmainComponent'>
                    <Swiper
                        className='main-swiper-home'
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        scrollbar={{ draggable: true }}
                        modules={[Pagination]}
                    >
                        {
                            categoriesData.map((eachCategory) => {
                                
                                return (
                                    <SwiperSlide key={eachCategory._id}>
                                        <div className="primary-product-component mx-2 px-2">
                                            <Link to='/shop' className="primary-product-component-content">
                                                <figure>
                                                    <div className='imagediv'>

                                                        <img className='img-fluid priproductimg' src={eachCategory.icon} />

                                                    </div>
                                                </figure>

                                            </Link>
                                            <div className="head-container">
                                                <Link to="/shop" className='ppcheader text-center text-decoration-none' >
                                                    <h5 className="heading">{eachCategory.name.en}</h5>
                                                </Link>
                                                <p className="desc">{eachCategory.description.en}</p>
                                            </div>
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

export default categoriesMobile