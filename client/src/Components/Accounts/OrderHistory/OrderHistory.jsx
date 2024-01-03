import React, { useEffect, useState } from 'react'
import '../Ollys-Login/Login.css'
import './OrderHistory.css'
import { SubHeader } from '../SubHeader/SubHeader'
import { MdUnsubscribe } from "react-icons/md";
import { RiFileDownloadFill } from "react-icons/ri";
import ChocoPretzel from '../../Shop/images/DarkChoc_360x.png'
import Olives from '../../Shop/images/Olives-Chilli_360x.png'
import { Invoice } from '../../Invoice/Invoice';
import requests from "../../../Services/httpService";
import Orders from './Orders';

export const OrderHistory = () => {

    const [orderProducts, setOrderProducts] = useState([]);
    const [subscribeProducts, setSubscribeProducts] = useState([]);

    useEffect(() => {
        const fetchUserOrder = async () => {
            const res = await requests.get("/order");
            if(!res.orders){
                return;
            }

            const allCarts =  [];
            res.orders.forEach((curArr) => {
                const cartsWithoutSubscription = curArr.cart.filter(cart => !cart?.subscription).map((eachCart) => {
                    return {...eachCart, status: curArr.status}
                });
                allCarts.push(...cartsWithoutSubscription);   
            });
            console.log(allCarts);
            setOrderProducts(allCarts);

            const user = JSON.parse(localStorage.getItem("user"));
            const subscribeRes = await requests.get(`/customer/${user._id}`);
            setSubscribeProducts(subscribeRes.subscriptionType);
            console.log(subscribeRes);
            const allSubscribeCarts = [];
            subscribeRes.subscriptionType.forEach((curArr) => {
                const subscribeCart = {
                    title: curArr?.product?.title?.en,
                    attribute: curArr?.attribute,
                    quantity: curArr?.quantity,
                    price: curArr?.subscription_price,
                    image: curArr?.product?.image?.length > 0 ? curArr?.product?.image[0] : null,
                    duration: curArr?.subscription_duration,
                    status: curArr?.status,
                    _id: curArr._id
                }

                allSubscribeCarts.push(subscribeCart);
            });
            setSubscribeProducts(allSubscribeCarts);
        }
        fetchUserOrder();
    },[]);

    return (
        <div>
            <div className="container">
                <SubHeader />
                <div className="OrderProfile-section">
                    <h1 className='Order-History-Heading text-center'>Order History</h1>
                    <Orders title={"Your Orders"} orderProducts={orderProducts} />
                    <Orders title={"Subscription Orders"} orderProducts={subscribeProducts} subscription={true} />
                </div>
            </div>
        </div>
    )
}
