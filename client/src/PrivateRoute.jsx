import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({Component}) => {

  const userToken = localStorage.getItem("user");

  const checkUser = userToken;
  
  return (
    checkUser ? <Component /> : <Navigate to="/accounts/login" />
  )
}

export default PrivateRoute;