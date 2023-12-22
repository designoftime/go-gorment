import React, { useEffect } from 'react'
import MainHero from './MultipleComponents/MainHero/MainHero'
import ThemeTwo from './MultipleComponents/ThemeTwo/ThemeTwo'
import ThemeThree from './MultipleComponents/ThemeThree/ThemeThree'
import { sliderVal } from '../../utils/Constants';
import { useSelector } from 'react-redux';

const ourStoryComponent = (ourStoryData,val) => {

  const styles = {
    fullBg: {
      background: `${ourStoryData[`section_${val}_background_color`]?.en}`,
      color: `${ourStoryData[`section_${val}_text_color`]?.en}`
    },
    color: {
      color: `${ourStoryData[`section_${val}_text_color`]?.en}`
    },
    bg: {
      background: `${ourStoryData[`section_${val}_background_color`]?.en}`
    }
  }

  return {
    "first": <MainHero ourStoryData={ourStoryData} val={val} styles={styles} />,
    "second": <ThemeTwo ourStoryData={ourStoryData} val={val} styles={styles} />,
    "third": <ThemeThree ourStoryData={ourStoryData} val={val} styles={styles} />,
    "four": <ThemeTwo ourStoryData={ourStoryData} val={val} styles={styles} />,
    "five": <ThemeThree ourStoryData={ourStoryData} val={val} styles={styles} direction={{flexDirection: "row-reverse"}} />
  }
}

export const Ourstory = () => {

  const ourStoryData = useSelector(store => store?.storeSettings?.about_us);

  if(!ourStoryData){
    return;
  }

  return (
    <div className="main-our-story">
      {
        sliderVal.map((val) => {
          {/* console.log(val,ourStoryData[`section_${val}_status`]) */}
          if(!ourStoryData[`section_${val}_status`]){
            return;
          }
          return <div key={val}>{ourStoryComponent(ourStoryData, val)[val]}</div>;
        })
      }
    </div>
  )
}
