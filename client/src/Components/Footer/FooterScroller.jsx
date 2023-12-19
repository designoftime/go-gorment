import React from 'react';
import Blogimage1 from "./images/blogimg1.jpg";
import Blogimage2 from "./images/blogimg2.png";
import Blogimage3 from "./images/blogimg3.png";
import Blogimage4 from "./images/blogimg4.jpg";
import Blogimage5 from "./images/blogimg5.jpg";

const FooterScroller = ({scrollerData}) => {

    if(!scrollerData){
        return;
    }

  const scrollImage = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

  return (
    <section className="Blog-sliding-section">
        <div className="container-fluid g-0">
          <div className="Blog-animation-sliding">
            <div className="Blog-sliding-main">
              {
                scrollImage.map((val) => {
                    return (
                        <div className="Blog-sliding-content" id={val}>
                            <img src={scrollerData[`${val}_img`]} className="imagesofblog" alt="" />
                        </div>
                    )
                })
              }
              {/* <div className="Blog-sliding-content">
                <img src={Blogimage2} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage3} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage4} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage5} className="imagesofblog" alt="" />
              </div> */}
            </div>
            <div className="Blog-sliding-main">
            {
                scrollImage.map((val) => {
                    return (
                        <div className="Blog-sliding-content" id={val}>
                            <img src={scrollerData[`${val}_img`]} className="imagesofblog" alt="" />
                        </div>
                    )
                })
              }
              {/* <div className="Blog-sliding-content">
                <img src={Blogimage1} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage2} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage3} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage4} className="imagesofblog" alt="" />
              </div>
              <div className="Blog-sliding-content">
                <img src={Blogimage5} className="imagesofblog" alt="" />
              </div>*/}
            </div> 
          </div>
        </div>
      </section>
  )
}

export default FooterScroller;