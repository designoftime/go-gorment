import React from 'react'
import productoverviewimg1 from './images/ProductOverviewimg1.svg'
import productoverviewimg2 from './images/product-overviewimg-2.svg'
import productoverviewimg3 from './images/ProductOverviewimg3.svg'
export const Productoverview = () => {
    return (
        <>
            <section  className="Product-OverviewSection text-center contianer-fluid g-0">
                <div className="product-overview-inner-wrap">
                    <div className="common-wrap container g-0 mx-auto clear mx-auto">
                        <div className="product-overview-inner flex">
                            <div className="product-overview-title ">
                                <h2 className="text-center pt-5 pb-3 wow animate__animated animate__fadeInUp" >HOW OLLY’S SNACKS UP</h2>

                            </div>
                            <div className="product-overview-item-wrap container g-0 mx-auto d-flex">

                                <div className="product-overview-item">
                                    <div className="product-overview-item-logo">
                                        <img className='pologoimg' src={productoverviewimg1} alt="product-overview-logo" />
                                    </div>
                                    <div className="product-overview-item-content">
                                       <h6 className = "poheader">HEALTHIER DELICIOUS</h6>
                                        <p className = "pocontent" >All our creations have health at the heart and we have a no compromise mentality on the quality of our snack taste experience. We only deal in DELICIOUS.</p>
                                    </div>
                                </div>
                                <div className="product-overview-item">
                                    <div className="product-overview-item-logo">
                                        <img className='pologoimg' src={productoverviewimg1} alt="product-overview-logo" />
                                    </div>
                                    <div className="product-overview-item-content">
                                       <h6 className = "poheader">HEALTHIER DELICIOUS</h6>
                                        <p className = "pocontent" >All our creations have health at the heart and we have a no compromise mentality on the quality of our snack taste experience. We only deal in DELICIOUS.</p>
                                    </div>
                                </div>
                                <div className="product-overview-item">
                                    <div className="product-overview-item-logo">
                                        <img className='pologoimg' src={productoverviewimg1} alt="product-overview-logo" />
                                    </div>
                                    <div className="product-overview-item-content">
                                       <h6 className = "poheader">HEALTHIER DELICIOUS</h6>
                                        <p className = "pocontent" >All our creations have health at the heart and we have a no compromise mentality on the quality of our snack taste experience. We only deal in DELICIOUS.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </section>
        </>
    )
}
