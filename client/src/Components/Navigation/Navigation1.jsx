import React from 'react';
import './Navigation1.css';
import './Navigation2.css';
import Logo from './images/Logo.svg';
import { RiAccountCircleLine } from 'react-icons/ri';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MobileMenu from './mobileMenu';
import { useSelector } from 'react-redux';


export const Navigation1 = () => {
    const midScreen = window.innerWidth < 997;

    const [showNavigation2, setShowNavigation2] = useState(false);
    const [toggleMenu, setToggleMenu ] = useState(false);
    const headerData = useSelector(store => store?.storeSettings?.navbar);

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

    const handleToggleMenu =() =>{
        if(toggleMenu){
            setToggleMenu(false)
        }
        else{
            setToggleMenu(true)
        }
    }

    return (
        <div className={showNavigation2 || toggleMenu  ? 'main-nav-2' : "main-nav"}>
            {
                showNavigation2 || toggleMenu ? null : (headerData?.help_text?.en) && <h4 className='nav-offer-banner'>{headerData.help_text.en}</h4> 
            }
            
            <div className="navbar">
                <div className="left">
                {
                    midScreen ? <svg onClick={() => handleToggleMenu()} className='menu-icon' xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                        {
                            !toggleMenu? <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/> :

                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        }

                        
                        </svg> : null
                }

                    {
                        headerData?.categories_menu_status &&
                        <li>
                            <Link className="nav-link active bolder navtext " to="/collections/all">{headerData.categories.en}</Link>
                        </li>
                    }
                    {
                        headerData?.about_menu_status &&
                        <li>
                            <Link to='/pages/ollys-story' className="nav-link active  bolder navtext">{headerData.about_us.en}</Link>
                        </li>
                    }
                </div>
                {headerData?.logo && <div className="center">
                    <Link to="/"><img src={headerData.logo} className={showNavigation2 || toggleMenu ? 'logo2 animate__animated animate__fadeInUp' : 'logo animate__animated animate__fadeInUp logo'} alt=""/></Link>
                </div>}
                <div className="right">
                    <div className="links">
                    {
                        headerData?.offers_menu_status &&
                            <li>
                                <Link className="nav-link active bolder navtext" to="/pages/one-feeds-two">{headerData.offers.en}</Link>
                            </li>
                    }
                    {
                        headerData?.contact_menu_status &&
                            <li>
                                <Link className="nav-link active bolder navtext" to="/pages/store-locator">{headerData.contact_us.en}</Link>
                            </li>
                    }
                    </div>
                    <div className="icons">
                        <div className="nav-item ">
                            <Link to="/accounts/profile" className="nav-link active bolder" href="#">
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
            {
                toggleMenu?<MobileMenu/>:""
            }
                
        </div>
    )
}
