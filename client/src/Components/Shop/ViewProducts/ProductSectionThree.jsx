import React from "react";
import { getStyles, sliderVal } from "../../../utils/Constants";
const ProductSectionThree = ({ data }) => {
    if (!data || data?.section_status !== "show") {
        return;
    }

    const styles = getStyles(data, `background_color`, "text_color");

    return (
        <div className="Product-Hero-Section" style={styles.fullBg}>
            <div className="ProductHeroMain">
                <div className="ProductHero-left">
                    <img src={data[`first_img`]} alt={data[`first_img`]} />
                </div>
                <div className="ProductHero-right" style={styles.fullBg}>
                    <h1 style={styles.color}>{data?.top_header}</h1>
                    <div className="PH-content">
                        {sliderVal.map((val, idx) => {
                            return (
                                <div className="PH-main" key={idx}>
                                    <h3 style={styles.color}>
                                        {data[`${val}_title`]}
                                    </h3>
                                    <p style={styles.color}>
                                        {data[`${val}_description`]}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSectionThree;
