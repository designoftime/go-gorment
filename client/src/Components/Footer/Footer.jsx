import React from "react";
import "./Footer.css";
import Blogimage1 from "./images/blogimg1.jpg";
import Blogimage2 from "./images/blogimg2.png";
import Blogimage3 from "./images/blogimg3.png";
import Blogimage4 from "./images/blogimg4.jpg";
import Blogimage5 from "./images/blogimg5.jpg";
import FooterLogo from "./images/footer-logo.svg";
import Footertext1 from "./images/footer-text-1.svg";
import Footertext2 from "./images/footer-text-2.svg";
import Footersmiley from "./images/f-smile.svg";
import FeelGood from "./images/feel-good.svg";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { footerVal } from "../../utils/Constants";

export const Footer = () => {
  const footerData = useSelector((store) => store.storeSettings?.footer);

  return (
    <div>
      <section className="Blog-sliding-section">
        <div className="container-fluid g-0">
          <div className="Blog-animation-sliding">
            <div className="Blog-sliding-main">
              <div className="Blog-sliding-content">
                <img src={Blogimage1} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage2} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage3} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage4} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage5} className="imagesofblog" alt="" />
              </div>
            </div>
            <div className="Blog-sliding-main">
              <div className="Blog-sliding-content">
                <img src={Blogimage1} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage2} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage3} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage4} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage5} className="imagesofblog" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}

      <section className="footer-Section">
        <footer className="Footer-main container-fluid-g-0">
          <div className="common-wrap">
            <div className="footer-inner container">
              <div className="footer-top">
                <div className="footer-logo ">
                  <Link to="/">
                    <img src={FooterLogo} alt="footer-logo" />
                  </Link>
                </div>
                <div className="footer-top-text">
                  <img src={Footertext1} alt="footer-text" />
                </div>
                {
                  window.innerWidth <= 767 ?
                    <>
                      <div className="footer-bottom-text">
                        <img
                          className="feel-good"
                          src={FeelGood}
                          alt="footer-text"
                        />
                      </div>
                      <div className="footer-widget-mobile newsletter-widget">
                        <p className="sign-up">Sign up</p>
                        <div className="footer-newsletter-wrap">
                          <form
                            id="email_signup"
                            className="klaviyo_gdpr_embed_WbhN5R mobile-form-signup"
                            action=""
                            data-ajax-submit=""
                            method="GET"
                            target="_blank"
                            noValidate="noValidate"
                          >
                            <input type="hidden" name="g" />
                            <input type="hidden" name="$fields" />
                            <input type="hidden" name="$list_fields" />
                            <div className="sign-up-input">
                              <input
                                className="sign-up-input-field"
                                type="email"
                                name="email"
                                id="k_id_email"
                                placeholder="Your email"
                              />
                            </div>
                              <button className="sign-up-btn">Sign Up</button>
                          </form>
                        </div>
                        {footerData?.social_links_status && (
                          <div className="socialIcon">
                            {footerData?.social_twitter && (
                              <a
                                className="text-decoration-none"
                                href={footerData?.social_twitter}
                                target="_blank"
                              >
                                <FaTwitter className="icon" />
                              </a>
                            )}
                            {footerData?.social_facebook && (
                              <a
                                className="text-decoration-none"
                                href={footerData?.social_facebook}
                                target="_blank"
                              >
                                <FaFacebook className="icon" />
                              </a>
                            )}

                            {footerData?.social_pinterest && (
                              <a
                                className="text-decoration-none"
                                href={footerData?.social_pinterest}
                                target="_blank"
                              >
                                <FaInstagram className="icon" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </>
                    : null
                }
              </div>
              <div className="footer-widget-wrap ">
                <div className="links-wrapper">
                  {footerData &&
                    footerVal.map((val) => {
                      const blockStatus = footerData[`block${val}_status`];

                      if (blockStatus !== undefined && blockStatus) {
                        return (
                          <div
                            key={val}
                            className="footer-widget-items"
                          >
                            {footerData?.[`block${val}_title`]?.en && (
                              <h6>{footerData?.[`block${val}_title`]?.en}</h6>
                            )}
                            <ul className="list-unstyled">
                              {footerVal.map((idx) => {
                                return (
                                  footerData?.[`block${val}_sub_title${idx}`]
                                    ?.en && (
                                    <li key={idx} className="">
                                      <Link
                                        to={
                                          footerData?.[
                                          `block${val}_sub_link${idx}`
                                          ]
                                        }
                                        className="fshopcategory text-decoration-none"
                                      >
                                        {
                                          footerData?.[
                                            `block${val}_sub_title${idx}`
                                          ]?.en
                                        }
                                      </Link>
                                    </li>
                                  )
                                );
                              })}
                            </ul>
                          </div>
                        );
                      }

                      // If blockStatus is falsy or undefined, return null
                      return null;
                    })}
                </div>
                    {
                      window.innerWidth >= 767 ? <div className="footer-widget newsletter-widget">
                      <p className="sign-up">Sign up</p>
                      <div className="footer-newsletter-wrap">
                        <form
                          id="email_signup"
                          className="klaviyo_gdpr_embed_WbhN5R"
                          action=""
                          data-ajax-submit=""
                          method="GET"
                          target="_blank"
                          noValidate="noValidate"
                        >
                          <input type="hidden" name="g" />
                          <input type="hidden" name="$fields" />
                          <input type="hidden" name="$list_fields" />
                          <div className="sign-up-input">
                            <input
                              className="sign-up-input-field"
                              type="email"
                              name="email"
                              id="k_id_email"
                              placeholder="Your email"
                            />
                            <span className="input-field-icon">
                              Sign Up
                              <IoIosArrowRoundForward className="fs-3" />
                            </span>
                          </div>
                        </form>
                      </div>
                      {footerData?.social_links_status && (
                        <div className="socialIcon">
                          {footerData?.social_twitter && (
                            <a
                              className="text-decoration-none"
                              href={footerData?.social_twitter}
                              target="_blank"
                            >
                              <FaTwitter className="icon" />
                            </a>
                          )}
                          {footerData?.social_facebook && (
                            <a
                              className="text-decoration-none"
                              href={footerData?.social_facebook}
                              target="_blank"
                            >
                              <FaFacebook className="icon" />
                            </a>
                          )}
    
                          {footerData?.social_pinterest && (
                            <a
                              className="text-decoration-none"
                              href={footerData?.social_pinterest}
                              target="_blank"
                            >
                              <FaInstagram className="icon" />
                            </a>
                          )}
                        </div>
                      )}
                    </div> : null
                    }
                

              </div>
              <div className="footer-bottom d-flex">
                <nav className="footer-nav mt-5">
                  <ul className="Policieslists list-unstyled mt-5 d-flex justify-content-evenly">
                    <li>
                      <a
                        className="Policiestext text-decoration-none"
                        href="/policies/privacy-policy"
                      >
                        Privacy Policy
                      </a>
                    </li>

                    <li>
                      <a
                        className="Policiestext text-decoration-none"
                        href="/policies/refund-policy"
                      >
                        Refund Policy
                      </a>
                    </li>

                    <li>
                      <a
                        className="Policiestext text-decoration-none"
                        href="/policies/terms-of-service"
                      >
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </nav>
                {
                  window.innerWidth >= 767 ? <div className="footer-bottom-text">
                    <img
                      className="Footertext2"
                      src={Footertext2}
                      alt="footer-text"
                    />
                    <div className="footer-smileys">
                      <div className="fsmiley">
                        <img src={Footersmiley} alt="smiley" />
                      </div>
                      <div className="fsmiley">
                        <img src={Footersmiley} alt="smiley" />
                      </div>
                    </div>
                  </div> : null
                }



              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};
