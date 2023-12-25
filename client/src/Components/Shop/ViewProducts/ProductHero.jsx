import React from 'react'
import { sliderVal } from '../../../utils/Constants';
export const ProductHero = ({data}) => {
    
    if(!data){
        return;
    }

    return (
        <div>
            <div className="Product-Hero-Section">
                <div className="ProductHeroMain">
                    <div className="ProductHero-left">
                        <img className='Product-hero-img' src={data[`first_img`]} alt={data[`first_img`]} />
                    </div>
                    <div className="ProductHero-right">
                        <h1 className='PH-header text-center pt-5 '>{data?.top_header}</h1>

                        <div className="PH-content">
                            {sliderVal.map((val,idx) => {
                                return (
                                    <div className='PH-main' key={idx}>
                                        <h5 className='fw-bolder'><strong className='PH-sub-header'>{data[`${val}_title`]}</strong></h5>
                                        <p className='PH-sub-content'>{data[`${val}_description`]}</p>
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
