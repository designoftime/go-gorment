import React from 'react'
import { sliderVal } from '../../../utils/Constants';

export const ViewProductsicon = ({data}) => {

    if(!data){
        return;
    }

    return (
        <div className='container-fluid g-0 mt-5 py-5 ViewProductIconsSection'>
            <div className="container mx-auto">
                <div className="VPIconsbox ">
                    {
                      sliderVal.map((val,idx)=>{
                        if(!data[`${val}_img`]) return;
                        return (
                            <div className='VPIcon-main py-5' key={idx}>
                                <div className='VPIcon mx-auto'><img className='vpiconsimge' src={data[`${val}_img`]} alt={data[`${val}_img`]} /> </div>
                                <div className="VPIcon-content py-3 fw-bold fs-4 text-uppercase text-center">{data[`${val}_title`]} </div>
                            </div>
                        );
                       })
                    }
                </div>
            </div>
        </div>
    )
}
