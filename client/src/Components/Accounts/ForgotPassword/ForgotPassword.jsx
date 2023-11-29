import React from 'react'
import '../Ollys-Login/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Navigation2 } from '../../Navigation/Navigation2';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../../Redux/actions/authServices';

export const ForgotPassword = () => {

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      verifyEmail : e.target.userEmail.value
    }
    
    dispatch(forgotPassword(userData, Navigate));
  }

  return (
    <div>
         <Navigation2/>
      <section className='LoginPage mt-5'>
        <div className="container-fluid g-0">
          <div className="LoginHeader mt-5">
            <h1 className='text-center LoginHeading'>Recover</h1>
          </div>
          <div className="loginform container mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="loginemail text-center">
                <input type="email" name='userEmail' className='logininput' placeholder='Email'  />
              </div>
              <div className="Signinbutton my-3 text-center">
                <button className='signinbtn'>Reset</button>
              </div>
            </form>
            <div className="Forgotpassword&createaccount text-center my-4">
              <Link to='/accounts/login'className='text-decoration-none backtologintext'>Back to login</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
