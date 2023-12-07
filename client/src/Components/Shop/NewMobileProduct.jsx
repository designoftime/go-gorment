import React from 'react'
import '../Accounts/Ollys-Login/Login.css'
import './Shop.css'
import { BsFillStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewMobileProduct = ({ ShopPretezelProducts, ShopOlivesProducts, ShopChocoPretzelProducts, ShopSnacksBundleProducts, MerchProducts, BestSellerProducts }) => {
  
  const shopProductsdata = ShopPretezelProducts ? ShopPretezelProducts : ShopOlivesProducts ? ShopOlivesProducts : ShopChocoPretzelProducts ? ShopChocoPretzelProducts : ShopSnacksBundleProducts ? ShopSnacksBundleProducts : MerchProducts ? MerchProducts : BestSellerProducts;
  // console.log(shopProductsdata);
  // color function
  const olivColor = (ShopOlivesProducts || ShopSnacksBundleProducts) ? { color: "#412f59", borderColor: "#412f59", } : { color: "#4c4294", borderColor: "#4c4294" };
  // console.log(olivColor);
  return (
    <div>
      <Swiper
        className='main-swiper-home'
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation]}
      >
        {
          shopProductsdata.map((items) => {
            return (

              <SwiperSlide>
                <div className="ShopProducts col-sm-2 container g-0 " key={items.id}>
                  <div className="ShopProducts-content text-center">
                    <div className="ShopProducts-imge d-flex">
                      <img className='ShopProduct-img1' src={items.productimge1} alt="" /><br />
                      <img className='ShopProduct-imghover' src={items.imgehover} alt="" />

                    </div>
                    <div className="ShopProductsheader" style={olivColor}>
                      {items.title}
                    </div>
                    <div className="ShopProducts-size text-uppercase fw-bold" style={olivColor}>{items.sizeinfo}</div>
                    <div className="ShopProductsPrice fw-bold fs-5" style={olivColor}><span>£</span><span>{items.price}</span></div>
                    <div className="ShopProductbutton">
                      {/* <a href="#" className='SVPbtn bg-*' style={{...olivColor}}>View Product</a> */}
                      <Link to="/shop/viewproduct" className='SVPbtn bg-*' style={olivColor}>View Product </Link>
                      {/* <a href="#" className='SVPbtn bg-*' style={{...olivColor,...funHovered}} onMouseEnter={setBtnHover(true)} onMouseLeave={setBtnHover(false)}>View Product </a> */}
                    </div>
                    {items?.reviews !== "" ? <div className="ShopProduct-starreview">
                      <span style={olivColor}>
                        <span className="jdgm-star jdgm--on bold" style={olivColor}><BsFillStarFill /></span> <span />
                        <span className="jdgm-star jdgm--on bold" style={olivColor}><BsFillStarFill /></span> <span />
                        <span className="jdgm-star jdgm--on bold" style={olivColor}><BsFillStarFill /></span> <span />
                        <span className="jdgm-star jdgm--on bold" style={olivColor}><BsFillStarFill /></span> <span />
                        <span className="jdgm-star jdgm--on bold" style={olivColor}><BsFillStarFill /></span> <span />
                      </span>
                      <span style={olivColor}> <span style={olivColor}>{items.reviews}</span> reviews</span>
                    </div> : ""}
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default NewMobileProduct;
