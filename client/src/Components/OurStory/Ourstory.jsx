import React from 'react'
import MainHero from './MultipleComponents/MainHero/MainHero'
import ThemeTwo from './MultipleComponents/ThemeTwo/ThemeTwo'
import ThemeThree from './MultipleComponents/ThemeThree/ThemeThree'
import HeroImg6 from './MultipleComponents/images/Hero-img-6.webp';
import HeroImg5 from './MultipleComponents/images/Hero-img-5.webp';
import HeroImg4 from './MultipleComponents/images/Hero-img-4.webp';
import HeroImg3 from './MultipleComponents/images/Hero-img-3.webp';
import { sliderVal } from '../../utils/Constants';
import { useSelector } from 'react-redux';

const ourStoryComponent = (ourStoryData) => {
  return {
    "first": <MainHero ourStoryData={ourStoryData}/>,
    "second": <ThemeTwo Data={{
      button: true,
      img: HeroImg3
    }} />,
    "third": <ThemeThree Data={{
      img: HeroImg4,
      backgroundColor: "#c8e0d4",
      color: "#412f59",
      button: false
    }} />,
    "four": <ThemeTwo Data={{
      backgroundColor: "#412f59",
      color: "#c8e0d4",
      button: false,
      img: HeroImg6
    }} />,
    "five": <ThemeThree Data={{
      direction: "row-reverse",
      backgroundColor: "#c05a8c",
      color: "#fff",
      img: HeroImg5,
      button: true
    }} />
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
          return <div key={val}>{ourStoryComponent(ourStoryData)[val]}</div>;
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
