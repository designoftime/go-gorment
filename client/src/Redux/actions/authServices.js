import { toast } from 'react-toastify';
import { setUser } from "../reducers/authSlice";
import axios from 'axios';


export function loginUser(userData, Navigate){

    return async function loginUserThunk(dispatch, getState){
        try {

            const res = await axios.post("/customer/login", userData);
            dispatch(setUser(res.data));
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
            
            await axios.post("/customer/verify-email", userData);
            toast('Email Verification Successfully !!');
            Navigate("/");
            
        } catch (error) {
            toast(error.response.data.message);
        }
    }
    
}

export function verifyEmail(token){
    
    
    return async function verifyEmailThunk(dispatch, getState){

        try {
            
            const res = await axios.post(`/customer/register/${token}`);
            
            dispatch(setUser({
                _id: res.data._id,
                name: res.data.name,
                email: res.data.email,
                token: res.data.token
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
            
            const res = await axios.post(`/customer/signup/${token}`);
            dispatch(setUser(res.data));
            toast('User Login Successfully !!');
            Navigate("/");
            
        } catch (error) {
            toast(error.response.data.message);
        }
    }
    
}