import React, { useEffect, useState } from 'react'
import PretzelThings from './images/Screenshot_PretzelThingsimg.avif'
import Olives from './images/Screenshot_Olivesimg.avif'
import ChocoPretzel from './images/Screenshot_ChocoPretzelimg.avif'
import Bundles from './images/Screenshot_Bundlesimg.avif'
import { Link } from 'react-router-dom'
import "./primaryProduct.css"
import CategoriesMobile from './CategoriesMobile/CategoriesMobile'
import { useDispatch } from 'react-redux'
import CategoriesMain from './CategoriesMain/CategoriesMain'

export const PrimaryProduct = ({categoriesData}) => {

    const [showValue ,setShowValue]= useState(window.innerWidth);
    
    useEffect(()=>{
        
        const handleWidth =()=>{
            setShowValue(window.innerWidth);
        }
    
        window.addEventListener('resize',handleWidth);

        return ()=>{
            window.removeEventListener('resize',handleWidth);
        }
    },[]);

    
    if(!categoriesData){
        return;
    }
    
    const categories = categoriesData.slice(0,4);

    return (
        <>
            {
                (showValue < 764) ? <CategoriesMobile categoriesData={categories} /> : <CategoriesMain categoriesData={categories} />
            }
        </>
    )
}
