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
                        <div className={window.innerWidth <= 767 ? "left-container" : "left-container col-md-6"}>
                            <h2 className='heading'>SNACKS THAT <br />
                                FEED YOUR FEEL GOOD</h2>
                            {
                                window.innerWidth <= 767 ? 
                                <img className='mobile-image' src={snacksgif} alt="" /> : ""
                            }
                            <p className='desc'>
                                Our delicious snacks (& us) have our hearts set on bringing happiness to the planet. We keep health at the centre of all our creations, whilst also delivering an unbeatable flavour experience that will blow your snacking socks off!
                            </p>
                            <button className='olly-btn'>SHOP NOW</button>
                        </div>

                        {window.innerWidth <= 767 ? ""

                            :
                            <div className={window.innerWidth <= 767 ? "right-container" : "right-container col-md-6"}
                            >
                                <img className={window.innerWidth <= 767 ? "" : 'w-full'} src={snacksgif} alt="" />
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
