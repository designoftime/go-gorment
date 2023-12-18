import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//internal import
import { SidebarContext } from "@/context/SidebarContext";
import CategoryServices from "@/services/CategoryServices";
import { notifyError, notifySuccess } from "@/utils/toast";
import useTranslationValue from "./useTranslationValue";

const useCategorySubmit = (id, data) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);
  const [resData, setResData] = useState({});
  const [checked, setChecked] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrlCover, setImageUrlCover] = useState("");
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");
  const [imageUrl4, setImageUrl4] = useState("");
  const [children, setChildren] = useState([]);
  const [language, setLanguage] = useState(lang);
  const [published, setPublished] = useState(true);
  const [selectCategoryName, setSelectCategoryName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handlerTextTranslateHandler } = useTranslationValue();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  // console.log("lang", lang, language);

  const onSubmit = async ({ name, description,background_color,text_color }) => {
    try {
      setIsSubmitting(true);

      const nameTranslates = await handlerTextTranslateHandler(name, language);
      const descriptionTranslates = await handlerTextTranslateHandler(
        description,
        language
      );

      const categoryData = {
        name: {
          [language]: name,
          ...nameTranslates,
        },
        sub_title: {
          [language]: sub_title,
          ...nameTranslates,
        },
        description: {
          [language]: description || "",
          ...descriptionTranslates,
        },
        background_color: {
          [language]: background_color || "",
          ...descriptionTranslates,
        },
        text_color: {
          [language]: text_color || "",
          ...descriptionTranslates,
        },
        parentId: checked ? checked : undefined,
        parentName: selectCategoryName ? selectCategoryName : "Home",
        // parentName: selectCategoryName ? selectCategoryName : 'Home',

        cover: imageUrlCover,
        icon: imageUrl,
        icon1: imageUrl1,
        icon2: imageUrl2,
        icon3: imageUrl3,
        icon4: imageUrl4,
        status: published ? "show" : "hide",
        lang: language,
      };

      // console.log("category submit", categoryData);
      // setIsSubmitting(false);
      // return;

      if (id) {
        const res = await CategoryServices.updateCategory(id, categoryData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
        reset();
      } else {
        const res = await CategoryServices.addCategory(categoryData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      }
    } catch (err) {
      setIsSubmitting(false);
      notifyError(err ? err?.response?.data?.message : err?.message);
      closeDrawer();
    }
  };

  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
    if (Object.keys(resData).length > 0) {
      setValue("name", resData.name[lang ? lang : "en"]);
      setValue("description", resData.description[lang ? lang : "en"]);
      setValue("background_color", resData.background_color[lang ? lang : "en"]);
      setValue("text_color", resData.text_color[lang ? lang : "en"]);
      setValue("sub_title", resData.sub_title[lang ? lang : "en"]);
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setResData({});
      setValue("name");
      setValue("sub_title");
      setValue("parentId");
      setValue("parentName");
      setValue("description");
      setValue("background_color");
      setValue("text_color");
      setValue("icon");
      setValue("icon1");
      setValue("icon2");
      setValue("icon3");
      setValue("icon4");
      setImageUrl("");
      setPublished(true);
      clearErrors("name");
      clearErrors("sub_title");
      clearErrors("parentId");
      clearErrors("parentName");
      clearErrors("description");
      clearErrors("background_color");
      clearErrors("text_color");
      setSelectCategoryName("Home");
      setLanguage(lang);
      setValue("language", language);

      if (data !== undefined && data[0]?._id !== undefined) {
        setChecked(data[0]._id);
      }
      return;
    }
    if (id) {
      (async () => {
        try {
          const res = await CategoryServices.getCategoryById(id);
          if (res) {
            setResData(res);
            setValue("name", res.name[language ? language : "en"]);
            setValue("sub_title", res.sub_title.en.en);
            setValue(
              "description",
              res.description[language ? language : "en"]
            );
            setValue("language", language);
            setValue("parentId", res.parentId);
            setValue("parentName", res.parentName);
            setValue("background_color", res.background_color.en);
            setValue("text_color", res.text_color.en.en);
            setSelectCategoryName(res.parentName);
            setChecked(res.parentId);
            setImageUrl(res.icon);
            setImageUrlCover(res.cover);
            setImageUrl1(res.icon1);
            setImageUrl2(res.icon2);
            setImageUrl3(res.icon3);
            setImageUrl4(res.icon4);
            setPublished(res.status === "show" ? true : false);
          }
        } catch (err) {
          notifyError(err ? err.response.data.message : err.message);
        }
      })();
    }
  }, [id, setValue, isDrawerOpen, language, clearErrors, data, lang]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    imageUrlCover,
    setImageUrlCover,
    imageUrl1,
    imageUrl2,
    imageUrl3,
    imageUrl4,
    setImageUrl,
    setImageUrl1,
    setImageUrl2,
    setImageUrl3,
    setImageUrl4,
    children,
    setChildren,
    published,
    setPublished,
    checked,
    setChecked,
    isSubmitting,
    selectCategoryName,
    setSelectCategoryName,
    handleSelectLanguage,
  };
};

export default useCategorySubmit;
