import { sliderVal } from '../../../utils/Constants';
import '../../Home/Home.css';
import { Accordion } from '../Accordion';
import './ViewProducts.css';

import React, { useState } from 'react'

const ProductSectionOne = ({data}) => {
  
    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        }
        setOpen(index);
    };

  if(!data){
    return;
  }

  return (
    <> 
        <div className=" AsSeenandImgLayer my-4">
            <div className='inner-end-div'>
                <div className="AsSeentext text-uppercase py-1">As Seen IN</div>
                <div className='AsSeenLayer '>
                    {
                        sliderVal.map((val,idx) => {
                            if(!data[`${val}_img`]) return;
                            return (<div key={idx} className="LayerImage"><img className='layerImg' src={data[`${val}_img`]} alt={data[`${val}_img`]} /></div>)
                        })
                    }
                </div>
            </div>
        </div>
        <div className="Accordian-section">
            {sliderVal.map((val, idx) => {
                if(!data[`${val}_title`]) return;

                return <Accordion
                    key={idx}
                    title={data[`${val}_title`]}
                    content={data[`${val}_editor`]}
                    open={idx === open}
                    toggle={() => toggle(idx)}
                />
            })}
        </div>
    </>
  )
}

export default ProductSectionOne;