import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MobileMenu = ({headerData, styles}) => {

  const shopData = useSelector(store => store.storeSettings?.categories);

  return (
        <div className="main-menu">
            <div className="menu-container">
                <ul className='menu-links'>
                {
                        headerData?.categories_menu_status &&
                        <li>
                            <Link className="item-link" to="/collections/all" style={styles?.color}>{headerData.categories.en}</Link>
                        </li>
                    }
                    <li className='menu-categories'>
                    {
                    Array.isArray(shopData) && shopData[0].children && shopData[0].children.map((eachCategory) => {
                      let dynamicLink = eachCategory.name?.en.trim().split(" ").join("-");
                      
                      return (<span className='categories-links' key={eachCategory._id}><Link className='cat-link' to={`/collections/all#${dynamicLink.toLowerCase()}`}>{eachCategory?.name?.en}</Link></span>)
                    })
                  }
                  </li>
                    {
                        headerData?.about_menu_status &&
                        <li>
                            <Link to='/pages/our-story' className="item-link" style={styles?.color}>{headerData.about_us.en}</Link>
                        </li>
                    }
                    {
                        headerData?.offers_menu_status &&
                            <li>
                                <Link className="item-link" to="/pages/one-feeds-two" style={styles?.color}>{headerData.offers.en}</Link>
                            </li>
                    }
                    {
                        headerData?.contact_menu_status &&
                            <li>
                                <Link className="item-link" to="/pages/store-locator" style={styles?.color}>{headerData.contact_us.en}</Link>
                            </li>
                    }
                    <li><Link to="/accounts/profile" className='item-link'>Login</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu;