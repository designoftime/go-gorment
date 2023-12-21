import React, { useEffect, useRef, useState } from 'react'
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
import { useParams } from 'react-router'
import axios from 'axios'
import Variant from '../Variant'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import useWindowInnerWidth from '../../hooks/useWindowInnerWidth'
import { ProductHero } from './ProductHero'

export const ViewProduct = () => {
    const vpIconsSection = [
        {
            "id": 1,
            "iconsimge": Ovenbakedimge,
            "iconcontent": "Oven-baked"
        },
        {
            "id": 2,
            "iconsimge": Veganfriendly,
            "iconcontent": "Vegan Friendly"
        },
        {
            "id": 3,
            "iconsimge": Cal120,
            "iconcontent": "light- crispy"
        },
        {
            "id": 4,
            "iconsimge": Tooth,
            "iconcontent": "Super Sesoning"
        },
    ];
    const accordianData = [
        {
            "id": 1,
            "title": "Learn More",
            "content": `The planet’s thinnest & crispiest pretzels! Our oven-baked pretzel thins comes dressed 5 super duper seasonings. 

            Thins by name, thins by nature… Our pretzel thins have less fat & fewer calories than crisps & popcorn. A deliciously light, healthy and crispy snack.
            
            Less than 130 calories per pack and all flavours are vegan friendly too!
            
            All pretzelheads are welcome. :)`,
            "linkTitle": []
        },
        {
            "id": 2,
            "title": "Nutritional Info",
            "content": `Our pretzel thins have less fat & fewer calories than crisps, popcorn and even rice cakes! 

            Please check out the individual flavours for their respective nutritional deets:
            
            `,
            "linkTitle": [`SALTED ORIGINAL`, `MULTI-SEED SESAME`, `SWEET CHILLI`, `SOUR CREAM & ONION`, `OH SO CHEESY`]
        },
        {
            "id": 3,
            "title": "Incredients",
            "content": `All vegan friendly! 

            SALTED ORIGINAL: Wheat Flour, Water, Sunflower Oil, Sugar, Barley Malt Extract, Salt, Soya Lecithin, Sodium Bicarbonate.
            
            MULTI-SEED SESAME: Wheat Flour, Water, Sunflower Oil, Sugar, Barley Malt Extract, White and Black Sesame, Salt, Soya Lecithin, Sodium Bicarbonate.
            
            SWEET CHILLI: Wheat Flour, Sunflower Oil, Sweet Chilli Flavouring, Sugar, Barley Malt Extract, Salt, Soya Lecithin, Raising Agent: Ammonium Bicarbonate.
            
            SOUR CREAM & ONION: Wheat Flour, Sunflower Oil, Sour Cream & Onion Flavouring, Sugar, Barley Malt Extract, Salt, Soya Lecithin, Raising Agent: Ammonium Bicarbonate.
            
            OH SO CHEESY: Wheat Flour, Sunflower Oil, Vegan Cheese Flavouring, Sugar, Barley Malt Extract, Salt, Soya Lecithin, Raising Agent: Ammonium Bicarbonate.
            
            Allergen Advice: for allergens see ingredients in bold. Produced in a factory that handles Sesame.`,
            "linkTitle": []
        }
    ];
    const productSliderVal = [
        {
            id: 1,
            "sliderimg": PretzelBundle
        },
        {
            id: 2,
            "sliderimg": PretzelBundlehover
        },
        {
            id: 3,
            "sliderimg": PretzelBundlecontent
        },
        {
            id: 4,
            "sliderimg": PretzelSalted10x
        },
        {
            id: 5,
            "sliderimg": PretzelSesame10x
        },
        {
            id: 6,
            "sliderimg": PretzelCheesy10x
        },
    ]
    const showValue = useWindowInnerWidth();
    const first = useRef();
    const [open, setOpen] = useState(false);
    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        }
        setOpen(index);
    };

    const [product, setProduct] = useState({});

    const fetchProductBySlug = async (id) => {
        try {
            const res = await axios.get(`/products/product/${id}`);
            setProduct(res.data);
            console.log(res.data);

        } catch (error) {
            console.log(error);
        }
    }

    const { productSlug } = useParams();

    useEffect(() => {
        fetchProductBySlug(productSlug);
    }, [productSlug]);


    return (
        <div>
            <section className='View-Products-section'>
                <div className="container-fluid">
                    <div className="container mx-auto">
                        <div className="row">
                            <div className={showValue < 1000?"col-12 VPCaursel mt-5":"col-6 VPCaursel mt-5"}>
                                <Swiper
                                    className='swiper VpCarousel-content'
                                    ref={first}
                                    navigation={true}
                                    spaceBetween={0}
                                    onSlideChange={(e) => {
                                        // setActiveSlider(e.activeIndex)
                                    }}
                                    modules={[Navigation, Pagination]}
                                >
                                    {productSliderVal.map((items, id) => {
                                        return (
                                            <SwiperSlide key={id} className='slide'><img src={items.sliderimg} alt={items.sliderimg} key={id} className='vpcarouselimages' /></SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                                <div className='vpslider-logo'>
                                    <div className="vpslide-logos">
                                        {
                                            productSliderVal.map((items, id) => {
                                                return (
                                                    <img key={id} src={items.sliderimg} alt={items.sliderimg} className='active-logo' onClick={() => {
                                                        first.current.swiper.slideTo(id);
                                                    }} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 VPRight">
                                <div className='mx-auto'>
                                    <h1 className='VPheader'>
                                        {product?.title?.en}
                                    </h1>
                                    <p className='fw-bold fs-5'>{product?.description?.en}</p>
                                    <div className="VPreviws mt-2 fw-bold">
                                        <span>
                                            <span><BsFillStarFill /></span> <span />
                                            <span><BsFillStarFill /></span> <span />
                                            <span><BsFillStarFill /></span> <span />
                                            <span><BsFillStarFill /></span> <span />
                                            <span><BsFillStarFill /></span> <span />
                                            <span> 490</span><span /> <span>reviews</span>
                                        </span>
                                    </div>
                                    <div className="VPselect-size my-4 fw-normal  row">
                                        <p className='fw-bolder select-size-header '>SELECT SIZE</p>
                                        <div className='row'>
                                            {
                                                product?.variants?.map((variant,index) => {
                                                    return <Variant key={index} variantData={variant} />
                                                })
                                            }
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

                                                <div className="LayerImage "><img className='layerImg' src={Bluegreataste} alt={Bluegreataste} /></div>

                                                <div className="LayerImage"><img className='layerImg' src={Layer_2imge} alt={Layer_2imge} /></div>

                                                <div className="LayerImage"><img className='layerImg' src={Layer_3imge} alt={Layer_3imge} /></div>

                                                <div className="LayerImage"><img className='layerImg' src={Layer_4imge} alt={Layer_4imge} /></div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="Accordian-section">
                                        {accordianData.map(({ title, content, linkTitle }, index) => {
                                            return <Accordion
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
                <ViewProductsicon vpIconsSection={vpIconsSection} />
                <ProductHero/>
            </section>
        </div>
    )
}
