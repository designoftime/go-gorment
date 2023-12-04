import React from 'react';
import './Navigation1.css';
import './Navigation2.css';
import Logo from './images/Logo.svg';
import { RiAccountCircleLine } from 'react-icons/ri';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const Navigation1 = ({ headerData }) => {
    const midScreen = window.innerWidth < 997;

    const [showNavigation2, setShowNavigation2] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            setShowNavigation2(scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={showNavigation2 ? 'main-nav-2' : "main-nav"}>
            {
                showNavigation2 ? "" : headerData?.help_text?.en ? <h4 className='nav-offer-banner'>{headerData.help_text.en}</h4> : null
            }
            
            <div className="navbar">
                <div className="left">
                {
                    midScreen ? <svg onClick={() => console.log('clicked')} className='menu-icon' xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg> : ''
                }

                    <li>
                        <Link className="nav-link active bolder navtext " to="/pages/ollys-story">{headerData?.categories?.en ? headerData.categories.en : "Categories"}</Link>
                    </li>
                    <li>
                        <Link to='/collections/all' className="nav-link active  bolder navtext">{headerData?.about_us?.en ? headerData.about_us.en : "About Us"}</Link>
                    </li>
                </div>
                <div className="center">
                    <Link to="/"><img src={headerData?.logos ? headerData.logo : Logo} className={showNavigation2 ? 'logo2 animate__animated animate__fadeInUp' : 'logo animate__animated animate__fadeInUp logo'} alt=""/></Link>
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
