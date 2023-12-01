import React from 'react'
import './Home.css';
import { BsFillStarFill } from 'react-icons/bs'
import bannerimage from './images/bannerhome.jpg'
import Greatetaste from './images/greate_taste.png'
import { Carousel } from 'bootstrap'
import { CarouselSection } from './Carousel/CarouselSection';
import { PrimaryProduct } from './PrimaryProduct/PrimaryProduct';
import { Navigation1 } from '../Navigation/Navigation1';
import { SnacksGif } from './SnacksGif/SnacksGif';
import { Productoverview } from './ProductOverview/Productoverview';
import { CustomerCaursel } from './CustomerCaursel/CustomerCaursel';
import { OneFeedsHome } from './OnefeedsHome/OneFeedsHome';
import { ReviewedProduct } from './ReviewedProduct/ReviewedProduct';

export const Home = () => {
    return (
        <div>
            {/* <Navigation1 /> */}
            <div className='main-home'>
                <link rel='stylesheet' href='.../Components/Navigation/Navigation.css' />
                <div className="Banner-section">
                    <div className='Banner-content container mx-auto'>
                        <div className='banner-left'>
                            <div className="product-component__rating hero-rating mx-5">
                                <span className="rating-count text-white bold">489</span> <span />
                                <span data-score="4.89" className="">
                                    <span className="jdgm-star jdgm--on text-white bold"><BsFillStarFill /></span> <span />
                                    <span className="jdgm-star jdgm--on text-white bold"><BsFillStarFill /></span> <span />
                                    <span className="jdgm-star jdgm--on text-white bold"><BsFillStarFill /></span> <span />
                                    <span className="jdgm-star jdgm--on text-white bold"><BsFillStarFill /></span> <span />
                                    <span className="jdgm-star jdgm--on text-white bold"><BsFillStarFill /></span> <span />
                                </span>
                                <span className='text-white bold'>
                                    2165 Reviews
                                </span>
                            </div>
                            <h1 className="animate__animated animate__fadeInUp Bannerheader text-white m-4">SNACKS <br />
                                SOOO GOOD</h1>
                            <div className='text-white bannerpara m-4'>Healthier delicious snacks designed to feed your feel good!</div>
                            <div>
                                <button className='btn btn-outline-light m-4 fs-3 shopbanner '>SHOP NOW</button>
                            </div>
                        </div>
                        <div className='banner-right'>
                            <div className='greatetaste'>
                                <img src={Greatetaste} className='greatetasteimg' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid g-0'>
                <CarouselSection />
                <PrimaryProduct />
                <SnacksGif />
                <Productoverview/>
                <ReviewedProduct/>
                <OneFeedsHome/>
                <CustomerCaursel/>
            </div>
        </div>

    )
}
