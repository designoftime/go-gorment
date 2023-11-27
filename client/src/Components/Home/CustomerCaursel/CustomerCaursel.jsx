import React from 'react'
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

export const CustomerCaursel = () => {
    return (
        <div>
            <section className='CustomerCaursel-Section'>
                <div className="container-fluid g-0">
                    <div id="demo" className="carousel slide" data-interval="false">

                        <div className="carousel-inner container g-0 mx-auto">
                            <div className="carousel-item active">
                                <div className="CCaurselmain py-4">
                                    <div className="CCaurselLeft">
                                        <img className='CCaurselimage' src={CCImage1} alt="" />
                                    </div>
                                    <div className="CCaurselRight">
                                        <h3 className='CCaurselmessage'>"Pretzels reinvented! Crunch crunch yum!"</h3>
                                        <div className='leadname'><span className="lead">Selena - Verified Customer</span></div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="carousel-item">
                            <div className="CCaurselmain py-4">
                                    <div className="CCaurselLeft">
                                        <img className='CCaurselimage' src={CCImage2} alt="" />
                                    </div>
                                    <div className="CCaurselRight">
                                        <h3 className='CCaurselmessage'>"Best thing I've ever put in my mouth. Fact."</h3>
                                        <div className='leadname'><span className="lead">Emmanuel - Verified Customer</span></div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="carousel-item">
                            <div className="CCaurselmain py-4">
                                    <div className="CCaurselLeft">
                                        <img className='CCaurselimage' src={CCImage3} alt="" />
                                    </div>
                                    <div className="CCaurselRight">
                                        <h3 className='CCaurselmessage'>“I had to fight my children for these."</h3>
                                        <div className='leadname'><span className="lead">Shirley - Verified Customer</span></div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="carousel-item">
                            <div className="CCaurselmain py-4">
                                    <div className="CCaurselLeft">
                                        <img className='CCaurselimage' src={CCImage4} alt="" />
                                    </div>
                                    <div className="CCaurselRight">
                                        <h3 className='CCaurselmessage'>"Taste good, feels good, does good."</h3>
                                        <div className='leadname'><span className="lead">Benji - Verified Customer</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev"  data-bs-target="#demo" data-bs-slide="prev">
                            <img src={SliderArrow} className="carousel-control-prev-image"/>
                        </button>
                        <button className="carousel-control-next"  data-bs-target="#demo" data-bs-slide="next">
                            <img src={SliderArrow} className="carousel-control-next-image"/>
                        </button>
                    </div>
                </div>
            </section>
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
        </div>
    )
}
