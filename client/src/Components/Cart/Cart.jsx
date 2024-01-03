import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffCanvas from "react-bootstrap/Offcanvas";
import ProgressBar from "react-bootstrap/ProgressBar";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiSolidTrashAlt } from "react-icons/bi";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import Backarrow from "./images/back.svg";
import "./Cart.css";
import "../Accounts/Ollys-Login/Login.css";
import "../Navigation/Navigation1.css";
import "../Navigation/Navigation2.css";
import cartProductImg1 from "../Shop/images/SourCreamHoverimg.jpg";
import cartProductImg2 from "../Shop/images/DarkChoc-Case_360x.png";
import Star from "./images/star.svg";
import requests from "../../Services/httpService";
import CartQuantity from "./CartQuantity";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartLocal } from "../../Redux/actions/cartServices";
export const Cart = () => {

  const [showcart, setShowCart] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [totalCartVal, setTotalCartVal] = useState(0);

  const handleShow = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleClose = () => setShowCart(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchCarts = async () => {

    if(!user?.token){
      const localCarts = JSON.parse(localStorage.getItem("carts"));

      if(!localCarts){
        return;
      }
      
      let totalCartAmount = localCarts.reduce((sum, currVal) => {
        return sum += (currVal.price * currVal.quantity);
      },0);
      
      setCartData(localCarts);
      setTotalCartVal(totalCartAmount);
      return;
    }

    const res = await requests.get("/cart");
    console.log(res);
    let totalCartAmount = res?.carts.reduce((sum, currVal) => {
        return sum += (currVal.price * currVal.quantity);
    },0);
    
    setCartData(res.carts);
    setTotalCartVal(totalCartAmount);
  };

  useEffect(() => {
    fetchCarts();
  }, [showcart]);

  const deleteCartItem = (cartId) => {
    
    if(!user?.token){
      deleteCartLocal(cartId);
      fetchCarts();
      return;
    }

    const deleteCartItem = async (cartId) => {
        const res = await requests.delete(`/cart/${cartId}`);
        fetchCarts();
    }

    deleteCartItem(cartId);
  }

  return (
    <div>
      <button onClick={handleShow} className="accountIcon nav-link">
        <MdOutlineShoppingBag />
      </button>
      {/* <button onClick={handleShow} className='accountIcon nav-link '><input type="text" value={cartProductData.length} className="Showprouctno" readOnly /></button> */}
      <OffCanvas
        show={showcart}
        placement="end"
        onHide={handleClose}
        name="end"
      >
        <OffCanvas.Header className="accountIcon CartmainHeader">
          <button onClick={handleClose} className="cartClosebtn">
            <img src={Backarrow} alt={Backarrow} />
          </button>
          <OffCanvas.Title className="Cartheader">Your Cart</OffCanvas.Title>
        </OffCanvas.Header>
        <OffCanvas.Body>
          {cartData.length == 1 ? (
            <p className="ProgressBartext">
              <img src={Star} alt={Star} />
              <span /> <strong className="ProgressBartext">REWARDS</strong>{" "}
              Spend another <span>&#8377; </span>12.50 to qualify for free shipping
            </p>
          ) : cartData.length > 1 ? (
            <p className="ProgressBartext">
              <img src={Star} alt={Star} />
              <span /> <strong className="ProgressBartext">REWARDS</strong>{" "}
              Great! You have got free shipping!
            </p>
          ) : (
            <p className="ProgressBartext">
              <img src={Star} alt={Star} />
              <span /> <strong className="ProgressBartext">REWARDS</strong>{" "}
              Spend atleast <span>&#8377; </span>25.00 to qualify for free shipping
            </p>
          )}
          {cartData.length == 1 ? (
            <ProgressBar now={50} />
          ) : cartData.length > 1 ? (
            <ProgressBar now={100} />
          ) : (
            <ProgressBar now={0} />
          )}
          <div className="CartProduct">
            {cartData.length ?
              cartData.map((eachCart, idx) => {
                return (
                  <div className="Cartgrid my-4" key={idx}>
                    <div className="cartproductimg mt-1">
                      <img src={eachCart?.image} alt={eachCart?.image} />
                    </div>
                    <div className="cartProductremaing">
                      <div className="cartRemainpart1">
                        <div className="cartProductName mt-1">
                          {eachCart?.title}
                        </div>
                        <div className="cartProductDel ms-2" onClick={() => deleteCartItem(eachCart?._id ? eachCart?._id : {attribute: eachCart.attribute, subscription: eachCart?.subscription})}>
                          <BiSolidTrashAlt />
                        </div>
                      </div>
                      {
                        (eachCart?.attribute) ? <div className="cartProductSize">
                          {eachCart?.attribute}
                        </div> : null
                      }
                      {eachCart?.subscription && <div> {eachCart?.subscription} </div>}
                      <div className="cartRemainPart2">
                        <CartQuantity cartAttribute={eachCart?.attribute} cartSubscription={eachCart?.subscription} cartId={eachCart?._id} quantity={eachCart?.quantity} fetchCarts={fetchCarts} />
                        <div className="cartProductPrice">
                          <span>&#8377; </span>
                          {eachCart?.price}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }) : null}
          </div>
        </OffCanvas.Body>
        <div className="CartOrder-section w-100">
          <div className="CartOrder-details">
            <div className="CartOrder-header">Order Total</div>
            <div className="CartOrder-Price">
              <span>&#8377; </span>
              {totalCartVal}
            </div>
          </div>
          <div className="Cartbtn">
            <button className="Checkoutbutton">
              <Link to="/checkouts">Checkout</Link>
            </button>
          </div>
        </div>
      </OffCanvas>
    </div>
  );
};
