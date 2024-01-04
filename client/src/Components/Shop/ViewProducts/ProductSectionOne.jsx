import { sliderVal } from "../../../utils/Constants";
import "../../Home/Home.css";
import { Accordion } from "../Accordion";
import "./ViewProducts.css";

import React, { useState } from "react";

const ProductSectionOne = ({ data }) => {
    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        }
        setOpen(index);
    };

    if (!data) {
        return;
    }

    return (
        <>
            <div className="AsSeenandImgLayer">
                <p>As Seen In</p>
                <div className="AsSeenLayer">
                    {sliderVal.map((val, idx) => {
                        if (!data[`${val}_img`]) return;
                        return (
                            // <div className="LayerImage">
                            <img
                                key={idx}
                                className="layerImg"
                                src={data[`${val}_img`]}
                                alt={data[`${val}_img`]}
                            />
                            // </div>
                        );
                    })}
                </div>
            </div>
            <div className="Accordian-section">
                {sliderVal.map((val, idx) => {
                    if (!data[`${val}_title`]) return;

                    return (
                        <Accordion
                            key={idx}
                            title={data[`${val}_title`]}
                            content={data[`${val}_editor`]}
                            open={idx === open}
                            toggle={() => toggle(idx)}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ProductSectionOne;
