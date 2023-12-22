import React from "react";
import "./OneFeedHome.css";
import Image1 from "./images/pretzel-dark.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
export const OneFeedsHome = ({bottomPromotionData, styles}) => {

  if (!bottomPromotionData) {
    return;
  }

  return bottomPromotionData?.bottom_permotion_banner_status ? (
    <div>
      <section className="OneFeeds-section" style={styles.fullBg}>
        <div className="contianer-fluid g-0">
          <div className="cta-image">
            <div className="ctamain container g-0 mx-auto">
              <div className="ctaleft wow animate__animated animate__fadeInUp">
                {bottomPromotionData?.bottom_promotion_title?.en ? (
                  <h4 className="cta-text" style={styles.color}>
                    {bottomPromotionData.bottom_promotion_title.en}
                  </h4>
                ) : null}
                {bottomPromotionData?.bottom_promotion_description?.en ? (
                  <p style={styles.color}>{bottomPromotionData.bottom_promotion_description.en}</p>
                ) : null}
                {bottomPromotionData?.bottom_promotion_button_name?.en ? (
                  <div className="cta-btn">
                    <Link
                      to={bottomPromotionData?.bottom_promotion_button_link?.en}
                      className="ctabutton"
                      style={styles.color}
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
    </div>)
   : null;
};
