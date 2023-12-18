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
    const BestSellerProducts = [
        {
          "id": 1,
          "productimge1": SourCreamOnion,
          "imgehover": SourCreamHover,
          "title": "Sour Cream & Onion Pretzel Thins",
          "sizeinfo": "Bundle(10x50g)",
          "price": "12.50",
          "reviews": "31"
        },
        {
            "id": 2,
            "productimge1": OllinOneSnacks,
            "imgehover": OllinOneSnacksHover,
            "title": "Oll-IN-One Snacks Box ",
            "sizeinfo": "1 of everything",
            "price": "18.00",
            "reviews": "11"
          },
        {
            "id": 3,
            "productimge1": Bundles,
            "imgehover": BundlesHover,
            "title": "Oll-timate Olive Bundle ",
            "sizeinfo": "Bundle(36x50g)",
            "price": "45.00",
            "reviews": "267"
          },
        {
            "id": 4,
            "productimge1": MultiSeedSesame,
            "imgehover": MultiSeedSesameHover,
            "title": "Multi-Seed Sesame Pretzel THins ",
            "sizeinfo": "Regular(10x35g)",
            "price": "12.50",
            "reviews": "121"
          },
      ]
         
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