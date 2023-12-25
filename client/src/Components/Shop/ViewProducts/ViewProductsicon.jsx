import React from 'react'

export const ViewProductsicon = ({vpIconsSection}) => {
    // console.log(typeof(vpIconsSection))
   
    return (
        <div className='container-fluid g-0 mt-5 py-5 ViewProductIconsSection'>
            <div className="container mx-auto">
                <div className="VPIconsbox ">
                    {
                      vpIconsSection.map((items,id)=>{
                        return (
                            <div className='VPIcon-main py-5' key={id}>
                                <div className='VPIcon mx-auto'><img className='vpiconsimge' src={items.iconsimge} alt={items.iconsimge} /> </div>
                                <div className="VPIcon-content py-3 fw-bold fs-4 text-uppercase text-center">{items.iconcontent} </div>
                            </div>
                        );
                       })
                    }

                </div>
            </div>
        </div>
    )
}
