import React, { useEffect, useState } from 'react'
import { Navigation2 } from '../Navigation/Navigation2';
import '../Accounts/Accounts.css'
import './Profile.css'
import { SubHeader } from '../Accounts/SubHeader/SubHeader';
import { useDispatch } from 'react-redux';
import { updateCustomer } from '../../Redux/actions/authServices';

const Profile = () => {
  
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  const handleSubmit =(e)=>{
    e.preventDefault();

    let userInfo = {
      name: e.target.name.value +" "+ e.target.lastName.value,
      email: e.target.email.value, 
      phone: e.target.phone.value, 
      country: e.target.country.value,
      state: e.target.state.value,
      city: e.target.city.value,
      pincode: e.target.pincode.value,
    }

    dispatch(updateCustomer(userInfo));
  }

  return (
    <> 
    <SubHeader/>
      <div className="container-fluid">
        <section className='Profile-section'>
          <div className="container " style={{ margin: "10px auto", }}>
            <h1 className=' my-5 text-center text-uppercase AccountsHeading'> Account Address </h1>
            <div className="profile-table d-flex flex-column align-items-center" style={{margin: "0 auto", width: "100%"}}>
              <form action="" onSubmit={handleSubmit}>
                <h4 className=' fw-bolder ProfilesubHeading'>Personal information</h4>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>First Name</label>
                  <input type="text" defaultValue={user?.name.split(' ').length ? user?.name.split(' ')[0] : ""} name='name' className='ProfileInput rounded py-2 px-4' />
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>Last Name</label>
                  <input type="text" defaultValue={user?.name.split(' ').length ? user?.name.split(' ')[1] : ""} name='lastName' className='ProfileInput rounded py-2 px-4' />
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>Phone Number</label>
                  <input type="text" name='phone' className='ProfileInput rounded py-2 px-4' placeholder='Add number' />
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>E-mail</label>
                  <input type="text" name='email' value={user?.email} className='ProfileInput rounded py-2 px-4' disabled  />
                </div>
                {/* Shiiping Address Block */}
                <h4 className=' fw-bolder my-3 ProfilesubHeading'>Shipping</h4>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>Address1</label>
                  <input type="text"  name='address1' className=' ProfileInput rounded py-2 px-4' placeholder='Street name, Sector' />
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>Address2</label>
                  <input type="text"  name='address2' className=' ProfileInput rounded py-2 px-4' placeholder='House No., Landmark' />
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>Country/Region</label>
                  <input type="text" name='country' className=' ProfileInput rounded py-2 px-4' defaultValue={"India"} disabled/>
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'  >State</label>
                  <input type="text"  name='state' placeholder="State" className=' ProfileInput rounded py-2 px-4'/>
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText' >City</label>
                  <input type="text" name='city' className=' ProfileInput rounded py-2 px-4' placeholder="City"/>
                </div>
                <div><label htmlFor="" className='mt-3 ProfileText' placeholder='Pincode'>Postal/PinCode</label></div>
                <div><input type="number" name='pincode' className='ProfileInput rounded py-2 px-4' placeholder='Add ZIP code' /></div>
                <div>
                  <button className='py-2 px-4 mx-1 my-4 fs-4 fw-bolder Profilebtn' type='submit'>Update</button>
                  <button className='py-2 px-4 mx-1 my-4 fs-4 fw-bolder Profilebtn'>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Profile;