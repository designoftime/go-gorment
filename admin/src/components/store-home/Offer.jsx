import ReactTagInput from "@pathofdev/react-tag-input";
import { Button } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { FiSettings } from "react-icons/fi";

//internal import
import spinnerLoadingImage from "@/assets/img/spinner.gif";
import Error from "@/components/form/others/Error";
import InputAreaTwo from "@/components/form/input/InputAreaTwo";
import SwitchToggle from "@/components/form/switch/SwitchToggle";
import Uploader from "@/components/image-uploader/Uploader";
import TextAreaCom from "../form/input/TextAreaCom";

const Offer = ({
  errors,
  isSave,
  register,
  // setOffersPageHeader,
  // offersPageHeader,
  // setOffersHeaderBg,
  // offersHeaderBg,
  // couponList1,
  // setCouponList1,
  setOfferSectionFirst,
  setOfferLeftSideImg,
  offerSectionFirst,
  offerLeftSideImg,
  setOfferRightSideImg,
  offerRightSideImg,
  setOfferSectionSecond,
  offerSectionSecond,
  offferParentImg,
  setOfferParentImg,
  offerChildImg,
  setOfferChildImg,
  offerBackgroundImg,
  setOfferBackgroundImg,
  setOfferSectionThird,
  offerSectionThird,
  setOfferTestimonial,
  offerTestimonial,
  setOfferTestimonilaImgFirst,
  offerTestimonilaImgFirst,
  offTestimonialImgSecond,
  setOfferTestimonialImgSecond,
  offerTestimonialImgThird,
  setTestimonialImgThird,
  isSubmitting,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="col-span-12 md:col-span-12 lg:col-span-12 pr-4">
        <div className="flex justify-end items-center flex-shrink-0 space-x-6">
          <div className="fixed right-auto md:mb-6 mb-3 bottom-0 z-40">
            {isSubmitting ? (
              <Button disabled={true} type="button" className="h-10 px-6">
                <img
                  src={spinnerLoadingImage}
                  alt="Loading"
                  width={20}
                  height={10}
                />{" "}
                <span className="font-serif ml-2 font-light">
                  {" "}
                  {t("Processing")}
                </span>
              </Button>
            ) : (
              <Button type="submit" className="h-10 px-6 ">
                {" "}
                {isSave ? t("SaveBtn") : t("UpdateBtn")}
              </Button>
            )}
          </div>
        </div>

        <div className="inline-flex md:text-lg text-md text-gray-800 font-semibold dark:text-gray-400 md:mb-3 mb-1">
          <FiSettings className="mt-1 mr-2" />
          {t("Offers")}
        </div>
        <hr className="md:mb-10 mb-3" />

        <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
          {/* <div className="inline-flex md:text-md text-sm mb-3 text-gray-500 dark:text-gray-400">
            <strong>{t("PageHeader")}</strong>
          </div>
          <hr className="md:mb-12 mb-3" />

          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
            <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
              {t("EnableThisBlock")}
            </label>
            <div className="sm:col-span-4">
              <SwitchToggle
                title=""
                handleProcess={setOffersPageHeader}
                processOption={offersPageHeader}
                name={offersPageHeader}
              />
            </div>
          </div>

          <div
            className="mb-height-0"
            style={{
              height: offersPageHeader ? "auto" : 0,
              transition: "all 0.5s",
              visibility: !offersPageHeader ? "hidden" : "visible",
              opacity: !offersPageHeader ? "0" : "1",
            }}
           >
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("PageHeaderBg")}
              </label>
              <div className="sm:col-span-4">
                <Uploader
                  imageUrl={offersHeaderBg}
                  setImageUrl={setOffersHeaderBg}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("PageTitle")}
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Page Title"
                  name="offers_page_title"
                  type="text"
                  placeholder={t("PageTitle")}
                />
                <Error errorName={errors.offers_page_title} />
              </div>
            </div>

            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("SuperDiscountActiveCouponCode")}
              </label>
              <div className="sm:col-span-4">
                <ReactTagInput
                  placeholder={t("SuperDiscountActiveCouponCode")}
                  tags={couponList1 || []}
                  onChange={(variant) => setCouponList1(variant)}
                />
              </div>
            </div> */}

          {/* ========== section one   ======= */}

          <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 md:mb-3 mb-1">
            Section First
          </div>

          <hr className="md:mb-12 mb-3" />

          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
            <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
              {t("EnableThisBlock")}
            </label>
            <div className="sm:col-span-4">
              <SwitchToggle
                title=""
                handleProcess={setOfferSectionFirst}
                processOption={offerSectionFirst}
                name={offerSectionFirst}
              />
            </div>
          </div>

          <div
            className="mb-height-0"
            style={{
              height: offerSectionFirst ? "auto" : 0,
              transition: "all 0.5s",
              visibility: !offerSectionFirst ? "hidden" : "visible",
              opacity: !offerSectionFirst ? "0" : "1",
            }}
          >
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                Left Image
              </label>
              <div className="sm:col-span-4">
                <Uploader
                  folder="Offer"
                  imageUrl={offerLeftSideImg}
                  setImageUrl={setOfferLeftSideImg}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                Right Image
              </label>
              <div className="sm:col-span-4">
                <Uploader
                  folder="Offer"
                  imageUrl={offerRightSideImg}
                  setImageUrl={setOfferRightSideImg}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("PageTitle")}
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Page Title"
                  name="offer_section_first_title"
                  type="text"
                  placeholder={t("PageTitle")}
                />
                <Error errorName={errors.offer_section_first_title} />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("TopDescription")}
              </label>

              <div className="sm:col-span-4">
                <TextAreaCom
                  required
                  register={register}
                  label="Top Description"
                  name="offer_section_first_description"
                  type="text"
                  placeholder="Top Description"
                />
                <Error
                  errorName={(errors.name = "offer_section_first_description")}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                {t("ButtonName")}
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Button Name"
                  name="offer_section_first_button_name"
                  type="text"
                  placeholder={t("ButtonName")}
                />
                <Error errorName={errors.offer_section_first_button_name} />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                {t("ButtonLink")}
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Button Link "
                  name="offer_section_first_button_link"
                  type="text"
                  placeholder="Button Link"
                />
                <Error errorName={errors.offer_section_first_button_link} />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                Background Color
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Background Color "
                  name="offer_section_first_background_color"
                  type="text"
                  placeholder="Background Color"
                />
                <Error
                  errorName={errors.offer_section_first_background_color}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                Text Color
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Text Color"
                  name="offer_section_first_text_color"
                  type="text"
                  placeholder="Text Color"
                />
                <Error errorName={errors.offer_section_first_text_color} />
              </div>
            </div>
          </div>

          {/* second section  */}

          <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 md:mb-3 mb-1">
            Section Second
          </div>

          <hr className="md:mb-12 mb-3" />

          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
            <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
              {t("EnableThisBlock")}
            </label>
            <div className="sm:col-span-4">
              <SwitchToggle
                title=""
                handleProcess={setOfferSectionSecond}
                processOption={offerSectionSecond}
                name={offerSectionSecond}
              />
            </div>
          </div>

          <div
            className="mb-height-0"
            style={{
              height: offerSectionSecond ? "auto" : 0,
              transition: "all 0.5s",
              visibility: !offerSectionSecond ? "hidden" : "visible",
              opacity: !offerSectionSecond ? "0" : "1",
            }}
          >
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                Parent Image
              </label>
              <div className="sm:col-span-4">
                <Uploader
                  folder="Offer"
                  imageUrl={offferParentImg}
                  setImageUrl={setOfferParentImg}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                Child Image
              </label>
              <div className="sm:col-span-4">
                <Uploader
                  folder="Offer"
                  imageUrl={offerChildImg}
                  setImageUrl={setOfferChildImg}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("PageTitle")}
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Page Title"
                  name="offer_section_second_title"
                  type="text"
                  placeholder={t("PageTitle")}
                />
                <Error errorName={errors.offer_section_second_title} />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("PageTitle")}
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Page Title"
                  name="offer_section_second_title_1"
                  type="text"
                  placeholder={t("PageTitle")}
                />
                <Error errorName={errors.offer_section_second_title} />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("TopDescription")}
              </label>

              <div className="sm:col-span-4">
                <TextAreaCom
                  required
                  register={register}
                  label="Top Description"
                  name="offer_section_second_description"
                  type="text"
                  placeholder="Top Description"
                />
                <Error
                  errorName={(errors.name = "offer_section_second_description")}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("TopDescription")}
              </label>

              <div className="sm:col-span-4">
                <TextAreaCom
                  required
                  register={register}
                  label="Top Description"
                  name="offer_section_second_description_1"
                  type="text"
                  placeholder="Top Description"
                />
                <Error
                  errorName={(errors.name = "offer_section_second_description")}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                Background Color
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Background Color "
                  name="offer_section_second_background_color"
                  type="text"
                  placeholder="Background Color"
                />
                <Error
                  errorName={errors.offer_section_second_background_color}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                Text Color
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Text Color"
                  name="offer_section_second_text_color"
                  type="text"
                  placeholder="Text Color"
                />
                <Error errorName={errors.offer_section_second_text_color} />
              </div>
            </div>
          </div>
          {/* Third section  */}

          <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 md:mb-3 mb-1">
            Section Third
          </div>

          <hr className="md:mb-12 mb-3" />

          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
            <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
              {t("EnableThisBlock")}
            </label>
            <div className="sm:col-span-4">
              <SwitchToggle
                title=""
                handleProcess={setOfferSectionThird}
                processOption={offerSectionThird}
                name={offerSectionThird}
              />
            </div>
          </div>

          <div
            className="mb-height-0"
            style={{
              height: offerSectionThird ? "auto" : 0,
              transition: "all 0.5s",
              visibility: !offerSectionThird ? "hidden" : "visible",
              opacity: !offerSectionThird ? "0" : "1",
            }}
          >
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                Background Image
              </label>
              <div className="sm:col-span-4">
                <Uploader
                  folder="Offer"
                  imageUrl={offerBackgroundImg}
                  setImageUrl={setOfferBackgroundImg}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("PageTitle")}
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Page Title"
                  name="offer_section_third_title"
                  type="text"
                  placeholder={t("PageTitle")}
                />
                <Error errorName={errors.offer_section_third_title} />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("TopDescription")}
              </label>

              <div className="sm:col-span-4">
                <TextAreaCom
                  required
                  register={register}
                  label="Top Description"
                  name="offer_section_third_description"
                  type="text"
                  placeholder="Top Description"
                />
                <Error
                  errorName={(errors.name = "offer_section_third_description")}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                Button Name
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Button Name "
                  name="offer_section_third_background_color"
                  type="text"
                  placeholder="Button Name"
                />
                <Error
                  errorName={errors.offer_section_third_background_color}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                Button Link
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Button Link"
                  name="offer_section_third_text_color"
                  type="text"
                  placeholder="Button Link"
                />
                <Error errorName={errors.offer_section_third_text_color} />
              </div>
            </div>

            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                Background Color
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Background Color "
                  name="offer_section_third_background_color"
                  type="text"
                  placeholder="Background Color"
                />
                <Error
                  errorName={errors.offer_section_third_background_color}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                Text Color
              </label>
              <div className="sm:col-span-4">
                <InputAreaTwo
                  required
                  register={register}
                  label="Text Color"
                  name="offer_section_third_text_color"
                  type="text"
                  placeholder="Text Color"
                />
                <Error errorName={errors.offer_section_third_text_color} />
              </div>
            </div>
          </div>

          {/* Testimonila  */}

          <div className="col-span-12 md:col-span-12 lg:col-span-12">
            <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3 md:mt-0 mt-10">
              <FiSettings className="mt-1 mr-2" /> Testimonial
            </div>

            <hr className="md:mb-12 mb-3" />

            <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                  {t("EnableThisBlock")}
                </label>
                <div className="sm:col-span-4">
                  <SwitchToggle
                    title=""
                    handleProcess={setOfferTestimonial}
                    processOption={offerTestimonial}
                    name={offerTestimonial}
                  />
                </div>
              </div>

              <div
                style={{
                  height: offerTestimonial ? "auto" : 0,
                  transition: "all 0.4s",
                  visibility: !offerTestimonial ? "hidden" : "visible",
                  opacity: !offerTestimonial ? "0" : "1",
                }}
              >
                <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                  <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    Header
                  </label>
                  <div className="sm:col-span-4">
                    <InputAreaTwo
                      required
                      register={register}
                      label="Title"
                      name="offer_testimonial_title_header"
                      type="text"
                      placeholder={"Testimonial Header"}
                    />
                    <Error errorName={errors.offer_testimonial_title_header} />
                  </div>
                </div>
                <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mt-4 md:mb-6 mb-3 pb-2">
                  <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    {t("PromotionBanner")}
                  </label>
                  <div className="sm:col-span-4">
                    <Uploader
                      folder="offer"
                      imageUrl={offerTestimonilaImgFirst}
                      setImageUrl={setOfferTestimonilaImgFirst}
                    />
                    <div className="text-xs text-center text-gray-400">
                      <em>( {t("ImagesResolution")} )</em>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                  <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    {t("Title")}
                  </label>
                  <div className="sm:col-span-4">
                    <InputAreaTwo
                      required
                      register={register}
                      label="Title"
                      name="offer_testimonial_title_one"
                      type="text"
                      placeholder={t("Title")}
                    />
                    <Error errorName={errors.offer_testimonial_title_one} />
                  </div>
                </div>

                <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                  <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    {t("Description")}
                  </label>
                  <div className="sm:col-span-4">
                    <TextAreaCom
                      required
                      register={register}
                      label="Testimonial Description"
                      name="offer_testimonial_description_one"
                      type="text"
                      placeholder={"Testimonial Description"}
                    />

                    <Error
                      errorName={errors.offer_testimonial_description_one}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mt-4 md:mb-6 mb-3 pb-2">
                  <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    {t("PromotionBanner")}
                  </label>
                  <div className="sm:col-span-4">
                    <Uploader
                      folder="offer"
                      imageUrl={offTestimonialImgSecond}
                      setImageUrl={setOfferTestimonialImgSecond}
                    />
                    <div className="text-xs text-center text-gray-400">
                      <em>( {t("ImagesResolution")} )</em>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                  <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    {t("Title")}
                  </label>
                  <div className="sm:col-span-4">
                    <InputAreaTwo
                      required
                      register={register}
                      label="Title"
                      name="offer_testimonial_title_two"
                      type="text"
                      placeholder={t("Title")}
                    />
                    <Error errorName={errors.offer_testimonial_title_two} />
                  </div>
                </div>

                <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                  <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    {t("Description")}
                  </label>
                  <div className="sm:col-span-4">
                    <TextAreaCom
                      required
                      register={register}
                      label="Testimonial Description"
                      name="offer_testimonial_description_two"
                      type="text"
                      placeholder={"Testimonial Description"}
                    />
                    <Error
                      errorName={errors.offer_Testimonial_description_two}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mt-4 md:mb-6 mb-3 pb-2">
                  <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    {t("PromotionBanner")}
                  </label>
                  <div className="sm:col-span-4">
                    <Uploader
                      folder="offer"
                      imageUrl={offerTestimonialImgThird}
                      setImageUrl={setTestimonialImgThird}
                    />
                    <div className="text-xs text-center text-gray-400">
                      <em>( {t("ImagesResolution")} )</em>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                  <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    {t("Title")}
                  </label>
                  <div className="sm:col-span-4">
                    <InputAreaTwo
                      required
                      register={register}
                      label="Title"
                      name="offer_testimonial_title_three"
                      type="text"
                      placeholder={t("Title")}
                    />
                    <Error errorName={errors.offer_testimonial_title_three} />
                  </div>
                </div>

                <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                  <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    {t("Description")}
                  </label>
                  <div className="sm:col-span-4">
                    <TextAreaCom
                      required
                      register={register}
                      label="Testimonial Description"
                      name="offer_testimonial_description_three"
                      type="text"
                      placeholder={"Testimonial Description"}
                    />

                    <Error
                      errorName={errors.offer_testimonial_description_three}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                  <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    Background Color
                  </label>
                  <div className="sm:col-span-4">
                    <InputAreaTwo
                      required
                      register={register}
                      label="Background Color "
                      name="offer_testimonial_background_color"
                      type="text"
                      placeholder="Background Color"
                    />
                    <Error errorName={errors.offer_testimonial_background_color} />
                  </div>
                </div>
                <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                  <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    Text Color
                  </label>
                  <div className="sm:col-span-4">
                    <InputAreaTwo
                      required
                      register={register}
                      label="Text Color"
                      name="offer_testimonial_text_color"
                      type="text"
                      placeholder="Text Color"
                    />
                    <Error errorName={errors.offer_testimonial_text_color} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
