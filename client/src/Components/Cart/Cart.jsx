import React, { useState } from "react";
import { Link } from 'react-router-dom';
import OffCanvas from "react-bootstrap/Offcanvas";
import ProgressBar from 'react-bootstrap/ProgressBar'
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import Backarrow from './images/back.svg'
import "./Cart.css";
import "../Accounts/Ollys-Login/Login.css"
import "../Navigation/Navigation1.css";
import "../Navigation/Navigation2.css";
import cartProductImg1 from "../Shop/images/SourCreamHoverimg.jpg";
import cartProductImg2 from "../Shop/images/DarkChoc-Case_360x.png";
import Star from './images/star.svg'
export const Cart = () => {
    const [productNo, setProductNo] = useState(0)
    const [showcart, setShowCart] = useState(false);
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
        
    ];
    const updateProductNo = (event) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) {
            setProductNo(newValue);
        }
    };
    const increaseProduct = () => {
        setProductNo((prevproductNo) => prevproductNo + 1);
    };
    const decreaseProduct = () => {
        if (productNo > 1) {
            setProductNo((prevproductNo) => prevproductNo - 1);
        }
    };
    return (
        <div>
            <button onClick={handleShow} href="#" className='accountIcon nav-link'><MdOutlineShoppingBag /></button>
            <OffCanvas show={showcart} placement='end' onHide={handleClose} name="end">
                <OffCanvas.Header className='accountIcon CartmainHeader'>
                    <Link to='' onClick={handleClose} className='cartClosebtn'><img src={Backarrow} alt={Backarrow} /></Link>
                    <OffCanvas.Title className="Cartheader">Your Cart</OffCanvas.Title>
                </OffCanvas.Header>
                <OffCanvas.Body>
                    {cartProductData.length == 1 ? <p className="ProgressBartext"><img src={Star} alt={Star} /><span /> <strong>REWARDS</strong> Spend another £12.50 to qualify for free shipping</p> : cartProductData.length > 1 ? <p className="ProgressBartext"><img src={Star} alt={Star} /><span /> <strong>REWARDS</strong> Great! You have got free shipping!</p> : <p className="ProgressBartext"><img src={Star} alt={Star} /><span /> <strong>REWARDS</strong> Spend atleast £25.00 to qualify for free shipping</p>}
                    {cartProductData.length == 1 ? <ProgressBar now={50} /> : cartProductData.length > 1 ? <ProgressBar now={100} /> : <ProgressBar now={0} />}
                    <div className="CartProduct">
                        {cartProductData.map((items, id) => {
                            return (
                                <div className="Cartgrid my-4" key={id}>
                                    <div className="cartproductimg">
                                        <img
                                            src={items.cartpimage}
                                            alt={items.cartpimage}
                                        />
                                    </div>
                                    <div className="cartProductremaing">
                                        <div className="cartRemainpart1">
                                            <div className="cartProductName">
                                                {items.cartpheader}
                                            </div>
                                            <div className="cartProductDel">
                                                <HiOutlineTrash />
                                            </div>
                                        </div>
                                        <div className="cartProductSize">
                                            {items.cartpsize}
                                        </div>
                                        <div className="cartRemainPart2">
                                            <div className="cartProductQuantity">
                                                <div>
                                                    <button
                                                        className="counterbtn"
                                                        onClick={
                                                            increaseProduct
                                                        }
                                                    >
                                                        <AiOutlinePlusSquare className="w-100" />
                                                    </button>
                                                </div>{" "}
                                                <div>
                                                    <input
                                                        type="text"
                                                        onChange={
                                                            updateProductNo
                                                        }
                                                        value={productNo}
                                                        className="border-0"
                                                    />
                                                </div>
                                                <div>
                                                    <button
                                                        className="counterbtn"
                                                        onClick={
                                                            decreaseProduct
                                                        }
                                                    >
                                                        <AiOutlineMinusSquare className="w-100" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cartProductPrice">
                                                {items.cartpprice}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            );
                        })}
                        <div className="CartOrder-section w-100">
                            <div className="CartOrder-details">
                                <div className="CartOrder-header">Order Total</div>
                                <div className="CartOrder-Price">£66.50</div>
                            </div>
                            <div className="Cartbtn"><button className="Checkoutbutton">Checkout</button></div>
                        </div>
                    </div>
                </OffCanvas.Body>
            </OffCanvas>
        </div>
    );
};
