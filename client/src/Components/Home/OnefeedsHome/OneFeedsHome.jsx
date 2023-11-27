import React from 'react'
import './OneFeedHome.css';
import Image1 from './images/pretzel-dark.png'
import { BsArrowRight } from 'react-icons/bs'
export const OneFeedsHome = () => {
  return (
    <div>
      <section className='OneFeeds-section'>
        <div className="contianer-fluid g-0">
          <div className='cta-image'>
            <div className="ctamain container g-0 mx-auto">
              <div className="ctaleft wow animate__animated animate__fadeInUp">
                <h4 className="cta-text">WITH EVERY ORDER PLACED, WE DONATE A SCHOOL MEAL TO A CHILD IN NEED.</h4>
                <div className="cta-btn">
                  <a href="#" className="ctabutton">One Feeds Two <span><BsArrowRight /></span></a>
                </div>
              </div>
              <div className="ctaright">
                <div className="ctaimg">
                  <img className='ctaimages' src={Image1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
