import React from 'react'
import "./OneFeedsTwo.css"
import pretzelimge from './images/pretzel-dark-220613_3_3x_copy_540x.webp'
import pretzelheroimge from './images/pretzel-dark-220613_3_3x_aeba7887-06db-475b-bb89-1b2880c82413_360x.avif'
export const OneFeedsTwo = () => {
    return (
        <div className='sec'>
            <div className="HerO-section">
                <div className="container">
                    <div className="container">
                        <h1 className='HerO-Heading text-center fw-bolder'>OUR SNACKS<br />KEEP GIVING</h1>
                        <img className='HerOimage1' src={pretzelimge} alt={pretzelimge} />
                        <img className='HerOimage2' src={pretzelheroimge} alt={pretzelheroimge} />
                        <p className='text-center mx-auto my-2 fs-5'>We’re super proud to be working alongside our incredible charity partner, One Feeds Two, to help in providing school meals tounderprivileged children around the world.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

