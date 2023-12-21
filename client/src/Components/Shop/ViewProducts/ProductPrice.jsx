import React, { useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import {Dropdown} from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
export const ProductPrice = () => {
    const [deliveryOption, setDeliveryOption] = useState("Deliver every 7 Days");
    const handleDelivery =(selected)=>{
        setDeliveryOption(selected);
    }
    return (
        <div>
            <div className="Product-Price-section">
                <div className=" PriceText">
                    <div className='PriceMain'>
                        <div><input type="radio" value="onetime" defaultChecked /></div>
                        <div className='PriceMainText'>One Time Purchase</div>
                    </div>
                    <div>£12.50</div>
                </div>
                <div className="SubscribeBox mt-3">
                    <div className="SubscribeText">
                        <div className='PriceMain'>
                            <div><input type="radio" value="subscribe" /></div>
                            <div className='PriceMainText'>Subscribe & Save</div>
                        </div>
                        <div>£10.03</div>
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
