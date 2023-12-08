import React from 'react'
import snacksgif from './gif/snacks.gif'
import snacksmile from './gif/Smile426f.svg'
import './snacksGif.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SnacksGif = ({promotionBannarData}) => {

    if(!promotionBannarData){
        return;
    }

    return (
        (promotionBannarData?.promotion_banner_status) ? (
        <div className=''>
            <div className='container-fluid g-0 main-snack-banner'>
                <div className="d-flex">
                    <div className="row snake-banner">
                        <div className={window.innerWidth <= 767 ? "left-container" : "left-container col-md-6"}>
                            {promotionBannarData?.promotion_title?.en && <h2 className='heading'>{promotionBannarData.promotion_title.en}</h2>}
                            {
                                window.innerWidth <= 767 ? 
                                promotionBannarData?.permotion_banner_img && <img className='mobile-image' src={promotionBannarData.permotion_banner_img} alt="" /> : ""
                            }
                            {promotionBannarData?.promotion_description?.en && <p className='desc'>
                                {promotionBannarData.promotion_description.en}
                            </p>}
                            {promotionBannarData?.promotion_button_name?.en && <Link to={promotionBannarData.promotion_button_link} className='olly-btn'>{promotionBannarData.promotion_button_name.en}</Link>}
                        </div>

                        {window.innerWidth <= 767 ? ""

                            :
                            promotionBannarData?.permotion_banner_img && <div className={window.innerWidth <= 767 ? "right-container" : "right-container col-md-6"}
                            >
                                <img className={window.innerWidth <= 767 ? "" : 'w-full'} src={promotionBannarData.permotion_banner_img} alt="" />
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
        )
        : null
    )
}
