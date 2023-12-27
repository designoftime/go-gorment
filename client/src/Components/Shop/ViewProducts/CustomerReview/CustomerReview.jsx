import React, { useEffect, useState } from 'react'
import './CustomerReview.css'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import ProgressBar from 'react-bootstrap/esm/ProgressBar';
import Accordian from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/esm/AccordionButton';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import Card from 'react-bootstrap/Card'
import { Collapse } from 'react-collapse';
import { Link } from 'react-router-dom';
export const CustomerReview = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const [ratingChange, setRatingChange] = useState({
        "star1": true,
        "star2": true,
        "star3": true,
        "star4": true,
        "star5": true,
    })
    const [hoveredStar, setHoveredStar] = useState(0)
    const clickRatingChange = (clickedStar) => {
        clickedStar.preventDefault();
        setRatingChange(() => {
            const newRating = {};
            for (let i = 1; i <= 5; i++) {
                newRating[`star${i}`] = i <= clickedStar;
            }
            return newRating;
        });
    };
    const handleStarHover = (star) => {
        setHoveredStar(star);
    }
    const handleReviewAccordian = () => {
        setIsCollapsed(!isCollapsed);
    }

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
                            {/* <div> */}
                            <button className='reviewaccordionbtn' onClick={handleReviewAccordian}>{isCollapsed ? "Cancel review" : "Write review"}</button>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="my-5 reviewAccordian">
                        <Collapse isOpened={isCollapsed}>
                            <form>
                                <div className="reviewForm">
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
                                        {[1, 2, 3, 4, 5].map((star) => {
                                            return (
                                                <button key={star} className='starbtn' onClick={clickRatingChange} name={`star${star}`
                                                }>
                                                    {ratingChange[`star${star}`] || hoveredStar >= star ? (<IoIosStar />) : (<IoIosStarOutline />)}
                                                </button>
                                            )
                                        })}
                                    </div>
                                    <div className='reviewInputs'>
                                        <label htmlFor="reviewtitle" className='reviewlable fw-bolder'>Review Title</label>
                                        <input type="text" className='form-control mt-2 reviewInput' placeholder='Give Your Review Title' />
                                    </div>
                                    <div className='reviewInputs'>
                                        <label htmlFor="review" className='reviewlable fw-bolder'>Review</label>
                                        <textarea rows={3} type="text" className='form-control mt-2 reviewInput' placeholder='Write Your Comments here...' />
                                    </div>
                                    {/* <div className='reviewInputs'>
                                        <label htmlFor="media" className='reviewlable fw-bolder'>Photo/Video(Optional)</label><br />
                                        <input type="file" accept='video/*,image/*' className='reviewMediaInput'/>
                                    </div> */}
                                    <p className='my-3 fs-5 fw-bold'>How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s <Link style={{color:"#412f59"}} to='/policies/terms-of-service'> terms and conditions</Link> and  <Link to='/polices/privacy-policy' style={{color:"#412f59"}}>privacy policy</Link>.</p>
                                    <div className="d-flex justify-content-center">
                                        <button className='reviewsubmitbtn'>Submit review</button>
                                    </div>
                                </div>
                            </form>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div >
    )
}

