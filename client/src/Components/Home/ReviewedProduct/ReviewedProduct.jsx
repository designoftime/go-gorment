import React from 'react'
import './ReviewedProduct.css'
import { Products } from '../../Shop/Products'
import SourCreamOnion from './images/SourCream-35_450xa642.png'
import SourCreamHover from './images/SourCreamHoverimg.jpg'
import OllinOneSnacks from './images/Ollys_Bundles-6-removebg-preview_450x5d97.png'
import OllinOneSnacksHover from './images/Ollys-rebrand58783_450x5d97.jpg'
import Bundles from './images/ReviewedBundlesimg.png'
import BundlesHover from './images/Ollys-rebrand57886_450x80a1.jpg'
import MultiSeedSesame from './images/Sesame-35_450x26f5.png'
import MultiSeedSesameHover from './images/Sesame-35-Case_450x292a.jpg'
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'
export const ReviewedProduct = ({categoryId}) => {
         
    return (
        <section className='ReviewedProduct-Section conatiner-fluid g-0'>
            <div className="RPSheader m-5">
                <h2 className='RPSheadercontent1  text-white mx-auto fw-bolder wow animate__animated animate__fadeIn'><strong>TRY SOME</strong></h2>
                <h2 className='RPSheadercontent2  text-white mx-auto fw-bolder wow animate__animated animate__fadeIn'><strong>BESTSELLER</strong></h2>
            </div>
            <Products categoryId={categoryId}/>
        </section>
    )
}