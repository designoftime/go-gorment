import React from 'react'
import productoverviewimg1 from './images/ProductOverviewimg1.svg'
import productoverviewimg2 from './images/product-overviewimg-2.svg'
import productoverviewimg3 from './images/ProductOverviewimg3.svg'
import { featurePromo } from '../../../utils/Constants'
export const Productoverview = ({testimonialData}) => {

    if(!testimonialData){
        return;
    }

    return (
        <>
        {testimonialData.testimonial_status ?
            <section  className="Product-OverviewSection text-center contianer-fluid g-0">
                <div className="product-overview-inner-wrap">
                    <div className="common-wrap container g-0 mx-auto clear mx-auto">
                        <div className="product-overview-inner flex">
                            <div className="product-overview-title ">
                            {testimonialData.testimonial_title_header.en && <h2 className="text-center pt-5 pb-3 wow animate__animated animate__fadeInUp" >{testimonialData.testimonial_title_header.en}</h2>}

                            </div>
                            <div className="product-overview-item-wrap container g-0 mx-auto d-flex">
                                {
                                    featurePromo.map((val) => {
                                        if(!testimonialData[`testimonial_banner_img_${val}`]){
                                            return;
                                        }
                                        return (
                                            <div key={val} className="product-overview-item">
                                            <div className="product-overview-item-logo">
                                                <img className='pologoimg' src={testimonialData[`testimonial_banner_img_${val}`]} alt="product-overview-logo" />
                                            </div>
                                            <div className="product-overview-item-content">
                                            {testimonialData[`testimonial_title_${val}`]?.en && <h6 className = "poheader">{testimonialData[`testimonial_title_${val}`]?.en} </h6>}
                                                {testimonialData[`testimonial_description_${val}`]?.en && <p className = "pocontent" >{testimonialData[`testimonial_description_${val}`]?.en}</p>}
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>



            </section> : null }
        </>
    )
}
