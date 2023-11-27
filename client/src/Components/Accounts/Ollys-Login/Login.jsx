import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { Navigation2 } from '../../Navigation/Navigation2'
export const Login = () => {
  return (
    <div>
      <Navigation2/>
      <section className='LoginPage mt-5'>
        <div className="container-fluid g-0">
          <div className="LoginHeader mt-5">
            <h1 className='text-center LoginHeading'>Login</h1>
          </div>
          <div className="loginform container mx-auto">
            <form action="">
              <div className="loginemail text-center">
                <input type="email" name='useremail' className='logininput' placeholder='Email'  />
              </div>
              <div className="loginpassword text-center">
                <input type="password" name='userpassword' className='logininput' placeholder='Password'  />
              </div>
              <div className="Signinbutton my-3 text-center">
                <button className='signinbtn'>Sign in</button>
              </div>
            </form>
            <div className="MStextd text-center">
              <Link to="/accounts/managesubscription" className='mstext'>Manage subscription</Link>
            </div>
            <div className="Forgotpassword&createaccount text-center my-3">
              <Link to='/accounts/forgotpassword' className='text-decoration-none forgotpasswordtext'>Forgot your password?</Link> <Link to="/accounts/register" className='createacctext'>Create account</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
