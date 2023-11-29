import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { resetPassword } from '../../../Redux/actions/authServices';

const ResetPassword = () => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const Navigate = useNavigate();

  const handleSubmitPassword = () => {
    
    const token = searchParams.get('token');
    const userData = {
        token,
        newPassword: "123456789"
    }

    dispatch(resetPassword(userData, Navigate));
  }

  return (
    <>
        <div> ResetPassword </div>
        <button onClick={handleSubmitPassword} > Change Password </button>
    </>
  )
}

export default ResetPassword;