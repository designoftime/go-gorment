import React from 'react'
import './Login.css'
import '../Accounts.css'
import { Link, useNavigate } from 'react-router-dom'
import { Navigation2 } from '../../Navigation/Navigation2'
import { loginUser, registerUserByGoogle } from '../../../Redux/actions/authServices'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from '@react-oauth/google'
export const Login = () => {

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = {
      registerEmail: e.target.userEmail.value,
      password: e.target.userPassword.value
    };
    
    dispatch(loginUser(userData, Navigate));
  }

  const onGoogleSuccess = (data) => {
    dispatch(registerUserByGoogle(data.credential, Navigate));
  }

  return (
    <div>
      {/* <Navigation2/> */}
      <section className='LoginPage mt-5'>
        <div className="container-fluid g-0">
          <div className="LoginHeader mt-5">
            <h1 className='text-center LoginHeading'>Login</h1>
          </div>
          <div className="loginform container mx-auto ">
            <form onSubmit={handleSubmit}> 
              <div className="loginemail text-center">
                <input type="email" name='userEmail' className='logininput' placeholder='Email'  />
              </div>
              <div className="loginpassword text-center">
                <input type="password" name='userPassword' className='logininput' placeholder='Password'  />
              </div>
              <div className="Signinbutton my-3 text-center">
                <button className='signinbtn'>Sign in</button>
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
            <div className="MStextd text-center">
              <Link to="/accounts/manage-subscription" className='mstext'>Manage subscription</Link>
            </div>
            <div className="Forgotpassword&createaccount text-center my-3">
              <Link to='/accounts/forgot-password' className='text-decoration-none forgotpasswordtext'>Forgot your password?</Link> <Link to="/accounts/register" className='createacctext'>Create account</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
