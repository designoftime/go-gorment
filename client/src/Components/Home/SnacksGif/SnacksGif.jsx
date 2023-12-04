import React from 'react'
import snacksgif from './gif/snacks.gif'
import snacksmile from './gif/Smile426f.svg'
import './snacksGif.css';

export const SnacksGif = () => {
    return (
        <div className=''>
            <div className='container-fluid g-0 main-snack-banner'>
                <div className="d-flex">
                    <div className="row snake-banner">
                        <div className="left-container col-md-6">
                            <h2 className='heading'>SNACKS THAT <br />
                                FEED YOUR FEEL GOOD</h2>
                            <p className='desc'>
                                Our delicious snacks (& us) have our hearts set on bringing<br /> happiness to the planet. We keep health at the centre of all <br /> our creations, whilst also delivering an unbeatable flavour <br /> experience that will blow your snacking socks off!
                            </p>
                            <button className='olly-btn'>SHOP NOW</button>
                        </div>

                        <div className="right-container col-md-6">
                            <img className='w-full' src={snacksgif} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
