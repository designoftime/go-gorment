import React from 'react'
import "./ThemeThree.css";
import { Link } from 'react-router-dom';

const ThemeThree = ({Data}) => {
  
  return (
    <>
        <div className='theme-3' style={Data && {flexDirection: "row-reverse", backgroundColor: Data.backgroundColor, color: Data.color}}>
            <div className="theme3-img">
                    <img src={Data.img} alt="" />
            </div>
            <div className='theme-3-content'>
                <h1 className='theme3-heading' style={{color: Data.color}}>THE FIRST PACKS HIT THE STREETS.. AND AIR</h1>
                <p className='theme3-desc' style={{color: Data.color}}> We launched our first ever olive snack pouches and across the next 3 years we continued on our mission to bring smiles to as many faces as possible with our olives, and we did just that, landing stockists across the UK and internationally. Our garlic & basil olives were even the official olive on a number of airlines! </p>
                {Data.button && <Link to="/collections/all" className='theme3-btn'>Shop Now</Link>}
            </div>
        </div>
    </>
  )
}

export default ThemeThree;