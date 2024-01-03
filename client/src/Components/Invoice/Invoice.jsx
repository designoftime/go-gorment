import React, { useState } from 'react'
import '../Accounts/OrderHistory/OrderHistory.css'
import { Table } from 'react-bootstrap'
import { FaFileDownload } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
import PretzelTHins from '../Shop/images/DarkChoc_360x.png'
export const Invoice = ({productInfo}) => {
  const [check,setCheck] = useState('checked')
  console.log(productInfo,check);
  return (
      <div className="container mx-auto">
      <div className="InvoiceHeader d-flex justify-content-between align-items-center">
        <div className="IHeaderContent">
          <h3>Invoice ID: <span>165411154154</span></h3>
        </div>
        <div className="IHeaderButton">
          <button className='Invoicbtn '>< FaFileDownload /> </button> <span/>
          <button className='Invoicbtn '><MdLocalPrintshop /></button> 
        </div> 
      </div>
      <hr className='border-2'/>
      <h1 className='text-dark text-center fw-boler'><span className='p-2 rounded-circle bg-danger'>GO</span> Gourmet</h1>
      <Table className='bg-white border-none '>
        <tbody className='InvoiceMain mx-auto'>
          <tr className='mx-auto'>
            <td className='OrderedProductimage'><img src={PretzelTHins} alt={PretzelTHins} /></td>
            <td className='ProductName fs-5'>Dark-Choco Pretzel Thins</td>
          </tr>
        </tbody>
      </Table>
      </div>

  )
}
