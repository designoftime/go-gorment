import React from 'react';
import { Link } from 'react-router-dom';

const mobileMenu = () => {
  return (
        <div className="main-menu">
            <div className="menu-container">
                <ul className='menu-links'>
                    <li><Link to="/shop" className='item-link'>Shop</Link></li>
                    <li className='menu-categories'>
                        <span className='categories-links'><Link className='cat-link'>All</Link></span>
                        <span className='categories-links'><Link className='cat-link'>Pretzel Thins</Link></span>
                        <span className='categories-links'><Link className='cat-link'>Olives</Link></span>
                        <span className='categories-links'><Link className='cat-link'>Choco Pretzels</Link></span>
                        <span className='categories-links'><Link className='cat-link'>Bundles</Link></span>
                        <span className='categories-links'><Link className='cat-link'>Merch</Link></span>
                    </li>
                    <li><Link to="/shop" className='item-link'>Our Story</Link></li>
                    <li><Link to="/shop" className='item-link'>One Feeds Two</Link></li>
                    <li><Link to="/shop" className='item-link'>Find Olly's</Link></li>
                    <li><Link to="/shop" className='item-link'>Account</Link></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default mobileMenu