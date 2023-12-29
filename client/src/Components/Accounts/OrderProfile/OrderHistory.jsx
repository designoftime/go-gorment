import React from 'react'
import '../Ollys-Login/Login.css'
import './OrderHistory.css'
import { SubHeader } from '../SubHeader/SubHeader'
import ChocoPretzel from '../../Shop/images/DarkChoc_360x.png'
import Olives from '../../Shop/images/Olives-Chilli_360x.png'
export const OrderHistory = () => {
    const orderedProducts = [
        {
            id: 1,
            productName: 'Dark-Choco Pretzel',
            productPrice: '100',
            size: 'Regular(35gX50g)',
            productQuantity: '4',
            productImage: ChocoPretzel,
        },
        {
            id: 2,
            productName: 'Olives',
            productPrice: '500',
            size: 'Large(100gX150g)',
            productQuantity: '4',
            productImage: Olives,
        },
    ]
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
                                        <div className="OrderedProductBody">
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
                                                        <div><button className='cancelSubsbtn'>Cancel Subscription</button></div>
                                                        <div><button className='Invoicbtn'>Download Invoice</button></div>
                                                        <div className="OrderedProductPrice">{items.productPrice}</div>
                                                        
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
