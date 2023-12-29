import React, { useEffect, useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export const ProductPrice = ({ subscriptionType, setSubscriptionType,product, productPrice, purchaseType, setPurchaseType}) => {
    
    const [AllsubscriptionType, setAllSubscriptionType] = useState([]);

    useEffect(() => {
        setAllSubscriptionType(JSON.parse(product?.subscription_duration));
        handleDelivery(JSON.parse(product?.subscription_duration)[0]);
    },[]);

    const handleDelivery =(selected)=>{
        setSubscriptionType(selected);
    }

    const handlePurchaseType = (purchaseEvent)=>{
        setPurchaseType(purchaseEvent.target.value);
    }

    return (
        <div>
            <div className="Product-Price-section animate__animated animate__fadeInDown">
                <div className=" PriceText">
                    <div className='PriceMain'>
                        <div><input type="radio" value="single" checked={purchaseType==="single"} onChange={(purchaseEvent)=>handlePurchaseType(purchaseEvent)}  /></div>
                        <div className='PriceMainText'>One Time Purchase</div>
                    </div>
                    <div>{productPrice?.price}</div>
                </div>
                { AllsubscriptionType.length ?
                <div className="SubscribeBox mt-3" style={ purchaseType === "subscribe" ? {border:"3px solid #4c4294",borderRadius:"10px"}:{border:"3px solid white"}}>
                    <div className="SubscribeText">
                        <div className='PriceMain'>
                            <div><input type="radio" checked={purchaseType==="subscribe"} onChange={(purchaseEvent)=>handlePurchaseType(purchaseEvent)} value="subscribe" /></div>
                            <div className='PriceMainText'>Subscribe & Save</div>
                        </div>
                        <div>{productPrice?.subscribePrice}</div>
                    </div>
                    
                        <Dropdown>
                        <DropdownToggle variant='success' id='dropdown-basic'>
                            {subscriptionType}     
                        </DropdownToggle>
                        <DropdownMenu>
                        {
                            AllsubscriptionType.length ? AllsubscriptionType.map((eachSubscription, idx) => {
                                return (<DropdownItem key={idx} onClick={() => handleDelivery(eachSubscription)}>{eachSubscription}</DropdownItem>)
                            }) : null
                        }
                        </DropdownMenu>
                    </Dropdown> 
                </div> : null
                } 
            </div>
        </div>
    )
}
