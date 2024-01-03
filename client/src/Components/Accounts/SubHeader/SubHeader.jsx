import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Accounts.css'
import { useDispatch } from 'react-redux'
export const SubHeader = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const logoutUser =()=>{
        localStorage.removeItem('user');
        Navigate("/accounts/login");
    }
    return (
        <div>
            <section className='SubHeader-section' style={{marginTop: "9rem"}}>
                <div className="container" >
                    <div className="mainsubheader d-flex flex-row justify-content-around">
                        <div  className="OandAblock d-flex flex-row justify-content-between mx-auto">
                            <Link to="/accounts/order-history" className='subheader-content px-3 fw-bold' >Orders</Link>
                            <Link to="/accounts/profile" className='subheader-content px-3 fw-bold' >Address</Link>
                        </div>
                        <div className="signoutblock">
                            <Link to="#" onClick={logoutUser} className='subheader-content fw-bold' >SignOut</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
