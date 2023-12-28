// for Product Related API and Functions

export const fetchProductPrice = (product) => {
    if(Array.isArray(product?.variants) && product?.variants.length){

        let salePrice = Number(product?.variants[0]?.price); 
        if(salePrice){
            return salePrice;
        }
        
        let originalPrice = Number(product?.variants[0]?.originalPrice);
        return originalPrice;
    }
    else{

        let salePrice = Number(product?.prices?.price); 
        if(salePrice){
            return salePrice;
        }

        let originalPrice = Number(product?.prices?.originalPrice);
        return originalPrice;
    } 
}

export const fetchPrice = (product) => {
    let salePrice = Number(product?.price); 
    if(salePrice){
        return salePrice;
    }
    
    let originalPrice = Number(product?.originalPrice);
    return originalPrice;
}

export const fetchSubscriptionPrice = (product) => {
    let subscriptionPrice = Number(product?.subscription); 
    return subscriptionPrice || 0;
}

export const findProductAttribute = (product, variants) => {
    let val = Object.values(product?.variants[0])[0];
    const findAttribute = variants ? variants.find((variant) => {
      return (variant._id == val);
    }) : null;

    return findAttribute?.name?.en;
}

export const isVariantAvailable = (variantData, variant) => {

    let parentId = Object.keys(variant)[0];
    let childId = Object.values(variant)[0];

    let variantAvail = variantData.variants?.find((eachVariant) => {
        return parentId == variantData._id && childId == eachVariant._id;
    })

    return variantAvail;
}

export const isVariantAvailableAll = (variantData, variant) => {

        let parentId = Object.keys(variant)[0];
        let childId = Object.values(variant)[0];

        let variantAvail = null;
        variantData.forEach((eachVariants) => {

            if(eachVariants._id == parentId){
                variantAvail = eachVariants.variants?.find((eachVariant) => {
                    return childId == eachVariant._id;
                });
            }
        });

        return variantAvail;
}

export const getFirstDifferentVariants = (eachvariants, setFocusVariants) => {
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

export const handlePrice = (variantData, data, idx, setVariantPrice, setIsQuantityAvailable) => {

        const checkVariant = variantData?._id ? isVariantAvailable(variantData,data) : isVariantAvailableAll(variantData,data);
        const productPrice = {
            price: fetchPrice(data),
            subscribePrice: fetchSubscriptionPrice(data),
            attribute: checkVariant?.name?.en
        }

        setVariantPrice((prevVal) => {
            const updatedArray = [...prevVal];
            updatedArray[idx] = productPrice; 
            return updatedArray; 
        });
        
        if(Number(data?.quantity) <= 0){
            setIsQuantityAvailable(false);
        }
        else{
            setIsQuantityAvailable(true);
        }
    }