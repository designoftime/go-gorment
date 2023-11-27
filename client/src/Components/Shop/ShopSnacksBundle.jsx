import React from 'react'
import PretzelBundle from './images/ShopPretzelThinsBundlesimg1.png'
import OlivesBundle from './images/VARIETYOlivesPacksa064.png'
import PretzelBundlehover from './images/ShopPretzelThinsBundleshoverimg1webp.png'
import OlivesBundlehover from './images/Ollys-rebrand57886_450x80a1.jpg'
import { Products } from './Products'
export const ShopSnacksBundle = () => {
    const ShopSnacksBundleProducts = [
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
          "productimge1": OlivesBundle,
          "imgehover": OlivesBundlehover,
          "title": "Oll-timate Olives Bundle ",
          "sizeinfo": "Bundle(36x50g)",
          "price": "45.00",
          "reviews": "267"
        }
      ]
  return (
    <div>
        <section className='Snacks-Bundle-section'>
            <div className="container-fluid g-0">
                <h1 className='SnacksBundleheader text-center pt-5'>SNACK BUNDLES</h1>
                <p className='fw-bold fs-5 text-center py-3'>3 words for you - bundles of joy.</p>
                <Products ShopSnacksBundleProducts={ShopSnacksBundleProducts}/>
            </div>
        </section>
    </div>
  )
}
