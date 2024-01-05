import {
  Pagination,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
} from "@windmill/react-ui";
import React from "react";
import { useTranslation } from "react-i18next";

//internal import
import TableLoading from "@/components/preloader/TableLoading";
import NotFound from "@/components/table/NotFound";
import PageTitle from "@/components/Typography/PageTitle";
import useAsync from "@/hooks/useAsync";
import useFilter from "@/hooks/useFilter";
import NewsLatterServices from "@/services/NewsLatter";
import NewsLatterTbale from "@/components/newsLatter/newsLattertable";

//internal import

const NewsLater = () => {
  const { data, loading, error } = useAsync(() =>
    NewsLatterServices.getAllNewsLatter()
  );

  const { t } = useTranslation();

  const {
    dataTable,
    serviceData,
    totalResults,
    resultsPerPage,
    handleChangePage,
  } = useFilter(data);
  // console.log(dataTable,data)
  return (
    <>
      <PageTitle>{t("News Latter")}</PageTitle>
      {loading ? (
        <TableLoading row={12} col={6} width={180} height={20} />
      ) : error ? (
        <span className="text-center mx-auto text-red-500">{error}</span>
      ) : serviceData?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell> {t("Id")} </TableCell>
                <TableCell> {t("Name/Email")}</TableCell>

                <TableCell className="text-center">
                  {t("Product Title")}
                </TableCell>

                <TableCell className="text-center">{t("Attributes")}</TableCell>
              </tr>
            </TableHeader>

            <NewsLatterTbale dataTable={dataTable} />
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
      ) : (
        <NotFound title="Sorry, There are no attributes right now." />
      )}
    </>
  );
};

export default NewsLater;
