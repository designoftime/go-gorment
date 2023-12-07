import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({Component}) => {

  const reduxUser = useSelector(store => store?.auth?.user);
  const userToken = localStorage.getItem("user");

  const checkUser = reduxUser || userToken;
  
  return (
    checkUser ? <Component /> : <Navigate to="/accounts/login" />
  )
}

export default PrivateRoute;