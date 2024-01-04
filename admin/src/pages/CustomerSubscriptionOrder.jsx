import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Pagination,
} from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { IoBagHandle } from "react-icons/io5";

//internal import
import useAsync from "@/hooks/useAsync";
import useFilter from "@/hooks/useFilter";
import PageTitle from "@/components/Typography/PageTitle";
import Loading from "@/components/preloader/Loading";
import CustomerServices from "@/services/CustomerServices";
import CustomerSubscriptionTable from "@/components/customer/CustomerSubscriptionTable";

const CustomerSubscriptionOrder = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data, loading, error } = useAsync(() =>
    CustomerServices.getSubscriptionById(id)
  );
  const { handleChangePage, totalResults, resultsPerPage, dataTable } =
    useFilter(data.subscriptionType);
  return (
    <>
      <PageTitle>{t("Customer Subscription List")}</PageTitle>
      {loading && <Loading loading={loading} />}
      {!error && !loading && data.subscriptionType.length === 0 && (
        <div className="w-full bg-white rounded-md dark:bg-gray-800">
          <div className="p-8 text-center">
            <span className="flex justify-center my-30 text-red-500 font-semibold text-6xl">
              <IoBagHandle />
            </span>
            <h2 className="font-medium text-base mt-4 text-gray-600">
              {t("CustomerOrderEmpty")}
            </h2>
          </div>
        </div>
      )}

      {data.subscriptionType?.length > 0 && !error && !loading ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell> {t("CustomerOrderId")} </TableCell>
                <TableCell>{t("Product Title")}</TableCell>
                <TableCell>{t("Attribute")}</TableCell>
                <TableCell>{t("Quantity")} </TableCell>
                <TableCell>{t("Duration")} </TableCell>
                <TableCell>{t("Amount")}</TableCell>
                <TableCell className="text-center">
                  {" "}
                  {t("CustomerOrderStatus")}{" "}
                </TableCell>
                <TableCell className="text-center">
                  {t("CustomerOrderAction")}
                </TableCell>
              </tr>
            </TableHeader>
            <CustomerSubscriptionTable orders={data.subscriptionType} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : null}
    </>
  );
};

export default CustomerSubscriptionOrder;
