import React, { useState } from 'react'
import '../../Home/Home.css'
import SliderArrow from '../../Home/CustomerCaursel/images/slider-rightarrow.svg'
import Ovenbakedimge from '../images/OLLYS-ICONS-OvenBaked.svg'
import Cal75imge from '../images/OLLY_SB-ICONS-75-cal-.svg'
import Haslefree from '../images/OLLY_SB-ICONS-hasle-free.svg'
import Nostones from '../images/OLLY_SB-ICONS-no-stones.svg'
import Sourcefiber from '../images/OLLY_SB-ICONS-fibre.svg'
import Tooth from '../images/OLLYS-ICONS-Toothv-2.svg'
import Bluegreataste from '../images/Layer_1_450x (1).svg'
import Layer_2imge from '../images/GQ_Logo_1_450x.svg'
import Layer_3imge from '../images/VOGUE_LOGO_1_450x.svg'
import Layer_4imge from '../images/evening_180x.svg'
import PretzelBundle from '../images/ShopPretzelThinsBundlesimg1.png'
import PretzelBundlecontent from '../images/Ollys_Bundles-Content.jpg'
import PretzelBundlehover from '../images/ShopPretzelThinsBundleshoverimg1webp.png'
import PretzelSalted10x from '../images/OLL-TPretzelThinsPacks_10x1.jpg'
import PretzelSesame10x from '../images/OLL-TPretzelThinsPacks2_10x2.jpg'
import PretzelCheesy10x from '../images/OLL-TIPretzelThinsPacks3_10x3.jpg'
import './ViewProducts.css'
import Cal130imge from '../images/OLLY_S-ICONS-Loose-29.svg'
import Haslefreeblue from '../images/OLLY_SB-ICONS-hasle-freeblue.svg'
import Cal120 from '../images/OLLYS-ICONS-Cal1201.svg'
import Veganfriendly from '../images/OLLYS-ICONS-Veganfriendly.svg'
import { BsFillStarFill } from 'react-icons/bs'
import { Navigation2 } from '../../Navigation/Navigation2'
import { Accordion } from '../Accordion'
import { ViewProductsicon } from './ViewProductsicon'
export const ViewProduct = () => {
    const vpIconsSection = [
        {
            "id": 1,
            "iconsimge" : Ovenbakedimge,
            "iconcontent" : "Oven-baked"
        },
        {
            "id": 2,
            "iconsimge" : Veganfriendly,
            "iconcontent" : "Vegan Friendly"
        },
        {
            "id": 3,
            "iconsimge" : Cal120,
            "iconcontent" : "light- crispy"
        },
        {
            "id": 4,
        "iconsimge" :   Tooth,
            "iconcontent" : "Super Sesoning"
        },
    ];
    const accordianData = [
        {
            "id" : 1,
            "title": "Learn More",
            "content": `The planet’s thinnest & crispiest pretzels! Our oven-baked pretzel thins comes dressed 5 super duper seasonings. 

            Thins by name, thins by nature… Our pretzel thins have less fat & fewer calories than crisps & popcorn. A deliciously light, healthy and crispy snack.
            
            Less than 130 calories per pack and all flavours are vegan friendly too!
            
            All pretzelheads are welcome. :)`,
            "linkTitle" :[]
        },
        {
            "id" : 2,
            "title": "Nutritional Info",
            "content": `Our pretzel thins have less fat & fewer calories than crisps, popcorn and even rice cakes! 

            Please check out the individual flavours for their respective nutritional deets:
            
            `,
            "linkTitle" :[`SALTED ORIGINAL`,`MULTI-SEED SESAME`,`SWEET CHILLI`,`SOUR CREAM & ONION`,`OH SO CHEESY`]
        },
        {
            "id":3,
            "title":"Incredients",
            "content": `All vegan friendly! 

            SALTED ORIGINAL: Wheat Flour, Water, Sunflower Oil, Sugar, Barley Malt Extract, Salt, Soya Lecithin, Sodium Bicarbonate.
            
            MULTI-SEED SESAME: Wheat Flour, Water, Sunflower Oil, Sugar, Barley Malt Extract, White and Black Sesame, Salt, Soya Lecithin, Sodium Bicarbonate.
            
            SWEET CHILLI: Wheat Flour, Sunflower Oil, Sweet Chilli Flavouring, Sugar, Barley Malt Extract, Salt, Soya Lecithin, Raising Agent: Ammonium Bicarbonate.
            
            SOUR CREAM & ONION: Wheat Flour, Sunflower Oil, Sour Cream & Onion Flavouring, Sugar, Barley Malt Extract, Salt, Soya Lecithin, Raising Agent: Ammonium Bicarbonate.
            
            OH SO CHEESY: Wheat Flour, Sunflower Oil, Vegan Cheese Flavouring, Sugar, Barley Malt Extract, Salt, Soya Lecithin, Raising Agent: Ammonium Bicarbonate.
            
            Allergen Advice: for allergens see ingredients in bold. Produced in a factory that handles Sesame.`,
            "linkTitle" :[]
        }
    ];
    const [open,setOpen] = useState(false);
    const toggle =(index)=>{
        if(open===index){
            return setOpen(null);
        }
        setOpen(index);
    };

    return (
        <div>
            <Navigation2 />
            <section className='View-Products-section'>
                <div className="container-fluid g-0">
                    <div className="container g-0 mx-auto  justify-content-center">
                        <div className="row ">
                            <div className="col-sm-6 VPCaursel mt-5 position-sticky ">
                                <div id="demo" className="carousel slide" data-interval='false'>
                                    
                                    <div className="carousel-inner VpCarousel-content h-75 position-sticky top-10 overflow-hidden">
                                        <div className="carousel-item active">
                                            <img src={PretzelBundle} alt="Los Angeles" className="d-block w-100 vpcarouselimages" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={PretzelBundlehover} alt="Chicago" className="d-block w-100 vpcarouselimages" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={PretzelBundlecontent} alt="New York" className="d-block w-100 vpcarouselimages" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={PretzelSalted10x} alt="New York" className="d-block w-100 vpcarouselimages" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={PretzelSesame10x} alt="New York" className="d-block w-100 vpcarouselimages" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={PretzelCheesy10x} alt="New York" className="d-block w-100 vpcarouselimages" />
                                        </div>
                                    </div>

                                    <button className="carousel-control-prev" data-bs-target="#demo" data-bs-slide="prev">
                                        <img src={SliderArrow} className="carousel-control-prev-image bg-white rounded-circle" />
                                    </button>
                                    <button className="carousel-control-next" data-bs-target="#demo" data-bs-slide="next">
                                        <img src={SliderArrow} className="carousel-control-next-image bg-white rounded-circle" />
                                    </button>
                                </div>
                                <div className="carousel-indicators Carousel_logo justify-content-around">
                                        <img type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active visually-hidden" aria-label='Slide1' />
                                        <img src={PretzelBundlehover} type="button" data-bs-target="#demo" className='active vpintabbtn' data-bs-slide-to="1" aria-label='2' />
                                        <img src={PretzelBundlecontent} type="button" data-bs-target="#demo" className='active vpintabbtn' data-bs-slide-to="2" aria-label='3' />
                                        <img src={PretzelSalted10x} type="button" data-bs-target="#demo" className=' active vpintabbtn' data-bs-slide-to="3" aria-label='4' />
                                        <img src={PretzelSesame10x} type="button" data-bs-target="#demo" className='active vpintabbtn' data-bs-slide-to="4" aria-label='5' />
                                        <img src={PretzelCheesy10x} type="button" data-bs-target="#demo" className='active vpintabbtn' data-bs-slide-to="5" aria-label='6' />
                                    </div>
                            </div>
                            <div className="col-sm-6 VPRight">
                                <div className='mx-auto'>
                                    <h1 className='VPheader'>
                                        OLL-TIMATE <br /> PRETZEL THINS <br /> BUNDLE
                                    </h1>
                                    <p className='fw-bold fs-5'>Absolute pretz-fection. 50 packs. 10 of each flavour. 1 way ticket to pleasureville.</p>
                                    <div className="VPreviws mt-2 fw-bold">
                                        <span>
                                            <span><BsFillStarFill /></span> <span />
                                            <span><BsFillStarFill /></span> <span />
                                            <span><BsFillStarFill /></span> <span />
                                            <span><BsFillStarFill /></span> <span />
                                            <span><BsFillStarFill /></span> <span />
                                            <span> 489</span><span /> <span>reviews</span>
                                        </span>
                                    </div>
                                    <div className="VPselect-size my-4 fw-normal  row">
                                        <p className='fw-bolder select-size-header'>SELECT SIZE</p>
                                        <div className="col-sm-3 mt-3 text-center vpselect-size-box">
                                            <div className='py-1'>
                                                <p>BUNDLE</p>
                                                <p>(50x35g)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="VPNotifymebutton text-center my-2">
                                        <button className='py-3 notifymebtn'><h5 className='text-uppercase'>Notify me when back in stock</h5></button>
                                    </div>
                                    <div className="afterNotifymetext">
                                        <p className='fw-bold'>You’ll be donating a meal with this order. Learn more on <span className='fw-bolder'>One Feeds Two</span></p>
                                    </div>
                                    <div className=" AsSeenandImgLayer my-4">
                                        <div className='inner-end-div'>
                                        <div className="AsSeentext text-uppercase py-1">As Seen IN</div>
                                        <div className='AsSeenLayer '>
                                            
                                                <div className="LayerImage "><img className='img-fluid' src={Bluegreataste} alt={Bluegreataste} /></div>

                                                <div className="LayerImage"><img className='img-fluid' src={Layer_2imge} alt={Layer_2imge} /></div>

                                                <div className="LayerImage"><img className='img-fluid' src={Layer_3imge} alt={Layer_3imge} /></div>

                                                <div className="LayerImage"><img className='img-fluid' src={Layer_4imge} alt={Layer_4imge} /></div>
                                         
                                        </div>
                                        </div>
                                    </div>
                                    <div className="Accordian-section">
                                        {accordianData.map(({title,content,linkTitle},index)=>{
                                            return  <Accordion
                                            key={index}
                                            title={title}
                                            content={content}
                                            linkTitle={linkTitle}
                                            open={index === open}
                                            toggle={() => toggle(index)}
                                        />
                                        })}
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                    </div>
                </div>
                <ViewProductsicon vpIconsSection={vpIconsSection}/>
            </section>
        </div>
    )
}
