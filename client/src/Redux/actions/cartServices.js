export function addToCartLocal(cartData){     
    const carts = JSON.parse(localStorage.getItem("carts"));

    if(carts){
        const findCart = carts.find((eachCart) => (eachCart.attribute === cartData.attribute && eachCart?.subscription === cartData?.subscription));

        if(!findCart){
            carts.push(cartData);
        }
        else{
            findCart["quantity"] = (findCart["quantity"] + cartData.quantity);
        }

        localStorage.setItem("carts", JSON.stringify(carts));
    }
    else{
        const localCarts = [cartData];
        localStorage.setItem("carts", JSON.stringify(localCarts));
    }
}

export function deleteCartLocal(cartData){

    const carts = JSON.parse(localStorage.getItem("carts"));

    carts.forEach((eachCart, idx) => {
        if(eachCart.attribute === cartData.attribute && eachCart?.subscription === cartData?.subscription){
            carts.splice(idx, 1);
        }
    });
    
    localStorage.setItem("carts", JSON.stringify(carts));
}

export function updateCartLocal(cartData){

    const carts = JSON.parse(localStorage.getItem("carts"));
    console.log(cartData);
    const findCart = carts.find((eachCart) => (eachCart.attribute === cartData.attribute && eachCart?.subscription === cartData?.subscription));
    console.log(findCart);

    findCart["quantity"] = cartData.quantity;

    localStorage.setItem("carts", JSON.stringify(carts));
}

export function getLocalCarts(){
    const carts = JSON.parse(localStorage.getItem("carts"));

    if(carts){
        return carts;
    }
    
    return null;
}