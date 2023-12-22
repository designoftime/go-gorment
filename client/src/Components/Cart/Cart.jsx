import React, { useState } from 'react'
import { CgArrowLongLeft } from "react-icons/cg";
import { Button } from 'react-bootstrap'
import OffCanvas from 'react-bootstrap/Offcanvas';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import './Cart.css'
import '../Navigation/Navigation1.css';
import '../Navigation/Navigation2.css';
import cartProductImg1 from '../Shop/images/SourCreamHoverimg.jpg';
import cartProductImg2 from '../Shop/images/DarkChoc-Case_360x.png';
export const Cart = () => {
    const [productNo, setProductNo] = useState(1)
    const [showcart, setShowCart] = useState(false);
    const handleShow = (event) => {
        event.preventDefault();
        setShowCart(true)
    };
    const handleClose = () => setShowCart(false);
    const cartProductData = [
        {
            id: 1,
            "cartpimage": cartProductImg1,
            "cartpheader": "SOUR CREAM & ONION PRETZEL THINS",
            "cartpsize": "REGULAR (10 X 35G)",
            "cartpprice": "£50.00"
        },
        {
            id: 2,
            "cartpimage": cartProductImg2,
            "cartpheader": "Dark Choclate PRETZEL THINS",
            "cartpsize": "REGULAR (10 X 35G)",
            "cartpprice": "£60.00"
        },
        {
            id: 3,
            "cartpimage": cartProductImg1,
            "cartpheader": "SOUR CREAM & ONION PRETZEL THINS",
            "cartpsize": "REGULAR (10 X 35G)",
            "cartpprice": "£50.00"
        },
    ]
    const updateProductNo = (event) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue) && newValue >= 1) {
            setProductNo(newValue);
        }
    }
    const increaseProduct = () => {
        setProductNo((prevproductNo) => prevproductNo + 1);
    }
    const decreaseProduct = () => {
        if (productNo > 1) {
            setProductNo((prevproductNo) => prevproductNo - 1);
        }
    }
    return (
        <div>
            <a onClick={handleShow} href="#" className='accountIcon'><MdOutlineShoppingBag /></a>
            <OffCanvas show={showcart} placement='end' onHide={handleClose} name="end">
                <OffCanvas.Header className='accountIcon'>
                    <CgArrowLongLeft onClick={handleClose} />
                    <OffCanvas.Title>Your Cart</OffCanvas.Title>
                </OffCanvas.Header>
                <OffCanvas.Body>
                    <div className="CartProduct">
                        {cartProductData.map((items, id) => {
                            return (
                                <div className="Cartgrid my-4" key={id}>
                                    <div className="cartproductimg"><img src={items.cartpimage} alt={items.cartpimage} /></div>
                                    <div className="cartProductremaing">
                                        <div className="cartRemainpart1">
                                            <div className="cartProductName">{items.cartpheader}</div>
                                            <div className="cartProductDel"><HiOutlineTrash /></div>
                                        </div>
                                        <div className="cartProductSize">{items.cartpsize}</div>
                                        <div className="cartRemainPart2">
                                            <div className="cartProductQuantity"><div><button className="counterbtn" onClick={increaseProduct}><AiOutlinePlusSquare className='w-100' /></button></div> <div><input type="text" onChange={updateProductNo} value={productNo} className='border-0' /></div><div><button className="counterbtn" onClick={decreaseProduct}><AiOutlineMinusSquare className='w-100' /></button></div></div>
                                            <div className="cartProductPrice">{items.cartpprice}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </OffCanvas.Body>
            </OffCanvas>
        </div>
    )
}
