import React, { useEffect, useState } from 'react'
import requests from '../../Services/httpService';

const CartQuantity = ({cartId, quantity,fetchCarts}) => {

    const [productQuantity, setProductQuantity] = useState(quantity);

    useEffect(() => {
        setProductQuantity(quantity);
    }, [quantity]);

    const updateCartQuantity = async (cartId, newQuantity) => {
        await requests.put(`cart/${cartId}`, {newQuantity});
    }

    const updateAndFetchCart = async (newQuantity) => {
        await updateCartQuantity(cartId,newQuantity);
        await fetchCarts();
    }

    const updateProductQuantity = (event) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) {
            updateAndFetchCart(newValue);
            setProductQuantity(newValue);
        }
    };
    
    const increaseProduct = () => {
        updateAndFetchCart(productQuantity+1);
        setProductQuantity((prevVal) => prevVal + 1);
    };
    
    const decreaseProduct = () => {
        if (productQuantity > 1) {
            updateAndFetchCart(productQuantity - 1);
            setProductQuantity((prevVal) => prevVal - 1);
        }
    };

  return (
    <div className="cartProductQuantity">
        <div>
            <button
                className="counterbtn"
                onClick={
                    decreaseProduct
                }
            >
                <strong>-</strong>
            </button>
        </div>
        <div>
            <input
                type="text"
                onChange={
                    updateProductQuantity
                }
                value={productQuantity}
                className=" counterinput"
            />
        </div>
        <div>
            <button
                className="counterbtn"
                onClick={
                    increaseProduct
                }
            >
            <strong>+</strong>
            </button>
        </div>
    </div>
  )
}

export default CartQuantity