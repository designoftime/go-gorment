import React from 'react'
import requests from '../../../Services/httpService';
import { toast } from 'react-toastify';

const ProductNoticification = () => {

  const handleNotificationForm = (e) => {

    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    const data = {
        user: user ? user._id : null,
        product: "6596a1fb230fce43edaa5706",
        email: e.target?.email?.value,
        status: true,
        attribute: e.target?.attribute?.value
    }

    const addUserToNotify = async () => {
        await requests.post("/product-notification/add", data);
        toast.success("You're in! We'll let you know when it's back.");
    }

    addUserToNotify();
  }

  return (
    <div className='m-5 p-5 mw-100 mh-100'>
        <form onSubmit={handleNotificationForm}>
            <input type="text" name="attribute" placeholder='attribute' />
            <input type="email" name="email" placeholder='email'/>

            <button> Submit </button>
        </form>
    </div>
  )
}

export default ProductNoticification;