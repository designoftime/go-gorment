import React, { useState } from 'react'
import "./ThemeTwo.css"
import { Link } from 'react-router-dom';

const ThemeTwo = ({ourStoryData, val, styles}) => {

    if(!ourStoryData[`section_${val}_status`]){
        return;
    }

  return (
    <>
            <div className="theme2-hero" style={styles.fullBg}>
            {ourStoryData[`section_${val}_title`]?.en && <h1 className='main-heading' style={styles.color}>{ourStoryData[`section_${val}_title`].en}</h1> }
            <div className="theme2-content">
            {ourStoryData[`section_${val}_img`] && 
                    <div className="theme2-img">
                        <img src={ourStoryData[`section_${val}_img`]} alt="" />
                    </div>
            }
                    <div className="theme2-container">
                    {ourStoryData[`section_${val}_description_1`].en && <p className='theme2-desc' style={styles.color}>{ourStoryData[`section_${val}_description`].en}</p>
                    }
                    {ourStoryData[`section_${val}_description_1`].en && <p className='theme2-desc' style={styles.color}> {ourStoryData[`section_${val}_description_1`].en}</p>
                    }
                    {ourStoryData[`section_${val}_button_name`]?.en && <Link to={ourStoryData[`section_${val}_button_link`].en} className='theme2-btn'>{ourStoryData[`section_${val}_button_name`].en}</Link>}
                    </div>
                </div>
            </div>
        </>
  )
}

export default ThemeTwo;