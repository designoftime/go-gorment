import React, { useEffect, useState } from 'react'
import '../Ollys-Login/Login.css'
import './OrderHistory.css'
import { SubHeader } from '../SubHeader/SubHeader'
import { MdUnsubscribe } from "react-icons/md";
import { RiFileDownloadFill } from "react-icons/ri";
import ChocoPretzel from '../../Shop/images/DarkChoc_360x.png'
import Olives from '../../Shop/images/Olives-Chilli_360x.png'
import { Invoice } from '../../Invoice/Invoice';
export const OrderHistory = () => {
    const [productInfo,setProductInfo]= useState([]);
    const orderedProducts = [
        {
            id: 1,
            productName: 'Dark-Choco Pretzel',
            productPrice: '100',
            size: 'Regular(35gX50g)',
            productQuantity: '4',
            productImage: ChocoPretzel,
            subscription: true,
        },
        {
            id: 2,
            productName: 'Olives',
            productPrice: '500',
            size: 'Large(100gX150g)',
            productQuantity: '4',
            productImage: Olives,
            subscription: false,
        },
    ]
    const handleInvoice =(pId,event)=>{
        event.preventDefault();
        console.log(pId);
        let productInvoice = orderedProducts.filter((id)=>{
            return pId == id;
        })
        setProductInfo(productInvoice);
        
        // return <Invoice productInfo ={productInfo}/>
    }
    console.log(productInfo);
    useEffect(()=>{
        console.log(productInfo);
    },[])
    return (
        <div>
            <div className="container">
                <SubHeader />
                <div className="OrderProfile-section">
                    <h1 className='Order-History-Heading text-center'>Order History</h1>
                    <div className="OrderDetails">
                        <div className='Order-details-header'>Your Orders</div>
                        <div className="orderDetailsBody">
                            {
                                orderedProducts.map((items, id) => {
                                    return (
                                        <div className="OrderedProductBody" key={id}>
                                            <div className="OrderedProduct-left">
                                                <div className="OrderedProductimage">
                                                    <img src={items.productImage} alt={items.productImage} />
                                                    <div className="orderedQuantity">{items.productQuantity}</div>
                                                </div>

                                            </div>
                                            <div className="OrderedProduct-right">
                                                <div className="OrderedProduct-content">
                                                    <div className="orderProductName">{items.productName}</div>
                                                    <div className="orderedProductSize">{items.size}</div>
                                                    <div className="orderedProductBottom">
                                                        <div className="OrderedProductPrice">Price: {items.productPrice}$</div>
                                                        <div className="d-flex gap-1">
                                                            {items.subscription ? <div><button  title='Cancle Subscription' className='cancelSubsbtn' style={items.subscription ? { display: 'block' } : { display: "none" }} ><span><MdUnsubscribe /></span></button></div> : ""}
                                                            <div><button className='Invoicbtn'  onClick={()=>handleInvoice(id,event)} title='Download Invoice'><span><RiFileDownloadFill /></span></button></div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
