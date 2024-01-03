import React, { useState } from 'react';
import { RiFileDownloadFill } from "react-icons/ri";
import { MdUnsubscribe } from "react-icons/md";

const Orders = ({title, orderProducts}) => {

    const handleInvoice =(eachItem)=>{
        console.log(eachItem);        
        // return <Invoice productInfo ={productInfo}/>
    }

  return (
    <div className="OrderDetails">
        <div className='Order-details-header'>{title}</div>
        <div className="orderDetailsBody">
            {
                orderProducts.map((eachItem, idx) => {
                    return (
                        <div className="OrderedProductBody" key={idx}>
                            <div className="OrderedProduct-left">
                                <div className="OrderedProductimage">
                                    <img src={eachItem?.image} alt={eachItem?.image} />
                                    <div className="orderedQuantity">{eachItem?.quantity}</div>
                                </div>

                            </div>
                            <div className="OrderedProduct-right">
                                <div className="OrderedProduct-content">
                                    <div className="orderProductName">{eachItem?.title}</div>
                                    <div className="orderedProductSize">{eachItem?.attribute}</div>
                                    {eachItem?.duration && <div className="orderedProductSize">{eachItem?.duration}</div>}
                                    <div className="orderedProductBottom">
                                        <div className="OrderedProductPrice">Price: <span>&#8377; </span>{eachItem?.price}</div>
                                        <div className="d-flex gap-1">
                                            {eachItem?.duration ? <div><button  title='Cancle Subscription' className='cancelSubsbtn' style={eachItem?.duration ? { display: 'block' } : { display: "none" }} ><span><MdUnsubscribe /></span></button></div> : ""}
                                            <div><button className='Invoicbtn'  onClick={(e)=>handleInvoice(eachItem)} title='Download Invoice'><span><RiFileDownloadFill /></span></button></div>
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
  )
}

export default Orders;