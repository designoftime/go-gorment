import React from "react";
import "./OneFeedHome.css";
import Image1 from "./images/pretzel-dark.png";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const OneFeedsHome = ({bottomPromotionData}) => {

  if (!bottomPromotionData) {
    return;
  }

  return bottomPromotionData?.bottom_permotion_banner_status ? (
    <div>
      <section className="OneFeeds-section">
        <div className="contianer-fluid g-0">
          <div className="cta-image">
            <div className="ctamain container g-0 mx-auto">
              <div className="ctaleft wow animate__animated animate__fadeInUp">
                {bottomPromotionData?.bottom_promotion_title?.en ? (
                  <h4 className="cta-text">
                    {bottomPromotionData.bottom_promotion_title.en}
                  </h4>
                ) : null}
                {bottomPromotionData?.bottom_promotion_description?.en ? (
                  <p>{bottomPromotionData.bottom_promotion_description.en}</p>
                ) : null}
                {bottomPromotionData?.bottom_promotion_button_name?.en ? (
                  <div className="cta-btn">
                    <Link
                      href={bottomPromotionData?.bottom_promotion_button_link}
                      className="ctabutton"
                    >
                      {bottomPromotionData.bottom_promotion_button_name.en}{" "}
                      <span>
                        <BsArrowRight />
                      </span>
                    </Link>
                  </div>
                ) : null}
              </div>
              <div className="ctaright">
                <div className="ctaimg">
                  <img
                    className="ctaimages"
                    src={bottomPromotionData?.bottom_permotion_banner_img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : null;
};
