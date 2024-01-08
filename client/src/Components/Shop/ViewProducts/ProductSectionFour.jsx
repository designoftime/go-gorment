import React from "react";
import { getStyles, sliderVal } from "../../../utils/Constants";

const ProductSectionFour = ({ data }) => {
    if (!data || data?.section_status !== "show") {
        return;
    }

    const styles = getStyles(data, `background_color`, "text_color");

    return (
        <div className="products-nutrients-section" style={styles.fullBg}>
            <div className="products-nutrients-info">
                <h1> {data?.top_header} </h1>
                <div>
                    {sliderVal.map((val, idx) => {
                        if (!data[`${val}_title`]) return;

                        return (
                            <div className="description" key={idx}>
                                <h3>{data[`${val}_title`]}</h3>
                                <p>{data[`${val}_description`]}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="nutrients-img">
                <img src={data?.first_img} alt={data?.first_img} />
            </div>
        </div>
    );
};

export default ProductSectionFour;
