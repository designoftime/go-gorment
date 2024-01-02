import React from "react";
import "./Login.css";
import "../Accounts.css";
import { Link, useNavigate } from "react-router-dom";
import { Navigation2 } from "../../Navigation/Navigation2";
import {
    loginUser,
    registerUserByGoogle,
} from "../../../Redux/actions/authServices";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
export const Login = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let userData = {
            registerEmail: e.target.userEmail.value,
            password: e.target.userPassword.value,
        };

        dispatch(loginUser(userData, Navigate));
    };

    const onGoogleSuccess = (data) => {
        dispatch(registerUserByGoogle(data.credential, Navigate));
    };

    return (
        <div>
            {/* <Navigation2/> */}
            <section className="LoginPage">
                <div className="login-contianer">
                    <h1 className="LoginHeading">Login</h1>
                    <div className="loginform">
                        <form
                            onSubmit={handleSubmit}
                            className="login-from-input-group"
                        >
                            <div className="form-input">
                                <input
                                    type="email"
                                    name="userEmail"
                                    className="logininput"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div className="form-input">
                                <input
                                    type="password"
                                    name="userPassword"
                                    className="logininput"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <button className="signinbtn">Sign in</button>
                        </form>
                        <div className="hr-blue-line-container">
                            <div className="hr-blue-line"></div>
                            <span>or login with</span>
                            <div className="hr-blue-line"></div>
                        </div>
                        <div className="googleSignUp">
                            <div className="googles-signup-icon">
                                <GoogleLogin
                                    onSuccess={onGoogleSuccess}
                                    onError={() => {
                                        console.log("Login Failed");
                                    }}
                                    theme="filled_black"
                                />
                            </div>
                        </div>
                        <div className="MStextd text-center">
                            <Link
                                to="/accounts/manage-subscription"
                                className="mstext"
                            >
                                Manage subscription
                            </Link>
                        </div>
                        <div className="ForgotpasswordandCreateaccount">
                            <Link
                                to="/accounts/forgot-password"
                                className="text-decoration-none forgotpasswordtext"
                            >
                                Forgot your password?
                            </Link>{" "}
                            <div>
                                <Link
                                    to="/accounts/register"
                                    className="createacctext"
                                >
                                    Create account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
