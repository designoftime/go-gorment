import React, { useEffect, useState } from 'react'
import '../Accounts/Ollys-Login/Login.css'
import './Shop.css'
import { BsFillStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import NewMobileProduct from './NewMobileProduct'
import { fetchProductPrice, findProductAttribute } from '../../Redux/actions/productService'
import requests from '../../Services/httpService';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductReviews = ({productId, styles}) => {

  const [reviews, setReviews] = useState({});
  
  useEffect(() => {

    const fetchReviews = async () => {
      const res = await requests.get(`/reviews/by-product/${productId}`);
      setReviews(res);
    }

    fetchReviews();
  },[]);

  return (
    <span style={styles?.color} > <span style={styles?.color}>{reviews?.totalReviews}</span> reviews</span>
  )

}

const ShopProductImage = ({product}) => {

  const [viewProduct, setViewProduct] = useState(false);

  return (<div className="ShopProducts-imge d-flex">
  <img className='ShopProduct-img1' src={product?.image[0]} onMouseOut={(e) => {
      e.currentTarget.src = product?.image[0]
      setViewProduct(false);
    }
    } onMouseOver={(e) => {
      e.currentTarget.src = product?.image[1];
      setViewProduct(true);
  }} alt="" /><br />
  {
    viewProduct && <div><Link style={{
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      padding: "20px",
      backgroundColor: "white",
      color: "blue"
    }} to={`/products/${product?.slug}`}> View Product </Link>
    </div>
  }
</div>)
}

export const Products = ({categoryId, variants, styles}) => {
  
  const [products, setProducts] = useState([]);
  
  const fetchProductByCategoryId = async (id) => {
    try {
      const res = await requests.get(`/products/category/${id}`);
      
      if(res?.data){
        setProducts(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductByCategoryId(categoryId);
  }, []);
  
  return (
    <div>
        <div className="ShopProducts-section container-fluid row justify-content-around g-0 pt-5 pb-5" style={styles?.fullBg}>
        {/* <Swiper
                    className='swiper'
                    // ref={first}
                    spaceBetween={0}
                    slidesPerView={4}
                    // onSlideChange={(e) => {
                    //     setActiveSlider(e.activeIndex)
                    // }}
          > */}
              {
                (products.length) ? products.map((product) => {
                  return (
                    <div className="ShopProducts col-sm-2 container g-0 " key={product._id}>
                    {/* <SwiperSlide> */}
                      <div className="ShopProducts-content text-center">
                        <ShopProductImage product={product} />
                        <div className="ShopProductsheader" style={styles?.color} >
                          {product?.title?.en}
                        </div>
                        <div className="ShopProducts-size text-uppercase fw-bold" style={styles?.color}>{findProductAttribute(product,variants)}</div>
                        <div className="ShopProductsPrice fw-bold fs-5" ><span>&#8377;</span><span style={styles?.color}>{fetchProductPrice(product)}</span></div>
                        <div className="ShopProductbutton" style={styles?.color}>
                          <Link to={`/products/${product?.slug}`} className='SVPbtn bg-*' style={styles?.color}> View Product </Link>
                        </div>
                        <div className="ShopProduct-starreview">
                          <span >
                            <span className="jdgm-star jdgm--on bold" ><BsFillStarFill /></span> <span />
                            <span className="jdgm-star jdgm--on bold" ><BsFillStarFill /></span> <span />
                            <span className="jdgm-star jdgm--on bold" ><BsFillStarFill /></span> <span />
                            <span className="jdgm-star jdgm--on bold" ><BsFillStarFill /></span> <span />
                            <span className="jdgm-star jdgm--on bold" ><BsFillStarFill /></span> <span />
                          </span>
                          <ProductReviews productId={product._id} styles={styles} />
                        </div>
                      </div>
                    {/* </SwiperSlide> */}
                    </div>
                  )
                }) : null
              }
          {/* </Swiper> */}
          </div>
    </div>
  )
}
