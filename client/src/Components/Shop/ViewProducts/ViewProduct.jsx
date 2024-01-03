import React, { useEffect, useRef, useState } from "react";
import "../../Home/Home.css";
import "./ViewProducts.css";
import "../../Cart/Cart.css";
import { BsFillStarFill } from "react-icons/bs";
import { useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import useWindowInnerWidth from "../../hooks/useWindowInnerWidth";
import { ProductPrice } from "./ProductPrice";
import requests from "../../../Services/httpService";
import ProductSectionOne from "./ProductSectionOne";
import ProductSectionTwo from "./ProductSectionTwo";
import ProductSectionThree from "./ProductSectionThree";
import ProductSectionFour from "./ProductSectionFour";
import AllVariants from "../Variants/AllVariants";
import { CustomerReview } from "./CustomerReview/CustomerReview";
import { addToCartLocal } from "../../../Redux/actions/cartServices";

export const ViewProduct = () => {
    const showValue = useWindowInnerWidth();
    const SwiperfirstImg = useRef();
    const [isQuantityAvailable, setIsQuantityAvailable] = useState(false);
    const [productQuantity, setproductQuantity] = useState(1);
    const [productPrice, setProductPrice] = useState({});
    const [purchaseType, setPurchaseType] = useState("single");
    const [subscriptionType, setSubscriptionType] = useState();
    const [product, setProduct] = useState({});
    const [focusVariants, setFocusVariants] = useState([]);

    const [productTheme, setProductTheme] = useState({});

    const updateproductQuantity = (e) => {
        const newValue = parseInt(e.target.value);
        if (!isNaN(newValue)) {
            setproductQuantity(newValue);
        }
    };
    const increaseProduct = () => {
        setproductQuantity((prevVal) => prevVal + 1);
    };
    const decreaseProduct = () => {
        if (productQuantity > 0) {
            setproductQuantity((prevVal) => prevVal - 1);
        }
    };

    const fetchProductBySlug = async (id) => {
        try {
            const res = await requests.get(`/products/product/${id}`);
            setProduct(res);
            // console.log(res);
            const productPageRes = await requests.get(`/theme/${res?.theme}`);
            setProductTheme(productPageRes?.theme);
            // console.log(productPageRes);
        } catch (error) {
            console.log(error);
        }
    };

    const { productSlug } = useParams();

    useEffect(() => {
        fetchProductBySlug(productSlug);
    }, [productSlug]);

    const addToCart = () => {
        const cartData = {
            productId: product?._id,
            image: product?.image[0],
            title: product?.title?.en,
            attribute: productPrice?.attribute?.slice(1),
            quantity: productQuantity,
            attributeId: focusVariants,
        };

        if (purchaseType === "single") {
            cartData["price"] = productPrice?.price;
        } else {
            cartData["price"] = productPrice?.subscribePrice;
            cartData["subscription"] = subscriptionType;
        }

        const AddToCartAPI = async () => {
            const user = JSON.parse(localStorage.getItem("user"));

            if (!user?.token) {
                addToCartLocal(cartData);
                return;
            }

            try {
                const getCarts = await requests.get("/cart");
                let findCart = getCarts.carts.find((eachCart) => {
                    return (
                        eachCart.productId === cartData.productId &&
                        eachCart?.attribute === cartData?.attribute &&
                        eachCart?.subscription === cartData?.subscription
                    );
                });

                if (findCart) {
                    await requests.put(`cart/${findCart._id}`, {
                        newQuantity: findCart.quantity + cartData.quantity,
                    });
                } else {
                    await requests.post("/cart/add-to-cart", {
                        cart: cartData,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };

        AddToCartAPI();
    };

    return (
        <div>
            <section className="View-Products-section">
                <div className="container-fluid view-product-relative-container">
                    <div className="container mx-auto g-0">
                        <div className="row justify-content-between view-product-info">
                            <div
                                className={
                                    showValue < 1000
                                        ? "col-12 VPCaursel"
                                        : "col-8 VPCaursel "
                                }
                            >
                                <div className="view-product-sticky-div">
                                    <Swiper
                                        className="swiper VpCarousel-content"
                                        ref={SwiperfirstImg}
                                        navigation={true}
                                        spaceBetween={0}
                                        onSlideChange={(e) => {
                                            // setActiveSlider(e.activeIndex)
                                        }}
                                        modules={[Navigation, Pagination]}
                                    >
                                        {product?.image &&
                                            product?.image.map((img, idx) => {
                                                return (
                                                    <SwiperSlide
                                                        key={idx}
                                                        className="slide"
                                                    >
                                                        <div className="view-product-swipper-img">
                                                            <img
                                                                src={img}
                                                                alt={img}
                                                                key={idx}
                                                                className="vpcarouselimages rounded-4"
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                );
                                            })}
                                    </Swiper>
                                    <div className="vpslider-logo">
                                        <div className="vpslide-logos">
                                            {product?.image &&
                                                product?.image.map(
                                                    (img, idx) => {
                                                        return (
                                                            <div className="vpslide-logos-fix-div">
                                                                <img
                                                                    key={idx}
                                                                    src={img}
                                                                    alt={img}
                                                                    className="active-logo rounded-4"
                                                                    onClick={() => {
                                                                        SwiperfirstImg.current.swiper.slideTo(
                                                                            idx
                                                                        );
                                                                    }}
                                                                />
                                                            </div>
                                                        );
                                                    }
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 VPRight">
                                <div className="view-product-text">
                                    <h1>{product?.title?.en}</h1>
                                    <p>{product?.description?.en}</p>
                                    <div className="VPreviws">
                                        <div className="stars">
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                        </div>
                                        <div className="reviews">
                                            <span> 490</span>
                                            <span>reviews</span>
                                        </div>
                                    </div>
                                    <AllVariants
                                        product={product}
                                        setProductPrice={setProductPrice}
                                        setIsQuantityAvailable={
                                            setIsQuantityAvailable
                                        }
                                        setFocusVariants={setFocusVariants}
                                        focusVariants={focusVariants}
                                    />
                                    {isQuantityAvailable ? (
                                        <>
                                            <ProductPrice
                                                subscriptionType={
                                                    subscriptionType
                                                }
                                                setSubscriptionType={
                                                    setSubscriptionType
                                                }
                                                product={product}
                                                purchaseType={purchaseType}
                                                setPurchaseType={
                                                    setPurchaseType
                                                }
                                                productPrice={productPrice}
                                            />
                                            <div className="cart-info-inc-dec-btn">
                                                <div className="cartProductQuantity">
                                                    <button
                                                        className="counterbtn"
                                                        onClick={
                                                            decreaseProduct
                                                        }
                                                    >
                                                        <strong>-</strong>
                                                    </button>

                                                    <input
                                                        type="text"
                                                        onChange={
                                                            updateproductQuantity
                                                        }
                                                        value={productQuantity}
                                                        className=" counterinput"
                                                    />
                                                    <button
                                                        className="counterbtn"
                                                        onClick={
                                                            increaseProduct
                                                        }
                                                    >
                                                        <strong>+</strong>
                                                    </button>
                                                </div>
                                                <div className="addtocart">
                                                    <button
                                                        className="addtocartbtn"
                                                        onClick={addToCart}
                                                    >
                                                        Add To Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="VPNotifymebutton text-center my-2">
                                            <button className="py-3 notifymebtn">
                                                <h5 className="text-uppercase">
                                                    Notify me when back in stock
                                                </h5>
                                            </button>
                                        </div>
                                    )}

                                    <div className="afterNotifymetext">
                                        <p>
                                            You’ll be donating a meal with this
                                            order. Learn more on{" "}
                                            <span className="fw-bolder">
                                                One Feeds Two
                                            </span>
                                        </p>
                                        <ProductSectionOne
                                            data={productTheme?.section_one}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductSectionTwo data={productTheme?.section_two} />
                <ProductSectionThree data={productTheme?.section_three} />
                <ProductSectionFour data={productTheme?.section_four} />
                <CustomerReview productId={product._id} />
            </section>
        </div>
    );
};
