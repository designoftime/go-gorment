import React from "react";
import Collapse from "react-collapse";
import "./ViewProducts/ViewProducts.css";
import { IoMdClose } from "react-icons/io";

export const Accordion = ({ open, toggle, title, content }) => {
    return (
        <div className="Accordian-total-content border-3">
            <div
                className={`w-100 px-5 py-2 d-flex align-items-center  ${
                    open ? "Collapseborder2" : "Collapseborder"
                } justify-content-between`}
                onClick={toggle}
            >
                <p className="fw-bold accordion-title text-uppercase m-0 accordian-custom-font">
                    {title}
                </p>
                <div
                    className={
                        open
                            ? "fs-5 fw-bolder m-0"
                            : "fs-5 fw-bolder rotate-45 collapsebutton m-0"
                    }
                >
                    <IoMdClose />
                </div>
            </div>
            <Collapse isOpened={open} className="VPcollapse">
                <div
                    className=" pb-3 accordion-content "
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </Collapse>
        </div>
    );
};
