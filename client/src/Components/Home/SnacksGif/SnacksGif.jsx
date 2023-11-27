import React from 'react'
import snacksgif from './gif/snacks.gif'
import snacksmile from './gif/Smile426f.svg'
export const SnacksGif = () => {
    return (
        <div>
            <div className='container-fluid g-0'>
                <div className="d-flex">
                    <div className="content-leftsnacksgif">
                        <h2 className="SnacksGifheader wow animate__animated animate__fadeInUp mx-4 mt-3 mb-5">SNACKS THAT <div className='d-block'>FEED YOUR</div>
                            <div className="good-smiley ">FEEL <span className="d-flex"> G
                                <div className="smiley">
                                    <div><img className='img-fluid smileyimg' src={snacksmile} alt="Smile" /></div>
                                </div>
                                <div >
                                    <div><img className='img-fluid smileyimg' src={snacksmile} alt="Smile" /></div>
                                </div>D
                            </span>
                            </div>
                        </h2>
                        <div className='mx-4'>
                            <p className='Lead'>
                                Our delicious snacks (& us) have our hearts set on bringing<br/> happiness to the planet. We keep health at the centre of all <br /> our creations, whilst also delivering an unbeatable flavour <br /> experience that will blow your snacking socks off!
                            </p>
                        </div>
                        <div>
                            <button className='btn mx-4 mt-5 Sanacksgifbutton'><strong>SHOP NOW</strong></button>
                        </div>
                    </div>
                    <div className="content-rightsnacksgif">
                        <img className='content-snacksgif' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
