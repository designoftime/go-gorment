import React, { useState } from "react";
import "./CreateAccount.css";
import "../Accounts.css";
import { Link, useNavigate } from "react-router-dom";
import { Navigation2 } from "../../Navigation/Navigation2";
import { useDispatch } from "react-redux";
import {
    registerUser,
    registerUserByGoogle,
} from "../../../Redux/actions/authServices";

// Google Login
import { GoogleLogin } from "@react-oauth/google";

export const CreateAccount = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let UserData = {
            name: e.target.fullName.value,
            email: e.target.userEmail.value,
            password: e.target.userPassword.value,
        };

        dispatch(registerUser(UserData, Navigate));
    };

    const onGoogleSuccess = (data) => {
        dispatch(registerUserByGoogle(data.credential, Navigate));
    };

    return (
        <div>
            {/* <Navigation2/> */}
            <section className="CreateAccountPage">
                <div className="create-account-contianer">
                    <h1 className="AccountsHeading">Register</h1>
                    <div className="createaccountform">
                        <form
                            onSubmit={handleSubmit}
                            className="createfrom-input-group"
                        >
                            <div className="form-input">
                                <input
                                    type="text"
                                    name="fullName"
                                    className="logininput"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="form-input">
                                <input
                                    type="email"
                                    name="userEmail"
                                    className="logininput"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-input">
                                <input
                                    type="password"
                                    name="userPassword"
                                    className="logininput"
                                    placeholder="Password"
                                />
                            </div>

                            <button type="submit" className="signinbtn">
                                Signup
                            </button>
                        </form>

                        <div className="hr-blue-line-container">
                            <div className="hr-blue-line"></div>
                            <span>or Signin with</span>
                            <div className="hr-blue-line"></div>
                        </div>

                        <div className="googleSignUp">
                            <GoogleLogin
                                onSuccess={onGoogleSuccess}
                                onError={() => {
                                    console.log("Login Failed");
                                }}
                                theme="filled_black"
                            />
                        </div>

                        <div className="Loginbtntext">
                            <Link to="/accounts/login" className="Loginacctext">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
