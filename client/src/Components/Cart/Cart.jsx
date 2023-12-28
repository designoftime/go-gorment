import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import OffCanvas from "react-bootstrap/Offcanvas";
import ProgressBar from 'react-bootstrap/ProgressBar'
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiSolidTrashAlt } from "react-icons/bi";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import Backarrow from './images/back.svg'
import "./Cart.css";
import "../Accounts/Ollys-Login/Login.css"
import "../Navigation/Navigation1.css";
import "../Navigation/Navigation2.css";
import cartProductImg1 from "../Shop/images/SourCreamHoverimg.jpg";
import cartProductImg2 from "../Shop/images/DarkChoc-Case_360x.png";
import Star from './images/star.svg'
import requests from "../../Services/httpService";
export const Cart = () => {
    const [productQuantity, setProductQuantity] = useState(0)
    const [showcart, setShowCart] = useState(false);
    const [cartData, setCartData] = useState([]);
    const handleShow = (event) => {
        event.preventDefault();
        setShowCart(true);
    };
    const handleClose = () => setShowCart(false);
    const cartProductData = [
        {
            id: 1,
            cartpimage: cartProductImg1,
            cartpheader: "SOUR CREAM & ONION PRETZEL THINS",
            cartpsize: "REGULAR (10 X 35G)",
            cartpprice: "£50.00",
        },
        {
            id: 2,
            cartpimage: cartProductImg2,
            cartpheader: "Dark Choclate PRETZEL THINS",
            cartpsize: "REGULAR (10 X 35G)",
            cartpprice: "£60.00",
        },
        {
            id: 3,
            cartpimage: cartProductImg1,
            cartpheader: "SOUR CREAM & ONION PRETZEL THINS",
            cartpsize: "REGULAR (10 X 35G)",
            cartpprice: "£50.00",
        },
        {
            id: 4,
            cartpimage: cartProductImg2,
            cartpheader: "Dark Choclate PRETZEL THINS",
            cartpsize: "REGULAR (10 X 35G)",
            cartpprice: "£60.00",
        },
    ];
    const updateProductQuantity = (event) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) {
            setProductQuantity(newValue);
        }
    };
    const increaseProduct = () => {
        setProductQuantity((prevVal) => prevVal + 1);
    };
    const decreaseProduct = () => {
        if (productQuantity > 1) {
            setProductQuantity((prevVal) => prevVal - 1);
        }
    };

    useEffect(() => {
        const fetchCarts = async () => {
            const res = await requests.get("/cart");
            setCartData(res.carts);
            console.log(res);
        }

        fetchCarts();
    }, []);

    return (
        <div>
            <button onClick={handleShow} className='accountIcon nav-link'><MdOutlineShoppingBag /></button>
            {/* <button onClick={handleShow} className='accountIcon nav-link '><input type="text" value={cartProductData.length} className="Showprouctno" readOnly /></button> */}
            <OffCanvas show={showcart} placement='end' onHide={handleClose} name="end">
                <OffCanvas.Header className='accountIcon CartmainHeader'>
                    <Link to='' onClick={handleClose} className='cartClosebtn'><img src={Backarrow} alt={Backarrow} /></Link>
                    <OffCanvas.Title className="Cartheader">Your Cart</OffCanvas.Title>
                </OffCanvas.Header>
                <OffCanvas.Body>
                    {cartProductData.length == 1 ? <p className="ProgressBartext"><img src={Star} alt={Star} /><span /> <strong className="ProgressBartext">REWARDS</strong> Spend another £12.50 to qualify for free shipping</p> : cartProductData.length > 1 ? <p className="ProgressBartext"><img src={Star} alt={Star} /><span /> <strong className="ProgressBartext">REWARDS</strong> Great! You have got free shipping!</p> : <p className="ProgressBartext"><img src={Star} alt={Star} /><span /> <strong className="ProgressBartext">REWARDS</strong> Spend atleast £25.00 to qualify for free shipping</p>}
                    {cartProductData.length == 1 ? <ProgressBar now={50} /> : cartProductData.length > 1 ? <ProgressBar now={100} /> : <ProgressBar now={0} />}
                    <div className="CartProduct">
                        {
                            cartData.length && cartData.map((eachCart,idx) => {
                                return (
                                <div className="Cartgrid my-4" key={idx}>
                                    <div className="cartproductimg mt-1">
                                        <img
                                            src={eachCart?.image}
                                            alt={eachCart?.image}
                                        />
                                    </div>
                                    <div className="cartProductremaing">
                                        <div className="cartRemainpart1">
                                            <div className="cartProductName mt-1">
                                                {eachCart?.title}
                                            </div>
                                            <div className="cartProductDel ms-2">
                                            <BiSolidTrashAlt />
                                            </div>
                                        </div>
                                        <div className="cartProductSize">
                                            {eachCart?.attribute}
                                        </div>
                                        <div className="cartRemainPart2">
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
                                            <div className="cartProductPrice">
                                                {eachCart?.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                            })
                        }
                        
                    </div>
                </OffCanvas.Body>
                <div className="CartOrder-section w-100">
                            <div className="CartOrder-details">
                                <div className="CartOrder-header">Order Total</div>
                                <div className="CartOrder-Price">£66.50</div>
                            </div>
                            <div className="Cartbtn"><button className="Checkoutbutton">Checkout</button></div>
                        </div>
            </OffCanvas>
        </div>
    );
};
