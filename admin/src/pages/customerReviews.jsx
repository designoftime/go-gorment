import {
  Card,
  Button,
  CardBody,
  Pagination,
  TableContainer,
  TableFooter,
} from "@windmill/react-ui";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@windmill/react-ui";

//internal import
import NotFound from "@/components/table/NotFound";
import PageTitle from "@/components/Typography/PageTitle";
import useAsync from "@/hooks/useAsync";
import useFilter from "@/hooks/useFilter";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import InputAreaTwo from "@/components/form/input/InputAreaTwo";
import useCustomerReviewsSubmit from "@/hooks/useCustomerReview";
import TextAreaCom from "@/components/form/input/TextAreaCom";
import Error from "@/components/form/others/Error";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import ReviewsServices from "@/services/reviewsServices";
import TableLoading from "@/components/preloader/TableLoading";
import { SidebarContext } from "@/context/SidebarContext";

const CustomersReviews = () => {
  const { data, loading, error } = useAsync(ReviewsServices.getAllReviews);
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  const { toggleDrawer, isDrawerOpen } = useContext(SidebarContext);
  const { data: newdata } = data;
  const {
    userRef,
    dataTable,
    serviceData,
    filename,
    isDisabled,
    setSearchUser,
    totalResults,
    resultsPerPage,
    handleSubmitUser,
    handleSelectFile,
    handleChangePage,
    handleUploadMultiple,
    handleRemoveSelectFile,
  } = useFilter(newdata);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setImageUrl,
    imageUrl,
    isSubmitting,
  } = useCustomerReviewsSubmit(serviceId);
  return (
    <>
      <PageTitle>{"Customer Reviews"}</PageTitle>
      <div className="flex-grow scrollbar-hide w-full max-h-full xl:px-10">
        <div className="inline-flex md:text-base text-sm my-3 text-gray-500 dark:text-gray-400">
          <strong>{" Manage All Customer Reviews"}</strong>
        </div>
        <hr className="md:mb-12 mb-3" />
        {loading ? (
          <TableLoading row={12} col={7} width={160} height={20} />
        ) : error ? (
          <span className="text-center mx-auto text-red-500">{error}</span>
        ) : (
          <TableContainer className="mb-8">
            <div className="grid  md:grid-cols-12 sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              {!isDrawerOpen ? (
                data.data.length >= 0 &&
                data?.data.map((item, i) => (
                  <>
                    <div className="sm:col-span-4" key={i}>
                      <Card>
                        <img
                          className="w-full h-64"
                          src={item?.productId?.image[0]}
                        />
                        <CardBody>
                          <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                            {item?.productId?.title?.en}
                          </p>
                          <p className=" flex justify-between mb-4 font-semibold text-gray-600 dark:text-gray-300">
                            <div>
                              {item?.name}{" "}
                              <Badge type="success">verified</Badge>
                            </div>
                            <div className="flex items-center">
                              {Array(item?.rating)
                                .fill(0)
                                .map((el, i) => (
                                  <>
                                    <svg
                                      key={i}
                                      className="w-4 h-4 text-yellow-300 me-1"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 22 20"
                                    >
                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                  </>
                                ))}
                              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                                {item?.rating}
                              </p>
                              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                                out of
                              </p>
                              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                                5
                              </p>
                              {/* <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                                Review ({data.totalReviews})
                              </p> */}
                            </div>
                          </p>
                          <p className="mb-4 font-semibold text-gray-400 dark:text-gray-200">
                            "{item?.reviewTitle}"
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            "{item.review}"
                          </p>
                          <EditDeleteButton
                            id={item?._id}
                            // isCheck={isCheck}
                            handleUpdate={handleUpdate}
                            handleModalOpen={handleModalOpen}
                            title={item?.reviewTitle}
                          />
                        </CardBody>
                      </Card>
                    </div>
                  </>
                ))
              ) : (
                <div className="sm:col-span-4">
                  <Card>
                    <CardBody>
                      <p className=" flex justify-between mb-4 font-semibold text-gray-600 dark:text-gray-300">
                        <div>
                          Adarsh Verma <Badge type="success">verified</Badge>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            4
                          </p>
                          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            out of
                          </p>
                          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            5
                          </p>
                        </div>
                      </p>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Review Rating
                          </label>
                          <InputAreaTwo
                            required
                            register={register}
                            label={t("Review Rating")}
                            name="review_rating"
                            minValue={1}
                            maxValue={5}
                            defaultValue={1}
                            type="number"
                            placeholder={t("Review Rating")}
                          />
                          <Error errorName={errors.review_rating} />
                        </div>
                        <div className="col-span-4">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Review Title
                          </label>
                          <InputAreaTwo
                            required
                            register={register}
                            label={t("Review Title")}
                            name="review_title"
                            type="text"
                            placeholder={t("Review Title")}
                          />
                          <Error errorName={errors.review_title} />
                        </div>
                        <div className="sm:col-span-4">
                          <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Review Description
                          </label>
                          <TextAreaCom
                            required
                            register={register}
                            label="Review Description"
                            name="review_description"
                            type="text"
                            placeholder="Review Description"
                          />
                          <Error errorName={errors.review_description} />
                        </div>
                        <div className="flex justify-between ">
                          <Button
                            className="mt-6"
                            type="button"
                            onClick={toggleDrawer}
                          >
                            Cancel{" "}
                          </Button>
                          <Button className="mt-6" type="submit">
                            Update
                          </Button>
                        </div>
                      </form>
                    </CardBody>
                  </Card>
                </div>
              )}
            </div>
            <TableFooter>
              <Pagination
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                onChange={handleChangePage}
                label="Table navigation"
              />
            </TableFooter>
          </TableContainer>
        )}
      </div>
      <NotFound title="Sorry, There are no customers reviews right now." />
    </>
  );
};

export default CustomersReviews;
