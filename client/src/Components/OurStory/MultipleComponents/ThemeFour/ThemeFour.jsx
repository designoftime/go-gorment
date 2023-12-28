import React from "react";
import "./ThemeFour.css";
import { Link } from "react-router-dom";

const ThemeFour = ({ ourStoryData, val, styles, direction }) => {
    if (!ourStoryData[`section_${val}_status`]) {
        return;
    }

    return (
        <>
            <div className="theme-4" style={{ ...styles.fullBg, ...direction }}>
                <div className="theme-4-content">
                    <h1 className="theme4-heading" style={styles.color}>
                        {ourStoryData[`section_${val}_title`].en}
                    </h1>
                    <p className="theme4-desc" style={styles.color}>
                        {ourStoryData[`section_${val}_description`].en}
                    </p>
                    {ourStoryData[`section_${val}_button_name`]?.en && (
                        <Link
                            to={ourStoryData[`section_${val}_button_link`].en}
                            className="theme4-btn"
                        >
                            {ourStoryData[`section_${val}_button_name`].en}
                        </Link>
                    )}
                </div>
                <div className="theme4-img">
                    <img src={ourStoryData[`section_${val}_img`]} alt="" />
                </div>
            </div>
        </>
    );
};

export default ThemeFour;
