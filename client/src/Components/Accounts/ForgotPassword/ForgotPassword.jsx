import React from "react";
import "../Ollys-Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Navigation2 } from "../../Navigation/Navigation2";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../../Redux/actions/authServices";

export const ForgotPassword = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            verifyEmail: e.target.userEmail.value,
        };

        dispatch(forgotPassword(userData, Navigate));
    };

    return (
        <div>
            {/* <Navigation2/> */}
            <section className="LoginPage">
                <div className="login-contianer">
                    <h1 className="LoginHeading">Recover Password</h1>
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
                                    placeholder="Email"
                                />
                            </div>
                            <button className="signinbtn">Reset</button>
                        </form>
                        <div className="ForgotpasswordandCreateaccount">
                            <Link
                                to="/accounts/login"
                                className="createacctext"
                            >
                                Back to login
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
