import React from 'react'
import { useSelector } from "react-redux";
import { Outlet ,Navigate } from 'react-router-dom';

const PrivateRoute = () => {

  const user = useSelector(store => store?.auth?.user);

  return (
    user ? <Outlet /> : <Navigate to="/accounts/login" />
  )
}

export default PrivateRoute;