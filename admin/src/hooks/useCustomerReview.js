import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//internal import
import { SidebarContext } from "@/context/SidebarContext";
import { notifyError, notifySuccess } from "@/utils/toast";
import ReviewsServices from "@/services/reviewsServices";

const useCustomerReviewsSubmit = (id) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const reviewData = {
        rating: data.review_rating,
        reviewTitle: data.review_title,
        review: data.review_description,
      };
      if (id) {
        const res = await ReviewsServices.updateReviews(id, reviewData);
        setIsUpdate(true);
        notifySuccess(res.message);
        closeDrawer();
      }
      setIsSubmitting(false);
    } catch (err) {
      notifyError(err ? err?.response?.data?.message : err.message);
      closeDrawer();
    }
  };

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await ReviewsServices.getReviewById(id);
          console.log(res,"kjhkj")
          if (res) {
            setValue("review_rating", res.data.rating);
            setValue("review_title", res.data.reviewTitle);
            setValue("review_description", res.data.review);
          }
        } catch (err) {
          notifyError(err ? err?.response?.data?.message : err.message);
        }
      })();
    }
  }, [id, setValue]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setImageUrl,
    imageUrl,
    isSubmitting,
  };
};

export default useCustomerReviewsSubmit;
