import { useEffect, useState } from "react";

const SectionTwo = ({oneFeedsTwoData, val, styles}) => {
    
    const [showValue, setShowValue] = useState(window.innerWidth);

    useEffect(() => {
        const handleWidth = () => {
            setShowValue(window.innerWidth);
        };
        window.addEventListener('resize', handleWidth);
        return () => {
            window.removeEventListener('resize', handleWidth);
        }
    }, []);

    if(!oneFeedsTwoData[`section_${val}_status`]){
        return;
    }


    return <div className="BannerO-section pt-5 " style={styles.fullBg}>
            <div className="container">
                {showValue > 1000 && oneFeedsTwoData[`offer_section_${val}_title`]?.en && <div className="BannerO-Heading wow animate__animated animate__fadeInUp my-5 text-center fw-bolder">{oneFeedsTwoData[`offer_section_${val}_title`]?.en}</div>}
                <div className={showValue > 1000 ? 'row' : ''}>

                    <div className="col-md-5 g-0 BannerO-left mt-5">
                        <div className={showValue > 1000 ? 'w-full' : 'w-full col-12 g-0 align-items-center'}>
                           {oneFeedsTwoData[`section_${val}_parent_img`] && <img src={oneFeedsTwoData[`section_${val}_parent_img`]} className='img-fluid rounded wow animate__animated animate__fadeInUp BannerO-imge' alt="Image" />}
                            {oneFeedsTwoData[`section_${val}_child_img`] && <img src={oneFeedsTwoData[`section_${val}_child_img`]} alt="Image" className='BannerO-feeds' />}
                    </div>

                    </div>

                    <div className={showValue > 1000 ? "col-md-7 BannerO-right" : "col-12 BannerO-Right"}>
                        <div >
                            {showValue <= 1000 && oneFeedsTwoData[`offer_section_${val}_title`]?.en && <div className="BannerO-Heading wow animate__animated animate__fadeInUp my-5 fw-bolder" style={styles.color}>{oneFeedsTwoData[`offer_section_${val}_title`]?.en}</div>}
                            {oneFeedsTwoData[`offer_section_${val}_title_1`]?.en && <div className="BannerO-subHeading fs-1 wow animate__animated animate__fadeInUp fw-bolder ">{oneFeedsTwoData[`offer_section_${val}_title_1`].en}</div>}
                            {oneFeedsTwoData[`offer_section_${val}_description`]?.en && <p className="BannerO-content wow animate__animated animate__fadeInUp" style={styles.color}>
                            {oneFeedsTwoData[`offer_section_${val}_description`]?.en}
                            {/* Give Margin  */}
                            {oneFeedsTwoData[`offer_section_${val}_description_1`]?.en}
                            </p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
}

export default SectionTwo;