import React from 'react'
import { useSelector } from "react-redux";
import { Outlet ,Navigate } from 'react-router-dom';

const PrivateRoute = () => {

  const reduxUser = useSelector(store => store?.auth?.user);
  const userToken = localStorage.getItem("userToken");

  const checkUser = reduxUser || userToken;
  
  return (
    checkUser ? <Outlet /> : <Navigate to="/accounts/login" />
  )
}

export default PrivateRoute;