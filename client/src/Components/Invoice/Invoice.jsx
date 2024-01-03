import React, { useState } from 'react'
import '../Accounts/OrderHistory/OrderHistory.css'
import { Table } from 'react-bootstrap'
import { FaFileDownload } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
import './Invoice.css'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable';
import PretzelTHins from '../Shop/images/DarkChoc_360x.png'

export const Invoice = ({ }) => {


  const generatePdf = () => {
    const doc = new jsPDF();
// Invoice ID
doc.setFontSize(14);
doc.text('Invoice ID: 165411154154', 20, 20);

// Buyer Details
doc.setFontSize(12);
doc.text('To: Nand Ji', 20, 30);
doc.text('LIG Square,Vijay Nagar,', 20, 40);
doc.text('Indore,', 20, 50);
doc.text('Madhya Pradesh, India', 20, 60);
doc.text('Mobile: 644412121', 20, 70);

// Purchase Details
doc.text('Invoice', 120, 30);
doc.text('ID: 165411154154', 120, 40);
doc.text('Creation Date: 5 December 2023', 120, 50);
doc.text('Status: Paid', 120, 60);

// Product Details
doc.addImage(PretzelTHins, 'PNG', 20, 90, 30, 30); // Adjust the image dimensions
doc.text('Dark-Chocolate Pretzel Thins', 60, 100);

// Table
const columns = ['Sr.', 'Name', 'Quantity', 'Price', 'Amount'];
const data = [
  [1, 'Dark-Choco-Pretzel Thins', 3, '300$', '900$'],
];
doc.autoTable(columns, data, { startY: 140 });

// Additional Payment Information
doc.text('An Additional Payment Information are here:', 20, 220);

// Total Amount
doc.text('Sub Total: 900$', 100, 200);
doc.text('Tax: 15%', 100, 205);
doc.text('Total Amount: 1100$', 100, 210);

// Save the PDF
doc.save('invoice.pdf');


  }

  return (
    <div className="Invoice-container mx-auto">
      <div className="InvoiceHeader d-flex justify-content-between align-items-center">
        <div className="IHeaderContent">
          <h3>Invoice ID: <span>165411154154</span></h3>
        </div>
        <div className="IHeaderButton">
          <button className='Invoicbtn ' onClick={generatePdf}>< FaFileDownload /> </button> <span />
          <button className='Invoicbtn '><MdLocalPrintshop /></button>
        </div>
      </div>
      <hr className='border-2' />
      <h1 className='text-dark text-center fw-boler'><span className='p-2 rounded-circle bg-danger'>GO</span> Gourmet</h1>
      <div className="InvoiceMain mt-5">
        <div className="InvoiceDetails d-flex justify-content-between">
          <div className="BuyerDetails ">
            <ul>
              <li><h5>To: Nand Ji</h5></li>
              <li className='street'>LIG Square,Vijay Nagar,</li>
              <li className='city'>Indore,</li>
              <li className='stateAndCountry'>Madhya Pradesh, India</li>
              <li className='mobile'>644412121</li>
            </ul>
          </div>
          <div className="PurchaseDetails">
            <ul>
              <li><h5>Invoice</h5></li>
              <li><strong>ID:</strong><span>165411154154</span></li>
              <li><strong>Creation Date :</strong><span>5 December 2023</span></li>
              <li><strong>Status :</strong><span>Paid</span></li>
            </ul>
          </div>
        </div>
        <div className="InvoiceProduct d-flex justify-content-evenly mt-4 align-items-center">
          <div className="OrderedProductimage"><img src={PretzelTHins} alt={PretzelTHins} /></div>
          <div className='IProductName'>Dark-Chocolate Pretzel Thins</div>
        </div>
        <div className="PaymentDetails mt-5">
          <Table className='border-2'>
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dark-Choco-Pretzel THins</td>
                <td>3</td>
                <td>300$</td>
                <td>900$</td>
              </tr>
            </tbody>
          </Table>
          <div className="Invoice-Bottom mt-5 d-flex justify-content-between align-items-center">
            <div className="Invoice-Bottomtext">
              An Additional Payment Information are here:
            </div>
            <div className="Invoice-Bottom-List">
              <ul>
                <li><strong>Sub Total: </strong> <span>900$</span></li>
                <li><strong>Tax: </strong> <span>15%</span></li>
                <li><strong>Total <br />Amount: </strong> <span>1100$</span></li>
              </ul>
            </div>
            <button className='Invoicbtn ' onClick={generatePdf}>< FaFileDownload /> </button> <span />
          </div>
        </div>
      </div>
    </div>

  )
}
