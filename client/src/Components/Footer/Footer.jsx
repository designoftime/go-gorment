import React from 'react'
import './Footer.css'
import Blogimage1 from './images/blogimg1.jpg'
import Blogimage2 from './images/blogimg2.png'
import Blogimage3 from './images/blogimg3.png'
import Blogimage4 from './images/blogimg4.jpg'
import Blogimage5 from './images/blogimg5.jpg'
import FooterLogo from './images/footer-logo.svg'
import Footertext1 from './images/footer-text-1.svg'
import Footertext2 from './images/footer-text-2.svg'
import Footersmiley from './images/f-smile.svg'
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Footer = () => {
    const footerData = useSelector(store=> store.storeSettings?.footer);
    console.log(footerData);
    return (
        <div>
            <section className='Blog-sliding-section'>
                <div className="container-fluid g-0">
                    <div className="Blog-animation-sliding">
                        <div className="Blog-sliding-main">
                            <div className="Blog-sliding-content" >
                                <img src={Blogimage1} className='imagesofblog' alt="" />
                            </div>
                            <div className="Blog-sliding-content">
                                <img src={Blogimage2} className='imagesofblog' alt="" />
                            </div>
                            <div className="Blog-sliding-content">
                                <img src={Blogimage3} className='imagesofblog' alt="" />
                            </div>
                            <div className="Blog-sliding-content">
                                <img src={Blogimage4} className='imagesofblog' alt="" />
                            </div>
                            <div className="Blog-sliding-content">
                                <img src={Blogimage5} className='imagesofblog' alt="" />
                            </div>
                        </div>
                        <div className="Blog-sliding-main">
                            <div className="Blog-sliding-content">
                                <img src={Blogimage1} className='imagesofblog' alt="" />
                            </div>
                            <div className="Blog-sliding-content">
                                <img src={Blogimage2} className='imagesofblog' alt="" />
                            </div>
                            <div className="Blog-sliding-content">
                                <img src={Blogimage3} className='imagesofblog' alt="" />
                            </div>
                            <div className="Blog-sliding-content">
                                <img src={Blogimage4} className='imagesofblog' alt="" />
                            </div>
                            <div className="Blog-sliding-content">
                                <img src={Blogimage5} className='imagesofblog' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer Section */}
            <section className='Footer-Section'>
                <footer className='Footer-main container-fluid-g-0'>
                    <div className="common-wrap  g-0">
                        <div className="footer-inner mx-auto">
                            <div className="footer-top py-5">
                                <div className="footer-logo ">
                                    <Link to="/"><img src={FooterLogo} alt="footer-logo" /></Link>
                                </div>
                                <div className="footer-top-text mx-5">
                                    <img src={Footertext1} alt="footer-text" />
                                </div>
                            </div>
                            <div className="footer-widget-wrap pl-5">
                                <div className="footer-widget pl-5 mt-5">
                                    {/* <h6>{footerData}</h6> */}
                                    <ul className='list-unstyled'>

                                        <li className='mt-1'><Link to="/shop" className='fshopcategory text-decoration-none'>Shop All</Link></li>

                                        <li className='mt-1'><Link to="/shop" className='fshopcategory text-decoration-none'>Pretzel Thins</Link></li>

                                        <li className='mt-1'><Link to="/shop" className='fshopcategory text-decoration-none'>Olives</Link></li>

                                        <li className='mt-1'><Link to="/shop" className='fshopcategory text-decoration-none'>Choco Pretzels</Link></li>

                                    </ul>
                                </div>
                                <div className="footer-widget mt-5 mx-4">
                                    <h6>COMPANY</h6>
                                    <ul className='list-unstyled'>

                                        <li className='mt-1'><a href="/pages/ollys-story" className='fshopcategory text-decoration-none'>Our Story</a></li>

                                        <li className='mt-1'><a href="/pages/one-feeds-two" className='fshopcategory text-decoration-none'>One Feeds Two</a></li>

                                    </ul>
                                </div>
                                <div className="footer-widget mt-5 mx-4 contact-widget">
                                    <h6>CONTACT</h6>
                                    <div className="contact-widget-item">
                                        <p>Questions? Email us on</p>
                                        <a className='fshopcategory text-decoration-none' href="mailto:yum@ollys-ollys.com">yum@ollys-ollys.com</a>
                                    </div>
                                    <div className="contact-widget-item">
                                        <p></p>
                                        <a href="tel:"></a>
                                    </div>
                                </div>

                                <div className="footer-widget mt-5 newsletter-widget">
                                    <p className='fw-bold pb-3'>Sign up</p>
                                    <div className="footer-newsletter-wrap">
                                        <form id="email_signup" className="klaviyo_gdpr_embed_WbhN5R" action="" data-ajax-submit="" method="GET" target="_blank" noValidate='noValidate'>
                                            <input type="hidden" name="g" />
                                            <input type="hidden" name="$fields" />
                                            <input type="hidden" name="$list_fields" />
                                            <div className='d-flex fw-bold'>
                                                <div className="klaviyo_field_group footer-newsletter-input-row Finputdiv px-5">
                                                    <input className="footermailinput" type="email"  name="email" id="k_id_email" placeholder="Your email" />
                                                </div>

                                                <div className="klaviyo_form_actions footer-newsletter-input-row FSignupbtn submit-row">
                                                    <button className='btn text-dark fw-bold'>Signup <span><IoIosArrowRoundForward className='fs-3' /></span></button>
                                                </div>
                                            </div>
                                            {/* {<div className="klaviyo_messages">
                                                <div className="success_message" >
                                                    <div className="klaviyo_header">Thank you for signing up!</div>
                                                </div>
                                                <div className="error_message"></div>
                                            </div>} */}
                                        </form>
                                    </div>
                                    <div className="footer-social d-flex justify-content-around">

                                        <ul className='SocialIcons'>
                                            <li><a className='text-decoration-none' href="https://twitter.com/ollysollys" target="_blank"><FaTwitter className='icon' /></a></li>
                                            <li><a className='text-decoration-none' href="https://www.facebook.com/ollysollysollys/" target="_blank"><FaFacebook className='icon' /></a></li>

                                            <li><a className='text-decoration-none' href="https://www.instagram.com/ollys.ollys/" target="_blank"><FaInstagram className='icon' /></a></li>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                            <div className="footer-bottom d-flex">
                                <nav className="footer-nav mt-5">
                                    <ul className='Policieslists list-unstyled mt-5 d-flex justify-content-evenly'>

                                        <li><a className='Policiestext text-decoration-none' href="/policies/privacy-policy">Privacy Policy</a></li>

                                        <li><a className='Policiestext text-decoration-none' href="/policies/refund-policy">Refund Policy</a></li>

                                        <li><a className='Policiestext text-decoration-none' href="/policies/terms-of-service">Terms of Service</a></li>

                                    </ul>
                                </nav>
                                <div className="footer-bottom-text mt-3 desk d-flex">
                                    <div className="footer-smileys d-flex justify-content-evenly">
                                        <div className="fsmiley">
                                                <img src={Footersmiley} alt="smiley" />
                                        </div>
                                        <div className="fsmiley">
                                                <img src={Footersmiley} alt="smiley" />
                                        </div>

                                    </div >
                                    <img className='Footertext2' src={Footertext2} alt="footer-text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}
