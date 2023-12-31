import React, { useEffect, useState } from "react";
import { RiFileDownloadFill } from "react-icons/ri";
import { MdUnsubscribe } from "react-icons/md";
import requests from "../../../Services/httpService";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

import { ReactDOM } from "react-dom";
import { Invoice } from "../../Invoice/Invoice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Orders = ({ title, orderProducts, subscription = false, fetchUserOrder }) => {
  const [invoiceData, setInvoiceData] = useState(null);
  const navigate = useNavigate();
  console.log(orderProducts);
  const handleInvoice = (eachItem) => {
    setInvoiceData(eachItem);
    console.log(invoiceData)


  };
  const handleCancelSubscription = async (eachItem) => {
    await requests.put("/customer/subscription-inactive", {
      subscriptionId: eachItem._id,
    });

    fetchUserOrder();
  };

  const getDeliverdColor = (status) => {
    const color = {
      Pending: "warning",
      Delivered: "success",
      Processing: "primary",
      Cancel: "danger",
    };

    return color[status];
  };


  return (
    <div className="OrderDetails">
      <div className="Order-details-header">{title}</div>
      <div className="orderDetailsBody">
        {orderProducts.map((eachItem, idx) => {
          return (
            <div className="OrderedProductBody" key={idx}>
              <div className="OrderedProduct-left">
                <div className="OrderedProductimage">
                  <img src={eachItem?.image} alt={eachItem?.image} />
                  <div className="orderedQuantity">{eachItem?.quantity}</div>
                </div>
              </div>
              <div className="OrderedProduct-right">
                <div className="OrderedProduct-content">
                  <div className="orderProductName">{eachItem?.title}</div>
                  <div className="orderedProductSize">
                    {eachItem?.attribute}
                  </div>
                  {eachItem?.duration && (
                    <div className="orderedProductSize">
                      {eachItem?.duration}
                    </div>
                  )}
                  <div className="orderedProductBottom">
                    <div className="OrderedProductPrice">
                      Price: <span>&#8377; </span>
                      {eachItem?.price}
                    </div>
                    <div className="d-flex gap-1">
                      {eachItem?.duration && eachItem?.status === "Active" ? (
                        <div>
                          <button
                            onClick={() => handleCancelSubscription(eachItem)}
                            title="Cancle Subscription"
                            className="cancelSubsbtn"
                            style={
                              eachItem?.duration
                                ? { display: "block" }
                                : { display: "none" }
                            }
                          >
                            <span>
                              <MdUnsubscribe />
                            </span>
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                      <div>
                        <button
                          className="Invoicbtn"
                          onClick={() => handleInvoice(eachItem)}
                          title="Download Invoice"
                        >
                          <span>
                            <Link to={`/accounts/invoice/${eachItem._id}`} target="_blank"><RiFileDownloadFill /></Link>
                          </span>
                          
                        </button>
                      </div>
                      <Stack direction="horizontal" gap={2}>
                        {subscription && eachItem?.status ? (
                          <Badge
                            pill
                            bg={
                              eachItem.status === "Active"
                                ? "success"
                                : "danger"
                            }
                          >
                            {eachItem?.status}
                          </Badge>
                        ) : (
                          <Badge pill bg={getDeliverdColor(eachItem.status)}>
                            {eachItem?.status}
                          </Badge>
                        )}
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>


  );

};

export default Orders;
