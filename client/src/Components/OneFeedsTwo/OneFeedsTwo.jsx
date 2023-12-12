import React, { useEffect, useLayoutEffect, useState } from 'react'
import "./OneFeedsTwo.css"
import pretzelimge from './images/pretzel-dark-220613_3_3x_copy_540x.webp'
import pretzelheroimge from './images/pretzel-dark-220613_3_3x_aeba7887-06db-475b-bb89-1b2880c82413_360x.avif'
import oneFeedsBannerimge from './images/Rectangle_118_3x_ca62faef-cdf9-4da3-953d-0a0e8a63a1b2_720x.webp'
import Feeds from './images/feed_180x.avif'
export const OneFeedsTwo = () => {
    const [showValue, setShowValue]= useState(window.innerWidth);
    useEffect(()=>{
        const handleWidth =()=>{
            setShowValue(window.innerWidth);
        };
        window.addEventListener('resize',handleWidth);
        return ()=>{
            window.removeEventListener('resize',handleWidth);
    }
    },[])
    return (
        <div className='sec'>
            <div className="container-fluid g-0">
                <div className="HerO-section py-5 ">
                    <div className="container ">
                        <h1 className='HerO-Heading wow animate__animated animate__fadeInUp text-center fw-bolder'>OUR SNACKS<br />KEEP GIVING</h1>
                        <img className='HerOimage1 d-block mx-auto wow animate__animated animate__fadeInUp' src={pretzelimge} alt={pretzelimge} />
                        <img className='HerOimage2 wow animate__animated animate__fadeInUp' src={pretzelheroimge} alt={pretzelheroimge} />
                        <p className='text-center mx-auto my-2 fs-5 pb-5 wow animate__animated animate__fadeInUp'>We’re super proud to be working alongside our incredible charity partner, One Feeds Two, to help in providing school meals tounderprivileged children around the world.</p>
                    </div>
                </div>
                <div className="BannerO-section">
                    <div className="container">
                        {showValue > 1000?<div className="BannerO-Heading wow animate__animated animate__fadeInUp my-5 text-center fw-bolder">FIGHTING HUNGER<br />WITH EVERY ORDER</div>:""}
                        <div className={showValue > 1000? 'row' : ''}>
                            
                            <div className="col-md-5 g-0 BannerO-left mt-5">
                                <div className={showValue > 1000? 'w-full':'w-full col-12 g-0 align-items-center'}>
                                    <img src={oneFeedsBannerimge} className='img-fluid rounded wow animate__animated animate__fadeInUp BannerO-imge' alt={oneFeedsBannerimge} />
                                    <img src={Feeds} alt={Feeds} className='BannerO-feeds' /></div>
                                    {showValue <= 1000 ? <div className="BannerO-Heading wow animate__animated animate__fadeInUp my-5 fw-bolder">FIGHTING HUNGER<br />WITH EVERY ORDER</div>:""}
                            </div>
                            
                            <div className={showValue > 1000?"col-md-7 BannerO-right":"col-12 BannerO-Right"}>
                                <div >
                                    <div className="BannerO-subHeading fs-1 wow animate__animated animate__fadeInUp fw-bolder ">Did you know?</div>
                                    <p className="BannerO-content wow animate__animated animate__fadeInUp">
                                        Over 61,000,000 children miss out on primary school every day due to hunger.
                                        <br />
                                        <br />
                                        One Feeds Two continue to do all they can to combat this shocking statistic, by facilitating new channels and partnerships to supply children with regular school meals all over the world.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

