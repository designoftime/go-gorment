import React from 'react'
import { Navigation2 } from '../Navigation/Navigation2';
import '../Accounts/Accounts.css'
import './Profile.css'
import { SubHeader } from '../Accounts/SubHeader/SubHeader';

const Profile = () => {
  const countriesname = [
    {
      id: 1,
      "countryname": "United Kingdom"
    },
    {
       
      id: 2,
      "countryname": "---- -----"
    },
    {
      id: 3,
      "countryname": "India"
    },
    {
      id: 4,
      "countryname": "Japan"
    },

  ]
  return (
    <>
    <SubHeader/>
      <div className="container-fluid">
        <section className='Profile-section'>
          <div className="container " style={{ margin: "10px auto", }}>
            <h1 className=' my-5 text-center text-uppercase AccountsHeading'> Account Address </h1>
            <div className="profile-table d-flex flex-column align-items-center" style={{margin: "0 auto", width: "100%"}}>
              <form action="">
                <h4 className=' fw-bolder ProfilesubHeading'>Personal information</h4>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>First Name</label>
                  <input type="text" className='ProfileInput rounded py-2 px-4' />
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>Last Name</label>
                  <input type="text" className='ProfileInput rounded py-2 px-4' />
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>Phone Number</label>
                  <input type="text" className='ProfileInput rounded py-2 px-4' placeholder='Add number' />
                </div>
                <h4 className=' fw-bolder my-3 ProfilesubHeading'>Shipping</h4>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>Address1</label>
                  <input type="text" className=' ProfileInput rounded py-2 px-4' />
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="" className='mt-3 ProfileText'>City</label>
                  <input type="text" className=' ProfileInput rounded py-2 px-4' />
                </div>
                <div className="ProfileInputblock">
                  <label htmlFor="dropdown" className='mt-3 ProfileText'>Country/region</label>

                  <select name="countryname" id="countryname" className='Profiledropselect rounded py-3 px-4'>
                    {
                      countriesname.map((items) => {
                        return (
                          <option className='Profiledroption rounded py-5' value={items.countryname}>{items.countryname}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <div><label htmlFor="" className='mt-3 ProfileText'>Postal/ZIP cod</label></div>
                <div><input type="text" className='ProfileInput rounded py-2 px-4' placeholder='Add ZIP code' /></div>
                <div>
                  <button className='py-2 px-4 mx-1 my-4 fs-4 fw-bolder Profilebtn'>Update</button>
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