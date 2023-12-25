import React, { useEffect, useState } from 'react'
import { Navigation2 } from '../Navigation/Navigation2'
import '../Accounts/Ollys-Login/Login.css'
import './Shop.css'
import Calimge from './images/OLLY_SB-ICONS-120-cal.svg'
import Ovenbakedimge from './images/OLLY_SB-ICONS-oven-baked.svg'
import Toothimge from './images/OLLY_SB-ICONS-tooth.svg'
import Veganimge from './images/OLLY_SB-ICONS-vegan.svg'
import Cal75imge from './images/OLLY_SB-ICONS-75-cal-.svg'
import Haslefree from './images/OLLY_SB-ICONS-hasle-free.svg'
import Nostones from './images/OLLY_SB-ICONS-no-stones.svg'
import Sourcefiber from './images/OLLY_SB-ICONS-fibre.svg'
import { Products } from './Products'
import PretzelBundle from './images/ShopPretzelThinsBundlesimg1.png'
import OlivesBundle from './images/VARIETYOlivesPacksa064.png'
import OlivesVarietyimge from './images/VARIETYOlivesPacks2.0_360x.png'
import OlivesVarietyHoverimge from './images/Olives-Mixed-Case_360x.png'
import PretzelBundlehover from './images/ShopPretzelThinsBundleshoverimg1webp.png'
import OlivesBundlehover from './images/Ollys-rebrand57886_450x80a1.jpg'
import PretzelSalted from './images/ShopPretzelThinsSaltedimg-2.png'
import PretzelSaltedhover from './images/ShopPretzelThinsSaltedhoverimg-2.png'
import PretzelBanner from './images/PretzelThinsBannerimg.jpg'
import OlivesBanner from './images/Olives_-_Garlic_Basil_-Pack.jpg'
import ChocoPretzelBanner from './images/ShopChocoPretzelbanner.png'
import Cal130imge from './images/OLLY_S-ICONS-Loose-29.svg'
import Haslefreeblue from './images/OLLY_SB-ICONS-hasle-freeblue.svg'
import CoPretzelVarietyimge from './images/ChocoVaritey_360x.png'
import CoPretzelVarietyhoverimge from './images/Choc-mixed-case_360x.png'
import MilkChocoPT from './images/MilkChoc_360x.png'
import MilkChocoPThover from './images/MilkChoc-Case_360x.png'
import DarkChocoPT from './images/DarkChoc_360x.png'
import DarkChocoPThover from './images/DarkChoc-Case_360x.png'
// import ChocoPretzelBanner from './images/'
import { ShopBanner } from './ShopBanner'
import { ShopSnacksBundle } from './ShopSnacksBundle'
import { Merch } from './Merch'
import { OneFeedsHome } from '../Home/OnefeedsHome/OneFeedsHome'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import requests from '../../Services/httpService'
import { getStylesLan } from '../../utils/Constants'

export const Shop = () => {
  const [showValue, setShowValue] = useState(window.innerWidth);
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [variants, setVariants] = useState([]);

  const shopData = useSelector(store => store.storeSettings?.categories);
  
  const toggleOpen = () => {
    setDropDownOpen(!dropdownOpen);
  }
  
  useEffect(() => {
    // console.log("running");
    const handleWidth = () => {
      setShowValue(window.innerWidth);
    }
    window.addEventListener('resize', handleWidth);
    
    const fetchProductAttribute = async () => {
      const res = await requests.get("/attributes/show");
      setVariants(res[0].variants);
    }

    fetchProductAttribute();
    
    return () => {
      window.removeEventListener('resize', handleWidth);
    }
  },[]);
  
  if(!shopData){
    return;
  }
  
  const ShopPretzelBanner = [
    {
      "id": 1,
      "title": "Pretzel Thins",
      "para": "The planet's thinnest & crispiest pretzels! Less fat & fewer calories than crisps & popcorn. Oven-baked with super seasonings. All vegan too.:)",
      "banicon1": Calimge,
      "banicon2": Ovenbakedimge,
      "banicon3": Veganimge,
      "banicon4": Toothimge,
      "banimge": PretzelBanner,
    }
  ]
  const ShopChocoPretzelBanner = [
    {
      "id": 1,
      "title": "Choco Pretzels",
      "para": "These are ridiculous. Our signature pretzel thins are lightly salted before being delicately enrobed in luxurious 100% Belgian chocolate coats. Choc full of goodness.",
      "banicon1": Ovenbakedimge,
      "banicon2": Haslefreeblue,
      "banicon3": Cal130imge,
      "banicon4": Toothimge,
      "banimge": ChocoPretzelBanner,
    }
  ]
  const ShopOlivesBanner = [
    {
      "id": 1,
      "title": "Olives",
      "para": "Glorious Greek olives dressed to impress in mouthwatering marinades. Our snazzy snack pouches contain no stones, no messy oils and no artificials. O’live the dream!",
      "banicon1": Cal75imge,
      "banicon2": Haslefree,
      "banicon3": Nostones,
      "banicon4": Sourcefiber,
      "banimge": OlivesBanner,
    }
  ]
  const ShopPretezelProducts = [
    {
      "id": 1,
      "productimge1": PretzelBundle,
      "imgehover": PretzelBundlehover,
      "title": "Oll-timate Pritzel Thins Bundle ",
      "sizeinfo": "Bundle(50x35g)",
      "price": "38.00",
      "reviews": "489"
    },
    {
      "id": 2,
      "productimge1": PretzelSalted,
      "imgehover": PretzelSaltedhover,
      "title": "Oll-timate Pritzel Thins Bundle ",
      "sizeinfo": "Bundle(50x35g)",
      "price": "38.00",
      "reviews": "489"
    },
  ]
  const ShopOlivesProducts = [
    {
      "id": 1,
      "productimge1": OlivesBundle,
      "imgehover": OlivesBundlehover,
      "title": "Oll-timate Olives Bundle ",
      "sizeinfo": "Bundle(36x50g)",
      "price": "45.00",
      "reviews": "267"
    },
    {
      "id": 2,
      "productimge1": OlivesVarietyimge,
      "imgehover": OlivesVarietyHoverimge,
      "title": "Olives Variety Pack ",
      "sizeinfo": "Regular(12x50g)",
      "price": "17.00",
      "reviews": "134"
    },
  ]
  const ShopChocoPretzelProducts = [
    {
      "id": 1,
      "productimge1": CoPretzelVarietyimge,
      "imgehover": CoPretzelVarietyhoverimge,
      "title": "Chocolate Pretzel Thins Variety Pack ",
      "sizeinfo": "Regular(10x90g)",
      "price": "30.00",
      "reviews": "9"
    },
    {
      "id": 2,
      "productimge1": MilkChocoPT,
      "imgehover": MilkChocoPThover,
      "title": "Milk Chocolate Pritzel Thins",
      "sizeinfo": "Regular(10x90g)",
      "price": "30.00",
      "reviews": "17"
    },
    {
      "id": 3,
      "productimge1": DarkChocoPT,
      "imgehover": DarkChocoPThover,
      "title": "Dark Chocolate Pritzel Thins",
      "sizeinfo": "Regular(10x90g)",
      "price": "30.00",
      "reviews": "6"
    },
  ]


  return (
    <div>
      <div className='my-5'>
        <h1 className='LoginHeading text-center '>Shop Snacks</h1>
        <div>
          <div className="Shopmenu-bar py-5 container g-0 mx-auto">
            <div className="Shopmenubar-content mx-auto">
              <div className="mainbar container mx-auto text-center my-5">
                {showValue > 1000 ? <div className="barcontent mx-auto d-flex justify-content-evenly">
                  <h3><button className='barbutton text-decoration-none'>{shopData[0]?.name?.en && shopData[0]?.name?.en}</button></h3>
                  {
                    Array.isArray(shopData) && shopData[0].children && shopData[0].children.map((eachCategory) => {
                      let dynamicLink = eachCategory.name?.en.trim().split(" ").join("-");
                      return (<h3 key={eachCategory._id}><a href={`#${dynamicLink.toLowerCase()}`} className='barbutton text-decoration-none'>{eachCategory?.name?.en}</a></h3>)
                    })
                  }
                </div> : <div class="Dropdown">
                  <div className="maindropdown">
                    <button class="barbutton dropdown-toggle" onClick={toggleOpen} type="button" >
                      All
                    </button>
                  </div>
                    <ul class="Dropmenubox py-2" >
                      <li><button class="barbutton" href="#">Action</button></li>
                      <li><button class="barbutton" href="#">Another action</button></li>
                      <li><button class="barbutton" href="#">Something else here</button></li>
                    </ul>

                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        Array.isArray(shopData) && shopData[0].children && shopData[0].children.map((eachCategory) => {
          let dynamicId = eachCategory.name?.en.trim().split(" ").join("-");
          const styles = getStylesLan(eachCategory, 'background_color', 'text_color');
          
          return (
            <div className="pretzelThins" key={eachCategory._id} id={dynamicId.toLowerCase()}>
              <ShopBanner shopData={eachCategory} styles={styles} />
              <Products categoryId={eachCategory._id} variants={variants} styles={styles} />
            </div>
          )
        })
      }
      
      {/* <div className='OlivesSection'>
        <ShopBanner ShopOlivesBanner={ShopOlivesBanner} />
        <Products ShopOlivesProducts={ShopOlivesProducts} />
      </div>
      <ShopBanner ShopChocoPretzelBanner={ShopChocoPretzelBanner} />
      <Products ShopChocoPretzelProducts={ShopChocoPretzelProducts} /> */}
      {/* <ShopSnacksBundle />
      <Merch />
      <OneFeedsHome /> */}
    </div>
  )
}
