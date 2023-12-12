import React, { useState } from 'react'
import "./ThemeTwo.css"
import { Link } from 'react-router-dom';

const ThemeTwo = ({Data}) => {

  return (
    <>
            <div className="theme2-hero" style={Data && {backgroundColor: Data.backgroundColor, color: Data.color}}>
                <h1 className='main-heading' style={Data && {color: Data.color}}>FROM THE KITCHEN TABLE TO FARMERS MARKETS</h1>
                <div className="theme2-content">
                    <div className="theme2-img">
                        <img src={Data.img} alt="" />
                    </div>
                    <div className="theme2-container">
                        <p className='theme2-desc'>When i was a young optimistic olive lover who wanted to rejuvenate the world of olives with new flavours, colour and character. I began marinating olives in my kitchen (to my parents' dismay) and selling them at farmers markets.</p>
                        <p className='theme2-desc'> People loved them, in fact they loved them so much I decided to pivot away from my path to becoming a doctor and focus on olives (to my parents' dismay again!). My brother Sam, and close friend, Yingdee, decided to join forces with me for the journey. And the HMS Olive set sail… </p>
                        {Data?.button ? <Link to="/collections/all" className='theme2-btn'>Shop Now</Link> : null}
                    </div>
                </div>
            </div>
        </>
  )
}

export default ThemeTwo;