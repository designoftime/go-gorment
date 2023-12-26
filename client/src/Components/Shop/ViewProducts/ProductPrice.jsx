import React, { useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
export const ProductPrice = ({productPrice}) => {
    
    const [deliveryOption, setDeliveryOption] = useState("Deliver every 7 Days");
    const handleDelivery =(selected)=>{
        setDeliveryOption(selected);
    }
    const [purchaseType,setPurchaseType] = useState("onetime");
    const handlePurchaseType = (purchaseEvent)=>{
        setPurchaseType(purchaseEvent.target.value);
    }
    return (
        <div>
            <div className="Product-Price-section animate__animated animate__fadeInDown">
                <div className=" PriceText">
                    <div className='PriceMain'>
                        <div><input type="radio" value="onetime" checked={purchaseType==="onetime"} onChange={(purchaseEvent)=>handlePurchaseType(purchaseEvent)}  /></div>
                        <div className='PriceMainText'>One Time Purchase</div>
                    </div>
                    <div>{productPrice?.price}</div>
                </div>
                <div className="SubscribeBox mt-3">
                    <div className="SubscribeText">
                        <div className='PriceMain'>
                            <div><input type="radio" checked={purchaseType==="subscribe"} onChange={(purchaseEvent)=>handlePurchaseType(purchaseEvent)} value="subscribe" /></div>
                            <div className='PriceMainText'>Subscribe & Save</div>
                        </div>
                        <div>{productPrice?.subscribePrice}</div>
                    </div>
                    <Dropdown>
                        <DropdownToggle variant='success' id='dropdown-basic'>
                            {deliveryOption}     
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onSelect={()=>handleDelivery("Deliver every 7 days")}>Deliver every 7 days</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}
