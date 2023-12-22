import React, { useEffect, useState } from 'react'
import '../Accounts/Ollys-Login/Login.css'
import './Shop.css'
import { BsFillStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import NewMobileProduct from './NewMobileProduct'
import { fetchProductPrice, findProductAttribute } from '../../Redux/actions/productService'
import requests from '../../Services/httpService'

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

export const Products = ({categoryId, variants}) => {
  
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
        <div className="ShopProducts-section container-fluid row justify-content-around g-0 mt-5 pb-5">
              {
                (products.length) ? products.map((product) => {
                  return (
                    <div className="ShopProducts col-sm-2 container g-0 " key={product._id}>
                      <div className="ShopProducts-content text-center">
                        <ShopProductImage product={product} />
                        <div className="ShopProductsheader" >
                          {product?.title?.en}
                        </div>
                        <div className="ShopProducts-size text-uppercase fw-bold" >{findProductAttribute(product,variants)}</div>
                        <div className="ShopProductsPrice fw-bold fs-5" ><span>&#8377;</span><span>{fetchProductPrice(product)}</span></div>
                        <div className="ShopProductbutton">
                          <Link to={`/products/${product?.slug}`} className='SVPbtn bg-*' > View Product </Link>
                        </div>
                        <div className="ShopProduct-starreview">
                          <span >
                            <span className="jdgm-star jdgm--on bold" ><BsFillStarFill /></span> <span />
                            <span className="jdgm-star jdgm--on bold" ><BsFillStarFill /></span> <span />
                            <span className="jdgm-star jdgm--on bold" ><BsFillStarFill /></span> <span />
                            <span className="jdgm-star jdgm--on bold" ><BsFillStarFill /></span> <span />
                            <span className="jdgm-star jdgm--on bold" ><BsFillStarFill /></span> <span />
                          </span>
                          <span > <span >28</span> reviews</span>
                        </div>
                      </div>
                    </div>
                  )
                }) : null
              }
            </div>
    </div>
  )
}
