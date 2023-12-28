import React, { useEffect, useState } from "react";
import Productimage from "../Shop/images/SourCreamHoverimg.jpg";
import requests from "../../Services/httpService";

const CheckoutCarts = () => {
    const [cartData, setCartData] = useState([]);
    const [totalCartVal, setTotalCartVal] = useState(0);

    const user = JSON.parse(localStorage.getItem("user"));
    
    useEffect(() => {
        
        if(!user?.token){
            const localCarts = JSON.parse(localStorage.getItem("carts"));
            if(!localCarts){
                return;
            }
            let totalCartAmount = localCarts.reduce((sum, currVal) => {
                return (sum += currVal.price * currVal.quantity);
            }, 0);

            setCartData(localCarts);
            setTotalCartVal(totalCartAmount);
            return;
        }

        const fetchCarts = async () => {
            const res = await requests.get("/cart");
            let totalCartAmount = res?.carts.reduce((sum, currVal) => {
                return (sum += currVal.price * currVal.quantity);
            }, 0);

            setCartData(res.carts);
            setTotalCartVal(totalCartAmount);
        };

        fetchCarts();
    }, []);

    return (
        <div className="Checkout-right my-5 col-sm-12 col-md-xl-6">
            <div className="Checkout-container">
                {cartData.length
                    ? cartData.map((eachCart) => {
                          return (
                              <div
                                  className="Product-view row"
                                  key={eachCart._id}
                              >
                                  <div className="col-md-2 checkout-proudct-img ">
                                      <div className="image-block">
                                          <img src={eachCart.image} alt="" />
                                      </div>
                                      <span>1</span>
                                  </div>
                                  <div className="col-md-7 checkout-proudct-info">
                                      <h3> {eachCart.title} </h3>
                                      <p> {eachCart.attribute} </p>
                                  </div>
                                  <div className="col-md-2 checkout-proudct-price">
                                      <p>
                                          <span>&#8377; </span>
                                          {eachCart.price}{" "}
                                      </p>
                                  </div>
                              </div>
                          );
                      })
                    : null}
            </div>
        </div>
    );
};

export default CheckoutCarts;
