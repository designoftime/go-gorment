import React from 'react'
import "./OneFeedsTwo.css"
import pretzelimge from './images/pretzel-dark-220613_3_3x_copy_540x.webp'
import pretzelheroimge from './images/pretzel-dark-220613_3_3x_aeba7887-06db-475b-bb89-1b2880c82413_360x.avif'
import oneFeedsBannerimge from './images/Rectangle_118_3x_ca62faef-cdf9-4da3-953d-0a0e8a63a1b2_720x.webp'
export const OneFeedsTwo = () => {
    return (
        <div className='sec'>
            <div className="HerO-section py-5">
                <div className="container">
                    <h1 className='HerO-Heading text-center fw-bolder'>OUR SNACKS<br />KEEP GIVING</h1>
                    <img className='HerOimage1' src={pretzelimge} alt={pretzelimge} />
                    <img className='HerOimage2' src={pretzelheroimge} alt={pretzelheroimge} />
                    <p className='text-center mx-auto my-2 fs-5 pb-5'>We’re super proud to be working alongside our incredible charity partner, One Feeds Two, to help in providing school meals tounderprivileged children around the world.</p>
                </div>
            </div>

            <div className="Banner-section">
                <div className="container">
                    <div className="Banner-Heading my-5 text-center fw-bolder">FIGHTING HUNGER<br />WITH EVERY ORDER</div>
                    <div className="row container">
                        <div className="col-md-5 col-sm-10 Banner-left mt-5 ms-5">
                            <div className='w-100 ms-5'><img src={oneFeedsBannerimge} className='img-fluid ms-5' alt={oneFeedsBannerimge} /></div>
                        </div> 
                        <div className="col-md-7 col-sm-10 Banner-right ms-5 w-50">
                            <div className='ms-5 w-75 '>
                            <div className="Banner-subHeading fs-1 ms-5 fw-bolder ">Did you know?</div>
                            <p className="Banner-content ms-5">
                                Over 61,000,000 children miss out on primary school every day due to hunger.
                                <br/> 
                                <br/>
                                One Feeds Two continue to do all they can to combat this shocking statistic, by facilitating new channels and partnerships to supply children with regular school meals all over the world.
                            </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

