import React from 'react'
import PretzelThings from './images/Screenshot_PretzelThingsimg.avif'
import Olives from './images/Screenshot_Olivesimg.avif'
import ChocoPretzel from './images/Screenshot_ChocoPretzelimg.avif'
import Bundles from './images/Screenshot_Bundlesimg.avif'
import { Link } from 'react-router-dom'
export const PrimaryProduct = () => {
    return (
        <>
            <div className='container-fluid g-0'>
                <div className='PrimaryProduct-section my-5'>
                    <div className='PPCmainComponent mx-auto'>
                        <div className="primary-product-component mx-2">
                            <Link to='/shop' className="primary-product-component-content">
                                <figure>
                                    <div className='imagediv'>

                                        <img className='img-fluid priproductimg' src={PretzelThings} />

                                    </div>
                                </figure>

                            </Link>
                            <div className="primary-product-component-content">
                                <Link to="/shop" className='ppcheader text-center text-decoration-none' >
                                    <h5 className="ppcheadertext">PRETZEL THINS</h5>
                                </Link>
                                <p className="ppcctext text-center">5 super seasonings</p>
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
                            <div className="primary-product-component-content">
                                <Link className='ppcheader text-center text-decoration-none' to="/shop">
                                    <h5 className="ppcheadertext">OLIVES</h5>
                                </Link>
                                <p className="ppcctext text-center">3 magical marinades</p>

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
                            <div className="primary-product-component-content">
                                <Link className='ppcheader text-center text-decoration-none' to="/shop">
                                    <h5 className="ppcheadertext">CHOCO PRETZELS</h5>
                                </Link>
                                <p className="ppcctext text-center">2 fantabulous flavours</p>
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
                            <div className="primary-product-component-content">
                                <Link className='ppcheader text-center text-decoration-none' to="/collections/all#bundles">
                                    <h5 className="ppcheadertext">BUNDLES</h5>
                                </Link>
                                <p className="ppcctext text-center">Bundle up and save!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
