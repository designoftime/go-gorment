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