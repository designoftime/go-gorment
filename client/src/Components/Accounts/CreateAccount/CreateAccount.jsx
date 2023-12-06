import React, { useState } from 'react'
import './CreateAccount.css'
import '../Accounts.css'
import { Link, useNavigate } from 'react-router-dom'
import { Navigation2 } from '../../Navigation/Navigation2'
import { useDispatch } from 'react-redux';
import { registerUser, registerUserByGoogle } from '../../../Redux/actions/authServices';

// Google Login
import { GoogleLogin } from '@react-oauth/google';

export const CreateAccount = () => {

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = {
      name: e.target.fullName.value,
      email: e.target.userEmail.value,
      password: e.target.userPassword.value
    };

    dispatch(registerUser(UserData, Navigate));
  }

  const onGoogleSuccess = (data) => {
    dispatch(registerUserByGoogle(data.credential, Navigate));
  }

  return (
    <div>
        {/* <Navigation2/> */}
      <section className='CreateAccountPage mt-5'>
        <div className="container-fluid g-0">
          <div className="CreateAccountHeader mt-5">
            <h1 className='text-center AccountsHeading'>Register</h1>
          </div>
          <div className="createaccountform container text-center  mx-auto">
            <form onSubmit={handleSubmit}>
            <div className="createaccountfirstname conatiner g-0 mx-auto">
                <input type="text" name='fullName' className='createaccountinput' placeholder='Full Name'/>
              </div>
              <div className="createaccountemail text-center">
                <input type="email" name='userEmail' className='createaccountinput' placeholder='Email'/>
              </div>
              <div className="createaccountpassword text-center">
                <input type="password" name='userPassword' className='createaccountinput' placeholder='Password'/>
              </div>
        
              <div className="Signupbutton my-3 text-center">
                <button type='submit' className='signupbtn'>Sign up</button>
              </div>
            </form>

            <div className='googleSignUp'>
              <GoogleLogin
                onSuccess={onGoogleSuccess}
                onError={() => {
                  console.log('Login Failed');
                }}
                size='large'
                theme='filled_black'
              />
            </div>
           
            <div className="Loginbtntext text-center my-3">
               <Link to='/accounts/login' className='Loginacctext'>Log in</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
