import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { resetPassword } from '../../../Redux/actions/authServices';
import { Navigation2 } from '../../Navigation/Navigation2';
import { toast } from 'react-toastify';

const ResetPassword = () => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const Navigate = useNavigate();

  const handleSubmitPassword = (e) => {
    e.preventDefault();

    const token = searchParams.get('token');

    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value

    if(password !== confirmPassword){
        toast.error('Password and Confirm Password is Not Same');
        return;
    }

    const userData = {
        token,
        newPassword: password
    }

    dispatch(resetPassword(userData, Navigate));
  }

  return (
    <>
        {/* <div> ResetPassword </div>
        <button onClick={handleSubmitPassword} > Change Password </button> */}
        <div>
      <Navigation2/>
      <section className='LoginPage mt-5'>
        <div className="container-fluid g-0">
          <div className="LoginHeader mt-5">
            <h1 className='text-center LoginHeading'>Reset Password</h1>
          </div>
          <div className="loginform container mx-auto">
            <form onSubmit={handleSubmitPassword}>
              <div className="loginemail text-center">
                <input type="name" name='password' className='logininput' placeholder='Password'  />
              </div>
              <div className="loginpassword text-center">
                <input type="name" name='confirmPassword' className='logininput' placeholder='Confirm Password'  />
              </div>
              <div className="Signinbutton my-3 text-center">
                <button className='signinbtn'>Reset Password</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default ResetPassword;