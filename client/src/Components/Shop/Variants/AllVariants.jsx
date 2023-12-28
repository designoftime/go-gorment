import React, { useEffect } from 'react'
import requests from '../../../Services/httpService'
import Variant from './Variant';
import { useState } from 'react';
import { getFirstDifferentVariants, handlePrice } from '../../../Redux/actions/productService';

const AllVariants = ({product,setProductPrice,setIsQuantityAvailable}) => {

  const [variants, setVariants] = useState([]);
  const [variantPrice, setVariantPrice] = useState([]);
  const [focusVariants, setFocusVariants] = useState([]);

  useEffect(() => {
    const fetchVariants = async () => {
        const res = await requests.get(`/attributes/show`);
        setVariants(res);

        if(product?.variants){
            const firstDifferentVariants = getFirstDifferentVariants(product.variants, setFocusVariants);
            firstDifferentVariants.forEach((eachvariants,idx) => {
              handlePrice(variants, eachvariants,idx, setVariantPrice, setIsQuantityAvailable);
            });
        }
    }

    fetchVariants();
  },[]);

  useEffect(() => {

    if(product?.variants || variants.length){
      const firstDifferentVariants = getFirstDifferentVariants(product.variants, setFocusVariants);
      firstDifferentVariants.forEach((eachvariants,idx) => {
        handlePrice(variants, eachvariants,idx, setVariantPrice, setIsQuantityAvailable);
      });
    }

  },[product]);

  useEffect(() => {
    let totalPrice = variantPrice.reduce((sum, currVal) => sum + currVal.price, 0);
    let subscribeTotalPrice = variantPrice.reduce((sum, currVal) => sum + currVal.subscribePrice, 0);
    let allAtrributes = variantPrice.reduce((sum, currVal) => sum += "," + (currVal.attribute), "");
    
    setProductPrice({
      price: totalPrice,
      subscribePrice: subscribeTotalPrice,
      attribute: allAtrributes
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