import { Link } from "react-router-dom";

const SectionThree = ({oneFeedsTwoData, val, styles}) => {
    if(!oneFeedsTwoData[`section_${val}_status`]){
        return;
    }
    
    return oneFeedsTwoData[`section_${val}_background_img`] && <div className="Info-section" style={{backgroundImage: `url(${oneFeedsTwoData[`section_${val}_background_img`]})`}}>
        <div className="container">
            <div className="row">
                <div className="Info-box">
                    <div className="card Info-card rounded-4" style={styles.fullBg}>
                        <div className="card-body mb-4">
                            {oneFeedsTwoData[`offer_section_${val}_title`]?.en && <h5 className="fs-1 fw-bolder my-3 Info-header" style={styles.color}>{oneFeedsTwoData[`offer_section_${val}_title`]?.en}</h5>}
                            {oneFeedsTwoData[`offer_section_${val}_description`]?.en && <p className="Info-content fs-5 mb-4 fw-bold" style={styles.color}>{oneFeedsTwoData[`offer_section_${val}_description`]?.en}</p>}
                            {oneFeedsTwoData[`offer_section_${val}_button_name`]?.en && <Link to={oneFeedsTwoData[`offer_section_${val}_button_link`]?.en} className='fw-bolder fs-5 Info-button mx-2  rounded-5' style={styles.color}>{oneFeedsTwoData[`offer_section_${val}_button_name`]?.en}</Link>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SectionThree;