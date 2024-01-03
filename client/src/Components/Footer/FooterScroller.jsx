import React from "react";
import "./FooterScroller.css";

import Blogimage1 from "./images/blogimg1.jpg";
import Blogimage2 from "./images/blogimg2.png";
import Blogimage3 from "./images/blogimg3.png";
import Blogimage4 from "./images/blogimg4.jpg";
import Blogimage5 from "./images/blogimg5.jpg";
import { useSelector } from "react-redux";

const FooterScroller = ({ scrollerData, footerData }) => {
    if (!scrollerData) {
        return;
    }

    const scrollImage = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
    ];

    console.log("----->", footerData);

    return (
        <section className="Blog-sliding-section">
            <div className="Blog-animation-sliding">
                <div className="Blog-sliding-main">
                    {scrollImage.map((val) => {
                        if (!scrollerData[`${val}_img`]) {
                            return;
                        }
                        return (
                            <div className="Blog-sliding-content" key={val}>
                                <img
                                    src={scrollerData[`${val}_img`]}
                                    className="imagesofblog"
                                    alt={scrollerData[`${val}_img`]}
                                />
                                <img
                                    src={footerData?.payment_method_img}
                                    className="small-log"
                                    alt={scrollerData[`${val}_img`]}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="Blog-sliding-main">
                    {scrollImage.map((val) => {
                        if (!scrollerData[`${val}_img`]) {
                            return;
                        }
                        return (
                            <div className="Blog-sliding-content" key={val}>
                                <img
                                    src={scrollerData[`${val}_img`]}
                                    className="imagesofblog"
                                    alt=""
                                />
                                <img
                                    src={footerData?.payment_method_img}
                                    className="small-log"
                                    alt={scrollerData[`${val}_img`]}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FooterScroller;
