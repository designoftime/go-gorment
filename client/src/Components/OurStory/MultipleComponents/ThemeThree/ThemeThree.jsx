import React from 'react'
import "./ThemeThree.css";
import { Link } from 'react-router-dom';

const ThemeThree = ({ourStoryData, val, styles, direction}) => {
  
  if(!ourStoryData[`section_${val}_status`]){
    return;
  }

  return (
    <>
        <div className='theme-3' style={{...styles.fullBg, ...direction}}>
            <div className="theme3-img">
                    <img src={ourStoryData[`section_${val}_img`]} alt="" />
            </div>
            <div className='theme-3-content'>
                <h1 className='theme3-heading' style={styles.color}>{ourStoryData[`section_${val}_title`].en}</h1>
                <p className='theme3-desc' style={styles.color}> {ourStoryData[`section_${val}_description`].en} </p>
                {ourStoryData[`section_${val}_button_name`]?.en && <Link to={ourStoryData[`section_${val}_button_link`].en} className='theme3-btn'>{ourStoryData[`section_${val}_button_name`].en}</Link>}
            </div>
        </div>
    </>
  )
}

export default ThemeThree;