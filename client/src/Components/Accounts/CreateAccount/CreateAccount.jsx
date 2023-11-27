import React from 'react'
import './CreateAccount.css'
import { Link } from 'react-router-dom'
import { Navigation2 } from '../../Navigation/Navigation2'
export const CreateAccount = () => {
  return (
    <div>
        <Navigation2/>
      <section className='CreateAccountPage mt-5'>
        <div className="container-fluid g-0">
          <div className="CreateAccountHeader mt-5">
            <h1 className='text-center CreateAccountHeading'>Register</h1>
          </div>
          <div className="createaccountform container text-center  mx-auto">
            <form >
            <div className="createaccountfirstname conatiner g-0 mx-auto">
                <input type="text" name='userfirstname' className='createaccountinput' placeholder='First Name'  />
              </div>
              <div className="createaccountlastname text-center">
                <input type="text" name='userlastname' className='createaccountinput' placeholder='Last Name'  />
              </div>
              <div className="createaccountemail text-center">
                <input type="email" name='useremail' className='createaccountinput' placeholder='Email'  />
              </div>
              <div className="createaccountpassword text-center">
                <input type="password" name='userpassword' className='createaccountinput' placeholder='Password'  />
              </div>
        
              <div className="Signupbutton my-3 text-center">
                <button className='signupbtn'>Sign up</button>
              </div>
            </form>
           
            <div className="Loginbtntext text-center my-3">
               <Link to='/accounts/login' className='Loginacctext'>Log in</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
