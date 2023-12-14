import React from 'react'
import MainHero from './MultipleComponents/MainHero/MainHero'
import ThemeTwo from './MultipleComponents/ThemeTwo/ThemeTwo'
import ThemeThree from './MultipleComponents/ThemeThree/ThemeThree'
import { sliderVal } from '../../utils/Constants';
import { useSelector } from 'react-redux';

const ourStoryComponent = (ourStoryData,val) => {

  const styles = {
    fullBg: {
      backgroundColor: `${ourStoryData[`section_${val}_background_color`]?.en}`,
      color: `${ourStoryData[`section_${val}_text_color`]?.en}`
    },
    color: {
      color: `${ourStoryData[`section_${val}_text_color`]?.en}`
    },
    bg: {
      backgroundColor: `${ourStoryData[`section_${val}_background_color`]?.en}`
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
      {/* <MainHero/>
      <ThemeTwo Data={{
        button: true,
        img: HeroImg3
      }} />
      <ThemeThree Data={{
        img: HeroImg4,
        backgroundColor: "#c8e0d4",
        color: "#412f59",
        button: false
      }} />
      <ThemeTwo Data={{
        backgroundColor: "#412f59",
        color: "#c8e0d4",
        button: false,
        img: HeroImg6
      }} />
      <ThemeThree Data={{
        direction: "row-reverse",
        backgroundColor: "#c05a8c",
        color: "#fff",
        img: HeroImg5,
        button: true
      }} /> */}
    </div>
  )
}
