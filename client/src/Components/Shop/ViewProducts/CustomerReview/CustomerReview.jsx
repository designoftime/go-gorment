import React from 'react'
import './CustomerReview.css'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import ProgressBar from 'react-bootstrap/esm/ProgressBar';
import Accordian from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/esm/AccordionButton';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import Card from 'react-bootstrap/Card'
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
                                <div className='reviewBar'><ProgressBar now={88} className='reviewbar' /></div>
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
                                    <span><IoIosStarOutline /></span> <span />
                                </div>
                                <div className='reviewBar'><ProgressBar now={3} className='reviewbar' /></div>
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
                                    <span><IoIosStarOutline /></span> <span />
                                    <span><IoIosStarOutline /></span> <span />
                                </div>
                                <div className='reviewBar'><ProgressBar now={5} className='reviewbar' /></div>
                                <div className="RSC-calculate">
                                    <span>5%</span> <span />
                                    <span>(2)</span>
                                </div>
                            </div>
                            <div className="reviewSubCategory">
                                <div className="RSC-stars">
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStarOutline /></span> <span />
                                    <span><IoIosStarOutline /></span> <span />
                                    <span><IoIosStarOutline /></span> <span />
                                </div>
                                <div className='reviewBar'><ProgressBar now={0} className='reviewbar' /></div>
                                <div className="RSC-calculate">
                                    <span>0%</span> <span />
                                    <span>(0)</span>
                                </div>
                            </div>
                            <div className="reviewSubCategory">
                                <div className="RSC-stars">
                                    <span><IoIosStar /></span> <span />
                                    <span><IoIosStarOutline /></span> <span />
                                    <span><IoIosStarOutline /></span> <span />
                                    <span><IoIosStarOutline /></span> <span />
                                    <span ><IoIosStarOutline /></span> <span />
                                </div>
                                <div className='reviewBar'><ProgressBar now={5} className='reviewbar' /></div>
                                <div className="RSC-calculate">
                                    <span>5%</span> <span />
                                    <span>(2)</span>
                                </div>
                            </div>
                        </div>
                        <div className="writeReview">
                            <button className='reviewaccordionbtn'>Write review</button>
                        </div>
                    </div>
                    <Accordian className='my-5' defaultActiveKey="0">
                        <Card>
                            <Accordian.Collapse eventKey='0'>
                                <Card.Body className='reviewForm'>
                                    <form>
                                        <div className='reviewInputs'>
                                            <label htmlFor="name" className='reviewlable fw-bolder'>Name <span>(displayed publicly like 
                                                <select name="namedisplayed" id="namedisplayed">
                                                    <option value="John Smith">John Smith</option>
                                                    <option value="John S.">John S.</option>
                                                    <option value="J.S.">J.S.</option>
                                                    <option value="Anonymous">Anonymous</option>
                                                </select>)</span>
                                            </label>
                                            <input type="text" className='form-control mt-2 reviewInput' placeholder='Enter Your Name (public)' />
                                        </div>
                                        <div className='reviewInputs'>
                                            <label htmlFor="email" className='reviewlable fw-bolder'>Email</label>
                                            <input type="text" className='form-control mt-2 reviewInput' placeholder='Enter Your Email (private)' />
                                        </div>
                                        <div className='reviewInputs'>
                                            <label htmlFor="rating" className='reviewlable fw-bolder'>Rating</label><br />
                                            <button className='starbtn'><IoIosStar /></button>
                                        </div>
                                    </form>
                                </Card.Body>
                            </Accordian.Collapse>
                        </Card>
                    </Accordian>
                </div>
            </div>
        </div>
    )
}

