import React, { useEffect } from "react";
import { Navigation2 } from "../../Navigation/Navigation2";
import "./EmailVerification.css";
import { useDispatch } from "react-redux";
import { verifyEmail } from "../../../Redux/actions/authServices";
import { useNavigate, useSearchParams } from "react-router-dom";

const EmailVerification = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const Navigate = useNavigate();

    useEffect(() => {
        registerUser();
    }, []);

    const registerUser = () => {
        const token = searchParams.get("token");
        dispatch(verifyEmail(token));
        Navigate("/");
    };

    return (
        <>
            {/* <Navigation2/> */}
            <div className="text-center email-verification-heading">
                {" "}
                Email Verification Succesfully{" "}
            </div>
        </>
    );
};

export default EmailVerification;
