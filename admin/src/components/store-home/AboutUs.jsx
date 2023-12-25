import { Button } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { FiSettings } from "react-icons/fi";
// import {
//   Tab,
//   TabList,
//   TabPanel,
//   Tabs,
//   Tabs as TabsComponent,
// } from "react-tabs";

//internal import

import Error from "@/components/form/others/Error";
import spinnerLoadingImage from "@/assets/img/spinner.gif";
import InputAreaTwo from "@/components/form/input/InputAreaTwo";
import SwitchToggle from "@/components/form/switch/SwitchToggle";
import TextAreaCom from "@/components/form/others/TextAreaCom";
import Uploader from "@/components/image-uploader/Uploader";

const AboutUs = ({
  isSave,
  register,
  errors,
  setSectionOne,
  sectionOne,
  leftSideImg,
  setLeftSideImg,
  rightSideImg,
  setRightSideImg,
  setSectionSecond,
  sectionSecond,
  sectionSecondImg,
  setSectionSecondImg,
  setSectionThird,
  sectionThird,
  sectionThirdImg,
  setSectionThirdImg,
  setSectionFrour,
  sectionFour,
  sectionFourImg,
  setSectionFrourImg,
  setSectionFive,
  sectionFive,
  sectionFiveImg,
  setSectionFiveImg,

  // setAboutHeaderBg,
  // aboutHeaderBg,
  // setAboutPageHeader,
  // aboutPageHeader,

  // setAboutTopContentLeft,
  // aboutTopContentLeft,
  // setAboutTopContentRight,
  // aboutTopContentRight,
  // setAboutTopContentRightImage,
  // aboutTopContentRightImage,
  // setAboutMiddleContentSection,
  // aboutMiddleContentSection,
  // setAboutMiddleContentImage,
  // aboutMiddleContentImage,
  // setOurFounderSection,
  // ourFounderSection,
  // setOurFounderOneImage,
  // ourFounderOneImage,
  // setOurFounderTwoImage,
  // ourFounderTwoImage,
  // setOurFounderThreeImage,
  // ourFounderThreeImage,
  // setOurFounderFourImage,
  // ourFounderFourImage,
  // setOurFounderFiveImage,
  // ourFounderFiveImage,
  // setOurFounderSixImage,
  // ourFounderSixImage,
  isSubmitting,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid grid-cols-12 font-sans pr-4">
        <div className="col-span-12 md:col-span-12 lg:col-span-12">
          <div className="flex justify-end items-center flex-shrink-0 space-x-6">
            <div className="fixed right-auto mb-6 bottom-0 z-40">
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

          <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 md:mb-3 mb-1">
            <FiSettings className="mt-1 mr-2" />
            {t("AboutUs")}
          </div>

          <hr className="md:mb-12 mb-3" />

          <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full">
            <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 md:mb-3 mb-1">
              Section One
            </div>

            <hr className="md:mb-12 mb-3" />

            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("EnableThisBlock")}
              </label>
              <div className="sm:col-span-4">
                <SwitchToggle
                  title=""
                  handleProcess={setSectionOne}
                  processOption={sectionOne}
                  name={sectionOne}
                />
              </div>
            </div>

            <div
              className="mb-height-0"
              style={{
                height: sectionOne ? "auto" : 0,
                transition: "all 0.5s",
                visibility: !sectionOne ? "hidden" : "visible",
                opacity: !sectionOne ? "0" : "1",
              }}
            >
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  Left Image
                </label>
                <div className="sm:col-span-4">
                  <Uploader
                    folder="about_us"
                    imageUrl={leftSideImg}
                    setImageUrl={setLeftSideImg}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  Right Image
                </label>
                <div className="sm:col-span-4">
                  <Uploader
                    folder="about_us"
                    imageUrl={rightSideImg}
                    setImageUrl={setRightSideImg}
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
                    name="section_first_title"
                    type="text"
                    placeholder={t("PageTitle")}
                  />
                  <Error errorName={errors.section_first_title} />
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
                    name="section_first_description"
                    type="text"
                    placeholder="Top Description"
                  />
                  <Error
                    errorName={(errors.name = "section_first_description")}
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
                    name="section_first_button_name"
                    type="text"
                    placeholder={t("ButtonName")}
                  />
                  <Error errorName={errors.section_first_button_name} />
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
                    name="section_first_button_link"
                    type="text"
                    placeholder="Button Link"
                  />
                  <Error errorName={errors.section_first_button_link} />
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
                    name="section_first_background_color"
                    type="text"
                    placeholder="Background Color"
                  />
                  <Error errorName={errors.section_first_background_color} />
                </div>
              </div>{" "}
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                 Text Color
                </label>
                <div className="sm:col-span-4">
                  <InputAreaTwo
                    required
                    register={register}
                    label="Text Color "
                    name="section_first_text_color"
                    type="text"
                    placeholder="Text Color"
                  />
                  <Error errorName={errors.section_first_text_color} />
                </div>
              </div>
            </div>

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
                  handleProcess={setSectionSecond}
                  processOption={sectionSecond}
                  name={sectionSecond}
                />
              </div>
            </div>

            <div
              className="mb-height-0"
              style={{
                height: sectionSecond ? "auto" : 0,
                transition: "all 0.5s",
                visibility: !sectionSecond ? "hidden" : "visible",
                opacity: !sectionSecond ? "0" : "1",
              }}
            >
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  Image
                </label>
                <div className="sm:col-span-4">
                  <Uploader
                    folder="about_us"
                    imageUrl={sectionSecondImg}
                    setImageUrl={setSectionSecondImg}
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
                    name="section_second_title"
                    type="text"
                    placeholder={t("PageTitle")}
                  />
                  <Error errorName={errors.section_second_title} />
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
                    name="section_second_description"
                    type="text"
                    placeholder="Top Description"
                  />
                  <Error
                    errorName={(errors.name = "section_second_description")}
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
                    name="section_second_description_1"
                    type="text"
                    placeholder="Top Description"
                  />
                  <Error
                    errorName={(errors.name = "section_second_description_1")}
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
                    name="section_second_button_name"
                    type="text"
                    placeholder={t("ButtonName")}
                  />
                  <Error errorName={errors.section_second_button_name} />
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
                    name="section_second_button_link"
                    type="text"
                    placeholder="Button Link"
                  />
                  <Error errorName={errors.section_second_button_link} />
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
                    name="section_second_background_color"
                    type="text"
                    placeholder="Background Color"
                  />
                  <Error errorName={errors.section_second_background_color} />
                </div>
              </div>{" "}
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                 Text Color
                </label>
                <div className="sm:col-span-4">
                  <InputAreaTwo
                    required
                    register={register}
                    label="Text Color "
                    name="section_second_text_color"
                    type="text"
                    placeholder="Text Color"
                  />
                  <Error errorName={errors.section_second_text_color} />
                </div>
              </div>
            </div>

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
                  handleProcess={setSectionThird}
                  processOption={sectionThird}
                  name={sectionThird}
                />
              </div>
            </div>

            <div
              className="mb-height-0"
              style={{
                height: sectionThird ? "auto" : 0,
                transition: "all 0.5s",
                visibility: !sectionThird ? "hidden" : "visible",
                opacity: !sectionThird ? "0" : "1",
              }}
            >
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  Image
                </label>
                <div className="sm:col-span-4">
                  <Uploader
                    folder="about_us"
                    imageUrl={sectionThirdImg}
                    setImageUrl={setSectionThirdImg}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  Page Title
                </label>
                <div className="sm:col-span-4">
                  <InputAreaTwo
                    required
                    register={register}
                    label="Page Title"
                    name="section_third_title"
                    type="text"
                    placeholder={t("PageTitle")}
                  />
                  <Error errorName={errors.section_third_title} />
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
                    name="section_third_description"
                    type="text"
                    placeholder="Top Description"
                  />
                  <Error
                    errorName={(errors.name = "section_third_description")}
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
                    name="section_third_background_color"
                    type="text"
                    placeholder="Background Color"
                  />
                  <Error errorName={errors.section_third_background_color} />
                </div>
              </div>{" "}
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                 Text Color
                </label>
                <div className="sm:col-span-4">
                  <InputAreaTwo
                    required
                    register={register}
                    label="Text Color "
                    name="section_third_text_color"
                    type="text"
                    placeholder="Text Color"
                  />
                  <Error errorName={errors.section_third_text_color} />
                </div>
              </div>
            </div>

            <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 md:mb-3 mb-1">
              Section Four
            </div>

            <hr className="md:mb-12 mb-3" />

            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("EnableThisBlock")}
              </label>
              <div className="sm:col-span-4">
                <SwitchToggle
                  title=""
                  handleProcess={setSectionFrour}
                  processOption={sectionFour}
                  name={sectionFour}
                />
              </div>
            </div>

            <div
              className="mb-height-0"
              style={{
                height: sectionFour ? "auto" : 0,
                transition: "all 0.5s",
                visibility: !sectionFour ? "hidden" : "visible",
                opacity: !sectionFour ? "0" : "1",
              }}
             >
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  Image
                </label>
                <div className="sm:col-span-4">
                  <Uploader
                    folder="about_us"
                    imageUrl={sectionFourImg}
                    setImageUrl={setSectionFrourImg}
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
                    name="section_four_title"
                    type="text"
                    placeholder={t("PageTitle")}
                  />
                  <Error errorName={errors.section_four_title} />
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
                    name="section_four_description"
                    type="text"
                    placeholder="Top Description"
                  />
                  <Error
                    errorName={(errors.name = "section_four_description")}
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
                    name="section_four_description_1"
                    type="text"
                    placeholder="Top Description"
                  />
                  <Error
                    errorName={(errors.name = "section_four_description_1")}
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
                    name="section_four_background_color"
                    type="text"
                    placeholder="Background Color"
                  />
                  <Error errorName={errors.section_four_background_color} />
                </div>
              </div>{" "}
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                 Text Color
                </label>
                <div className="sm:col-span-4">
                  <InputAreaTwo
                    required
                    register={register}
                    label="Text Color "
                    name="section_four_text_color"
                    type="text"
                    placeholder="Text Color"
                  />
                  <Error errorName={errors.section_four_text_color} />
                </div>
              </div>
            </div>

            <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 md:mb-3 mb-1">
              Section Five
            </div>

            <hr className="md:mb-12 mb-3" />

            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("EnableThisBlock")}
              </label>
              <div className="sm:col-span-4">
                <SwitchToggle
                  title=""
                  handleProcess={setSectionFive}
                  processOption={sectionFive}
                  name={sectionFive}
                />
              </div>
            </div>

            <div
              className="mb-height-0"
              style={{
                height: sectionFive ? "auto" : 0,
                transition: "all 0.5s",
                visibility: !sectionFive ? "hidden" : "visible",
                opacity: !sectionFive ? "0" : "1",
              }}
            >
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  Image
                </label>
                <div className="sm:col-span-4">
                  <Uploader
                    folder="about_us"
                    imageUrl={sectionFiveImg}
                    setImageUrl={setSectionFiveImg}
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
                    name="section_five_title"
                    type="text"
                    placeholder={t("PageTitle")}
                  />
                  <Error errorName={errors.section_five_title} />
                </div>
              </div>
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  Section Five
                </label>

                <div className="sm:col-span-4">
                  <TextAreaCom
                    required
                    register={register}
                    label="Top Description"
                    name="section_five_description"
                    type="text"
                    placeholder="Top Description"
                  />
                  <Error
                    errorName={(errors.name = "section_five_description")}
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
                    name="section_five_button_name"
                    type="text"
                    placeholder={t("ButtonName")}
                  />
                  <Error errorName={errors.section_five_button_name} />
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
                    name="section_five_button_link"
                    type="text"
                    placeholder="Button Link"
                  />
                  <Error errorName={errors.section_five_button_link} />
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
                    name="section_five_background_color"
                    type="text"
                    placeholder="Background Color"
                  />
                  <Error errorName={errors.section_five_background_color} />
                </div>
              </div>{" "}
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                 Text Color
                </label>
                <div className="sm:col-span-4">
                  <InputAreaTwo
                    required
                    register={register}
                    label="Text Color "
                    name="section_five_text_color"
                    type="text"
                    placeholder="Text Color"
                  />
                  <Error errorName={errors.section_five_text_color} />
                </div>
              </div>
            </div>

            {/* <div className="inline-flex md:text-base text-sm mb-3 mt-5 text-gray-500 dark:text-gray-400">
              <strong>{t("AboutPageTopContentLeft")}</strong>
             </div>
             <hr className="md:mb-12 mb-3" />

             <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("EnableThisBlock")}
              </label>
              <div className="sm:col-span-4">
                <SwitchToggle
                  title=""
                  handleProcess={setAboutTopContentLeft}
                  processOption={aboutTopContentLeft}
                  name={aboutTopContentLeft}
                />
              </div>
             </div>

             <div
              className="mb-height-0"
              style={{
                height: aboutTopContentLeft ? "auto" : 0,
                transition: "all 0.5s",
                visibility: !aboutTopContentLeft ? "hidden" : "visible",
                opacity: !aboutTopContentLeft ? "0" : "1",
              }}
             >
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  {t("TopTitle")}
                </label>
                <div className="sm:col-span-4">
                  <InputAreaTwo
                    required
                    register={register}
                    label="Top Title"
                    name="about_page_Top_title"
                    type="text"
                    placeholder={t("TopTitle")}
                  />
                  <Error errorName={errors.about_page_Top_title_left} />
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
                    label="About Us Top Description"
                    name="about_us_top_description"
                    type="text"
                    placeholder="About Us Top Description"
                  />
                  <Error
                    errorName={(errors.name = "about_us_top_description")}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  {t("BoxOneTitle")}
                </label>
                <div className="sm:col-span-4">
                  <InputAreaTwo
                    required
                    register={register}
                    label="Top Title"
                    name="about_page_Top_left_box_one_title"
                    type="text"
                    placeholder={t("BoxOneTitle")}
                  />
                  <Error errorName={errors.about_page_Top_left_box_one_title} />
                </div>
              </div>

              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  {t("BoxOneSubtitle")}
                </label>
                <div className="sm:col-span-4">
                  <InputAreaTwo
                    required
                    register={register}
                    label="Top Title"
                    name="about_page_Top_left_box_one_subtitle"
                    type="text"
                    placeholder={t("BoxOneSubtitle")}
                  />
                  <Error
                    errorName={errors.about_page_Top_left_box_one_subtitle}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  {t("BoxOneDescription")}
                </label>

                <div className="sm:col-span-4">
                  <TextAreaCom
                    required
                    register={register}
                    label="About Us Top Box One Description"
                    name="about_us_top_box_one_description"
                    type="text"
                    placeholder={t("BoxOneDescription")}
                  />
                  <Error
                    errorName={
                      (errors.name = "about_us_top_box_one_description")
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  {t("BoxTwoTitle")}
                </label>
                <div className="sm:col-span-4">
                  <InputAreaTwo
                    required
                    register={register}
                    label="Top Title"
                    name="about_page_Top_left_box_two_title"
                    type="text"
                    placeholder={t("BoxTwoTitle")}
                  />
                  <Error
                    errorName={
                      (errors.name = "about_page_Top_left_box_two_title")
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  {t("BoxTwoSubtitle")}
                </label>
                <div className="sm:col-span-4">
                  <InputAreaTwo
                    required
                    register={register}
                    label="Top Title"
                    name="about_page_Top_left_box_two_subtitle"
                    type="text"
                    placeholder={t("BoxTwoSubtitle")}
                  />
                  <Error
                    errorName={errors.about_page_Top_left_box_two_subtitle}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  {t("BoxTwoDescription")}
                </label>

                <div className="sm:col-span-4">
                  <TextAreaCom
                    required
                    register={register}
                    label="About Us Top Box Two Description"
                    name="about_us_top_box_two_description"
                    type="text"
                    placeholder={t("BoxTwoDescription")}
                  />
                  <Error
                    errorName={
                      (errors.name = "about_us_top_box_two_description")
                    }
                  />
                </div>
              </div>
             </div>

             <div className="inline-flex md:text-base text-sm mb-3 md:mt-5 text-gray-500 dark:text-gray-400 ">
              <strong>{t("PageTopContentRight")}</strong>
             </div>
             <hr className="md:mb-12 mb-3" />
             <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("EnableThisBlock")}
              </label>
              <div className="sm:col-span-4">
                <SwitchToggle
                  title=""
                  handleProcess={setAboutTopContentRight}
                  processOption={aboutTopContentRight}
                  name={aboutTopContentRight}
                />
              </div>
             </div>

            <div
              style={{
                height: aboutTopContentRight ? "auto" : 0,
                transition: "all 0.5s",
                visibility: !aboutTopContentRight ? "hidden" : "visible",
                opacity: !aboutTopContentRight ? "0" : "1",
              }}
              className="mb-height-0 grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative"
            >
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("TopContentRightImage")}
              </label>
              <div className="sm:col-span-4">
                <Uploader
                folder="about_us"
                  imageUrl={aboutTopContentRightImage}
                  setImageUrl={setAboutTopContentRightImage}
                />
              </div>
            </div>

            <div className="inline-flex md:text-base text-sm mb-3 md:mt-5 text-gray-500 dark:text-gray-400 relative ">
              <strong>{t("MiddleContentSection")}</strong>
            </div>
            <hr className="md:mb-12 mb-3" />
            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("EnableThisBlock")}
              </label>
              <div className="sm:col-span-4">
                <SwitchToggle
                  title=""
                  handleProcess={setAboutMiddleContentSection}
                  processOption={aboutMiddleContentSection}
                  name={aboutMiddleContentSection}
                />
              </div>
            </div>

            <div
              className="mb-height-0"
              style={{
                height: aboutMiddleContentSection ? "auto" : 0,
                transition: "all 0.5s",
                visibility: !aboutMiddleContentSection ? "hidden" : "visible",
                opacity: !aboutMiddleContentSection ? "0" : "1",
              }}
            >
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  {t("MiddleDescriptionOne")}
                </label>

                <div className="sm:col-span-4">
                  <TextAreaCom
                    required
                    register={register}
                    label="About Us Middle Description"
                    name="about_us_middle_description_one"
                    type="text"
                    placeholder={t("MiddleDescriptionOne")}
                  />
                  <Error
                    errorName={
                      (errors.name = "about_us_middle_description_one")
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  {t("MiddleDescriptionTwo")}
                </label>

                <div className="sm:col-span-4">
                  <TextAreaCom
                    required
                    register={register}
                    label="About Us Middle Description"
                    name="about_us_middle_description_two"
                    type="text"
                    placeholder={t("MiddleDescriptionTwo")}
                  />
                  <Error
                    errorName={
                      (errors.name = "about_us_middle_description_two")
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  {t("MiddleContentImage")}
                </label>
                <div className="sm:col-span-4">
                  <Uploader
                  folder="about_us"
                    imageUrl={aboutMiddleContentImage}
                    setImageUrl={setAboutMiddleContentImage}
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex md:text-base text-sm mb-3 md:mt-5 text-gray-500 dark:text-gray-400 ">
              <strong>{t("OurFounder")}</strong>
            </div>
            <hr className="md:mb-12 mb-3" />

            <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
              <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                {t("EnableThisBlock")}
              </label>
              <div className="sm:col-span-4">
                <SwitchToggle
                  title=""
                  handleProcess={setOurFounderSection}
                  processOption={ourFounderSection}
                  name={ourFounderSection}
                />
              </div>
            </div>

            <div
              className="mb-height-0"
              style={{
                height: ourFounderSection ? "auto" : 0,
                transition: "all 0.5s",
                visibility: !ourFounderSection ? "hidden" : "visible",
                opacity: !ourFounderSection ? "0" : "1",
              }}
            >
              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  {t("OurFounderTitle")}
                </label>
                <div className="sm:col-span-4">
                  <InputAreaTwo
                    required
                    register={register}
                    label="Title"
                    name="about_page_ourfounder_title"
                    type="text"
                    placeholder={t("OurFounderTitle")}
                  />
                  <Error errorName={errors.about_page_ourfounder_title} />
                </div>
              </div>

              <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                  {t("OurFounderDescription")}
                </label>
                <div className="sm:col-span-4">
                  <TextAreaCom
                    required
                    register={register}
                    label="Our Founder Description"
                    name="about_us_ourfounder_description"
                    type="text"
                    placeholder={t("OurFounderDescription")}
                  />
                  <Error
                    errorName={
                      (errors.name = "about_us_ourfounder_description")
                    }
                  />
                </div>
              </div> */}

            {/*  ====================================================== Our Team Tabs ====================================================== */}

            {/* <TabsComponent>
                <Tabs>
                  <TabList>
                    <Tab>{t("OurTeam")} 1</Tab>
                    <Tab>{t("OurTeam")} 2</Tab>
                    <Tab>{t("OurTeam")} 3</Tab>
                    <Tab>{t("OurTeam")} 4</Tab>
                    <Tab>{t("OurTeam")} 5</Tab>
                    <Tab>{t("OurTeam")} 6</Tab>
                  </TabList>

                  <TabPanel className="mt-10">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderOneImage")}
                      </label>
                      <div className="sm:col-span-4">
                        <Uploader
                        folder="about_us"
                          imageUrl={ourFounderOneImage}
                          setImageUrl={setOurFounderOneImage}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderOneTitle")}
                      </label>
                      <div className="sm:col-span-4">
                        <InputAreaTwo
                          required
                          register={register}
                          label="Title"
                          name="about_page_ourfounder_one_title"
                          type="text"
                          placeholder={t("OurFounderOneTitle")}
                        />
                        <Error
                          errorName={errors.about_page_ourfounder_one_title}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderOneSubTitle")}
                      </label>
                      <div className="sm:col-span-4">
                        <InputAreaTwo
                          required
                          register={register}
                          label="Sub Title"
                          name="about_page_ourfounder_one_sub_title"
                          type="text"
                          placeholder={t("OurFounderOneSubTitle")}
                        />
                        <Error
                          errorName={errors.about_page_ourfounder_one_sub_title}
                        />
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderTwoImage")}
                      </label>
                      <div className="sm:col-span-4">
                        <Uploader
                        folder="about_us"
                          imageUrl={ourFounderTwoImage}
                          setImageUrl={setOurFounderTwoImage}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderTwoTitle")}
                      </label>
                      <div className="sm:col-span-4">
                        <InputAreaTwo
                          required
                          register={register}
                          label="Title"
                          name="about_page_ourfounder_two_title"
                          type="text"
                          placeholder={t("OurFounderTwoTitle")}
                        />
                        <Error
                          errorName={errors.about_page_ourfounder_two_title}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderTwoSubTitle")}
                      </label>
                      <div className="sm:col-span-4">
                        <InputAreaTwo
                          required
                          register={register}
                          label="Sub Title"
                          name="about_page_ourfounder_two_sub_title"
                          type="text"
                          placeholder={t("OurFounderTwoSubTitle")}
                        />
                        <Error
                          errorName={errors.about_page_ourfounder_two_sub_title}
                        />
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderThreeImage")}
                      </label>
                      <div className="sm:col-span-4">
                        <Uploader
                        folder="about_us"
                          imageUrl={ourFounderThreeImage}
                          setImageUrl={setOurFounderThreeImage}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderThreeTitle")}
                      </label>
                      <div className="sm:col-span-4">
                        <InputAreaTwo
                          required
                          register={register}
                          label="Title"
                          name="about_page_ourfounder_three_title"
                          type="text"
                          placeholder={t("OurFounderThreeTitle")}
                        />
                        <Error
                          errorName={errors.about_page_ourfounder_three_title}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderThreeSubTitle")}
                      </label>
                      <div className="sm:col-span-4">
                        <InputAreaTwo
                          required
                          register={register}
                          label="Sub Title"
                          name="about_page_ourfounder_three_sub_title"
                          type="text"
                          placeholder={t("OurFounderThreeSubTitle")}
                        />
                        <Error
                          errorName={
                            errors.about_page_ourfounder_three_sub_title
                          }
                        />
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderFourImage")}
                      </label>
                      <div className="sm:col-span-4">
                        <Uploader
                        folder="about_us"
                          imageUrl={ourFounderFourImage}
                          setImageUrl={setOurFounderFourImage}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderFourTitle")}
                      </label>
                      <div className="sm:col-span-4">
                        <InputAreaTwo
                          required
                          register={register}
                          label="Title"
                          name="about_page_ourfounder_four_title"
                          type="text"
                          placeholder={t("OurFounderFourTitle")}
                        />
                        <Error
                          errorName={errors.about_page_ourfounder_four_title}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderFourSubTitle")}
                      </label>
                      <div className="sm:col-span-4">
                        <InputAreaTwo
                          required
                          register={register}
                          label="Sub Title"
                          name="about_page_ourfounder_four_sub_title"
                          type="text"
                          placeholder={t("OurFounderFourSubTitle")}
                        />
                        <Error
                          errorName={
                            errors.about_page_ourfounder_four_sub_title
                          }
                        />
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderFiveImage")}
                      </label>
                      <div className="sm:col-span-4">
                        <Uploader
                        folder="about_us"
                          imageUrl={ourFounderFiveImage}
                          setImageUrl={setOurFounderFiveImage}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderFiveTitle")}
                      </label>
                      <div className="sm:col-span-4">
                        <InputAreaTwo
                          required
                          register={register}
                          label="Title"
                          name="about_page_ourfounder_five_title"
                          type="text"
                          placeholder={t("OurFounderFiveTitle")}
                        />
                        <Error
                          errorName={errors.about_page_ourfounder_five_title}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderFiveSubTitle")}
                      </label>
                      <div className="sm:col-span-4">
                        <InputAreaTwo
                          required
                          register={register}
                          label="Sub Title"
                          name="about_page_ourfounder_five_sub_title"
                          type="text"
                          placeholder={t("OurFounderFiveSubTitle")}
                        />
                        <Error
                          errorName={
                            errors.about_page_ourfounder_five_sub_title
                          }
                        />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 ">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderSixImage")}
                      </label>
                      <div className="sm:col-span-4">
                        <Uploader
                        folder="about_us"
                          imageUrl={ourFounderSixImage}
                          setImageUrl={setOurFounderSixImage}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderSixTitle")}
                      </label>
                      <div className="sm:col-span-4">
                        <InputAreaTwo
                          required
                          register={register}
                          label="Title"
                          name="about_page_ourfounder_six_title"
                          type="text"
                          placeholder={t("OurFounderSixTitle")}
                        />
                        <Error
                          errorName={errors.about_page_ourfounder_six_title}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:md:text-sm md:col-span-1 sm:col-span-2 text-xs text-xs font-semibold text-gray-600 dark:text-gray-400 md:mb-1">
                        {t("OurFounderSixSubTitle")}
                      </label>
                      <div className="sm:col-span-4">
                        <InputAreaTwo
                          required
                          register={register}
                          label="Sub Title"
                          name="about_page_ourfounder_six_sub_title"
                          type="text"
                          placeholder={t("OurFounderSixSubTitle")}
                        />
                        <Error
                          errorName={errors.about_page_ourfounder_six_sub_title}
                        />
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </TabsComponent> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
