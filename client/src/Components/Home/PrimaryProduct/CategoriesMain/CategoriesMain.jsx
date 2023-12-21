import React from 'react'
import { Link } from 'react-router-dom';

const CategoriesMain = ({categoriesData}) => {
  return (
    <div className='main-primary-pro'>
        <div className='PrimaryProduct-section my-5 '>
            <div className='PPCmainComponent'>

                {
                    categoriesData.map((eachCategory) => {
                        let dynamicLink = eachCategory.name?.en.trim().split(" ").join("-");    
                        return (<div key={eachCategory._id} className="primary-product-component mx-2 px-2">
                        <Link to={`/collections/all#${dynamicLink.toLowerCase()}`} className="primary-product-component-content">
                            <figure>
                                <div className='imagediv'>
                                    <img className='img-fluid priproductimg' src={eachCategory.cover} />
                                </div>
                            </figure>

                        </Link>
                        <div className="head-container">
                            <Link to={`/collections/all#${dynamicLink.toLowerCase()}`} className='ppcheader text-center text-decoration-none' >
                                <h5 className="heading">{eachCategory.name.en}</h5>
                            </Link>
                            <p className="desc">{eachCategory.sub_title.en}</p>
                        </div>
                    </div>)
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CategoriesMain;