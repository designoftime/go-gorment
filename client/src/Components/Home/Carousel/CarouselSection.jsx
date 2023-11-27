import React from 'react'
import { Carousel } from 'bootstrap'
import carouselogo1 from './images/Carousel_Logo_1.svg'
import carouselogo2 from './images/Carousel_LOGO_2.svg'
import carouselogo3 from './images/Carousel_Logo3.svg'
import carouselogo4 from './images/Carousel_Logo4.svg'

export const CarouselSection = () => {
    return (
        <div className='container-fluid g-0'>
            <div className="Carousel-section mx-auto">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators Carousel_logoss">
                        <img src={carouselogo1} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active Carousel_logo" aria-current="true" aria-label="Slide 1" />
                        <img className=" Carousel_logo1" src={carouselogo2} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
                        <img className=" Carousel_logo2" src={carouselogo3} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
                        <img className=" Carousel_logo3" src={carouselogo4} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                            <h3 className="d-block w-100 text-center Carousel_content">“Olly's Pretzel Thins are a game-changer on the snacking scene. We're impretzed!”</h3>
                        </div>
                        <div className="carousel-item  text-center">
                            <h3 className="d-block w-100 Carousel_content text-center" >
                                “Delicious healthier snacks. Full of flavour.”
                            </h3>
                        </div>
                        <div className="carousel-item  text-center">
                            <h3 className="d-block Carousel_content w-100 text-center" >
                                “Trust us, once opened, these snacks don't last long. Extremely moreish”
                            </h3>
                        </div>
                        <div className="carousel-item Carousel_content text-center">
                            <h3 className="d-block w-100" >
                                “The cherry on top? Olly's donate a school meal to a child in need with every order.”
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
