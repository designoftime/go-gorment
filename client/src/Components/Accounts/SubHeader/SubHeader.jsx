import React from 'react'
import { Link } from 'react-router-dom'
import '../Accounts.css'
export const SubHeader = () => {
    return (
        <div>
            <section className='SubHeader-section' style={{marginTop: "9rem"}}>
                <div className="container" >
                    <div className="mainsubheader d-flex flex-row justify-content-around">
                        <div  className="OandAblock d-flex flex-row justify-content-between mx-auto">
                            <Link to="#" className='subheader-content px-3 fw-bold' >Orders</Link>
                            <Link to="#" className='subheader-content px-3 fw-bold' >Address</Link>
                        </div>
                        <div className="signoutblock">
                            <Link to="#" className='subheader-content fw-bold' >SignOut</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
