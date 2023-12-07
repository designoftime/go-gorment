import React from 'react'
import PretzelThings from './images/Screenshot_PretzelThingsimg.avif'
import Olives from './images/Screenshot_Olivesimg.avif'
import ChocoPretzel from './images/Screenshot_ChocoPretzelimg.avif'
import Bundles from './images/Screenshot_Bundlesimg.avif'
import { Link } from 'react-router-dom'
import "./primaryProduct.css"
import CategoriesMobile from './categoriesMobile'

export const PrimaryProduct = () => {

    return (
        <>
            {
                window.innerWidth <= 767 ? <CategoriesMobile /> :
                    <div className='main-primary-pro'>
                        <div className='PrimaryProduct-section my-5 '>
                            <div className='PPCmainComponent'>
                                <div className="primary-product-component mx-2 px-2">
                                    <Link to='/shop' className="primary-product-component-content">
                                        <figure>
                                            <div className='imagediv'>

                                                <img className='img-fluid priproductimg' src={PretzelThings} />

                                            </div>
                                        </figure>

                                    </Link>
                                    <div className="head-container">
                                        <Link to="/shop" className='ppcheader text-center text-decoration-none' >
                                            <h5 className="heading">PRETZEL THINS</h5>
                                        </Link>
                                        <p className="desc">5 super seasonings</p>
                                    </div>
                                </div>

                                <div className="primary-product-component  mx-2">
                                    <Link to="/shop" className="primary-product-component-thumb">
                                        <figure>
                                            <div className='imagediv'>

                                                <img className='img-fluid priproductimg' src={Olives} />

                                            </div>
                                        </figure>

                                    </Link>
                                    <div className="head-container">
                                        <Link className='ppcheader text-center text-decoration-none' to="/shop">
                                            <h5 className="heading">OLIVES</h5>
                                        </Link>
                                        <p className="desc">3 magical marinades</p>

                                    </div>
                                </div>


                                <div className="primary-product-component  mx-2">
                                    <Link to="/shop" className="primary-product-component-thumb">
                                        <figure>
                                            <div className='imagediv'>


                                                <img className='img-fluid priproductimg' src={ChocoPretzel} />

                                            </div>
                                        </figure>

                                    </Link>
                                    <div className="head-container">
                                        <Link className='ppcheader text-center text-decoration-none' to="/shop">
                                            <h5 className="heading">CHOCO PRETZELS</h5>
                                        </Link>
                                        <p className="desc">2 fantabulous flavours</p>
                                    </div>
                                </div>


                                <div className="primary-product-component  mx-2">
                                    <Link to="/collections/all#bundles" className="primary-product-component-thumb">
                                        <figure>
                                            <div className='imagediv'>



                                                <img className='img-fluid priproductimg' src={Bundles} />

                                            </div>
                                        </figure>

                                    </Link>
                                    <div className="head-container">
                                        <Link className='ppcheader text-center text-decoration-none' to="/collections/all#bundles">
                                            <h5 className="heading">BUNDLES</h5>
                                        </Link>
                                        <p className="desc">Bundle up and save!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            }
        </>
    )
}
