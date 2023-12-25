import { t } from "i18next";
import { Scrollbars } from "react-custom-scrollbars-2";

//internal import
import Title from "@/components/form/others/Title";
import Error from "@/components/form/others/Error";
import InputArea from "@/components/form/input/InputArea";
import LabelArea from "@/components/form/selectOption/LabelArea";
import Uploader from "@/components/image-uploader/Uploader";
import useThemeSubmit from "@/hooks/useThemeSubmit";
import DrawerButton from "@/components/form/button/DrawerButton";
import SwitchToggle from "@/components/form/switch/SwitchToggle";
import { FiSettings } from "react-icons/fi";
import { Editor } from "react-draft-wysiwyg";
import TextAreaCom from "../form/input/TextAreaCom";

const ThemeDrawer = ({ id }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    // section one
    imageUrlSectionOneFirst,
    setImageUrlSectionOneFirst,
    imageUrlSectionOneSecond,
    setImageUrlSectionOneSecond,
    imageUrlSectionOneThird,
    setImageUrlSectionOneThird,
    imageUrlSectionOneFour,
    setImageUrlSectionOneFour,
    sectionOneEditoreFirst,
    setSectionOneEditoreFirst,
    sectionOneEditoreSecond,
    setSectionOneEditoreSecond,
    sectionOneEditoreThird,
    setSectionOneEditoreThird,
    setSectionOne,
    sectionOne,
    //section two
    imageUrlSectionTwoOne,
    setImageUrlSectionTwoOne,
    imageUrlSectionTwoSecond,
    setImageUrlSectionTwoSecond,
    imageUrlSectionTwoThird,
    setImageUrlSectionTwoThird,
    imageUrlSectionTwoFour,
    setImageUrlSectionTwoFour,
    setSectionTwo,
    sectionTwo,
    //section three
    imageUrlSectionThird,
    setImageUrlThird,
    setSectionThird,
    sectionThird,
    //section four
    imageUrlSectionFour,
    setImageUrlSectionFour,
    setSectionFour,
    sectionFour,

    isSubmitting,
    handleSelectLanguage,
  } = useThemeSubmit(id);

  return (
    <>
      <div className="w-full relative  p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 ">
        {id ? (
          <Title
            register={register}
            required
            handleSelectLanguage={handleSelectLanguage}
            title={"Update Theme"}
            description={"Update Theme and Customization"}
          />
        ) : (
          <Title
            register={register}
            required
            handleSelectLanguage={handleSelectLanguage}
            title={"Craete Theme"}
            description={
              "Create your Theme and necessary information from here"
            }
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-20">
          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Theme Unique Name"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Theme Name"
                    name="theme_name"
                    type="text"
                    placeholder={"Theme Name"}
                  />
                  <Error errorName={errors.theme_name} />
                </div>
              </div>
            <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
              <FiSettings className="mt-1 mr-2" /> {"Section One"}
            </div>

            <hr className="mb-3" />
            <div
              className="mb-height-0"
              style={{
                height: sectionOne ? "auto" : 0,
                transition: "all 0.5s",
                visibility: !sectionOne ? "hidden" : "visible",
                opacity: !sectionOne ? "0" : "1",
              }}
            >
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Image One"} />
                <div className="col-span-8 sm:col-span-4">
                  <Uploader
                    imageUrl={imageUrlSectionOneFirst}
                    setImageUrl={setImageUrlSectionOneFirst}
                    folder="theme"
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Image Two"} />
                <div className="col-span-8 sm:col-span-4">
                  <Uploader
                    imageUrl={imageUrlSectionOneSecond}
                    setImageUrl={setImageUrlSectionOneSecond}
                    folder="theme"
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Image Three"} />
                <div className="col-span-8 sm:col-span-4">
                  <Uploader
                    imageUrl={imageUrlSectionOneThird}
                    setImageUrl={setImageUrlSectionOneThird}
                    folder="theme"
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Image Four"} />
                <div className="col-span-8 sm:col-span-4">
                  <Uploader
                    imageUrl={imageUrlSectionOneFour}
                    setImageUrl={setImageUrlSectionOneFour}
                    folder="theme"
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Title"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Title"
                    name="section_one_title_one"
                    type="text"
                    placeholder={"Top Title"}
                  />
                  <Error errorName={errors.section_one_title_one} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Description One"} />
                <div className="col-span-6 sm:col-span-4">
                  <Editor
                    editorState={sectionOneEditoreFirst}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={setSectionOneEditoreFirst}
                    editorStyle={{
                      border: "1px solid #F1F1F1",
                      padding: "0 15px",
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Title"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Title"
                    name="section_one_title_two"
                    type="text"
                    placeholder={"Top Title"}
                  />
                  <Error errorName={errors.title_one} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Description Two"} />
                <div className="col-span-6 sm:col-span-4">
                  <Editor
                    editorState={sectionOneEditoreSecond}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={setSectionOneEditoreSecond}
                    editorStyle={{
                      border: "1px solid #F1F1F1",
                      padding: "0 15px",
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Title"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Title"
                    name="section_one_title_three"
                    type="text"
                    placeholder={"Top Title"}
                  />
                  <Error errorName={errors.title_one} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Description Three"} />
                <div className="col-span-6 sm:col-span-4">
                  <Editor
                    editorState={sectionOneEditoreThird}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={setSectionOneEditoreThird}
                    editorStyle={{
                      border: "1px solid #F1F1F1",
                      padding: "0 15px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Published")} />
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  title={""}
                  handleProcess={setSectionOne}
                  processOption={sectionOne}
                  name={sectionOne}
                />
                <Error errorName={errors.sectionOne} />
              </div>
            </div>
          </div>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-20">
            <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
              <FiSettings className="mt-1 mr-2" /> {"Section Two"}
            </div>

            <hr className="mb-3" />
            <div
              className="mb-height-0"
              style={{
                height: sectionTwo ? "auto" : 0,
                transition: "all 0.5s",
                visibility: !sectionTwo ? "hidden" : "visible",
                opacity: !sectionTwo ? "0" : "1",
              }}
            >
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Image one"} />
                <div className="col-span-8 sm:col-span-4">
                  <Uploader
                    imageUrl={imageUrlSectionTwoOne}
                    setImageUrl={setImageUrlSectionTwoOne}
                    folder="theme"
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Title"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Title"
                    name="section_two_title_one"
                    type="text"
                    placeholder={"Top Title"}
                  />
                  <Error errorName={errors.title_one} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Image Second"} />
                <div className="col-span-8 sm:col-span-4">
                  <Uploader
                    imageUrl={imageUrlSectionTwoSecond}
                    setImageUrl={setImageUrlSectionTwoSecond}
                    folder="theme"
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Title"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Title"
                    name="section_two_title_second"
                    type="text"
                    placeholder={"Top Title"}
                  />
                  <Error errorName={errors.title_second} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Image Three"} />
                <div className="col-span-8 sm:col-span-4">
                  <Uploader
                    imageUrl={imageUrlSectionTwoThird}
                    setImageUrl={setImageUrlSectionTwoThird}
                    folder="theme"
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Title"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Title"
                    name="section_two_title_three"
                    type="text"
                    placeholder={"Top Title"}
                  />
                  <Error errorName={errors.title_three} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Image Four"} />
                <div className="col-span-8 sm:col-span-4">
                  <Uploader
                    imageUrl={imageUrlSectionTwoFour}
                    setImageUrl={setImageUrlSectionTwoFour}
                    folder="theme"
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Title"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Title"
                    name="section_two_title_four"
                    type="text"
                    placeholder={"Top Title"}
                  />
                  <Error errorName={errors.title_four} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Background Color"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Background Color"
                    name="section_two_background_color"
                    type="text"
                    placeholder={"Background Color"}
                  />
                  <Error errorName={errors.background_color} />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Text Color"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Text Color"
                    name="section_two_text_color"
                    type="text"
                    placeholder={"Text Color"}
                  />
                  <Error errorName={errors.text_color} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Published")} />
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  title={""}
                  handleProcess={setSectionTwo}
                  processOption={sectionTwo}
                  name={sectionTwo}
                />
              </div>
            </div>
          </div>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-20">
            <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
              <FiSettings className="mt-1 mr-2" /> {"Section Third"}
            </div>

            <hr className="mb-3" />
            <div
              className="mb-height-0"
              style={{
                height: sectionThird ? "auto" : 0,
                transition: "all 0.5s",
                visibility: !sectionThird ? "hidden" : "visible",
                opacity: !sectionThird ? "0" : "1",
              }}
            >
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Image"} />
                <div className="col-span-8 sm:col-span-4">
                  <Uploader
                    imageUrl={imageUrlSectionThird}
                    setImageUrl={setImageUrlThird}
                    folder="theme"
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Header"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Header"
                    name="section_three_top_header"
                    type="text"
                    placeholder={"Top Header"}
                  />
                  <Error errorName={errors.top_header} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Title"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Title"
                    name="section_three_title_one"
                    type="text"
                    placeholder={"Top Title"}
                  />
                  <Error errorName={errors.title_one} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Description"} />
                <div className="col-span-8 sm:col-span-4">
                  <TextAreaCom
                    required
                    register={register}
                    label="Top Description"
                    name="section_three_description_one"
                    type="text"
                    placeholder={t("SliderDescription")}
                  />

                  <Error errorName={errors.description_one} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Title"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Title"
                    name="section_three_title_second"
                    type="text"
                    placeholder={"Top Title"}
                  />
                  <Error errorName={errors.title_second} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Description"} />
                <div className="col-span-8 sm:col-span-4">
                  <TextAreaCom
                    required
                    register={register}
                    label="Top Description"
                    name="section_three_description_second"
                    type="text"
                    placeholder={"Top Description"}
                  />

                  <Error errorName={errors.description_second} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Title"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Title"
                    name="section_three_tittle_three"
                    type="text"
                    placeholder={"Top Title"}
                  />
                  <Error errorName={errors.tittle_three} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Description"} />
                <div className="col-span-8 sm:col-span-4">
                  <TextAreaCom
                    required
                    register={register}
                    label="Top Description"
                    name="section_three_description_three"
                    type="text"
                    placeholder={"Top Description"}
                  />

                  <Error errorName={errors.description_three} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Background Color"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Background Color"
                    name="section_three_background_color"
                    type="text"
                    placeholder={"Background Color"}
                  />
                  <Error errorName={errors.background_color} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Text Color"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Text Color"
                    name="section_three_text_color"
                    type="text"
                    placeholder={"Text Color"}
                  />
                  <Error errorName={errors.text_color} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Published")} />
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  title={""}
                  handleProcess={setSectionThird}
                  processOption={sectionThird}
                  name={sectionThird}
                />
              </div>
            </div>
          </div>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
              <FiSettings className="mt-1 mr-2" /> {"Section Four"}
            </div>

            <hr className="mb-3" />
            <div
              className="mb-height-0"
              style={{
                height: sectionFour ? "auto" : 0,
                transition: "all 0.5s",
                visibility: !sectionFour ? "hidden" : "visible",
                opacity: !sectionFour ? "0" : "1",
              }}
            >
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Image"} />
                <div className="col-span-8 sm:col-span-4">
                  <Uploader
                    imageUrl={imageUrlSectionFour}
                    setImageUrl={setImageUrlSectionFour}
                    folder="theme"
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Header"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Header"
                    name="section_four_top_header"
                    type="text"
                    placeholder={"Top Header"}
                  />
                  <Error errorName={errors.top_header} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Title"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Title"
                    name="section_four_title_one"
                    type="text"
                    placeholder={"Top Title"}
                  />
                  <Error errorName={errors.title_one} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Description"} />
                <div className="col-span-8 sm:col-span-4">
                  <TextAreaCom
                    required
                    register={register}
                    label="Top Description"
                    name="section_four_description_one"
                    type="text"
                    placeholder={t("SliderDescription")}
                  />

                  <Error errorName={errors.description_one} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Title"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Title"
                    name="section_four_title_second"
                    type="text"
                    placeholder={"Top Title"}
                  />
                  <Error errorName={errors.title_second} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Description"} />
                <div className="col-span-8 sm:col-span-4">
                  <TextAreaCom
                    required
                    register={register}
                    label="Top Description"
                    name="section_four_description_second"
                    type="text"
                    placeholder={"Top Description"}
                  />

                  <Error errorName={errors.description_second} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Title"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Top Title"
                    name="section_four_title_third"
                    type="text"
                    placeholder={"Top Title"}
                  />
                  <Error errorName={errors.title_third} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Top Description"} />
                <div className="col-span-8 sm:col-span-4">
                  <TextAreaCom
                    required
                    register={register}
                    label="Top Description"
                    name="section_four_description_third"
                    type="text"
                    placeholder={"Top Description"}
                  />

                  <Error errorName={errors.description_third} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Background Color"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Background Color"
                    name="section_four_background_color"
                    type="text"
                    placeholder={"Background Color"}
                  />
                  <Error errorName={errors.background_color} />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={"Text Color"} />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    required
                    label="Text Color"
                    name="section_four_text_color"
                    type="text"
                    placeholder={"Text Color"}
                  />
                  <Error errorName={errors.text_color} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Published")} />
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  title={""}
                  handleProcess={setSectionFour}
                  processOption={sectionFour}
                  name={sectionFour}
                />
              </div>
            </div>
          </div>
          <DrawerButton id={id} title="Theme" isSubmitting={isSubmitting} />
        </form>
      </Scrollbars>
    </>
  );
};

export default ThemeDrawer;
