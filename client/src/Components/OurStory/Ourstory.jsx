import React from 'react'
import MainHero from './MultipleComponents/MainHero/MainHero'
import ThemeTwo from './MultipleComponents/ThemeTwo/ThemeTwo'
import ThemeThree from './MultipleComponents/ThemeThree/ThemeThree'
import HeroImg6 from './MultipleComponents/images/Hero-img-6.webp';
import HeroImg5 from './MultipleComponents/images/Hero-img-5.webp';
import HeroImg4 from './MultipleComponents/images/Hero-img-4.webp';
import HeroImg3 from './MultipleComponents/images/Hero-img-3.webp';

export const Ourstory = () => {
  return (
    <div className="main-our-story">
      <MainHero/>
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
      }} />
    </div>
  )
}
