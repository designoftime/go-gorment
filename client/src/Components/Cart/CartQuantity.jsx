import React, { useEffect, useState } from 'react'
import requests from '../../Services/httpService';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartLocal } from '../../Redux/actions/cartServices';

const CartQuantity = ({cartAttribute, cartSubscription, cartId, quantity, fetchCarts}) => {

    const [productQuantity, setProductQuantity] = useState(quantity);
    const user = JSON.parse(localStorage.getItem("user"));
    const reduxCarts = useSelector((store => store.carts?.carts));
    const dispatch = useDispatch();

    useEffect(() => {
        setProductQuantity(quantity);
    }, [quantity]);

    const updateCartQuantity = async (cartId, newQuantity) => {
        if(!user?.token){
            updateCartLocal({attribute: cartAttribute,subscription: cartSubscription,quantity: newQuantity});
            return;
        }

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