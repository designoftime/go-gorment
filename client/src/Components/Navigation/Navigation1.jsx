import React from 'react';
import './Navigation1.css';
import Logo from './images/Logo.svg';
import { RiAccountCircleLine } from 'react-icons/ri';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Navigation1 = ({headerData}) => {
    return (
        <div className="main-nav">
            {headerData?.help_text?.en ? <h4 className='nav-offer-banner'>{headerData.help_text.en}</h4> : null}
            <div className="navbar">
                <div className="left">
                    <li>
                        <Link className="nav-link active bolder navtext " to="/pages/ollys-story">{headerData?.categories?.en ? headerData.categories.en : "Categories"}</Link>
                    </li>
                    <li>
                        <Link to='/collections/all' className="nav-link active  bolder navtext">{headerData?.about_us?.en ? headerData.about_us.en : "About Us"}</Link>
                    </li>
                </div>
                <div className="center">
                    <Link to="/"><img src={headerData?.logos ? headerData.logo : Logo} className='logo animate__animated animate__fadeInUp' alt="" /></Link>
                </div>
                <div className="right">
                    <div className="links">
                        <li>
                            <a className="nav-link active bolder navtext" href="#">{headerData?.pages?.en ? headerData.pages.en : "Pages"}</a>
                        </li>
                        <li>
                            <a className="nav-link active bolder navtext" href="#">{headerData?.contact_us?.en ? headerData.contact_us.en : "Contact Us"}</a>
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
