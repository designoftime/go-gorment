import React from 'react'
import './CustomerReview.css'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import ProgressBar from 'react-bootstrap/esm/ProgressBar';
export const CustomerReview = () => {
    return (
        <div>
            <div className="CustomerReview-section">
                <div className="container">
                    <h1 className="CR-header text-uppercase text-center my-5">Customer Review</h1>
                    <div className="ReviewInfo">
                        <div className="totalReview">
                            <div className="totalReviewStar">
                                <span><IoIosStar /></span> <span />
                                <span><IoIosStar /></span> <span />
                                <span><IoIosStar /></span> <span />
                                <span><IoIosStar /></span> <span />
                                <span><IoIosStarHalf /></span> <span />
                            </div>
                            <p className="totalReviewText fw-bold">Based on 40 reviews</p>
                        </div>
                        <div className="reviewCategory">
                            <div className="reviewSubCategory">
                                <div className="RSC-stars">
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStar /></span> <span />
                                </div>
                                <div className='reviewBar'><ProgressBar now={88} className='reviewbar'/></div>
                                <div className="RSC-calculate">
                                    <span>88%</span> <span />
                                    <span>(35)</span>
                                </div>
                            </div>
                            <div className="reviewSubCategory">
                                <div className="RSC-stars">
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStarHalf /></span> <span />
                                </div>
                                <div className='reviewBar'><ProgressBar now={3} className='reviewbar'/></div>
                                <div className="RSC-calculate">
                                    <span>3%</span> <span />
                                    <span>(1)</span>
                                </div>
                            </div>
                            <div className="reviewSubCategory">
                                <div className="RSC-stars">
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStarHalf /></span> <span />
                                    <span><IoIosStarHalf /></span> <span />
                                </div>
                                <div className='reviewBar'><ProgressBar now={5} className='reviewbar'/></div>
                                <div className="RSC-calculate">
                                    <span>5%</span> <span />
                                    <span>(2)</span>
                                </div>
                            </div>
                            <div className="reviewSubCategory">
                                <div className="RSC-stars">
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStarHalf /></span> <span />
                                    <span><IoIosStarHalf /></span> <span />
                                    <span><IoIosStarHalf /></span> <span />
                                </div>
                                <div className='reviewBar'><ProgressBar now={0} className='reviewbar'/></div>
                                <div className="RSC-calculate">
                                    <span>0%</span> <span />
                                    <span>(0)</span>
                                </div>
                            </div>
                            <div className="reviewSubCategory">
                                <div className="RSC-stars">
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStarHalf /></span> <span />
                                    <span><IoIosStarHalf /></span> <span />
                                    <span><IoIosStarHalf /></span> <span />
                                    <span><IoIosStarHalf /></span> <span />
                                </div>
                                <div className='reviewBar'><ProgressBar now={5} className='reviewbar'/></div>
                                <div className="RSC-calculate">
                                    <span>5%</span> <span />
                                    <span>(2)</span>
                                </div>
                            </div>
                        </div>
                        <div className="writeReview"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

