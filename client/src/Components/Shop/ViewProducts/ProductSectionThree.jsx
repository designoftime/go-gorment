import React from 'react'
import { getStyles, sliderVal } from '../../../utils/Constants';
const ProductSectionThree = ({data}) => {
    
    if(!data || (data?.section_status!=="show")){
        return;
    }

    const styles = getStyles(data, `background_color`, 'text_color');

    return (
        <div>
            <div className="Product-Hero-Section" style={styles.fullBg}>
                <div className="ProductHeroMain">
                    <div className="ProductHero-left">
                        <img className='Product-hero-img' src={data[`first_img`]} alt={data[`first_img`]} />
                    </div>
                    <div className="ProductHero-right" style={styles.fullBg}>
                        <h1 className='PH-header text-center pt-5 ' style={styles.color}>{data?.top_header}</h1>

                        <div className="PH-content">
                            {sliderVal.map((val,idx) => {
                                return (
                                    <div className='PH-main' key={idx}>
                                        <h5 className='fw-bolder'><strong className='PH-sub-header' style={styles.color}>{data[`${val}_title`]}</strong></h5>
                                        <p className='PH-sub-content' style={styles.color}>{data[`${val}_description`]}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSectionThree;