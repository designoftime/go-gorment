import React from 'react'
import './Navigation1.css'
import Logo from './images/Logo.svg'
import { RiAccountCircleLine } from 'react-icons/ri'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { Link } from 'react-router-dom'
export const Navigation1 = () => {
  return (
    <>
      <h4 className='alert text-center bolder Navheader'><strong>Welcome to the oll-timate snacksy time! 💜</strong></h4>
       <nav className="navbar bannerimagenav navbar-expand-sm bg-* navbar-light">
        <div className="container-fluid">
          <div className='row container-fluid g-0'>
            <ul className="navbar-nav col-sm-2 mx-0">
              <li className="nav-item mx-auto">
                <Link to='/shop' className="nav-link active  bolder navtext " href="#">Shop</Link>
              </li>
              <li className="nav-item mx-auto">
                <a className="nav-link active bolder navtext " href="#">Our Story</a>
              </li>
            </ul>
            <div className='col-sm-5 '>
              <div className=' text-center'>
                <Link to="/"><img src={Logo} className='logo animate__animated animate__fadeInUp' alt="" /></Link>
              </div>
            </div>
            <ul className='navbar-nav col-sm-3'>
              <li className="nav-item  mx-auto ">
                <a className="nav-link active bolder navtext" href="#">One Feeds Two</a>
              </li>
              <li className="nav-item mx-auto">
                <a className="nav-link active bolder navtext" href="#">Find Olly's</a>
              </li>
            </ul>
            <div className=' col-sm-1  d-flex'>
              <div className="nav-item mx-4">
                <Link to='/accounts/profile' className="nav-link active bolder" href="#">
                  <RiAccountCircleLine className='accounticon' />
                </Link>
              </div>
              <div className='nav-item mx-2'>
                <a className='nav-link active bolder' href="">
                  <MdOutlineShoppingBag className='accounticon' />
                </a>
              </div>
            </div>
          </div>
        </div>
  </nav>

     
            </>
           )
}