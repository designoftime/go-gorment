import React, { useState } from 'react'
import '../Accounts/OrderHistory/OrderHistory.css'
import { Table } from 'react-bootstrap'
import { FaFileDownload } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
import './Invoice.css'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable';
import { useLocation, useParams } from 'react-router-dom'

export const Invoice = ({ }) => {
  const doc = jsPDF();
  const maxWidth = 60;
  const positioningJspdf = ()=>{
    

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');

    // Add header content
    doc.text('Tax Invoice', 20, 20);
    doc.text('Order Id: OODDD16516654154644411', 20, 30);
    doc.text('Order Date: 29-11-2023, 5:10 PM', 20, 40);
    doc.text('Invoice No: SADSDA653515445466', 120, 30);
    doc.text('Invoice Date: 30-11-2023, 7:10 AM', 120, 40);

    // Add seller details
    doc.text('Sold by', 20, 60);
    doc.text('GO Gourmet.Pvt.Lmt', 20, 70);
    doc.text(
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum labore facilis libero non inventore sequi earum. Explicabo rem aperiam, facilis cum esse perspiciatis illum ut, dolor excepturi itaque accusamus laboriosam.`,
      20,
      80,{maxWidth}
    );

    // Add shipping address
    doc.text('Shipping Address', 80, 60);
    doc.text('Nand Ji', 80, 70);
    doc.text('LIG Square\nNear New Palasia\nIndore-452002,IN-MP', 80, 80);

    // Add billing address
    doc.text('Billing Address', 150, 60);
    doc.text('Nand Ji', 150, 70);
    doc.text('LIG Square\nNear New Palasia\nIndore-452002,IN-MP', 150, 80);

    // Add payment details
    const columns = ['Product', 'Description', 'Qty', 'Gross Amount', 'Discount', 'Taxable Value', 'Total'];
    const data = [
      ['Dark-Choco-Pretzel Thins (Regular (50gX30g))', 'GST:18%\nShipping and Handling Charges', 1, '300$', '-0.00', '27.12', '350$'],
      ['Dark-Choco-Pretzel Thins (Regular (50gX30g))', 'GST:18%\nShipping and Handling Charges', 1, '300$', '-0.00', '27.12', '350$'],
    ];

    doc.autoTable({
      startY: 130,
      head: [columns],
      body: data,
    });

    // Add table footer
    doc.text('TOTAL QTY: 2', 15, doc.autoTable.previous.finalY+5);
    doc.text('TOTAL PRICE: 700$', 150, doc.autoTable.previous.finalY + 5);
    doc.text('All Values are in INR', 150, doc.autoTable.previous.finalY + 10);

    // Add seller address
    doc.text('Seller Registered Address: Go Gourmet Pvt.Lmt,', 20, doc.autoTable.previous.finalY + 40);
    doc.text('Go Gourmet Pvt Lmt,Scheme No.78,Vijay Nagar,Indore-452015', 20, doc.autoTable.previous.finalY + 50);

    // Add declaration
    doc.text('Declaration', 20, doc.autoTable.previous.finalY + 70);
    doc.text('The goods sold are intended for end user consumption and not for resale', 20, doc.autoTable.previous.finalY + 80);

  }
  const { state } = useParams();
  console.log(state);
  // To Download Pdf
  const generatePdf = () => {

    positioningJspdf();

    // Save the PDF
    doc.save('invoice.pdf');


  }
  // To Print Invoice
  const printInvoice = () => {
    positioningJspdf();
    // Save the PDF
    doc.autoPrint();
    window.open(doc.output('bloburl'), '_blank');

  }
  return (
    <div className="Invoice-container mt-5 mx-auto">
      <div className="InvoiceHeader-section">
        <div className="IHeaderContent">
          <h3 className='Taxtext'>Tax Invoice</h3>
          <div className="Order-details">
            <p className=''>Order Id: OODDD16516654154644411</p>
            <p>Order Date: 29-11-2023,5:10 PM</p>
          </div>
          <div className="Invoice-details">
            <p className=''>Invoice No: SADSDA653515445466</p>
            <p>Invoice Date: 30-11-2023, 7:10 AM</p>
          </div>
        </div>
        <div className="IHeaderButton">
          <button className='Invoicbtn ' onClick={generatePdf}>< FaFileDownload /> </button> <span />
          <button className='Invoicbtn ' onClick={printInvoice}><MdLocalPrintshop /></button>
        </div>
      </div>
      <hr className='border-2' />
      <div className="InvoiceMain ">
        <div className="AddressDetails">
          <div className="SellerDetails">
            <h6 className='fw-bold'>Sold by</h6>
            <p>GO Gourmet.Pvt.Lmt</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum labore facilis libero non inventore sequi earum. Explicabo rem aperiam, facilis cum esse perspiciatis illum ut, dolor excepturi itaque accusamus laboriosam.
            </p>
          </div>
          <div className="ShippingAddr ">
            <h6 className='fw-bold'>Shipping Address</h6>
            <p>Nand Ji</p>
            <p>LIG Square <br />Near New Palasia <br />Indore-452002,IN-MP</p>
          </div>
          <div className="Billing Addr">
            <h6 className='fw-bold'>Billing Address</h6>
            <p>Nand Ji</p>
            <p>LIG Square <br />Near New Palasia <br />Indore-452002,IN-MP</p>
          </div>
        </div>
        <div className="PaymentDetails mt-5">
          <Table className='border-2'>
            <thead className=''>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Qty</th>
                <th>Gross<br /> Amount</th>
                <th>Discount</th>
                <th>Taxable<br /> Value</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dark-Choco-Pretzel Thins <br />(Regular (50gX30g))</td>
                <td>GST:18%<br /><strong>Shipping and Handling Charges</strong></td>
                <td>1</td>
                <td>300$</td>
                <td>-0.00</td>
                <td>27.12</td>
                <td>350$</td>
              </tr>
              <tr>
                <td>Dark-Choco-Pretzel Thins<br />(Regular (50gX30g))</td>
                <td>GST:18%<br /><strong>Shipping and Handling Charges</strong></td>
                <td>1</td>
                <td>300$</td>
                <td>-0.00</td>
                <td>27.12</td>
                <td>350$</td>
              </tr>
            </tbody>
          </Table>
          <div className="InvoicetableFooter">
            <div className="totalQty">TOTAL QTY: 2</div>
            <div className="totalPrice px-2">
              <p>TOTAL PRICE: 700$</p>
              <p>All Values are in INR</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sellerAddress mx-auto">
        <p><strong>Seller Registered Address: </strong>Go Gourmet Pvt.Lmt,</p>
        <p>Go Gourmet Pvt Lmt,Scheme No.78,Vijay Nagar,Indore-452015</p>
        <p><strong>Declaration</strong></p>
        <p>The goods sold are intended for end user consumption and not for resale</p>
      </div>
      <button className='Invoicbtn ' onClick={generatePdf}><FaFileDownload /> </button> <span />
      <button className='Invoicbtn ' onClick={printInvoice}><MdLocalPrintshop /></button>
    </div>

  )
}
