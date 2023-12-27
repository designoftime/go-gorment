import { useEffect, useState } from "react";
import { fetchPrice, fetchSubscriptionPrice, isVariantAvailable } from "../../../Redux/actions/productService";
import requests from "../../../Services/httpService";

const Variant = ({index, product,variantPrice, variantData, setVariantPrice, setIsQuantityAvailable, focusVariants,setFocusVariants}) => {

    const handlePrice = (data) => {
        // console.log(variantData);
        const checkVariant = isVariantAvailable(variantData,data);
        const productPrice = {
            price: fetchPrice(data),
            subscribePrice: fetchSubscriptionPrice(data),
            attribute: checkVariant?.name?.en
        }

        setVariantPrice((prevVal) => {
            const updatedArray = [...prevVal];
            updatedArray[index] = productPrice; 
            return updatedArray; 
        });
        
        if(Number(data?.quantity) <= 0){
            setIsQuantityAvailable(false);
        }
        else{
            setIsQuantityAvailable(true);
        }
    }

    return (
        <div className="d-flex justify-content-between">
            {
                product?.variants ? product.variants.map((variant,idx) => {

                    const checkVariant = isVariantAvailable(variantData,variant);
                    if(!checkVariant) return;

                    let variantID = Object.values(variant)[0];
                    
                    return (
                        <div className=" mt-3 text-center mx-auto vpselect-size" key={idx}>
                        <div className='py-1'>
                            <button className={`vpselect-size-box ${(focusVariants[index]===variantID && "vpselect-size-box-focus")}`} onClick={() => {
                                handlePrice(variant);
                                setFocusVariants((prev) => {
                                    const updatedArray = [...prev];
                                    updatedArray[index] = variantID; 
                                    return updatedArray; 
                                });
                            }}>{checkVariant?.name?.en && checkVariant.name.en}</button>
                        </div>
                    </div>
                    )
                }) : null
            }
        </div>
        )
}

export default Variant;