import requests from "../../Services/httpService";

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
    const findCart = carts.find((eachCart) => (eachCart.attribute === cartData.attribute && eachCart?.subscription === cartData?.subscription));

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

export async function updateLocalCartToServer(){
    const carts = JSON.parse(localStorage.getItem("carts"));

    if(!carts){
        return;
    }

    await requests.post("/cart/add-to-cart", { cart: carts });

    localStorage.removeItem("carts");
}

export function getTotalAmount (arr){
    let totalAmount = arr.reduce((sum, currVal) => {
                return (sum += currVal.price * currVal.quantity);
    }, 0);

    return totalAmount;
}

export async function deleteUserCarts(){
    await requests.post("/cart/delete-all");
}

export async function updateUserSubscription(carts){
    const user = JSON.parse(localStorage.getItem("user"));

    const allSubscriptionCarts = [];
    carts.forEach((eachCart) => {

        if(!eachCart.subscription){
            return;
        }

        const cartsWithSubscription = {
            productId: eachCart.productId,  
            attribute: eachCart.attribute,  
            subscription_duration: eachCart.subscription,  
            subscription_price: eachCart.price,
            quantity: eachCart.quantity
        };

        allSubscriptionCarts.push(cartsWithSubscription);
    });

    const res = await requests.put("/customer/subscription-active", {
        userId: user._id,
        products: allSubscriptionCarts
    });

    console.log(res);
}

export async function updateUserOrder(orderData){
    await requests.post("/order/add", orderData);
}