import React from 'react'
import ProductHeroImage from '../images/ProductHeroImage.webp'
export const ProductHero = () => {
    const pHContent = [
        {
            id: 1,
            "subheader": "CRISP OLL-TERNATIVE ",
            "subcontent": "Our magical pretzel thins have less fat & fewer calories than crisps & popcorn. All vegan friendly too!",
        },
        {
            id: 2,
            "subheader": "OVEN-BAKED (NEVER FRIED) ",
            "subcontent": "We oven-bake our thins to pretz-perfection, to create a light & crispy snack that will blow your socks off every time. ",
        },
        {
            id: 3,
            "subheader": "LESS THAN 120 CALS ",
            "subcontent": "Thins by name, thins by nature. Our snack packs have less than 120 calories per bag.",
        },
    ]
    return (
        <div>
            <div className="Product-Hero-Section">
                <div className="ProductHeroMain">
                    <div className="ProductHero-left">
                        <img className='Product-hero-img' src={ProductHeroImage} alt={ProductHeroImage} />
                    </div>
                    <div className="ProductHero-right">
                        <h1 className='PH-header text-center pt-5 '>HEALTHIER <br /> DELICIOUS</h1>

                        <div className="PH-content">
                            {pHContent.map((items) => {
                                return (
                                    <div className='PH-main'>
                                        <h5 className='fw-bolder'><strong className='PH-sub-header'>{items.subheader}</strong></h5>
                                        <p className='PH-sub-content'>{items.subcontent}</p>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
