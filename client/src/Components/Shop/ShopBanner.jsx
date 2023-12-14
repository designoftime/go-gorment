import React, { useEffect, useState } from 'react'
import '../Accounts/Ollys-Login/Login.css'
import './Shop.css'
export const ShopBanner = ({ShopPretzelBanner,ShopOlivesBanner,ShopChocoPretzelBanner}) => {
  const shopBannerData = ShopPretzelBanner?ShopPretzelBanner:ShopOlivesBanner?ShopOlivesBanner:ShopChocoPretzelBanner;
  const olivColor =ShopOlivesBanner?{color:"#412f59"}:{color:"#4c4294"} 
  
 const [showValue,setShowValue]= useState(window.innerWidth);
 useEffect(()=>{
  const handleWidth =()=>{
    setShowValue(window.innerWidth);
  }
  window.addEventListener('resize',handleWidth);
  return ()=>{
    window.removeEventListener('resize',handleWidth);
  }
 })
  return (
    <div>
      <section className='Shop-section container-fluid g-0 mx-auto'>
        {/* Shop Menu bar */}

        {/* Pretzel Thins Section */}
        <div className="ShopPretzelThins-section container-fluid g-0">
          {/* Banner */}



                {shopBannerData.map((item)=>{
                  return (<div className={showValue > 1000?"Shop-banner":"Shop-banner d-flex flex-column"} key={item.id}>
                    {showValue < 1000?<div><img className='shopbannerimge' src={item.banimge} alt="" /></div>:""}
                  <div className="Shopbanner-left mx-3">
                    <h1 className='Shopbanner-header mb-3 mx-5' style={olivColor}>{item.title}</h1>
                    <div className='Shopbanner-para my-3 mx-5' style={olivColor}>{item.para}</div>
                    <div className="ShopBiconsmain d-flex mx-5 my-5">
                      <div className="SBicon">
                        <img src={item.banicon1} alt={item.banicon1} />
                      </div>
                      <div className="SBicon">
                        <img src={item.banicon2} alt={item.banicon2} />
                      </div>
                      <div className="SBicon">
                        <img src={item.banicon3} alt={item.banicon3} />
                      </div>
                      <div className="SBicon">
                        <img src={item.banicon4} alt={item.banicon4} />
                      </div>
                    </div>
                  </div>
                 {showValue > 1000?<div className="Shopbanner-right" ><img className='shopbannerimge' src={item.banimge} alt="" /></div>:""} 
                </div>)
                })}
          
        </div>
      </section>
    </div>
  )
}
