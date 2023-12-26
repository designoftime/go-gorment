import React, { useEffect, useRef, useState } from 'react'
import '../../Home/Home.css'
import './ViewProducts.css'
import '../../Cart/Cart.css'
import { BsFillStarFill } from 'react-icons/bs'
import { useParams } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import useWindowInnerWidth from '../../hooks/useWindowInnerWidth'
import { ProductPrice } from './ProductPrice'
import { fetchPrice } from '../../../Redux/actions/productService'
import requests from '../../../Services/httpService'
import ProductSectionOne from './ProductSectionOne'
import ProductSectionTwo from './ProductSectionTwo'
import ProductSectionThree from './ProductSectionThree'
import ProductSectionFour from './ProductSectionFour'
import AllVariants from '../Variants/AllVariants'

export const ViewProduct = () => {

    const showValue = useWindowInnerWidth();
    const first = useRef();
    const [productNo, setProductNo] = useState(0)
    const [product, setProduct] = useState({});
    const [productPrice, setProductPrice] = useState({});
    const [isQuantityAvailable, setIsQuantityAvailable] = useState(false);
    const [productTheme, setProductTheme] = useState({});
    const updateProductNo = (event) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) {
            setProductNo(newValue)
        }
    }
    const increaseProduct = () => {
        setProductNo((prevProductNo) => prevProductNo + 1);
    }
    const decreaseProduct = () => {
        if (productNo > 0) {
            setProductNo((prevProductNo) => prevProductNo - 1);
        }
    }
    const handlePrice = (variantData) => {
        const productPrice = {
            price: fetchPrice(variantData),
            subscribePrice: 0
        }

        setProductPrice(productPrice);

        if (Number(variantData?.quantity) <= 0) {
            setIsQuantityAvailable(false);
        }
        else {
            setIsQuantityAvailable(true);
        }
    }

    const fetchProductBySlug = async (id) => {
        try {
            const res = await requests.get(`/products/product/${id}`);
            setProduct(res);
            console.log(res);
            handlePrice(res?.variants[0]);
            const productPageRes = await requests.get(`http://localhost:5055/api/theme/658921a204b7393748042e6f`);
            setProductTheme(productPageRes?.theme);
            console.log(productPageRes);
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
                    <div className="container mx-auto g-0">
                        <div className="row justify-content-between">
                            <div className={showValue < 1000 ? "col-12 VPCaursel mt-5" : "col-8 VPCaursel mt-5"}>
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
                                    {product?.image && product?.image.map((img, idx) => {
                                        return (
                                            <SwiperSlide key={idx} className='slide'><img src={img} alt={img} key={idx} className='vpcarouselimages rounded-4' /></SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                                <div className='vpslider-logo'>
                                    <div className="vpslide-logos">
                                        {
                                            product?.image && product?.image.map((img, idx) => {
                                                return (
                                                    <img key={idx} src={img} alt={img} className='active-logo rounded-4' onClick={() => {
                                                        first.current.swiper.slideTo(idx);
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
                                    <AllVariants product={product} setProductPrice={setProductPrice} setIsQuantityAvailable={setIsQuantityAvailable} />
                                    {isQuantityAvailable ? <><ProductPrice productPrice={productPrice} />
                                    <div className='d-flex gap-3 my-3'>
                                        <div className="cartProductQuantity">
                                            <div>
                                                <button
                                                    className="counterbtn"
                                                    onClick={
                                                        decreaseProduct
                                                    }
                                                >
                                                    <strong>-</strong>
                                                </button>
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    onChange={
                                                        updateProductNo
                                                    }
                                                    value={productNo}
                                                    className=" counterinput"
                                                />
                                            </div>
                                            <div>
                                                <button
                                                    className="counterbtn"
                                                    onClick={
                                                        increaseProduct
                                                    }
                                                >
                                                    <strong>+</strong>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="addtocart">
                                            <button className='addtocartbtn'>Add to Cart</button>
                                        </div>
                                    </div></> :
                                        <div className="VPNotifymebutton text-center my-2">
                                            <button className='py-3 notifymebtn'><h5 className='text-uppercase'>Notify me when back in stock</h5></button>
                                        </div>}
                                    
                                    <div className="afterNotifymetext">
                                        <p className='fw-bold'>You’ll be donating a meal with this order. Learn more on <span className='fw-bolder'>One Feeds Two</span></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <ProductSectionOne data={productTheme?.section_one} />
                    </div>
                </div>
                <ProductSectionTwo data={productTheme?.section_two} />
                <ProductSectionThree data={productTheme?.section_three} />
                <ProductSectionFour data={productTheme?.section_four} />
            </section>
        </div>
    )
}
