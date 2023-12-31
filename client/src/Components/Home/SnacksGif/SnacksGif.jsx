import React, { useEffect, useState } from 'react'
import snacksgif from './gif/snacks.gif'
import snacksmile from './gif/Smile426f.svg'
import './snacksGif.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SnacksGif = ({promotionBannarData, styles}) => {
    
    const [showValue,setShowValue]= useState(window.innerWidth);
    useEffect(()=>{
        const handleWidth =()=>{
            setShowValue(window.innerWidth);
        };
        window.addEventListener('resize',handleWidth);
        
        return ()=>{
            window.removeEventListener('resize',handleWidth);
        }
    },[]);
    
    if(!promotionBannarData){
        return;
    }
    return (
        (promotionBannarData?.promotion_banner_status) ? (
        <div className=''>
            <div className='container-fluid g-0 main-snack-banner' style={styles.fullBg}>
                <div className="d-flex">
                    <div className="row snake-banner">
                        <div className={showValue <= 767 ? "left-container" : "left-container col-md-6"}>
                            {promotionBannarData?.promotion_title?.en && <h2 className='heading' style={styles.color}>{promotionBannarData.promotion_title.en}</h2>}
                            {
                                showValue <= 767 ? 
                                promotionBannarData?.permotion_banner_img && <img className='mobile-image' src={promotionBannarData.permotion_banner_img} alt="" /> : ""
                            }
                            {promotionBannarData?.promotion_description?.en && <p className='desc' style={styles.color}>
                                {promotionBannarData.promotion_description.en}
                            </p>}
                            {promotionBannarData?.promotion_button_name?.en && <Link to={promotionBannarData.promotion_button_link} className='olly-btn' style={styles.color}>{promotionBannarData.promotion_button_name.en}</Link>}
                        </div>

                        {showValue <= 767 ? ""

                            :
                            promotionBannarData?.permotion_banner_img && <div className={showValue <= 767 ? "right-container" : "right-container col-md-6"}
                            >
                                <img className={showValue <= 767 ? "" : 'w-full'} src={promotionBannarData.permotion_banner_img} alt="" />
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
