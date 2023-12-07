import React from 'react'
import snacksgif from './gif/snacks.gif'
import snacksmile from './gif/Smile426f.svg'
import './snacksGif.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SnacksGif = () => {

    const promotionBannarData = useSelector(store => store.storeSettings?.home);

    if(!promotionBannarData){
        return;
    }

    console.log(promotionBannarData);

    return (
        <div className=''>
            <div className='container-fluid g-0 main-snack-banner'>
                <div className="d-flex">
                    <div className="row snake-banner">
                        <div className={window.innerWidth <= 767 ? "left-container" : "left-container col-md-6"}>
                            <h2 className='heading'>{ promotionBannarData?.promotion_title?.en }</h2>
                            {
                                window.innerWidth <= 767 ? 
                                <img className='mobile-image' src={promotionBannarData?.permotion_banner_img ? promotionBannarData.permotion_banner_img : snacksgif} alt="" /> : ""
                            }
                            <p className='desc'>
                                { promotionBannarData?.promotion_description?.en }
                            </p>
                            <Link to={promotionBannarData?.promotion_button_link ? promotionBannarData.promotion_button_link : "/collections/all"} className='olly-btn'>{promotionBannarData?.promotion_button_name?.en ? promotionBannarData.promotion_button_name.en : "SHOP NOW"}</Link>
                        </div>

                        {window.innerWidth <= 767 ? ""

                            :
                            <div className={window.innerWidth <= 767 ? "right-container" : "right-container col-md-6"}
                            >
                                <img className={window.innerWidth <= 767 ? "" : 'w-full'} src={promotionBannarData?.permotion_banner_img ? promotionBannarData.permotion_banner_img : snacksgif} alt="" />
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
