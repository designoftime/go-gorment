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