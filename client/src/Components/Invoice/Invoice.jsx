import React from 'react'
import '../Accounts/OrderHistory/OrderHistory.css'
import { Table } from 'react-bootstrap'
import { FaFileDownload } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
export const Invoice = (productInfo) => {
  return (
      <div className="container mx-auto">
      <div className="InvoiceHeader flex justify-between align-items-center">
        <div className="IHeaderContent">
          <h3>Invoice ID: <span>165411154154</span></h3>
        </div>
        <div className="IHeaderButton">
          <button className='Invoicbtn '>< FaFileDownload /> </button> <span/>
          <button className='Invoicbtn '><MdLocalPrintshop /></button> 
        </div> 
      </div>
      <hr className='border-2'/>
      <Table className='bg-white border-none dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm'>
        <thead>
          <th><h1 className='text-dark text-center font-[Snacksgifheaderfont] text-5xl text-pretty font-extrabold'><span className='p-2 rounded-circle bg-red-400 font-[Snacksgifheaderfont]'>GO</span> Gourmet</h1></th>
        </thead>
        <tbody>
          <div className="InvoiceMain">
            
          </div>
        </tbody>
      </Table>
      </div>

  )
}
