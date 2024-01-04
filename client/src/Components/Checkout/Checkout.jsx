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
import CheckoutCarts from './CheckoutCarts'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { deleteUserCarts, updateUserOrder, updateUserSubscription } from '../../Redux/actions/cartServices'

const Checkout = () => {
  const [showInput, setShowInput] = useState(false);
  const [shippingType, setShippingType] = useState("standard");
  const [cartData, setCartData] = useState([]);
  const [totalCartVal, setTotalCartVal] = useState(0);
  const [subTotalVal, setSubTotalVal] = useState(0);
  const [couponVal, setCouponVal] = useState(0);

  const [showMobile, setShowMobile] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState({});
  const Navigate = useNavigate();

  useEffect(() => {
    const localAddress = JSON.parse(localStorage.getItem("delivery-address"));
    if(localAddress){
        setDeliveryAddress(localAddress);
        if(localAddress?.address1) setShowInput(true)
        if(localAddress?.mobile) setShowMobile(true);
    }
  },[]);

  const handleHiddenInput = (event) => {
    event.preventDefault();
    setShowInput(true);
  }

  const isValidData = (data) => {
    for (let objData in data) {
      if ((typeof data[objData] == "string" && data[objData].length == 0)) {
        return false;
      }
    }
    return true;
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    let checkoutData = {
      firstname:e.target?.firstname?.value,
      lastname:e.target?.lastname?.value,
      email: e.target?.email?.value,
      country:e.target?.country?.value,
      state:e.target?.state?.value,
      address:e.target?.address?.value,
      city:e.target?.city?.value,
      pincode:e.target?.pincode?.value,
      phone:e.target?.phone?.value,
      shipping: shippingType,
    }
    
    if(!isValidData(checkoutData)){
      toast.error("Please Fill All Fields");
      return;
    };
    
    checkoutData["address1"] = e.target?.apartment?.value;
    checkoutData["mobile"] = e.target?.mobile?.value;
    
    const localCarts = JSON.parse(localStorage.getItem("carts"));
    localStorage.setItem("delivery-address", JSON.stringify(checkoutData));

    if(localCarts){
      toast.error("Please Login First to Continue Purchasing !!");
      Navigate("/accounts/login");
      return;
    }
    
    const user = JSON.parse(localStorage.getItem("user"));

    const orderData = {
      user: user._id,
      cart: cartData,
      user_info : {
        name: checkoutData.firstname + " " + checkoutData.lastname,
        email: checkoutData.email,
        contact: checkoutData.phone,
        address: checkoutData.address,
        city: checkoutData.city,
        country: checkoutData.country,
        pincode: checkoutData.pincode
      },
      subTotal: subTotalVal,
      shippingCost: (shippingType==="standard" ? 299 : 399),
      discount: couponVal,
      total: totalCartVal,
      paymentMethod: "Online",
      status: "Pending"
    }

    deleteUserCarts();
    updateUserOrder(orderData);
    updateUserSubscription(cartData);
    // window.location.reload();
    // console.log(checkoutData, cartData, totalCartVal, couponVal);
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
                    <input type="text" id='email' name='email' defaultValue={deliveryAddress?.email && deliveryAddress.email} className='form-control Checkout-input' placeholder='Email' />
                    <label htmlFor="email" className='label-form'>Email</label>
                  </div>
                  <div className="from-checkbox mt-4"><input type="checkbox" className='checkedBox' /> Email me with news and offers</div>
                </div>
                <div className="delivery-section mt-5">
                  <h1>Delivery</h1>
                  <div className="row justify-content-between my-3">
                    <div className="col-5 ">
                      <div className="form-floating">
                        <input type="text" id='firstname' name='firstname' className="form-control Checkout-input" placeholder="First name(optional)" defaultValue={deliveryAddress?.firstname && deliveryAddress.firstname} aria-label="First name" />
                        <label htmlFor="firstname" className='label-form' >First Name</label>
                      </div>
                    </div>
                    <div className="col-5 ">
                      <div className="form-floating">
                        <input type="text" name='lastname' id='lastname' className="form-control Checkout-input" placeholder="Last name" defaultValue={deliveryAddress?.lastname && deliveryAddress.lastname}  aria-label="Last name" />
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
                      <input type="text"  name='state' className='form-control Checkout-input border-end-0' id='state' defaultValue={deliveryAddress?.state && deliveryAddress.state} aria-label='state' placeholder='State'/>
                      <label htmlFor="state" className='label-form' >State</label>
                    </div>
                  <div className='input-group my-3'>
                    <div className="form-floating">
                      <input type="text"  name='address' className='form-control Checkout-input border-end-0' id='address' aria-label='address' defaultValue={deliveryAddress?.address && deliveryAddress.address} placeholder='Address' />
                      <label htmlFor="address" className='label-form' >Address</label>
                    </div>
                    <span className='input-group-text searchIcon '><IoSearchOutline /></span>
                  </div>
                  <div className={showInput ? "d-none" : "my-2 "}><a href="#" onClick={handleHiddenInput} className='text-decoration-none'><IoAdd /> Add apartment, suite, etc.</a></div>
                  <div className={showInput ? "d-block my-3 form-floating" : "d-none"}>
                    <input type="text" id='apartment'  name='apartment' className="form-control Checkout-input" defaultValue={deliveryAddress?.address1 && deliveryAddress.address1} placeholder="Apartment, suite, etc." />
                    <label htmlFor="apartment" className='label-form'>Apartment</label>
                  </div>
                  <div className="row justify-content-between my-3">
                    <div className="col-5 ">
                      <div className="form-floating">
                        <input type="text" id='city'  name='city' className="form-control Checkout-input" defaultValue={deliveryAddress?.city && deliveryAddress.city} placeholder="City" aria-label="City" />
                        <label htmlFor="city" className='label-form'>City</label>
                      </div>
                    </div>
                    <div className="col-5 ">
                      <div className="form-floating">
                        <input type="text" id='pincode' name='pincode' className="form-control Checkout-input" defaultValue={deliveryAddress?.pincode && deliveryAddress.pincode} placeholder="pincode"  />
                        <label htmlFor="pincode" className='label-form' >Pincode</label>
                      </div>
                    </div>
                  </div>
                  <div className="input-group my-3">
                    <div className='form-floating'>
                      <input type="text" id='phone'  name='phone' className='form-control Checkout-input' defaultValue={deliveryAddress?.phone && deliveryAddress.phone} placeholder='Phone' />
                      <label htmlFor="phone" className='label-form border-start-end-0' >Phone</label>
                    </div>
                    <span className='input-group-text border-start-0 Checkout-input'><FaRegQuestionCircle /></span>
                  </div>
                  <div className="form-checkbox mt-4"><input type="checkbox" checked={showMobile} onChange={() => setShowMobile(!showMobile)} className='checkedBox' />  Text me with news and offers</div>
                  {showMobile ? <div className='input-group my-3'>
                    <span className='input-group-text searchIcon border border-end-0'><CiMobile2 /></span>
                    <div className="form-floating">
                      <input type="text" name='mobile' id='mobile' defaultValue={deliveryAddress?.mobile && deliveryAddress.mobile} className={true ? 'form-control Checkout-input border-start-0 border-end-0' : 'form-control border-start-0 Checkout-input'} placeholder='Mobile number' />
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
                        <input type="radio" value="standard" className='px-1' checked={shippingType === 'standard'} onChange={(e) => setShippingType(e.target.value)} />
                        <div><span /> <span className='px-2'>Standard Delivery (2-3 Working Days)</span></div>
                      </div>
                      <div>&#8377; 299</div>
                    </div>
                    <div className="shipping-box p-3 border border-1 rounded-bottom d-flex justify-content-between">
                      <div className='d-flex justify-content-between '>
                        <input type="radio" onChange={(e) => setShippingType(e.target.value)} value="express" checked={shippingType === 'express'} />
                        <div><span /> <span className='px-2'>Express Delivery (Next Working Day)</span></div>
                      </div>
                      <div>&#8377; 399</div>
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
          <CheckoutCarts cartData={cartData} setCartData={setCartData} totalCartVal={totalCartVal} setTotalCartVal={setTotalCartVal} shippingType={shippingType} couponVal={couponVal} setCouponVal={setCouponVal} subTotalVal={subTotalVal} setSubTotalVal={setSubTotalVal}/>
        </div>
      </div >
    </div >
  )
}

export default Checkout;