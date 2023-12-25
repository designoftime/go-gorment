import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import draftToHtml from "draftjs-to-html";
import { EditorState, convertToRaw } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";

//internal import
import { SidebarContext } from "@/context/SidebarContext";
import CouponServices from "@/services/CouponServices";
import { notifyError, notifySuccess } from "@/utils/toast";
import useUtilsFunction from "./useUtilsFunction";
import ThemeServices from "@/services/themeServices";

const createEditorState = (text) => {
  const contentState = stateFromHTML(text);
  return EditorState.createWithContent(contentState);
};
const useThemeSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);
  const [language, setLanguage] = useState(lang);
  const [resData, setResData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSave, setIsSave] = useState(true);

  // const { handlerTextTranslateHandler } = useTranslationValue();
  const { currency } = useUtilsFunction();

  // section one
  const [imageUrlSectionOneFirst, setImageUrlSectionOneFirst] = useState("");
  const [imageUrlSectionOneSecond, setImageUrlSectionOneSecond] = useState("");
  const [imageUrlSectionOneThird, setImageUrlSectionOneThird] = useState("");
  const [imageUrlSectionOneFour, setImageUrlSectionOneFour] = useState("");
  const [sectionOneEditoreFirst, setSectionOneEditoreFirst] = useState(
    createEditorState("")
  );
  const [sectionOneEditoreSecond, setSectionOneEditoreSecond] = useState(
    createEditorState("")
  );
  const [sectionOneEditoreThird, setSectionOneEditoreThird] = useState(
    createEditorState("")
  );
  const [sectionOne, setSectionOne] = useState(true);
  //section two
  const [imageUrlSectionTwoOne, setImageUrlSectionTwoOne] = useState("");
  const [imageUrlSectionTwoSecond, setImageUrlSectionTwoSecond] = useState("");
  const [imageUrlSectionTwoThird, setImageUrlSectionTwoThird] = useState("");
  const [imageUrlSectionTwoFour, setImageUrlSectionTwoFour] = useState("");
  const [sectionTwo, setSectionTwo] = useState(true);
  //section three
  const [imageUrlSectionThird, setImageUrlThird] = useState("");
  const [sectionThird, setSectionThird] = useState(true);
  //section four
  const [imageUrlSectionFour, setImageUrlSectionFour] = useState("");
  const [sectionFour, setSectionFour] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const themeData = {
        name: "themeCustomization",
        theme: {
          theme_unique_name: data.theme_name,
          section_one: {
            section_status: sectionOne ? "show" : "hide",
            first_img: imageUrlSectionOneFirst,
            second_img: imageUrlSectionOneSecond,
            third_img: imageUrlSectionOneThird,
            four_img: imageUrlSectionOneFour,
            first_title: data.section_one_title_one,
            first_editor: sectionOneEditoreFirst
              ? draftToHtml(
                  convertToRaw(sectionOneEditoreFirst.getCurrentContent())
                )
              : "",
            second_title: data.section_one_title_two,
            second_editor: sectionOneEditoreSecond
              ? draftToHtml(
                  convertToRaw(sectionOneEditoreSecond.getCurrentContent())
                )
              : "",
            third_title: data.section_one_title_three,
            third_editor: sectionOneEditoreThird
              ? draftToHtml(
                  convertToRaw(sectionOneEditoreThird.getCurrentContent())
                )
              : "",
          },
          section_two: {
            section_status: sectionTwo ? "show" : "hide",
            first_title: data.section_two_title_one,
            first_img: imageUrlSectionTwoOne,
            second_title: data.section_two_title_second,
            second_img: imageUrlSectionTwoSecond,
            third_title: data.section_two_title_three,
            third_img: imageUrlSectionTwoThird,
            four_title: data.section_two_title_four,
            four_img: imageUrlSectionTwoFour,
            background_color: data.section_two_background_color,
            text_color: data.section_two_text_color,
          },
          section_three: {
            section_status: sectionThird ? "show" : "hide",
            top_header: data.section_three_top_header,
            first_img: imageUrlSectionThird,
            first_title: data.section_three_title_one,
            first_description: data.section_three_description_one,
            second_title: data.section_three_title_second,
            second_description: data.section_three_description_second,
            third_title: data.section_three_tittle_three,
            third_description: data.section_three_description_three,
            background_color: data.section_three_background_color,
            text_color: data.section_three_text_color,
          },
          section_four: {
            section_status: sectionFour ? "show" : "hide",
            first_img: imageUrlSectionFour,
            top_header: data.section_four_top_header,
            first_title: data.section_four_title_one,
            first_description: data.section_four_description_one,
            second_title: data.section_four_title_second,
            second_description: data.section_four_description_second,
            third_description: data.section_four_description_third,
            third_description: data.section_four_description_third,
            background_color: data.section_four_background_color,
            text_color: data.section_four_text_color,
          },
        },

        // lang: language,
        // status: published ? "show" : "hide",
      };
      // console.log(
      //   "themeData",
      //   themeData,
      //   "titleTranslates",
      //   titleTranslates,
      //   "language",
      //   language
      // );
      // setIsSubmitting(false);
      // return;

      if (id) {
        const res = await ThemeServices.updateTheme(id, themeData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      } else {
        const res = await ThemeServices.addTheme(themeData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      }
    } catch (err) {
      notifyError(err ? err?.response?.data?.message : err.message);
      setIsSubmitting(false);
      closeDrawer();
    }
  };

  // const handleSelectLanguage = (lang) => {
  //   setLanguage(lang);
  //   if (Object.keys(resData).length > 0) {
  //     setValue("title", resData.title[lang ? lang : "en"]);
  //   }
  // };

  useEffect(() => {
    if (!isDrawerOpen) {
      setResData({});
      setValue("theme_name");
      setValue("section_one_title_one");
      setValue("section_one_title_two");
      setValue("section_one_title_three");
      setValue("section_two_title_one");
      setValue("section_two_title_second");
      setValue("section_two_title_three");
      setValue("section_two_title_four");
      setValue("section_two_text_color");
      setValue("section_two_background_color");
      setValue("section_three_top_header");
      setValue("section_three_title_one");
      setValue("section_three_description_one");
      setValue("section_three_title_second");
      setValue("section_three_description_second");
      setValue("section_three_tittle_three");
      setValue("section_three_description_three");
      setValue("section_three_background_color");
      setValue("section_three_text_color");
      setValue("section_four_top_header");
      setValue("section_four_title_one");
      setValue("section_four_description_one");
      setValue("section_four_title_second");
      setValue("section_four_description_second");
      setValue("section_four_description_third");
      setValue("section_four_description_third");
      setValue("section_four_background_color");
      setValue("section_four_text_color");
      setImageUrlSectionOneFirst("");
      setImageUrlSectionOneSecond("");
      setImageUrlSectionOneThird("");
      setImageUrlSectionOneFour("");
      setSectionOneEditoreFirst("");
      setSectionOneEditoreSecond("");
      setSectionOneEditoreThird("");
      setImageUrlSectionTwoOne("");
      setImageUrlSectionTwoSecond("");
      setImageUrlSectionTwoThird("");
      setImageUrlSectionTwoFour("");
      setImageUrlThird("");
      setImageUrlSectionFour("");
      clearErrors("theme_name");
      clearErrors("section_one_title_one");
      clearErrors("section_one_title_two");
      clearErrors("section_one_title_three");
      clearErrors("section_two_title_one");
      clearErrors("section_two_title_second");
      clearErrors("section_two_title_three");
      clearErrors("section_two_title_four");
      clearErrors("section_two_text_color");
      clearErrors("section_two_background_color");
      clearErrors("section_three_top_header");
      clearErrors("section_three_title_one");
      clearErrors("section_three_description_one");
      clearErrors("section_three_title_second");
      clearErrors("section_three_description_second");
      clearErrors("section_three_tittle_three");
      clearErrors("section_three_description_three");
      clearErrors("section_three_background_color");
      clearErrors("section_three_text_color");
      clearErrors("section_four_top_header");
      clearErrors("section_four_title_one");
      clearErrors("section_four_description_one");
      clearErrors("section_four_title_second");
      clearErrors("section_four_description_second");
      clearErrors("section_four_description_third");
      clearErrors("section_four_description_third");
      clearErrors("section_four_background_color");
      clearErrors("section_four_text_color");
      // setLanguage(lang);
      // setValue("language", language);
      return;
    }
    if (id) {
      (async () => {
        try {
          const res = await ThemeServices.getThemeById(id);
          if (res) {
            setResData(res);
            setIsSave(false);
            setValue(
              "theme_name",
              res.theme.theme_unique_name
            );
            setValue(
              "section_one_title_one",
              res.theme.section_one.first_title
            );
            setValue(
              "section_one_title_two",
              res.theme.section_one.second_title
            );
            setValue(
              "section_one_title_three",
              res.theme.section_one.third_title
            );
            setValue(
              "section_two_title_one",
              res.theme.section_two.first_title
            );
            setValue(
              "section_two_title_second",
              res.theme.section_two.second_title
            );
            setValue(
              "section_two_title_three",
              res.theme.section_two.third_title
            );
            setValue(
              "section_two_title_four",
              res.theme.section_two.four_title
            );
            setValue(
              "section_two_text_color",
              res.theme.section_two.text_color
            );
            setValue(
              "section_two_background_color",
              res.theme.section_two.background_color
            );
            setValue(
              "section_three_top_header",
              res.theme.section_three.top_header
            );
            setValue(
              "section_three_title_one",
              res.theme.section_three.first_title
            );
            setValue(
              "section_three_description_one",
              res.theme.section_three.first_description
            );
            setValue(
              "section_three_title_second",
              res.theme.section_three.second_title
            );
            setValue(
              "section_three_description_second",
              res.theme.section_three.second_description
            );
            setValue(
              "section_three_tittle_three",
              res.theme.section_three.third_title
            );
            setValue(
              "section_three_description_three",
              res.theme.section_three.third_description
            );
            setValue(
              "section_three_background_color",
              res.theme.section_three.background_color
            );
            setValue(
              "section_three_text_color",
              res.theme.section_three.text_color
            );
            setValue(
              "section_four_top_header",
              res.theme.section_four.top_header
            );
            setValue(
              "section_four_title_one",
              res.theme.section_four.first_title
            );
            setValue(
              "section_four_description_one",
              res.theme.section_four.first_description
            );
            setValue(
              "section_four_title_second",
              res.theme.section_four.second_title
            );
            setValue(
              "section_four_description_second",
              res.theme.section_four.second_description
            );
            setValue(
              "section_four_description_third",
              res.theme.section_four.third_description
            );
            setValue(
              "section_four_description_third",
              res.theme.section_four.third_description
            );
            setValue(
              "section_four_background_color",
              res.theme.section_four.background_color
            );
            setValue(
              "section_four_text_color",
              res.theme.section_four.text_color
            );

            setSectionOne(
              res.theme.section_one.section_status === "show" ? true : false
            );

            setSectionTwo(
              res.theme.section_two.section_status === "show" ? true : false
            );

            setSectionThird(
              res.theme.section_three.section_status === "show" ? true : false
            );
            setSectionFour(
              res.theme.section_four.section_status === "show" ? true : false
            );

            setImageUrlSectionOneFirst(res.theme.section_one.first_img);
            setImageUrlSectionOneSecond(res.theme.section_one.second_img);
            setImageUrlSectionOneThird(res.theme.section_one.third_img);
            setImageUrlSectionOneFour(res.theme.section_one.four_img);
            setSectionOneEditoreFirst(
              createEditorState(res.theme.section_one.first_editor)
            );
            setSectionOneEditoreSecond(
              createEditorState(res.theme.section_one.second_editor)
            );
            setSectionOneEditoreThird(
              createEditorState(res.theme.section_one.third_editor)
            );
            setImageUrlSectionTwoOne(res.theme.section_two.first_img);
            setImageUrlSectionTwoSecond(res.theme.section_two.second_img);
            setImageUrlSectionTwoThird(res.theme.section_two.third_img);
            setImageUrlSectionTwoFour(res.theme.section_two.four_img);
            setImageUrlThird(res.theme.section_three.first_img);
            setImageUrlSectionFour(res.theme.section_four.first_img);
          }
        } catch (err) {
          notifyError(err ? err?.response?.data?.message : err.message);
        }
      })();
    }
  }, [id, setValue, isDrawerOpen, clearErrors, language, lang]);

  return {
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
    isSave,

    currency,
    isSubmitting,
  };
};

export default useThemeSubmit;
