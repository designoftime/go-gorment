import React, { useEffect, useState } from 'react'
import '../Accounts/Ollys-Login/Login.css'
import './Shop.css'
export const ShopBanner = ({shopData, styles}) => {
  
  const [showValue,setShowValue]= useState(window.innerWidth);
  
  useEffect(()=>{
    const handleWidth =()=>{
      setShowValue(window.innerWidth);
    }
    window.addEventListener('resize',handleWidth);
    return ()=>{
      window.removeEventListener('resize',handleWidth);
    }
  });

  return (
    <div>
      <section className='Shop-section container-fluid g-0 mx-auto' style={styles.fullBg}>
        <div className="ShopPretzelThins-section container-fluid g-0">
                  <div className={showValue > 1000?"Shop-banner":"Shop-banner d-flex flex-column"}>
                    {showValue < 1000?<div><img className='shopbannerimge' src={shopData.icon} alt="" /></div>: ""}
                  <div className="Shopbanner-left mx-3">
                    {shopData?.name?.en && <h1 className='Shopbanner-header mb-3 mx-5' style={styles.color}>{shopData?.name?.en}</h1>}
                    {shopData?.description?.en && <div className='Shopbanner-para my-3 mx-5' style={styles.color}>{shopData?.description?.en}</div>}
                    <div className="ShopBiconsmain d-flex mx-5 my-5">
                      {shopData?.icon1 && <div className="SBicon">
                        <img src={shopData?.icon1} alt="Image" />
                      </div>}
                      {shopData?.icon2 && <div className="SBicon">
                        <img src={shopData?.icon2} alt="Image" />
                      </div>}
                      {shopData?.icon3 && <div className="SBicon">
                        <img src={shopData?.icon3} alt="Image" />
                      </div>}
                      {shopData?.icon4 && <div className="SBicon">
                        <img src={shopData?.icon4} alt="Image" />
                      </div>}
                    </div>
                  </div>
                 {showValue > 1000?<div className="Shopbanner-right" ><img className='shopbannerimge' src={shopData.icon} alt="Image" /></div> : ""} 
                </div>  
        </div>
      </section>
    </div>
  )
}
