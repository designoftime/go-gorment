import React from 'react';
import './Navigation1.css';
import Logo from './images/Logo.svg';
import { RiAccountCircleLine } from 'react-icons/ri';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Navigation1 = () => {
    return (
        <div className="main-nav">
            <h4 className='nav-offer-banner'>Welcome to the oll-timate snacksy time! 💜</h4>
            <div className="navbar">
                <div className="left">
                    <li>
                        <Link to='/shop' className="nav-link active  bolder navtext " href="#">Shop</Link>
                    </li>
                    <li>
                        <a className="nav-link active bolder navtext " href="#">Our Story</a>
                    </li>
                </div>
                <div className="center">
                    <Link to="/"><img src={Logo} className='logo animate__animated animate__fadeInUp' alt="" /></Link>
                </div>
                <div className="right">
                    <div className="links">
                        <li>
                            <a className="nav-link active bolder navtext" href="#">One Feeds Two</a>
                        </li>
                        <li>
                            <a className="nav-link active bolder navtext" href="#">Find Olly's</a>
                        </li>
                    </div>
                    <div className="icons">
                        <div className="nav-item ">
                            <Link to='/accounts' className="nav-link active bolder" href="#">
                                <RiAccountCircleLine className='accountIcon' />
                            </Link>
                        </div>
                        <div className='nav-item '>
                            <a className='nav-link active bolder' href="">
                                <MdOutlineShoppingBag className='accountIcon' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
