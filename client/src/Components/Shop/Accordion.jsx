import React from 'react'
import Collapse from 'react-collapse'
import './ViewProducts/ViewProducts.css'
import {IoMdClose} from 'react-icons/io'
import { Link } from 'react-router-dom'
export const Accordion = ({ open, toggle, title, content, linkTitle}) => {

    return (
      
        <div className="Accordian-total-content py-2  border-3">
            <div
                className= {`w-100 py-2 px-3 d-flex align-items-center  ${ open ? 'Collapseborder2':'Collapseborder'} justify-content-between`}
                onClick={toggle}
            >
                <p className=" fw-bold accordion-title text-uppercase">
                    {title}
                </p>
                <div
                    className={
                        open
                            ? "fs-5 fw-bolder"
                            : "fs-5 fw-bolder rotate-45 collapsebutton"
                    }
                >
                    <IoMdClose/>
                </div>
            </div>
            <Collapse isOpened={open} className='VPcollapse'>
                <div className=" pb-3 accordion-content ">
                    {content}
                    {linkTitle.map((items,index)=>{
                        return(
                            <div className='py-1'><Link to='/shop/viewproduct' className='linkTitle-content' key={index}>{items}</Link></div>
                        )
                    })}
                </div>
            </Collapse>

        </div>
    )
}
