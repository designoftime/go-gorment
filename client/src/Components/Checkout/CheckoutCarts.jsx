import React, { useEffect, useState } from "react";
import Productimage from "../Shop/images/SourCreamHoverimg.jpg";
import requests from "../../Services/httpService";
import { toast } from "react-toastify";

const CheckoutCarts = ({cartData,setCartData, totalCartVal,setTotalCartVal,shippingType}) => {
    
    const [subTotalVal, setSubTotalVal] = useState(0);
    const [couponVal, setCouponVal] = useState(0);
    const user = JSON.parse(localStorage.getItem("user"));
    const [shippingCharges, setShippingCharges] = useState(299);

    useEffect(() => {

        if (!user?.token) {
            const localCarts = JSON.parse(localStorage.getItem("carts"));
            if (!localCarts) {
                return;
            }
            let totalCartAmount = localCarts.reduce((sum, currVal) => {
                return (sum += currVal.price * currVal.quantity);
            }, 0);


            setCartData(localCarts);
            setSubTotalVal(totalCartAmount);
            setTotalCartVal(totalCartAmount + shippingCharges);
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

    useEffect(() => {
        const localCarts = JSON.parse(localStorage.getItem("carts"));
        let totalCartAmount = localCarts.reduce((sum, currVal) => {
            return (sum += currVal.price * currVal.quantity);
        }, 0);

        if(shippingType==="standard"){
            setShippingCharges(299);
            setTotalCartVal(totalCartAmount + 299);
        }
        else{
            setShippingCharges(399);
            setTotalCartVal(totalCartAmount + 399);
        }
    }, [shippingType]);

    const handleDiscount = (e) => {
        e.preventDefault();

        let couponCode = e.target?.coupon?.value;

        if(!couponCode.length){
            toast.error("Please Enter Coupon Code !!");
            setTotalCartVal(subTotalVal + shippingCharges);
            setCouponVal(0);
            return;
        }

        const fetchCoupon = async () => {

            if(couponVal){
                return;
            }
            
            const res = await requests.get("/coupon/show");
            
            let checkCoupon = res?.find((eachCoupan) => {
                return (eachCoupan?.couponCode?.toLowerCase() === couponCode?.toLowerCase());
            });

            if(!checkCoupon){
                toast.error("Coupon Code is Not Vaild");
                setCouponVal(0);
                return;
            }

            toast("Coupon Applied Successfully !!");

            if(checkCoupon?.discountType?.type === "percentage"){
                let percentageVal = Number(checkCoupon?.discountType?.value);
                let discountedPrice = Math.floor((totalCartVal * percentageVal) / 100);

                if (discountedPrice > checkCoupon.minimumAmount) {
                    let newTotal = Number(totalCartVal - checkCoupon?.minimumAmount);
                    setTotalCartVal(newTotal);
                    setCouponVal(checkCoupon?.minimumAmount);
                }
                else{
                    let newTotal = Number(totalCartVal - discountedPrice);
                    setCouponVal(discountedPrice);
                    setTotalCartVal(newTotal);
                }
            }
            else{
                let fixedVal = checkCoupon?.discountType?.value;
                
                if (totalCartVal <= (fixedVal + 100)) {
                    toast.error(`Cart Price Should be More than Discounted Price`);
                    return;
                }
                
                let newTotal = Number(totalCartVal - fixedVal);
                setTotalCartVal(newTotal);
                setCouponVal(fixedVal);
            }
        }

        fetchCoupon();
    }

    return (
        <div className="Checkout-right my-5 col-sm-12 col-md-xl-6">
            <div className="Checkout-container">
                {cartData.length
                    ? cartData.map((eachCart,idx) => {
                          return (
                              <div
                                  className="Product-view row"
                                  key={eachCart._id || idx}
                              >
                                  <div className="col-md-2 checkout-proudct-img ">
                                      <div className="image-block">
                                          <img src={eachCart.image} alt="" />
                                      </div>
                                      <span>{eachCart.quantity}</span>
                                  </div>
                                  <div className="col-md-7 checkout-proudct-info">
                                      <h3> {eachCart.title} </h3>
                                      {eachCart.attribute && <p> {eachCart?.attribute} </p>}
                                      {eachCart?.subscription && <h4>
                                          {eachCart?.subscription}
                                      </h4>}
                                      {/* {eachCart?.subscription && <span>
                                        {eachCart?.price + " " + eachCart?.subscription}
                                      </span>} */}
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
            <section className="checkout-footer-section">
                {/* <div className="hr-black-checkout"></div> */}

                <div className="checkout-total-amount-info">
                    <form className="checkout-discount-code" onSubmit={handleDiscount}>
                        <input type="text" name="coupon" placeholder="Discount Code" />
                        <button> Apply </button>
                    </form>

                    <div className="checkout-subtotal">
                        <div className="checkout-subtotal-text">
                            <h2>Subtotal</h2>
                        </div>
                        <div className="checkout-subtotal-price">
                            <span>&#8377;</span> {subTotalVal}
                        </div>
                    </div>
                    <div className="checkout-estimated-shipping">
                        <div className="checkout-subtotal-text">
                            <h2>Estimated Shipping</h2>
                        </div>
                        <div className="checkout-subtotal-price">
                            <span>+ &#8377;</span> {shippingCharges}
                        </div>
                    </div>
                    {couponVal ? <div className="checkout-estimated-shipping">
                        <div className="checkout-subtotal-text">
                            <h2>Discount Coupon</h2>
                        </div>
                        <div className="checkout-subtotal-price">
                            <span>- &#8377;</span> {couponVal}
                        </div>
                    </div> : null}
                    <div className="checkout-total">
                        <div className="checkout-subtotal-text">
                            <h2>Total</h2>
                        </div>
                        <div className="checkout-subtotal-price">
                            <span>&#8377;</span> {totalCartVal}
                        </div>
                    </div>
                </div>
                {/* <div className="checkout-checkout-btn">
                    <button>Place Order</button>
                </div> */}
            </section>
        </div>
    );
};

export default CheckoutCarts;