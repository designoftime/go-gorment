import React from 'react'
import './Checkout.css'
import Gpayimge from './images/gpay (1).png'
import Paypalimge from './images/images.png'
import Shopayimge from './images/download.jpg'
import { IoSearchOutline } from "react-icons/io5";

const Checkout = () => {
  return (
    <div>
      <div className="Checkout-Section py-5">
        <div className="Main-section row container">
          <div className="Checkout-left my-5 col-md-sm-xl-4">
            <div className="Checkout-primarytext text-center mt-5">Express checkout</div>
            <div className="payBox d-flex justify-content-evenly">
              <div className="payimge"><img className='img-fluid rounded-5' src={Shopayimge} alt="" /></div>
              <div className="payimge"><img className='img-fluid rounded-5' src={Paypalimge} alt="" /></div>
              <div className="payimge"><img className='img-fluid rounded-5' src={Gpayimge} alt="" /></div>
            </div>
            <div className="endofpaybox d-flex justify-content-between">
              <div className='withintext'></div>
              <span /> OR <span />
              <div className='withintext'></div>
            </div>
            {/* form Section */}
            <div className="Checkout-form">
              <form action="">
                <div className="contact-section">
                  <h1>Conatct</h1>
                  <input type="text" className='form-control Checkout-input' placeholder='Email' />
                  <div className="email-checkbox mt-4"><input type="checkbox" />  Email me with news and offers</div>
                </div>
                <div className="delivery-section mt-5">
                  <h1>Delivery</h1>
                  <select name="" id="" className='form-select Checkout-input'>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                  <div class="row justify-content-between">
                    <div class="col-5 ">
                      <input type="text" class="form-control Checkout-input" placeholder="First name" aria-label="First name"/>
                    </div>
                    <div class="col-5 ">
                      <input type="text" class="form-control Checkout-input" placeholder="Last name" aria-label="Last name"/>
                    </div>
                    <div className='addrsinput'> 
                    <input type="text" className='form-control  Checkout-input' placeholder='Address' />
                    </div>
                    <div className='searchicon'>
                      <IoSearchOutline />
                      </div>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="Checkout-right my-5 col-sm-md-xl-6"></div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;