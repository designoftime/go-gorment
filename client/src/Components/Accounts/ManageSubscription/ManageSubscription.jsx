import React from 'react'
import { MdLock } from "react-icons/md";
import './ManageSubscription.css'
import { Navigation2 } from '../../Navigation/Navigation2';
export const ManageSubscription = () => {
    return (
        <div>
            <Navigation2 />
            <div className="container text-center">
                <div className="card ManageScard mb-5 text-dark bg-light mb-3">
                    <div className="card-header ManageSheader"><i><strong>recharge</strong>secured <MdLock /></i></div>
                    <div className="card-body mt-5 mb-3">
                        <input className="card-title ManageSinput" placeholder='Email' />
                        <div className='mt-5'>
                            <a className="card-text text-decoration-none smsandemailbtn">Send login code (send SMS and Email)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
