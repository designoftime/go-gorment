import React from 'react';
import { featurePromo } from '../../../utils/Constants';

const FeaturePromo = ({featurePromoData}) => {

  if(!featurePromoData){
    return;
  }

  return (
    <div className="container-fluid g-0">
        <div className="Stockist-section container py-4  mx-auto">
            <div className="Stockist-main">
            {
                featurePromo.map((val,idx) => {
                    if(!featurePromoData[`feature_promo_${val}_img`]) return;

                    return (
                        <div className="Stockist-content" key={idx}>
                            <img src={featurePromoData[`feature_promo_${val}_img`]} alt="" />
                        </div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default FeaturePromo;