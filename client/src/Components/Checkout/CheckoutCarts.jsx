import React, { useEffect, useState } from 'react';
import Productimage from '../Shop/images/SourCreamHoverimg.jpg'
import requests from '../../Services/httpService';

const CheckoutCarts = () => {

  const [cartData, setCartData] = useState([]);
  const [totalCartVal, setTotalCartVal] = useState(0);

  useEffect(() => {
    const fetchCarts = async () => {
        const res = await requests.get("/cart");
        let totalCartAmount = res?.carts.reduce((sum, currVal) => {
            return sum += (currVal.price * currVal.quantity);
        },0);

        setCartData(res.carts);
        setTotalCartVal(totalCartAmount);
    }

    fetchCarts();
  }, []);

  return (
        <div className="Checkout-right my-5 col-sm-12 col-md-xl-6">
        <div className="Checkout-container w-75">
        {
            cartData.length ? cartData.map((eachCart) => {
                return (
                    <div className="Product-view row" key={eachCart._id}>
                        <div className="col-md-2">
                            <div className="image-block">
                                <img src={eachCart.image} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3> {eachCart.title} </h3>
                            <p> {eachCart.attribute} </p>
                        </div>
                            <div className="col-md-3">
                            <p><span>&#8377; </span>{eachCart.price} </p>
                        </div>
                </div>
                )
            }) : null
        }
        </div>
    </div>
  )
}

export default CheckoutCarts;