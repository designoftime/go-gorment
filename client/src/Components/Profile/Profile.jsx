import React, { useState } from 'react'
import { Navigation2 } from '../Navigation/Navigation2';
import '../Accounts/Accounts.css'
import './Profile.css'
import { SubHeader } from '../Accounts/SubHeader/SubHeader';
import { useDispatch } from 'react-redux';
import { updateCustomer } from '../../Redux/actions/authServices';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  // const [userInfo, setUserInfo] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const HandleOnSubmit =(event)=>{
    event.preventDefault();
    let userInfo = {
      name: event.target.name.value +" "+ event.target.lastName.value,
      phone: event.target.phone.value, 
    }
    console.log(userInfo);
    dispatch(updateCustomer(userInfo,Navigate));
  }
  return (
    <>
    <SubHeader/>
      <div className="container-fluid">
        <section className='Profile-section'>
          <div className="container " style={{ margin: "10px auto", }}>
            <h1 className=' my-5 text-center text-uppercase AccountsHeading'> Account Address </h1>
            <div className="profile-table d-flex flex-column align-items-center" style={{margin: "0 auto", width: "100%"}}>
              <form action="" onSubmit={HandleOnSubmit}>
                <h4 className=' fw-bolder ProfilesubHeading'>Personal information</h4>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>First Name</label>
                  <input type="text" name='name' className='ProfileInput rounded py-2 px-4' />
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>Last Name</label>
                  <input type="text" name='lastName' className='ProfileInput rounded py-2 px-4' />
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>Phone Number</label>
                  <input type="text" name='phone' className='ProfileInput rounded py-2 px-4' placeholder='Add number' />
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>E-mail</label>
                  <input type="text" name='email' className='ProfileInput rounded py-2 px-4' disabled  />
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
                  <label htmlFor="" className='mt-3 ProfileText'>City</label>
                  <input type="text"  name='city' className=' ProfileInput rounded py-2 px-4' disabled/>
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>State</label>
                  <input type="text"  name='state' className=' ProfileInput rounded py-2 px-4' disabled/>
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>Country/Region</label>
                  <input type="text"  name='country' className=' ProfileInput rounded py-2 px-4' disabled/>
                </div>
                
                <div><label htmlFor="" className='mt-3 ProfileText'>Postal/ZIP cod</label></div>
                <div><input type="number"  name='pincode' className='ProfileInput rounded py-2 px-4' placeholder='Add ZIP code' /></div>
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