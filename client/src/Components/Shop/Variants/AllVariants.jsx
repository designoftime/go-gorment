import React, { useEffect } from 'react'
import requests from '../../../Services/httpService'
import Variant from './Variant';
import { useState } from 'react';
import { fetchPrice } from '../../../Redux/actions/productService';

const AllVariants = ({product,setProductPrice,setIsQuantityAvailable}) => {

  const [variants, setVariants] = useState([]);
  const [variantPrice, setVariantPrice] = useState([]);
  const [focusVariants, setFocusVariants] = useState([]);

  useEffect(() => {
    const fetchVariants = async () => {
        const res = await requests.get(`/attributes/show`);
        setVariants(res);
        // console.log(res);
    }

    fetchVariants();
  },[]);

  useEffect(() => {

    const getFirstDifferentVariants = (eachvariants) => {
      const seenVariants = new Set();
      const result = [];
    
      for (const val of eachvariants) {
        const key = Object.keys(val)[0];
        const value = Object.values(val)[0];
    
        if (!seenVariants.has(key)) {
          seenVariants.add(key);
          result.push(val);
          setFocusVariants((prev) => {
            const updatedArray = [...prev];
            updatedArray.push(value); 
            return updatedArray;
          });
        }
      }
    
      return result;
    };
    
    const handlePrice = (data) => {
      const productPrice = {
          price: fetchPrice(data),
          subscribePrice: 0
      }

      setVariantPrice((prevVal) => {
          const updatedArray = [...prevVal];
          updatedArray.push(productPrice); 
          return updatedArray; 
      });
      
      if(Number(data?.quantity) <= 0){
          setIsQuantityAvailable(false);
      }
      else{
          setIsQuantityAvailable(true);
      }
  }

    if(product?.variants){
      const firstDifferentVariants = getFirstDifferentVariants(product.variants);
      firstDifferentVariants.forEach((eachvariants) => {
        handlePrice(eachvariants);
      });
    }

  },[product]);

  useEffect(() => {
    let totalPrice = variantPrice.reduce((sum, currVal) => sum + currVal.price, 0);
    let subscribeTotalPrice = variantPrice.reduce((sum, currVal) => sum + currVal.subscribePrice, 0);
    console.log(variantPrice);  
    setProductPrice({
      price: totalPrice,
      subscribePrice: subscribeTotalPrice
    });
  }, [variantPrice]);

  return (
    <div className="VPselect-size my-4 fw-normal  row">
        {
            variants.map((variant, idx) => {
                return (
                    <div className='row' key={idx}>
                        <p className='fw-bolder select-size-header '>{variant?.name?.en}</p>
                        <Variant key={idx} index={idx} product={product} variantPrice={variantPrice} variantData={variant} setIsQuantityAvailable={setIsQuantityAvailable} setVariantPrice={setVariantPrice} focusVariants={focusVariants} setFocusVariants={setFocusVariants}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default AllVariants;