import React, { useEffect } from 'react'
import requests from '../../../Services/httpService'
import Variant from './Variant';
import { useState } from 'react';

const AllVariants = ({product,setProductPrice,setIsQuantityAvailable}) => {

  const [variants, setVariants] = useState([]);
  const [variantPrice, setVariantPrice] = useState([]);

  useEffect(() => {
    const fetchVariants = async () => {
        const res = await requests.get(`/attributes/show`);
        setVariants(res);
        // console.log(res);
    }

    fetchVariants();
  },[]);

  useEffect(() => {
    let totalPrice = variantPrice.reduce((sum, currVal) => sum + currVal.price, 0);
    console.log(variantPrice);  
    setProductPrice({
      price: totalPrice,
      subscribePrice: 0
    });
  }, [variantPrice]);

  return (
    <div className="VPselect-size my-4 fw-normal  row">
        {
            variants.map((variant, idx) => {
                return (
                    <div className='row' key={idx}>
                        <p className='fw-bolder select-size-header '>{variant?.name?.en}</p>
                        <Variant key={idx} index={idx} product={product} variantData={variant} setIsQuantityAvailable={setIsQuantityAvailable} setVariantPrice={setVariantPrice} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default AllVariants;