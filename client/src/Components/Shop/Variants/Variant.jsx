import { useEffect, useState } from "react";
import { fetchPrice } from "../../../Redux/actions/productService";
import requests from "../../../Services/httpService";

const Variant = ({index, product,variantPrice, variantData, setVariantPrice, setIsQuantityAvailable, focusVariants,setFocusVariants}) => {

    const isVariantAvailable = (variant) => {

        let variantAvail = variantData.variants?.find((eachVariant) => {
            let parentId = Object.keys(variant)[0];
            let childId = Object.values(variant)[0];
            return parentId == variantData._id && childId == eachVariant._id;
        })

        return variantAvail;
    }

    const handlePrice = (data) => {
        const productPrice = {
            price: fetchPrice(data),
            subscribePrice: 0
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

                    const checkVariant = isVariantAvailable(variant);
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