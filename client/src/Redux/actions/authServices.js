import { toast } from 'react-toastify';
import { setUser } from "../reducers/authSlice";
import { jwtDecode } from "jwt-decode"
import requests from '../../Services/httpService';

const getUserId =()=>{
    const Data = JSON.parse(localStorage.getItem("user")) || {};
    return Data._id || {};    
}
const userId = getUserId();
// const userId = customerData._id;
// console.log("Id",userId);

export function loginUser(userData, Navigate){

    return async function loginUserThunk(dispatch, getState){
        try {

            const res = await requests.post("/customer/login", userData);
            dispatch(setUser(res));
            localStorage.setItem("user", JSON.stringify(res));
            toast('User Login Successfully !!');
            Navigate("/");
            
        } catch (error) {
            toast(error.response.data.message);
        }
    }
    
}

export function registerUser(userData, Navigate){

    return async function registerUserThunk(dispatch, getState){
        try {
            
            const res = await requests.post("/customer/verify-email", userData);
            toast(res.message);
            Navigate("/");
            
        } catch (error) {
            toast(error.response.data.message);
        }
    }
    
}

export function verifyEmail(token){
    
    
    return async function verifyEmailThunk(dispatch, getState){

        try {
            
            const res = await requests.post(`/customer/register/${token}`);
            
            dispatch(setUser({
                _id: res._id,
                name: res.name,
                email: res.email,
                token: res.token
            }));
            localStorage.setItem("user", JSON.stringify({
                _id: res._id,
                name: res.name,
                email: res.email,
                token: res.token
            }));

            toast('User Registration Successfully !!');

        } catch (error) {
            console.log(error);
        }
    }

}

export function registerUserByGoogle(token, Navigate){

    return async function registerUserByGoogleThunk(dispatch, getState){
        try {
            
            const res = await requests.post(`/customer/signup/${token}`);
            dispatch(setUser(res));
            localStorage.setItem("user", JSON.stringify(res));
            toast('User Login Successfully !!');
            Navigate("/");
            
        } catch (error) {
            toast(error.response.message);
        }
    }
    
}

export function forgotPassword(userData, Navigate){

    return async function forgotPasswordThunk(dispatch, getState){
        try {
            const res = await requests.put(`/customer/forget-password`, userData);
            toast(res.message);
            Navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    
}

export function resetPassword(userData, Navigate){

    return async function resetPasswordThunk(dispatch, getState){
        try {
            const res = await requests.put(`/customer/reset-password`, userData);
            toast(res.message);
            Navigate("/accounts/login");
        } catch (error) {
            console.log(error);
        }
    }
    
}
export function updateCustomer(userInfo,Navigate){
    return async function updateCustomerThunk(dispatch,getstate){
        try{
            const res = await requests.put(`/customer/${userId}`,userInfo);
            dispatch(setUser(res));
            localStorage.removeItem("user");
            localStorage.setItem("user", JSON.stringify(res));
            toast("user Update Successfully");
        } catch(error){
            console.log(error);
        }
    }
}

