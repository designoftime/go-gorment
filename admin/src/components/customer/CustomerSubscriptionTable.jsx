import React from "react";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";

//internal import
import Status from "@/components/table/Status";
import useUtilsFunction from "@/hooks/useUtilsFunction";
import SelectSubStatus from "../form/selectOption/selectSubStatus";


const CustomerSubscriptionTable = ({ orders }) => {
  const { showDateTimeFormat, getNumberTwo, currency } = useUtilsFunction();
  return (
    <>
      <TableBody>
        {orders?.map((order) => (
          <TableRow key={order._id}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {order?._id?.substring(20, 24)}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {order?.product?.title?.en}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{order?.attribute}</span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm">{order?.quantity}</span>{" "}
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">
                {order.subscription_duration}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">
                {currency}
                {getNumberTwo(order.subscription_price)}
              </span>{" "}
            </TableCell>
            <TableCell className="text-center">
              <Status status={order.status} />
            </TableCell>
            <TableCell className="text-center">
              <SelectSubStatus subscriptionId={order._id} order={order} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default CustomerSubscriptionTable;
