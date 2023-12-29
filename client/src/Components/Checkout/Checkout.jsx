import React, { useEffect, useState } from 'react'
import './Checkout.css'
import '../Shop/ViewProducts/ViewProducts.css'
import Gpayimge from './images/gpay (1).png'
import Paypalimge from './images/images.png'
import Shopayimge from './images/download.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import { Link } from 'react-router-dom'
import CheckoutCarts from './CheckoutCarts'
const Checkout = () => {
  const [showInput, setShowInput] = useState(false);
  const [shippingType, setShippingType] = useState("standard");

  const [showMobile, setShowMobile] = useState(false);
  // on click of check box phone input value assigning to mobile
  const handleCNumber = () => {
    setShowMobile(!showMobile);
  }
  
  const shippingOption = (shippingEvent) => {
    return setShippingType(shippingEvent.target.value);
  }
  // onclick of text apartment input field appear
  const handleHiddenInput = (event) => {
    event.preventDefault();
    setShowInput(true);
  }

  const handleCheckout = (e) => {
    e.preventDefault();

    let checkoutData = {
      firstname:e.target?.firstname?.value,
      lastname:e.target?.lastname?.value,
      email: e.target?.email?.value,
      country:e.target?.country?.value,
      state:e.target?.state?.value,
      address:e.target?.address?.value,
      address1:e.target?.apartment?.value,
      city:e.target?.city?.value,
      pincode:e.target?.pincode?.value,
      phone:e.target?.phone?.value,
      mobile:e.target?.mobile?.value,
      shipping: shippingType,
    }
    
    console.log(checkoutData);
  }

  return (
    <div>
      <div className="Checkout-Section py-5">
        <div className="Main-section row container">
          <div className="Checkout-left my-5 col-md-sm-xl-4">
            {/* <div className="Checkout-primarytext text-center mt-5">Express checkout</div> */}
            {/* <div className="payBox d-flex justify-content-evenly">
              <div className="payimge"><img className='img-fluid rounded-5' src={Shopayimge} alt="" /></div>
              <div className="payimge"><img className='img-fluid rounded-5' src={Paypalimge} alt="" /></div>
              <div className="payimge"><img className='img-fluid rounded-5' src={Gpayimge} alt="" /></div>
            </div> */}
            {/* <div className="endofpaybox d-flex justify-content-between">
              <div className='withintext'></div>
              <span /> OR <span />
              <div className='withintext'></div>
            </div> */}
            {/* form Section */}
            <div className="Checkout-form">
              <form onSubmit={handleCheckout}>
                <div className="contact-section">
                  <div className="conatct-header d-flex justify-content-between">
                    <h1>Conatct</h1>
                  </div>
                  <div className="form-floating my-3">
                    <input type="text" id='email' name='email' className='form-control Checkout-input' placeholder='Email' />
                    <label htmlFor="email" className='label-form'>Email</label>
                  </div>
                  <div className="from-checkbox mt-4"><input type="checkbox" className='checkedBox' /> Email me with news and offers</div>
                </div>
                <div className="delivery-section mt-5">
                  <h1>Delivery</h1>
                  <div className="row justify-content-between my-3">
                    <div className="col-5 ">
                      <div className="form-floating">
                        <input type="text" id='firstname'  name='firstname' className="form-control Checkout-input" placeholder="First name(optional)" aria-label="First name" />
                        <label htmlFor="firstname" className='label-form' >First Name</label>
                      </div>
                    </div>
                    <div className="col-5 ">
                      <div className="form-floating">
                        <input type="text" name='lastname' id='lastname' className="form-control Checkout-input" placeholder="Last name"  aria-label="Last name" />
                        <label htmlFor="lastname" className='label-form' >Last Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-floating my-3">
                    <select name="country" id="country" className='form-select Checkout-input'>
                      <option value="India">India</option>
                    </select>
                    <label htmlFor="country" className='label-form' >Country/region</label>
                  </div>
                  <div className="form-floating">
                      <input type="text"  name='state' className='form-control Checkout-input border-end-0' id='state' aria-label='state' placeholder='State'/>
                      <label htmlFor="state" className='label-form' >State</label>
                    </div>
                  <div className='input-group my-3'>
                    <div className="form-floating">
                      <input type="text"  name='address' className='form-control Checkout-input border-end-0' id='address' aria-label='address' placeholder='Address' />
                      <label htmlFor="address" className='label-form' >Address</label>
                    </div>
                    <span className='input-group-text searchIcon '><IoSearchOutline /></span>
                  </div>
                  <div className={showInput ? "d-none" : "my-2 "}><a href="#" onClick={handleHiddenInput} className='text-decoration-none'><IoAdd /> Add apartment, suite, etc.</a></div>
                  <div className={showInput ? "d-block my-3 form-floating" : "d-none"}>
                    <input type="text" id='apartment'  name='apartment' className="form-control Checkout-input" placeholder="Apartment, suite, etc." />
                    <label htmlFor="apartment" className='label-form'>Apartment</label>
                  </div>
                  <div className="row justify-content-between my-3">
                    <div className="col-5 ">
                      <div className="form-floating">
                        <input type="text" id='city'  name='city' className="form-control Checkout-input" placeholder="City" aria-label="City" />
                        <label htmlFor="city" className='label-form'>City</label>
                      </div>
                    </div>
                    <div className="col-5 ">
                      <div className="form-floating">
                        <input type="text" id='pincode' name='pincode' className="form-control Checkout-input" placeholder="pincode"  />
                        <label htmlFor="pincode" className='label-form' >pincode</label>
                      </div>
                    </div>
                  </div>
                  <div className="input-group my-3">
                    <div className='form-floating'>
                      <input type="text" id='phone'  name='phone' className='form-control Checkout-input' placeholder='Phone' />
                      <label htmlFor="phone" className='label-form border-start-end-0' >Phone</label>
                    </div>
                    <span className='input-group-text border-start-0 Checkout-input'><FaRegQuestionCircle /></span>
                  </div>
                  <div className="form-checkbox mt-4"><input type="checkbox" checked={showMobile} onChange={handleCNumber} className='checkedBox' />  Text me with news and offers</div>
                  {showMobile ? <div className='input-group my-3'>
                    <span className='input-group-text searchIcon border border-end-0'><CiMobile2 /></span>
                    <div className="form-floating">
                      <input type="text" name='mobile' id='mobile' className={true ? 'form-control Checkout-input border-start-0 border-end-0' : 'form-control border-start-0 Checkout-input'} placeholder='Mobile number' />
                      <label htmlFor="mobile" className='label-form'>Mobile number</label>
                    </div>
                    {5 > 3 ? <span className='input-group-text searchIcon border border-start-0'>
                      <select name="" className='searchIcon border-0' id="">
                        <option value="IN">IN</option>
                      </select>
                    </span> : ""}
                  </div> : ""}
                </div>
                {/* Shipping */}
                <div className="Shipping-section my-4">
                  <h4>Shipping method</h4>
                  {true ? <div className="shipping-container my-2">
                    <div className="shipping-box p-3 rounded-top border border-1 d-flex justify-content-between">
                      <div className='d-flex justify-content-between '>
                        <input type="radio" value="standard" className='px-1' checked={shippingType === 'standard'} onChange={(shippingEvent) => shippingOption(shippingEvent)} />
                        <div><span /> <span className='px-2'>Standard Delivery (2-3 Working Days)</span></div>
                      </div>
                      <div>£2.99</div>
                    </div>
                    <div className="shipping-box p-3 border border-1 rounded-bottom d-flex justify-content-between">
                      <div className='d-flex justify-content-between '>
                        <input type="radio" onChange={(shippingEvent) => shippingOption(shippingEvent)} value="express" checked={shippingType === 'express'} />
                        <div><span /> <span className='px-2'>Express Delivery (Next Working Day)</span></div>
                      </div>
                      <div>£3.99</div>
                    </div>
                  </div> : <div className="Shipping-message alert border-2">Enter your shipping address to view available shipping methods.</div>}
                </div>
                {/* <div className="Payment-section">
                  <h3>Payment</h3>
                  <p>All transactions are secure and encrypted.</p>
                  <div className="Payment-card p-3 mt-4 searchIcon border border-1 rounded-top d-flex justify-content-between">
                    <div className='d-flex justify-content-between '>
                      <input type="radio" value="creditcard" defaultChecked />
                      <div><span /> <span className='px-2'>Credit Card</span></div>
                    </div>
                  </div>
                </div>
                <div className="card-box">
                  <div className='input-group my-3'>
                    <div className="form-floating">
                      <input type="text"  name='cardno' className='form-control Checkout-input border-end-0' id='cardno' aria-label='address' placeholder='Card number' />
                      <label htmlFor="cardno" className='label-form' >Card number</label>
                    </div>
                    <span className='input-group-text searchIcon '><GoLock /></span>
                  </div>
                  <div className="row justify-content-between my-3">
                    <div className="col-5 ">
                      <div className="form-floating">
                        <input type="text" id='expirydate'  name='expirydate' className="form-control Checkout-input" placeholder="Expiration Date (MM/YY)" aria-label="expirydate" />
                        <label htmlFor="expirydate" className='label-form' >Expiration Date (MM/YY)</label>
                      </div>
                    </div>
                    <div className="col-5 ">
                      <div className="form-floating">
                        <input type="text" name='securitycode' id='securitycode' className="form-control Checkout-input" placeholder="Security code"  aria-label="Security code" />
                        <label htmlFor="securitycode" className='label-form' >Security code</label>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="paybtn "><button className='notifymebtn fs-4 rounded py-2'>Pay now</button></div>
              </form>
            </div>
          </div>
          <CheckoutCarts />
        </div>
      </div >
    </div >
  )
}

export default Checkout;