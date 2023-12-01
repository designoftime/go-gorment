import React from 'react'
import Logo from './images/logo-white.svg'
import { RiAccountCircleLine } from 'react-icons/ri'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Navigation2.css'
export const Navigation2 = () => {
    return (
        <div>
            <h4 className='alert text-center bolder Navheader'><strong>Welcome to the oll-timate snacksy time! 💜</strong></h4>
            <nav className="navbar navigationbar2 navbar-expand-sm bg-white navbar-light">
                <div className="container-fluid">
                    <div className='row container-fluid g-0'>
                        <ul className="navbar-nav col-sm-2 mx-0">
                            <li className="nav-item mx-auto">
                                <Link to='/shop' className="nav-link active  bolder nav2text " href="#">Shop</Link>
                            </li>
                            <li className="nav-item mx-auto">
                                <a className="nav-link active bolder nav2text " href="#">Our Story</a>
                            </li>
                        </ul>
                        <div className='col-sm-5 '>
                            <div className=' text-center'>
                                <Link to="/"><img src={Logo} className='navlogo2 animate__animated animate__fadeInUp' alt="" /></Link>
                            </div>
                        </div>
                        <ul className='navbar-nav col-sm-3'>
                            <li className="nav-item  mx-auto ">
                                <a className="nav-link active bolder nav2text" href="#">One Feeds Two</a>
                            </li>
                            <li className="nav-item mx-auto">
                                <a className="nav-link active bolder nav2text" href="#">Find Olly's</a>
                            </li>
                        </ul>
                        <div className=' col-sm-1  d-flex'>
                            <div className="nav-item mx-4">
                                <Link to='/accounts' className="nav-link active bolder" href="#">
                                    <RiAccountCircleLine className='account2icon' />
                                </Link>
                            </div>
                            <div className='nav-item mx-2'>
                                <Link to='/accounts' className='nav-link active bolder'>
                                    <MdOutlineShoppingBag className='account2icon' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
