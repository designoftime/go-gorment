import React from "react";
import { getStyles, sliderVal } from "../../../utils/Constants";

const ProductSectionTwo = ({ data }) => {
    if (!data || data?.section_status !== "show") {
        return;
    }

    const styles = getStyles(data, `background_color`, "text_color");

    return (
        <div className="ViewProductIconsSection" style={styles.fullBg}>
            <div className="container mx-auto">
                <div className="VPIconsbox ">
                    {sliderVal.map((val, idx) => {
                        if (!data[`${val}_img`]) return;
                        return (
                            <div className="VPIcon-main py-5" key={idx}>
                                <div className="VPIcon mx-auto">
                                    <img
                                        className="vpiconsimge"
                                        src={data[`${val}_img`]}
                                        alt={data[`${val}_img`]}
                                    />{" "}
                                </div>
                                <div
                                    className="VPIcon-content py-3 fw-bold fs-4 text-uppercase text-center"
                                    style={styles.color}
                                >
                                    {data[`${val}_title`]}{" "}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductSectionTwo;
