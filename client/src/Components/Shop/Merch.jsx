import React from 'react'
import Snacktingimge from './images/SnackTin_360x.avif'
import Socksimge from './images/Socks_360x.jpg'
import Sockshoverimge from './images/Ollys-rebrand58914_360x.jpg'
import Hateimge from './images/Hat_360x.jpg'
import Hatehoverimge from './images/Ollys-rebrand58937_360x.jpg'
import { Products } from './Products'
export const Merch = () => {
    const MerchProducts = [
        {
            "id": 1,
            "productimge1": Snacktingimge,
            "imgehover": Snacktingimge,
            "title": "Snack Tin",
            "price": "16.00",
            "reviews": "26"

        },
        {
            "id": 2,
            "productimge1": Socksimge,
            "imgehover": Sockshoverimge,
            "title": "Snocks",
            "price": "12.00",
            "reviews": "1"

        },
        {
            "id": 3,
            "productimge1": Hateimge,
            "imgehover": Hatehoverimge,
            "title": "Beanie",
            "price": "15.00",
            "reviews": ""
            // "reviews": "26"

        },
    ]
    return (
        <div>
            <section className='Merch-section'>
                <h1 className='text-center mt-5 Merchheader'>MERCH</h1>
                <p className='fw-bold fs-5 text-center py-3'>For those who want to take their snacking experience to the next dimension.</p>
                <Products  MerchProducts={ MerchProducts}/>
            </section>
        </div>
    )
}
