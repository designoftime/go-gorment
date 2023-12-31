import { EditorState, convertToRaw } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";
import draftToHtml from "draftjs-to-html";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//internal import

import { notifyError, notifySuccess } from "@/utils/toast";
import { SidebarContext } from "@/context/SidebarContext";
import SettingServices from "@/services/SettingServices";
import useUtilsFunction from "./useUtilsFunction";
import useNotification from "./useNotification";

const createEditorState = (text) => {
  const contentState = stateFromHTML(text);
  return EditorState.createWithContent(contentState);
};

const useStoreHomeSubmit = () => {
  const { setIsUpdate, lang } = useContext(SidebarContext);
  const { showingTranslateValue } = useUtilsFunction();

  const [resData, setResData] = useState([]);
  const [couponList, setCouponList] = useState([]);
  const [couponList1, setCouponList1] = useState([]);
  const [language, setLanguage] = useState(lang || "en");

  const [isSave, setIsSave] = useState(true);
  const [printSlip, setPrintSlip] = useState(true);
  const [emailSlip, setEmailSlip] = useState(true);
  const [isCoupon, setIsCoupon] = useState(true);
  const [allowDiscount, setAllowDiscount] = useState(true);
  const [paymentOption, setPaymentOption] = useState(true);
  const [orderProcess, setOrderProcess] = useState(true);
  const [allowOutOfStock, setAllowOutOfStock] = useState(true);
  const [isSliderFullWidth, setIsSliderFullWidth] = useState(false);
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  const [promotionBanner, setPromotionBanner] = useState(true);
  const [featuredCategories, setFeaturedCategories] = useState(true);
  const [popularProducts, setPopularProducts] = useState(true);
  const [quickDelivery, setQuickDelivery] = useState(true);
  const [latestDiscounted, setLatestDiscounted] = useState(true);
  const [dailyNeeds, setDailyNeeds] = useState(true);
  const [featurePromo, setFeaturePromo] = useState(true);
  const [footerBlock1, setFooterBlock1] = useState(true);
  const [footerBlock2, setFooterBlock2] = useState(true);
  const [footerBlock3, setFooterBlock3] = useState(true);
  const [footerBlock4, setFooterBlock4] = useState(true);
  const [footerSocialLinks, setFooterSocialLinks] = useState(true);
  const [footerPaymentMethod, setFooterPaymentMethod] = useState(true);
  const [footerBottomContact, setFooterBottomContact] = useState(true);
  const [allowPromotionBanner, setAllowPromotionBanner] = useState(false);
  const [discount_coupon_status, setDiscount_coupon_status] = useState(true);
  const [singleProductPageRightBox, setSingleProductPageRightBox] =
    useState(true);
  const [leftRightArrow, setLeftRightArrow] = useState(false);
  const [bottomDots, setBottomDots] = useState(true);
  const [bothSliderOption, setBothSliderOption] = useState(true);
  const [staticContent, setStaticConetnt] = useState(true);

  const [faqMenuLink, setFaqMenuLink] = useState(true);
  const [emailUsBox, setEmailUsBox] = useState(true);
  const [callUsBox, setCallUsBox] = useState(true);
  const [addressBox, setAddressBox] = useState(true);
  const [faqStatus, setFaqStatus] = useState(true);
  const [offersMenuLink, setOffersMenuLink] = useState(true);
  const [privacyPolicy, setPrivacyPolicy] = useState(true);
  const [termsConditions, setTermsConditions] = useState(true);
  const [faqLeftColStatus, setFaqLeftColStatus] = useState(true);
  const [faqRightColStatus, setFaqRightColStatus] = useState(true);
  const [offersPageHeader, setOffersPageHeader] = useState(true);
  const [aboutPageHeader, setAboutPageHeader] = useState(true);
  const [categoriesMenuLink, setCategoriesMenuLink] = useState(true);
  const [aboutUsMenuLink, setAboutUsMenuLink] = useState(true);
  const [contactUsMenuLink, setContactUsMenuLink] = useState(true);
  const [contactPageHeader, setContactPageHeader] = useState(true);
  const [contactFormStatus, setContactFormStatus] = useState(true);
  const [ourFounderSection, setOurFounderSection] = useState(true);
  const [aboutTopContentLeft, setAboutTopContentLeft] = useState(true);
  const [aboutTopContentRight, setAboutTopContentRight] = useState(true);
  const [privacyPolicyMenuLink, setPrivacyPolicyMenuLink] = useState(true);
  const [termsConditionsMenuLink, setTermsConditionsMenuLink] = useState(true);

  const [refundPolicy, setRefundPolicy] = useState(true);
  const [refundPolicyImgBg, setRefundPolicyImgBg] = useState("");
  const [refundPolicyTextEditor, setRefundPolicyTextEditor] = useState(
    createEditorState("")
  );

  const [contactMidLeftColStatus, setContactMidLeftColStatus] = useState(true);
  const [contactMidLeftColImage, setContactMidLeftColImage] = useState("");
  const [aboutMiddleContentSection, setAboutMiddleContentSection] =
    useState(true);

  const [footerLogo, setFooterLogo] = useState("");
  const [headerLogo, setHeaderLogo] = useState("");
  const [sliderImage, setSliderImage] = useState("");
  const [paymentImage, setPaymentImage] = useState("");
  const [faqHeaderBg, setFaqHeaderBg] = useState("");
  const [aboutHeaderBg, setAboutHeaderBg] = useState("");
  const [offersHeaderBg, setOffersHeaderBg] = useState("");
  const [sliderImageTwo, setSliderImageTwo] = useState("");
  const [getButton1image, setGetButton1image] = useState("");
  const [getButton2image, setGetButton2image] = useState("");
  const [faqLeftColImage, setFaqLeftColImage] = useState("");
  const [contactHeaderBg, setContactHeaderBg] = useState("");
  const [sliderImageThree, setSliderImageThree] = useState("");
  const [sliderImageFour, setSliderImageFour] = useState("");
  const [sliderImageFive, setSliderImageFive] = useState("");
  const [placeholderImage, setPlaceHolderImage] = useState("");
  const [quickSectionImage, setQuickSectionImage] = useState("");
  const [ourFounderOneImage, setOurFounderOneImage] = useState("");
  const [ourFounderTwoImage, setOurFounderTwoImage] = useState("");
  const [ourFounderThreeImage, setOurFounderThreeImage] = useState("");
  const [ourFounderFourImage, setOurFounderFourImage] = useState("");
  const [ourFounderFiveImage, setOurFounderFiveImage] = useState("");
  const [ourFounderSixImage, setOurFounderSixImage] = useState("");
  const [aboutMiddleContentImage, setAboutMiddleContentImage] = useState("");
  const [privacyPolicyHeaderBg, setPrivacyPolicyHeaderBg] = useState("");
  const [getYourDailyNeedImageLeft, setGetYourDailyNeedImageLeft] =
    useState("");
  const [getYourDailyNeedImageRight, setGetYourDailyNeedImageRight] =
    useState("");
  const [textEdit, setTextEdit] = useState(createEditorState(""));
  const [termsConditionsTextEdit, setTermsConditionsTextEdit] = useState(
    createEditorState("")
  );
  const [aboutTopContentRightImage, setAboutTopContentRightImage] =
    useState("");
  const [termsConditionsHeaderBg, setTermsConditionsHeaderBg] = useState("");

  const [bottomSlider, setBottomSlider] = useState(true);
  const [bottomSliderImage, setBottomSliderImage] = useState("");
  const [bottomSliderImageTwo, setBottomSliderImageTwo] = useState("");
  const [bottomSliderImageThree, setBottomSliderImageThree] = useState("");
  const [bottomSliderImageFour, setBottomSliderImageFour] = useState("");
  const [bottomSliderImageFive, setBottomSliderImageFive] = useState("");

  const [permotionBannerImg, setPermotionBannerImg] = useState("");

  const [scrollingImageOne, setScrollingImageOne] = useState();
  const [scrollingImageTwo, setScrollingImageTwo] = useState();
  const [scrollingImageThree, setScrollingImageThree] = useState();
  const [scrollingImageFour, setScrollingImageFour] = useState();
  const [scrollingImageFive, setScrollingImageFive] = useState();
  const [scrollingImageSix, setScrollingImageSix] = useState();
  const [scrollingImageSeven, setScrollingImageSeven] = useState();
  const [scrollingImageEight, setScrollingImageEight] = useState();
  const [scrollingImageNine, setScrollingImageNine] = useState();
  const [scrollingImageTen, setScrollingImageTen] = useState();
  const [scrollingBanner, setScrollingBanner] = useState(true);

  const [bottomPermotionBanner, setBottomPermotionBanner] = useState(true);
  const [bottomPermotionBannerImg, setBottomPermotionBannerImg] = useState("");

  const [sectionOne, setSectionOne] = useState(true);
  const [leftSideImg, setLeftSideImg] = useState("");
  const [rightSideImg, setRightSideImg] = useState("");
  const [sectionSecond, setSectionSecond] = useState(true);
  const [sectionSecondImg, setSectionSecondImg] = useState("");
  const [sectionThird, setSectionThird] = useState(true);
  const [sectionThirdImg, setSectionThirdImg] = useState("");
  const [sectionFour, setSectionFrour] = useState(true);
  const [sectionFourImg, setSectionFrourImg] = useState("");
  const [sectionFive, setSectionFive] = useState(true);
  const [sectionFiveImg, setSectionFiveImg] = useState("");

  const [featurePromoOneImg, setFeaturePromoOneImg] = useState("");
  const [featurePromoTwoImg, setFeaturePromoTwoImg] = useState("");
  const [featurePromoThreeImg, setFeaturePromoThreeImg] = useState("");
  const [featurePromoFourImg, setFeaturePromoFourImg] = useState("");
  const [featurePromoFiveImg, setFeaturePromoFiveImg] = useState("");

  const [secondSlider, setSecondSlider] = useState(true);
  const [secondSliderImage, setSecondSliderImage] = useState("");
  const [secondSliderImageTwo, setSecondSliderImageTwo] = useState("");
  const [secondSliderImageThree, setSecondSliderImageThree] = useState("");
  const [secondSliderImageFour, setSecondSliderImageFour] = useState("");
  const [secondSliderImageFive, setSecondSliderImageFive] = useState("");

  const [testimonial, setTestimonial] = useState(true);
  const [testimonialBannerImg, setTestimonialBannerImg] = useState("");
  const [testimonialBannerImgTwo, setTestimonialBannerImgTwo] = useState("");
  const [testimonialBannerImgThree, setTestimonialBannerImgThree] =
    useState("");

  const [offerSectionFirst, setOfferSectionFirst] = useState(true);
  const [offerLeftSideImg, setOfferLeftSideImg] = useState("");
  const [offerRightSideImg, setOfferRightSideImg] = useState("");
  const [offerSectionSecond, setOfferSectionSecond] = useState(true);
  const [offferParentImg, setOfferParentImg] = useState("");
  const [offerChildImg, setOfferChildImg] = useState("");
  const [offerBackgroundImg, setOfferBackgroundImg] = useState("");
  const [offerSectionThird, setOfferSectionThird] = useState(true);
  const [offerTestimonial, setOfferTestimonial] = useState(true);
  const [offerTestimonilaImgFirst, setOfferTestimonilaImgFirst] = useState("");
  const [offTestimonialImgSecond, setOfferTestimonialImgSecond] = useState("");
  const [offerTestimonialImgThird, setTestimonialImgThird] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { socket } = useNotification();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // return notifyError("This option disabled for this option!");
    try {
      setIsSubmitting(true);

      const storeCustomizationSettingData = {
        name: "storeCustomizationSetting",
        setting: {
          navbar: {
            categories_menu_status: categoriesMenuLink,
            about_menu_status: aboutUsMenuLink,
            contact_menu_status: contactUsMenuLink,
            offers_menu_status: offersMenuLink,
            term_and_condition_status: termsConditionsMenuLink,
            privacy_policy_status: privacyPolicyMenuLink,
            faq_status: faqMenuLink,
            help_text: {
              ...resData?.navbar?.help_text,
              [language]: data.help_text || "",
            },
            categories: {
              ...resData?.navbar?.categories,
              [language]: data.categories || "",
            },
            about_us: {
              ...resData?.navbar?.about_us,
              [language]: data.about_us || "",
            },
            contact_us: {
              ...resData?.navbar?.contact_us,
              [language]: data.contact_us || "",
            },
            offers: {
              ...resData?.navbar?.offers,
              [language]: data.offers || "",
            },
            faq: {
              ...resData?.navbar?.faq,
              [language]: data.faq || "",
            },
            privacy_policy: {
              ...resData?.navbar?.privacy_policy,
              [language]: data.privacy_policy || "",
            },
            term_and_condition: {
              ...resData?.navbar?.term_and_condition,
              [language]: data.term_and_condition || "",
            },
            pages: {
              ...resData?.navbar?.pages,
              [language]: data.pages || "",
            },
            my_account: {
              ...resData?.navbar?.my_account,
              [language]: data.my_account || "",
            },
            login: {
              ...resData?.navbar?.login,
              [language]: data.login || "",
            },
            logout: {
              ...resData?.navbar?.logout,
              [language]: data.pages || "",
            },
            checkout: {
              ...resData?.navbar?.checkout,
              [language]: data.checkout || "",
            },
            phone: data.phone_number,
            logo: headerLogo,
            header_background_color: {
              ...resData?.navbar?.header_background_color,
              [language]: data.header_background_color || "",
            },
            header_text_color: {
              ...resData?.navbar?.header_text_color,
              [language]: data.header_text_color || "",
            },
          },
          home: {
            coupon_status: isCoupon,
            featured_status: featuredCategories,
            discount_status: latestDiscounted,
            daily_needs_status: dailyNeeds,

            slider_width_status: isSliderFullWidth,
            promotion_banner_status: allowPromotionBanner,
            delivery_status: quickDelivery,
            popular_products_status: popularProducts,
            discount_product_status: latestDiscounted,
            discount_coupon_code: couponList,
            place_holder_img: placeholderImage,

            feature_promo_status: featurePromo,
            feature_promo_one_img: featurePromoOneImg,
            feature_promo_two_img: featurePromoTwoImg,
            feature_promo_three_img: featurePromoThreeImg,
            feature_promo_four_img: featurePromoFourImg,
            feature_promo_five_img: featurePromoFiveImg,

            quick_delivery_link: data.quick_delivery_link,
            quick_delivery_img: quickSectionImage,
            testimonial_status: testimonial,
            testimonial_banner_img_one: testimonialBannerImg,
            testimonial_banner_img_two: testimonialBannerImgTwo,
            testimonial_banner_img_three: testimonialBannerImgThree,

            testimonial_title_header: {
              ...resData?.home?.testimonial_title_header,
              [language]: data.testimonial_title_header || "",
            },
            testimonial_title_one: {
              ...resData?.home?.testimonial_title_one,
              [language]: data.testimonial_title_one || "",
            },
            testimonial_description_one: {
              ...resData?.home?.testimonial_description_one,
              [language]: data.testimonial_description_one || "",
            },
            testimonial_title_two: {
              ...resData?.home?.testimonial_title_two,
              [language]: data.testimonial_title_two || "",
            },
            testimonial_description_two: {
              ...resData?.home?.testimonial_description_two,
              [language]: data.testimonial_description_two || "",
            },
            testimonial_title_three: {
              ...resData?.home?.testimonial_title_three,
              [language]: data.testimonial_title_three || "",
            },
            testimonial_description_three: {
              ...resData?.home?.testimonial_description_three,
              [language]: data.testimonial_description_three || "",
            },
            testimonial_background_color: {
              ...resData?.home?.testimonial_background_color,
              [language]: data.testimonial_background_color || "",
            },

            testimonial_text_color: {
              ...resData?.home?.testimonial_text_color,
              [language]: data.testimonial_text_color || "",
            },

            discount_title: {
              ...resData?.home?.discount_title,
              [language]: data.discount_title || "",
            },
            permotion_banner_img: permotionBannerImg,
            promotion_title: {
              ...resData?.home?.promotion_title,
              [language]: data.promotion_title || "",
            },
            promotion_description: {
              ...resData?.home?.promotion_description,
              [language]: data.promotion_description || "",
            },
            promotion_button_name: {
              ...resData?.home?.promotion_button_name,
              [language]: data.promotion_button_name || "",
            },
            promotion_button_link: data.promotion_button_link,
            permotion_background_color: {
              ...resData?.home?.permotion_background_color,
              [language]: data.permotion_background_color || "",
            },
            permotion_text_color: {
              ...resData?.home?.permotion_text_color,
              [language]: data.permotion_text_color || "",
            },

            feature_title: {
              ...resData?.home?.feature_title,
              [language]: data.feature_title || "",
            },
            feature_description: {
              ...resData?.home?.feature_description,
              [language]: data.feature_description || "",
            },
            feature_product_limit: data.feature_product_limit,

            popular_title: {
              ...resData?.home?.popular_title,
              [language]: data.popular_title || "",
            },
            popular_description: {
              ...resData?.home?.popular_description,
              [language]: data.popular_description || "",
            },
            popular_product_limit: data.popular_product_limit,

            quick_delivery_subtitle: {
              ...resData?.home?.quick_delivery_subtitle,
              [language]: data.quick_delivery_subtitle || "",
            },
            quick_delivery_title: {
              ...resData?.home?.quick_delivery_title,
              [language]: data.quick_delivery_title || "",
            },
            quick_delivery_description: {
              ...resData?.home?.quick_delivery_description,
              [language]: data.quick_delivery_description || "",
            },
            quick_delivery_button: {
              ...resData?.home?.quick_delivery_button,
              [language]: data.quick_delivery_button || "",
            },

            latest_discount_title: {
              ...resData?.home?.latest_discount_title,
              [language]: data.latest_discount_title || "",
            },
            latest_discount_description: {
              ...resData?.home?.latest_discount_description,
              [language]: data.latest_discount_description || "",
            },
            latest_discount_product_limit: data.latest_discount_product_limit,

            daily_need_title: {
              ...resData?.home?.daily_need_title,
              [language]: data.daily_need_title || "",
            },
            daily_need_description: {
              ...resData?.home?.daily_need_description,
              [language]: data.daily_need_description || "",
            },
            bottom_permotion_banner_status: bottomPermotionBanner,
            bottom_permotion_banner_img: bottomPermotionBannerImg,
            bottom_promotion_title: {
              ...resData?.home?.bottom_promotion_title,
              [language]: data.bottom_promotion_title || "",
            },
            bottom_promotion_description: {
              ...resData?.home?.bottom_promotion_description,
              [language]: data.bottom_promotion_description || "",
            },
            bottom_promotion_button_name: {
              ...resData?.home?.bottom_promotion_button_name,
              [language]: data.bottom_promotion_button_name || "",
            },
            bottom_promotion_button_link: {
              ...resData?.home?.bottom_promotion_button_link,
              [language]: data.bottom_promotion_button_link || "",
            },
            bottom_permotion_background_color: {
              ...resData?.home?.bottom_permotion_background_color,
              [language]: data.bottom_permotion_background_color || "",
            },
            bottom_permotion_text_color: {
              ...resData?.home?.bottom_permotion_text_color,
              [language]: data.bottom_permotion_text_color || "",
            },
            daily_need_app_link: data.daily_need_app_link,
            daily_need_google_link: data.daily_need_google_link,
            daily_need_img_left: getYourDailyNeedImageLeft,
            daily_need_img_right: getYourDailyNeedImageRight,
            button1_img: getButton1image,
            button2_img: getButton2image,
          },
          about_us: {
            section_first_status: sectionOne,
            section_second_status: sectionSecond,
            section_third_status: sectionThird,
            section_four_status: sectionFour,
            section_five_status: sectionFive,

            section_first_left_img: leftSideImg,
            section_first_right_img: rightSideImg,
            section_second_img: sectionSecondImg,
            section_third_img: sectionThirdImg,
            section_four_img: sectionFourImg,
            section_five_img: sectionFiveImg,

            header_status: aboutPageHeader,
            content_left_status: aboutTopContentLeft,
            content_right_status: aboutTopContentRight,
            content_right_img: aboutTopContentRightImage,
            content_middle_status: aboutMiddleContentSection,
            founder_status: ourFounderSection,
            header_bg: aboutHeaderBg,
            content_middle_Img: aboutMiddleContentImage,
            founder_one_img: ourFounderOneImage,
            founder_two_img: ourFounderTwoImage,
            founder_three_img: ourFounderThreeImage,
            founder_four_img: ourFounderFourImage,
            founder_five_img: ourFounderFiveImage,
            founder_six_img: ourFounderSixImage,

            section_first_title: {
              ...resData?.about_us?.section_first_title,
              [language]: data.section_first_title || "",
            },

            section_first_description: {
              ...resData?.about_us?.section_first_description,
              [language]: data.section_first_description || "",
            },

            section_first_button_name: {
              ...resData?.about_us?.section_first_button_name,
              [language]: data.section_first_button_name || "",
            },

            section_first_button_link: {
              ...resData?.about_us?.section_first_button_link,
              [language]: data.section_first_button_link || "",
            },

            section_first_background_color: {
              ...resData?.about_us?.section_first_background_color,
              [language]: data.section_first_background_color || "",
            },
            section_first_text_color: {
              ...resData?.about_us?.section_first_text_color,
              [language]: data.section_first_text_color || "",
            },

            section_second_title: {
              ...resData?.about_us?.section_second_title,
              [language]: data.section_second_title || "",
            },

            section_second_description: {
              ...resData?.about_us?.section_second_description,
              [language]: data.section_second_description || "",
            },

            section_second_description_1: {
              ...resData?.about_us?.section_second_description_1,
              [language]: data.section_second_description_1 || "",
            },

            section_second_button_name: {
              ...resData?.about_us?.section_second_button_name,
              [language]: data.section_second_button_name || "",
            },

            section_second_button_link: {
              ...resData?.about_us?.section_second_button_link,
              [language]: data.section_second_button_link || "",
            },
            section_second_background_color: {
              ...resData?.about_us?.section_second_background_color,
              [language]: data.section_second_background_color || "",
            },
            section_second_text_color: {
              ...resData?.about_us?.section_second_text_color,
              [language]: data.section_second_text_color || "",
            },

            section_third_title: {
              ...resData?.about_us?.section_third_title,
              [language]: data.section_third_title || "",
            },

            section_third_description: {
              ...resData?.about_us?.section_third_description,
              [language]: data.section_third_description || "",
            },
            section_third_background_color: {
              ...resData?.about_us?.section_third_background_color,
              [language]: data.section_third_background_color || "",
            },
            section_third_text_color: {
              ...resData?.about_us?.section_third_text_color,
              [language]: data.section_third_text_color || "",
            },
            section_four_title: {
              ...resData?.about_us?.section_four_title,
              [language]: data.section_four_title || "",
            },

            section_four_description: {
              ...resData?.about_us?.section_four_description,
              [language]: data.section_four_description || "",
            },

            section_four_description_1: {
              ...resData?.about_us?.section_four_description_1,
              [language]: data.section_four_description_1 || "",
            },
            section_four_background_color: {
              ...resData?.about_us?.section_four_background_color,
              [language]: data.section_four_background_color || "",
            },
            section_four_text_color: {
              ...resData?.about_us?.section_four_text_color,
              [language]: data.section_four_text_color || "",
            },

            section_five_title: {
              ...resData?.about_us?.section_five_title,
              [language]: data.section_five_title || "",
            },

            section_five_description: {
              ...resData?.about_us?.section_five_description,
              [language]: data.section_five_description || "",
            },

            section_five_button_name: {
              ...resData?.about_us?.section_five_button_name,
              [language]: data.section_five_button_name || "",
            },

            section_five_button_link: {
              ...resData?.about_us?.section_five_button_link,
              [language]: data.section_five_button_link || "",
            },

            section_five_background_color: {
              ...resData?.about_us?.section_five_background_color,
              [language]: data.section_five_background_color || "",
            },
            section_five_text_color: {
              ...resData?.about_us?.section_five_text_color,
              [language]: data.section_five_text_color || "",
            },
            title: {
              ...resData?.about_us?.title,
              [language]: data.about_page_title || "",
            },

            top_title: {
              ...resData?.about_us?.top_title,
              [language]: data.about_page_Top_title || "",
            },

            top_description: {
              ...resData?.about_us?.top_description,
              [language]: data.about_us_top_description || "",
            },

            card_one_title: {
              ...resData?.about_us?.card_one_title,
              [language]: data.about_page_Top_left_box_one_title || "",
            },

            card_one_sub: {
              ...resData?.about_us?.card_one_sub,
              [language]: data.about_page_Top_left_box_one_subtitle || "",
            },

            card_one_description: {
              ...resData?.about_us?.card_one_description,
              [language]: data.about_us_top_box_one_description || "",
            },
            card_two_title: {
              ...resData?.about_us?.card_two_title,
              [language]: data.about_page_Top_left_box_two_title || "",
            },
            card_two_sub: {
              ...resData?.about_us?.card_two_sub,
              [language]: data.about_page_Top_left_box_two_subtitle || "",
            },
            card_two_description: {
              ...resData?.about_us?.card_two_description,
              [language]: data.about_us_top_box_two_description || "",
            },
            middle_description_one: {
              ...resData?.about_us?.middle_description_one,
              [language]: data.about_us_middle_description_one || "",
            },
            middle_description_two: {
              ...resData?.about_us?.middle_description_two,
              [language]: data.about_us_middle_description_two || "",
            },
            founder_title: {
              ...resData?.about_us?.founder_title,
              [language]: data.about_page_ourfounder_title || "",
            },
            founder_description: {
              ...resData?.about_us?.founder_description,
              [language]: data.about_us_ourfounder_description || "",
            },
            founder_one_name: {
              ...resData?.about_us?.founder_one_name,
              [language]: data.about_page_ourfounder_one_title || "",
            },
            founder_one_sub: {
              ...resData?.about_us?.founder_one_sub,
              [language]: data.about_page_ourfounder_one_sub_title || "",
            },
            founder_two_name: {
              ...resData?.about_us?.founder_two_name,
              [language]: data.about_page_ourfounder_two_title || "",
            },
            founder_two_sub: {
              ...resData?.about_us?.founder_two_sub,
              [language]: data.about_page_ourfounder_two_sub_title || "",
            },
            founder_three_name: {
              ...resData?.about_us?.founder_three_name,
              [language]: data.about_page_ourfounder_three_title || "",
            },
            founder_three_sub: {
              ...resData?.about_us?.founder_three_sub,
              [language]: data.about_page_ourfounder_three_sub_title || "",
            },
            founder_four_name: {
              ...resData?.about_us?.founder_four_name,
              [language]: data.about_page_ourfounder_four_title || "",
            },
            founder_four_sub: {
              ...resData?.about_us?.founder_four_sub,
              [language]: data.about_page_ourfounder_four_sub_title || "",
            },
            founder_five_name: {
              ...resData?.about_us?.founder_five_name,
              [language]: data.about_page_ourfounder_five_title || "",
            },
            founder_five_sub: {
              ...resData?.about_us?.founder_five_sub,
              [language]: data.about_page_ourfounder_five_sub_title || "",
            },
            founder_six_name: {
              ...resData?.about_us?.founder_six_name,
              [language]: data.about_page_ourfounder_six_title || "",
            },
            founder_six_sub: {
              ...resData?.about_us?.founder_six_sub,
              [language]: data.about_page_ourfounder_six_sub_title || "",
            },
          },
          contact_us: {
            header_status: contactPageHeader,
            email_box_status: emailUsBox,
            call_box_status: callUsBox,
            address_box_status: addressBox,
            left_col_status: contactMidLeftColStatus,
            form_status: contactFormStatus,
            header_bg: contactHeaderBg,
            left_col_img: contactMidLeftColImage,
            title: {
              ...resData?.contact_us?.title,
              [language]: data.contact_page_title || "",
            },

            email_box_title: {
              ...resData?.contact_us?.email_box_title,
              [language]: data.email_box_title || "",
            },
            email_box_email: {
              ...resData?.contact_us?.email_box_email,
              [language]: data.email_box_email || "",
            },
            email_box_text: {
              ...resData?.contact_us?.email_box_text,
              [language]: data.email_box_text || "",
            },

            call_box_title: {
              ...resData?.contact_us?.call_box_title,
              [language]: data.callUs_box_title || "",
            },
            call_box_phone: {
              ...resData?.contact_us?.call_box_phone,
              [language]: data.callUs_box_phone || "",
            },
            call_box_text: {
              ...resData?.contact_us?.call_box_text,
              [language]: data.callUs_box_text || "",
            },

            address_box_title: {
              ...resData?.contact_us?.address_box_title,
              [language]: data.address_box_title || "",
            },
            address_box_address_one: {
              ...resData?.contact_us?.address_box_address_one,
              [language]: data.address_box_address_one || "",
            },
            address_box_address_two: {
              ...resData?.contact_us?.address_box_address_two,
              [language]: data.address_box_address_two || "",
            },
            address_box_address_three: {
              ...resData?.contact_us?.address_box_address_three,
              [language]: data.address_box_address_three || "",
            },
            form_title: {
              ...resData?.contact_us?.form_title,
              [language]: data.contact_form_title || "",
            },
            form_description: {
              ...resData?.contact_us?.form_description,
              [language]: data.contact_form_description || "",
            },
          },
          offers: {
            header_status: offersPageHeader,
            header_bg: offersHeaderBg,
            title: {
              ...resData?.offers?.title,
              [language]: data.offers_page_title || "",
            },
            coupon_code: couponList1,

            section_first_status: offerSectionFirst,
            section_second_status: offerSectionSecond,
            section_third_status: offerSectionThird,
            section_four_status: offerTestimonial,
            section_first_left_side_img: offerLeftSideImg,
            section_first_right_side_img: offerRightSideImg,
            section_second_parent_img: offferParentImg,
            section_second_child_img: offerChildImg,
            section_third_background_img: offerBackgroundImg,
            section_four_img_one: offerTestimonilaImgFirst,
            section_four_img_two: offTestimonialImgSecond,
            section_four_img_three: offerTestimonialImgThird,

            offer_section_first_title: {
              ...resData?.offers?.offer_section_first_title,
              [language]: data.offer_section_first_title || "",
            },
            offer_section_first_description: {
              ...resData?.offers?.offer_section_first_description,
              [language]: data.offer_section_first_description || "",
            },
            offer_section_first_button_name: {
              ...resData?.offers?.offer_section_first_button_name,
              [language]: data.offer_section_first_button_name || "",
            },
            offer_section_first_button_link: {
              ...resData?.offers?.offer_section_first_button_link,
              [language]: data.offer_section_first_button_link || "",
            },
            offer_section_first_background_color: {
              ...resData?.offers?.offer_section_first_background_color,
              [language]: data.offer_section_first_background_color || "",
            },
            offer_section_first_text_color: {
              ...resData?.offers?.offer_section_first_text_color,
              [language]: data.offer_section_first_text_color || "",
            },
            offer_section_second_title: {
              ...resData?.offers?.offer_section_second_title,
              [language]: data.offer_section_second_title || "",
            },
            offer_section_second_title_1: {
              ...resData?.offers?.offer_section_second_title_1,
              [language]: data.offer_section_second_title_1 || "",
            },
            offer_section_second_description: {
              ...resData?.offers?.offer_section_second_description,
              [language]: data.offer_section_second_description || "",
            },
            offer_section_second_description_1: {
              ...resData?.offers?.offer_section_second_description_1,
              [language]: data.offer_section_second_description_1 || "",
            },
            offer_section_second_background_color: {
              ...resData?.offers?.offer_section_second_background_color,
              [language]: data.offer_section_second_background_color || "",
            },
            offer_section_second_text_color: {
              ...resData?.offers?.offer_section_second_text_color,
              [language]: data.offer_section_second_text_color || "",
            },
            offer_section_third_title: {
              ...resData?.offers?.offer_section_third_title,
              [language]: data.offer_section_third_title || "",
            },
            offer_section_third_description: {
              ...resData?.offers?.offer_section_third_description,
              [language]: data.offer_section_third_description || "",
            },
            offer_section_third_button_name: {
              ...resData?.offers?.offer_section_third_button_name,
              [language]: data.offer_section_third_button_name || "",
            },
            offer_section_third_button_link: {
              ...resData?.offers?.offer_section_third_button_link,
              [language]: data.offer_section_third_button_link || "",
            },

            offer_section_third_background_color: {
              ...resData?.offers?.offer_section_third_background_color,
              [language]: data.offer_section_third_background_color || "",
            },
            offer_section_third_text_color: {
              ...resData?.offers?.offer_section_third_text_color,
              [language]: data.offer_section_third_text_color || "",
            },
            offer_testimonial_title_header: {
              ...resData?.offers?.offer_testimonial_title_header,
              [language]: data.offer_testimonial_title_header || "",
            },
            offer_testimonial_subtitle: {
              ...resData?.offers?.offer_testimonial_subtitle,
              [language]: data.offer_testimonial_subtitle || "",
            },
            offer_testimonial_title_one: {
              ...resData?.offers?.offer_testimonial_title_one,
              [language]: data.offer_testimonial_title_one || "",
            },
            offer_testimonial_description_one: {
              ...resData?.offers?.offer_testimonial_description_one,
              [language]: data.offer_testimonial_description_one || "",
            },
            offer_testimonial_title_two: {
              ...resData?.offers?.offer_testimonial_title_two,
              [language]: data.offer_testimonial_title_two || "",
            },
            offer_testimonial_description_two: {
              ...resData?.offers?.offer_testimonial_description_two,
              [language]: data.offer_testimonial_description_two || "",
            },
            offer_testimonial_title_three: {
              ...resData?.offers?.offer_testimonial_title_three,
              [language]: data.offer_testimonial_title_three || "",
            },
            offer_testimonial_description_three: {
              ...resData?.offers?.offer_testimonial_description_three,
              [language]: data.offer_testimonial_description_three || "",
            },
            offer_testimonial_background_color: {
              ...resData?.offers?.offer_testimonial_background_color,
              [language]: data.offer_testimonial_background_color || "",
            },
            offer_testimonial_text_color: {
              ...resData?.offers?.offer_testimonial_text_color,
              [language]: data.offer_testimonial_text_color || "",
            },
          },
          privacy_policy: {
            status: privacyPolicy,
            header_bg: privacyPolicyHeaderBg,
            title: {
              ...resData?.privacy_policy?.title,
              [language]: data.privacy_page_title || "",
            },

            description: {
              ...resData?.privacy_policy?.description,
              [language]: textEdit
                ? draftToHtml(convertToRaw(textEdit.getCurrentContent()))
                : "",
            },
          },
          term_and_condition: {
            status: termsConditions,
            header_bg: termsConditionsHeaderBg,
            title: {
              ...resData?.term_and_condition?.title,
              [language]: data.termsConditions_page_title || "",
            },

            description: {
              ...resData?.term_and_condition?.description,
              [language]: termsConditionsTextEdit
                ? draftToHtml(
                    convertToRaw(termsConditionsTextEdit.getCurrentContent())
                  )
                : "",
            },
          },
          refund_policy: {
            status: refundPolicy,
            header_bg: refundPolicyImgBg,
            title: {
              ...resData?.refund_policy?.title,
              [language]: data.refund_policy_title || "",
            },

            description: {
              ...resData?.refund_policy?.description,
              [language]: refundPolicyTextEditor
                ? draftToHtml(
                    convertToRaw(refundPolicyTextEditor.getCurrentContent())
                  )
                : "",
            },
          },
          faq: {
            page_status: faqStatus,
            header_bg: faqHeaderBg,
            leftcol_status: faqLeftColStatus,
            rightcol_status: faqRightColStatus,
            left_img: faqLeftColImage,

            title: {
              ...resData?.faq?.title,
              [language]: data.faq_page_title || "",
            },
            faq_one: {
              ...resData?.faq?.faq_one,
              [language]: data.faq_title_one || "",
            },
            description_one: {
              ...resData?.faq?.description_one,
              [language]: data.faq_description_one || "",
            },
            faq_two: {
              ...resData?.faq?.faq_two,
              [language]: data.faq_title_two || "",
            },
            description_two: {
              ...resData?.faq?.description_two,
              [language]: data.faq_description_two || "",
            },
            faq_three: {
              ...resData?.faq?.faq_three,
              [language]: data.faq_title_three || "",
            },
            description_three: {
              ...resData?.faq?.description_three,
              [language]: data.faq_description_three || "",
            },
            faq_four: {
              ...resData?.faq?.faq_four,
              [language]: data.faq_title_four || "",
            },
            description_four: {
              ...resData?.faq?.description_four,
              [language]: data.faq_description_four || "",
            },
            faq_five: {
              ...resData?.faq?.faq_five,
              [language]: data.faq_title_five || "",
            },
            description_five: {
              ...resData?.faq?.description_five,
              [language]: data.faq_description_five || "",
            },
            faq_six: {
              ...resData?.faq?.faq_six,
              [language]: data.faq_title_six || "",
            },
            description_six: {
              ...resData?.faq?.description_six,
              [language]: data.faq_description_six || "",
            },
            faq_seven: {
              ...resData?.faq?.faq_seven,
              [language]: data.faq_title_seven || "",
            },
            description_seven: {
              ...resData?.faq?.description_seven,
              [language]: data.faq_description_seven || "",
            },
            faq_eight: {
              ...resData?.faq?.faq_eight,
              [language]: data.faq_title_eight || "",
            },
            description_eight: {
              ...resData?.faq?.description_eight,
              [language]: data.faq_description_eight || "",
            },
          },

          second_slider: {
            second_slider_status: secondSlider,
            first_img: secondSliderImage,
            first_title: {
              ...resData?.second_slider?.first_title,
              [language]: data.second_slider_title || "",
            },
            first_description: {
              ...resData?.second_slider?.first_description,
              [language]: data.second_slider_description || "",
            },

            second_img: secondSliderImageTwo,
            second_title: {
              ...resData?.second_slider?.second_title,
              [language]: data.second_slider_title_two || "",
            },
            second_description: {
              ...resData?.second_slider?.second_description,
              [language]: data.second_slider_description_two || "",
            },

            third_img: secondSliderImageThree,
            third_title: {
              ...resData?.second_slider?.third_title,
              [language]: data.second_slider_title_three || "",
            },
            third_description: {
              ...resData?.second_slider?.third_description,
              [language]: data.second_slider_description_three || "",
            },

            four_img: secondSliderImageFour,
            four_title: {
              ...resData?.second_slider?.four_title,
              [language]: data.second_slider_title_four || "",
            },
            four_description: {
              ...resData?.second_slider?.four_description,
              [language]: data.second_slider_description_four || "",
            },

            five_img: secondSliderImageFive,
            five_title: {
              ...resData?.second_slider?.five_title,
              [language]: data.second_slider_title_five || "",
            },
            five_description: {
              ...resData?.second_slider?.five_description,
              [language]: data.second_slider_description_five || "",
            },
          },

          slider: {
            left_right_arrow: leftRightArrow,
            bottom_dots: bottomDots,
            both_slider: bothSliderOption,
            static_content: staticContent,

            first_img: sliderImage,
            first_title: {
              ...resData?.slider?.first_title,
              [language]: data.slider_title || "",
            },
            first_description: {
              ...resData?.slider?.first_description,
              [language]: data.slider_description || "",
            },
            first_button: {
              ...resData?.slider?.first_button,
              [language]: data.slider_button_name || "",
            },
            first_link: data.slider_button_link,
            slider_first_background_color: {
              ...resData?.slider?.slider_first_background_color,
              [language]: data.slider_first_background_color || "",
            },
            slider_first_text_color: {
              ...resData?.slider?.slider_first_text_color,
              [language]: data.slider_first_text_color || "",
            },

            second_img: sliderImageTwo,
            second_title: {
              ...resData?.slider?.second_title,
              [language]: data.slider_title_two || "",
            },
            second_description: {
              ...resData?.slider?.second_description,
              [language]: data.slider_description_two || "",
            },
            second_button: {
              ...resData?.slider?.second_button,
              [language]: data.slider_button_name_two || "",
            },
            second_link: data.slider_button_link_two,
            slider_second_background_color: {
              ...resData?.slider?.slider_second_background_color,
              [language]: data.slider_second_background_color || "",
            },
            slider_second_text_color: {
              ...resData?.slider?.slider_second_text_color,
              [language]: data.slider_second_text_color || "",
            },

            third_img: sliderImageThree,
            third_title: {
              ...resData?.slider?.third_title,
              [language]: data.slider_title_three || "",
            },
            third_description: {
              ...resData?.slider?.third_description,
              [language]: data.slider_description_three || "",
            },
            third_button: {
              ...resData?.slider?.third_button,
              [language]: data.slider_button_name_three || "",
            },
            third_link: data.slider_button_link_three,
            slider_third_background_color: {
              ...resData?.slider?.slider_third_background_color,
              [language]: data.slider_third_background_color || "",
            },
            slider_third_text_color: {
              ...resData?.slider?.slider_third_text_color,
              [language]: data.slider_third_text_color || "",
            },
            four_img: sliderImageFour,
            four_title: {
              ...resData?.slider?.four_title,
              [language]: data.slider_title_four || "",
            },
            four_description: {
              ...resData?.slider?.four_description,
              [language]: data.slider_description_four || "",
            },
            four_button: {
              ...resData?.slider?.four_button,
              [language]: data.slider_button_name_four || "",
            },
            four_link: data.slider_button_link_four,
            slider_four_background_color: {
              ...resData?.slider?.slider_four_background_color,
              [language]: data.slider_four_background_color || "",
            },
            slider_four_text_color: {
              ...resData?.slider?.slider_four_text_color,
              [language]: data.slider_four_text_color || "",
            },

            five_img: sliderImageFive,
            five_title: {
              ...resData?.slider?.five_title,
              [language]: data.slider_title_five || "",
            },
            five_description: {
              ...resData?.slider?.five_description,
              [language]: data.slider_description_five || "",
            },
            five_button: {
              ...resData?.slider?.five_button,
              [language]: data.slider_button_name_five || "",
            },
            five_link: data.slider_button_link_five,
            slider_five_background_color: {
              ...resData?.slider?.slider_five_background_color,
              [language]: data.slider_five_background_color || "",
            },
            slider_five_text_color: {
              ...resData?.slider?.slider_five_text_color,
              [language]: data.slider_five_text_color || "",
            },
          },

          bottom_slider: {
            bottom_slider_status: bottomSlider,
            first_img: bottomSliderImage,
            first_title: {
              ...resData?.bottom_slider?.first_title,
              [language]: data.bottom_slider_title || "",
            },
            first_description: {
              ...resData?.bottom_slider?.first_description,
              [language]: data.bottom_slider_description || "",
            },
            bottom_slider_background_color_first: {
              ...resData?.bottom_slider?.bottom_slider_background_color_first,
              [language]: data.bottom_slider_background_color_first || "",
            },
            bottom_slider_text_color_first: {
              ...resData?.bottom_slider?.bottom_slider_text_color_first,
              [language]: data.bottom_slider_text_color_first || "",
            },

            second_img: bottomSliderImageTwo,
            second_title: {
              ...resData?.bottom_slider?.second_title,
              [language]: data.bottom_slider_title_two || "",
            },
            second_description: {
              ...resData?.bottom_slider?.second_description,
              [language]: data.bottom_slider_description_two || "",
            },
            bottom_slider_background_color_second: {
              ...resData?.bottom_slider?.bottom_slider_background_color_second,
              [language]: data.bottom_slider_background_color_second || "",
            },
            bottom_slider_text_color_second: {
              ...resData?.bottom_slider?.bottom_slider_text_color_second,
              [language]: data.bottom_slider_text_color_second || "",
            },

            third_img: bottomSliderImageThree,
            third_title: {
              ...resData?.bottom_slider?.third_title,
              [language]: data.bottom_slider_title_three || "",
            },
            third_description: {
              ...resData?.bottom_slider?.third_description,
              [language]: data.bottom_slider_description_three || "",
            },
            bottom_slider_background_color_third: {
              ...resData?.bottom_slider?.bottom_slider_background_color_third,
              [language]: data.bottom_slider_background_color_third || "",
            },
            bottom_slider_text_color_third: {
              ...resData?.bottom_slider?.bottom_slider_text_color_third,
              [language]: data.bottom_slider_text_color_third || "",
            },

            four_img: bottomSliderImageFour,
            four_title: {
              ...resData?.bottom_slider?.four_title,
              [language]: data.bottom_slider_title_four || "",
            },
            four_description: {
              ...resData?.bottom_slider?.four_description,
              [language]: data.bottom_slider_description_four || "",
            },
            bottom_slider_background_color_four: {
              ...resData?.bottom_slider?.bottom_slider_background_color_four,
              [language]: data.bottom_slider_background_color_four || "",
            },
            bottom_slider_text_color_four: {
              ...resData?.bottom_slider?.bottom_slider_text_color_four,
              [language]: data.bottom_slider_text_color_four || "",
            },

            five_img: bottomSliderImageFive,
            five_title: {
              ...resData?.bottom_slider?.five_title,
              [language]: data.bottom_slider_title_five || "",
            },
            five_description: {
              ...resData?.bottom_slider?.five_description,
              [language]: data.bottom_slider_description_five || "",
            },
            bottom_slider_background_color_five: {
              ...resData?.bottom_slider?.bottom_slider_background_color_five,
              [language]: data.bottom_slider_background_color_five || "",
            },
            bottom_slider_text_color_five: {
              ...resData?.bottom_slider?.bottom_slider_text_color_five,
              [language]: data.bottom_slider_text_color_five || "",
            },
          },

          checkout: {
            personal_details: {
              ...resData?.checkout?.personal_details,
              [language]: data.personal_details || "",
            },
            first_name: {
              ...resData?.checkout?.first_name,
              [language]: data.first_name || "",
            },
            last_name: {
              ...resData?.checkout?.last_name,
              [language]: data.last_name || "",
            },
            email_address: {
              ...resData?.checkout?.email_address,
              [language]: data.email_address || "",
            },
            checkout_phone: {
              ...resData?.checkout?.checkout_phone,
              [language]: data.checkout_phone || "",
            },

            shipping_details: {
              ...resData?.checkout?.shipping_details,
              [language]: data.shipping_details || "",
            },
            street_address: {
              ...resData?.checkout?.street_address,
              [language]: data.street_address || "",
            },
            city: {
              ...resData?.checkout?.city,
              [language]: data.city || "",
            },
            country: {
              ...resData?.checkout?.country,
              [language]: data.country || "",
            },
            zip_code: {
              ...resData?.checkout?.zip_code,
              [language]: data.zip_code || "",
            },
            shipping_cost: {
              ...resData?.checkout?.shipping_cost,
              [language]: data.shipping_cost || "",
            },
            payment_method: {
              ...resData?.checkout?.payment_method,
              [language]: data.payment_method || "",
            },
            continue_button: {
              ...resData?.checkout?.continue_button,
              [language]: data.continue_button || "",
            },
            confirm_button: {
              ...resData?.checkout?.confirm_button,
              [language]: data.confirm_button || "",
            },
            order_summary: {
              ...resData?.checkout?.order_summary,
              [language]: data.order_summary || "",
            },
            apply_button: {
              ...resData?.checkout?.apply_button,
              [language]: data.apply_button || "",
            },
            sub_total: {
              ...resData?.checkout?.sub_total,
              [language]: data.sub_total || "",
            },
            discount: {
              ...resData?.checkout?.discount,
              [language]: data.discount || "",
            },
            total_cost: {
              ...resData?.checkout?.total_cost,
              [language]: data.total_cost || "",
            },
          },

          dashboard: {
            invoice_message_first: {
              ...resData?.dashboard?.invoice_message_first,
              [language]: data.invoice_message_first || "",
            },
            invoice_message_last: {
              ...resData?.dashboard?.invoice_message_last,
              [language]: data.invoice_message_last || "",
            },
            print_button: {
              ...resData?.dashboard?.print_button,
              [language]: data.print_button || "",
            },
            download_button: {
              ...resData?.dashboard?.download_button,
              [language]: data.download_button || "",
            },
            dashboard_title: {
              ...resData?.dashboard?.dashboard_title,
              [language]: data.dashboard_title || "",
            },
            total_order: {
              ...resData?.dashboard?.total_order,
              [language]: data.total_order || "",
            },
            pending_order: {
              ...resData?.dashboard?.pending_order,
              [language]: data.pending_order || "",
            },

            processing_order: {
              ...resData?.dashboard?.processing_order,
              [language]: data.processing_order || "",
            },
            complete_order: {
              ...resData?.dashboard?.complete_order,
              [language]: data.complete_order || "",
            },
            recent_order: {
              ...resData?.dashboard?.recent_order,
              [language]: data.recent_order || "",
            },
            my_order: {
              ...resData?.dashboard?.my_order,
              [language]: data.my_order || "",
            },
            update_profile: {
              ...resData?.dashboard?.update_profile,
              [language]: data.update_profile || "",
            },
            full_name: {
              ...resData?.dashboard?.full_name,
              [language]: data.full_name || "",
            },
            address: {
              ...resData?.dashboard?.address,
              [language]: data.address || "",
            },
            user_phone: {
              ...resData?.dashboard?.user_phone,
              [language]: data.user_phone || "",
            },
            user_email: {
              ...resData?.dashboard?.user_email,
              [language]: data.user_email || "",
            },
            update_button: {
              ...resData?.dashboard?.update_button,
              [language]: data.update_button || "",
            },
            current_password: {
              ...resData?.dashboard?.current_password,
              [language]: data.current_password || "",
            },
            new_password: {
              ...resData?.dashboard?.new_password,
              [language]: data.new_password || "",
            },
            change_password: {
              ...resData?.dashboard?.change_password,
              [language]: data.change_password || "",
            },
          },
          scrolling: {
            scrolling_banner_status: scrollingBanner,
            one_img: scrollingImageOne,
            two_img: scrollingImageTwo,
            three_img: scrollingImageThree,
            four_img: scrollingImageFour,
            five_img: scrollingImageFive,
            six_img: scrollingImageSix,
            seven_img: scrollingImageSeven,
            eight_img: scrollingImageEight,
            nine_img: scrollingImageNine,
            ten_img: scrollingImageTen,
          },
          footer: {
            promo_status: true,
            block1_status: footerBlock1,
            block2_status: footerBlock2,
            block3_status: footerBlock3,
            block4_status: footerBlock4,
            payment_method_status: footerPaymentMethod,
            bottom_contact_status: footerBottomContact,
            social_links_status: footerSocialLinks,

            shipping_card: {
              ...resData?.footer?.shipping_card,
              [language]: data.promo_free_shipping || "",
            },
            support_card: {
              ...resData?.footer?.support_card,
              [language]: data.promo_support || "",
            },
            payment_card: {
              ...resData?.footer?.payment_card,
              [language]: data.promo_payment || "",
            },
            offer_card: {
              ...resData?.footer?.offer_card,
              [language]: data.promo_offer || "",
            },

            block1_title: {
              ...resData?.footer?.block1_title,
              [language]: data.footer_block_one_title || "",
            },

            block1_sub_title1: {
              ...resData?.footer?.block1_sub_title1,
              [language]: data.footer_block_one_link_one_title || "",
            },
            block1_sub_link1: data.footer_block_one_link_one,

            block1_sub_title2: {
              ...resData?.footer?.block1_sub_title2,
              [language]: data.footer_block_one_link_two_title || "",
            },
            block1_sub_link2: data.footer_block_one_link_two,

            block1_sub_title3: {
              ...resData?.footer?.block1_sub_title3,
              [language]: data.footer_block_one_link_three_title || "",
            },
            block1_sub_link3: data.footer_block_one_link_three,

            block1_sub_title4: {
              ...resData?.footer?.block1_sub_title4,
              [language]: data.footer_block_one_link_four_title || "",
            },
            block1_sub_link4: data.footer_block_one_link_four,

            block2_title: {
              ...resData?.footer?.block2_title,
              [language]: data.footer_block_two_title || "",
            },

            block2_sub_title1: {
              ...resData?.footer?.block2_sub_title1,
              [language]: data.footer_block_two_link_one_title || "",
            },
            block2_sub_link1: data.footer_block_two_link_one,

            block2_sub_title2: {
              ...resData?.footer?.block2_sub_title2,
              [language]: data.footer_block_two_link_two_title || "",
            },
            block2_sub_link2: data.footer_block_two_link_two,

            block2_sub_title3: {
              ...resData?.footer?.block2_sub_title3,
              [language]: data.footer_block_two_link_three_title || "",
            },
            block2_sub_link3: data.footer_block_two_link_three,

            block2_sub_title4: {
              ...resData?.footer?.block2_sub_title4,
              [language]: data.footer_block_two_link_four_title || "",
            },
            block2_sub_link4: data.footer_block_two_link_four,

            block3_title: {
              ...resData?.footer?.block3_title,
              [language]: data.footer_block_three_title || "",
            },

            block3_sub_title1: {
              ...resData?.footer?.block3_sub_title1,
              [language]: data.footer_block_three_link_one_title || "",
            },
            block3_sub_link1: data.footer_block_three_link_one,

            block3_sub_title2: {
              ...resData?.footer?.block3_sub_title2,
              [language]: data.footer_block_three_link_two_title || "",
            },
            block3_sub_link2: data.footer_block_three_link_two,

            block3_sub_title3: {
              ...resData?.footer?.block3_sub_title3,
              [language]: data.footer_block_three_link_three_title || "",
            },
            block3_sub_link3: data.footer_block_three_link_three,

            block3_sub_title4: {
              ...resData?.footer?.block3_sub_title4,
              [language]: data.footer_block_three_link_four_title || "",
            },
            block3_sub_link4: data.footer_block_three_link_four,

            footer_block_four_link_one: data.footer_block_four_link_one,
            block4_logo: footerLogo,
            block4_address: {
              ...resData?.footer?.block4_address,
              [language]: data.footer_block_four_address || "",
            },
            social_facebook: data.social_facebook,
            social_twitter: data.social_twitter,
            social_pinterest: data.social_pinterest,
            social_linkedin: data.social_linkedin,
            social_whatsapp: data.social_whatsapp,
            payment_method_img: paymentImage,
            block4_phone: data.footer_block_four_phone,
            block4_email: data.footer_block_four_email,
            bottom_contact: data.footer_Bottom_Contact,
            footer_background_color: {
              ...resData?.footer?.footer_background_color,
              [language]: data.footer_background_color || "",
            },
            footer_text_color: {
              ...resData?.footer?.footer_text_color,
              [language]: data.footer_text_color || "",
            },
          },
          slug: {
            right_box_status: singleProductPageRightBox,

            // slug_page_card_icon_one: data.slug_page_card_icon_one,
            card_description_one: {
              ...resData?.slug?.card_description_one,
              [language]: data.slug_page_card_description_one || "",
            },

            // slug_page_card_icon_two: data.slug_page_card_icon_two,
            card_description_two: {
              ...resData?.slug?.card_description_two,
              [language]: data.slug_page_card_description_two || "",
            },

            // slug_page_card_icon_three: data.slug_page_card_icon_three,
            card_description_three: {
              ...resData?.slug?.card_description_three,
              [language]: data.slug_page_card_description_three || "",
            },

            // slug_page_card_icon_four: data.slug_page_card_icon_four,
            card_description_four: {
              ...resData?.slug?.card_description_four,
              [language]: data.slug_page_card_description_four || "",
            },

            // slug_page_card_icon_five: data.slug_page_card_icon_five,

            card_description_five: {
              ...resData?.slug?.card_description_five,
              [language]: data.slug_page_card_description_five || "",
            },

            // slug_page_card_icon_six: data.slug_page_card_icon_six,

            card_description_six: {
              ...resData?.slug?.card_description_six,
              [language]: data.slug_page_card_description_six || "",
            },

            // slug_page_card_icon_seven: data.slug_page_card_icon_seven,

            card_description_seven: {
              ...resData?.slug?.card_description_seven,
              [language]: data.slug_page_card_description_seven || "",
            },
          },
        },
      };

      // setIsSubmitting(false);
      // return;

      if (!isSave) {
        const res = await SettingServices.updateStoreCustomizationSetting(
          storeCustomizationSettingData
        );
        await socket.emit("notification", {
          message: `storeCustomizationSetting setting added`,
          option: "storeCustomizationSetting",
        });

        setIsUpdate(true);
        setIsSubmitting(false);

        window.location.reload();
        notifySuccess(res.message);
      } else {
        const res = await SettingServices.addStoreCustomizationSetting(
          storeCustomizationSettingData
        );
        await socket.emit("notification", {
          message: `storeCustomizationSetting setting updated`,
          option: "storeCustomizationSetting",
        });

        setIsUpdate(true);
        setIsSubmitting(false);

        window.location.reload();
        notifySuccess(res.message);
      }
    } catch (err) {
      notifyError(err ? err?.response?.data?.message : err?.message);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const getStoreCustomizationData = async () => {
      try {
        const res = await SettingServices.getStoreCustomizationSetting();

        // console.log("res", res);
        if (res) {
          setIsSave(false);
          setResData(res);

          //navbar

          setCategoriesMenuLink(res?.navbar?.categories_menu_status);
          setAboutUsMenuLink(res?.navbar?.about_menu_status);
          setContactUsMenuLink(res?.navbar?.contact_menu_status);
          setOffersMenuLink(res?.navbar?.offers_menu_status);
          setFaqMenuLink(res?.navbar?.faq_status);
          setPrivacyPolicyMenuLink(res?.navbar?.privacy_policy_status);
          setTermsConditionsMenuLink(res?.navbar?.term_and_condition_status);
          setValue("help_text", res?.navbar?.help_text[language || "en"]);

          setValue("categories", res?.navbar?.categories[language || "en"]);
          setValue("about_us", res?.navbar?.about_us[language || "en"]);
          setValue("contact_us", res?.navbar?.contact_us[language || "en"]);
          setValue("offers", res?.navbar?.offers[language || "en"]);
          setValue("faq", res?.navbar?.faq[language || "en"]);

          setValue(
            "privacy_policy",
            res?.navbar?.privacy_policy[language || "en"]
          );
          setValue(
            "term_and_condition",
            res?.navbar?.term_and_condition[language || "en"]
          );

          setValue("pages", res?.navbar?.pages[language || "en"]);
          setValue("my_account", res?.navbar?.my_account[language || "en"]);
          setValue("login", res?.navbar?.login[language || "en"]);
          setValue("logout", res?.navbar?.logout[language || "en"]);
          setValue("checkout", res?.navbar?.checkout[language || "en"]);
          setHeaderLogo(res?.navbar?.logo);
          setValue("phone_number", res?.navbar?.phone);
          setValue(
            "header_background_color",
            res?.navbar?.header_background_color[language || "en"]
          );
          setValue(
            "header_text_color",
            res?.navbar?.header_text_color[language || "en"]
          );

          //home

          setPlaceHolderImage(res?.home?.place_holder_img);
          setQuickSectionImage(res?.home?.quick_delivery_img);
          setGetYourDailyNeedImageLeft(res?.home?.daily_need_img_left);
          setGetYourDailyNeedImageRight(res?.home?.daily_need_img_right);
          setGetButton1image(res?.home?.button1_img);
          setGetButton2image(res?.home?.button2_img);
          setIsCoupon(res?.home?.coupon_status);
          setIsSliderFullWidth(res?.home?.slider_width_status);
          setAllowPromotionBanner(res?.home?.promotion_banner_status);
          setPopularProducts(res?.home?.popular_products_status);
          setFeaturedCategories(res?.home?.featured_status);
          setQuickDelivery(res?.home?.delivery_status);
          setLatestDiscounted(res?.home?.discount_product_status);
          setDailyNeeds(res?.home?.daily_needs_status);
          setFeaturePromo(res?.home?.feature_promo_status);
          setCouponList(res?.home?.discount_coupon_code);
          setFeaturePromoOneImg(res?.home?.feature_promo_one_img);
          setFeaturePromoTwoImg(res?.home?.feature_promo_two_img);
          setFeaturePromoThreeImg(res?.home?.feature_promo_three_img);
          setFeaturePromoFourImg(res?.home?.feature_promo_four_img);
          setFeaturePromoFiveImg(res?.home?.feature_promo_five_img);

          setTestimonial(res?.home?.testimonial_status);
          setTestimonialBannerImg(res?.home?.testimonial_banner_img_one);
          setTestimonialBannerImgTwo(res?.home?.testimonial_banner_img_two);
          setTestimonialBannerImgThree(res?.home?.testimonial_banner_img_three);

          setValue(
            "testimonial_title_header",
            res?.home?.testimonial_title_header[language || "en"]
          );
          setValue(
            "testimonial_title_one",
            res?.home?.testimonial_title_one[language || "en"]
          );
          setValue(
            "testimonial_description_one",
            res?.home?.testimonial_description_one[language || "en"]
          );
          setValue(
            "testimonial_title_two",
            res?.home?.testimonial_title_two[language || "en"]
          );
          setValue(
            "testimonial_description_two",
            res?.home?.testimonial_description_two[language || "en"]
          );
          setValue(
            "testimonial_title_three",
            res?.home?.testimonial_title_three[language || "en"]
          );
          setValue(
            "testimonial_description_three",
            res?.home?.testimonial_description_three[language || "en"]
          );
          setValue(
            "testimonial_background_color",
            res?.home?.testimonial_background_color[language || "en"]
          );
          setValue(
            "testimonial_text_color",
            res?.home?.testimonial_text_color[language || "en"]
          );

          setValue(
            "discount_title",
            res?.home?.discount_title[language || "en"]
          );
          setPermotionBannerImg(res?.home?.permotion_banner_img);
          setValue(
            "promotion_title",
            res?.home?.promotion_title[language || "en"]
          );
          setValue(
            "promotion_description",
            res?.home?.promotion_description[language || "en"]
          );
          setValue(
            "promotion_button_name",
            res?.home?.promotion_button_name[language || "en"]
          );
          setValue("promotion_button_link", res?.home?.promotion_button_link);
          setValue(
            "permotion_background_color",
            res?.home?.permotion_background_color[language || "en"]
          );
          setValue(
            "permotion_text_color",
            res?.home?.permotion_text_color[language || "en"]
          );
          setValue("feature_title", res?.home?.feature_title[language || "en"]);
          setValue(
            "feature_description",
            res?.home?.feature_description[language || "en"]
          );
          setValue("feature_product_limit", res?.home?.feature_product_limit);
          setValue("popular_title", res?.home?.popular_title[language || "en"]);
          setValue(
            "popular_description",
            res?.home?.popular_description[language || "en"]
          );
          setValue("popular_product_limit", res?.home?.popular_product_limit);
          setValue(
            "quick_delivery_subtitle",
            res?.home?.quick_delivery_subtitle[language || "en"]
          );
          setValue(
            "quick_delivery_title",
            res?.home?.quick_delivery_title[language || "en"]
          );
          setValue(
            "quick_delivery_description",
            res?.home?.quick_delivery_description[language || "en"]
          );
          setValue(
            "quick_delivery_button",
            res?.home?.quick_delivery_button[language || "en"]
          );
          setValue("quick_delivery_link", res?.home?.quick_delivery_link);
          setValue(
            "latest_discount_title",
            res?.home?.latest_discount_title[language || "en"]
          );
          setValue(
            "latest_discount_description",
            res?.home?.latest_discount_description[language || "en"]
          );
          setValue(
            "latest_discount_product_limit",
            res?.home?.latest_discount_product_limit
          );
          setValue(
            "daily_need_title",
            res?.home?.daily_need_title[language || "en"]
          );
          setValue(
            "daily_need_description",
            res?.home?.daily_need_description[language || "en"]
          );
          setValue("daily_need_app_link", res?.home?.daily_need_app_link);
          setValue("daily_need_google_link", res?.home?.daily_need_google_link);
          // bottom permotion banner

          setBottomPermotionBanner(res?.home?.bottom_permotion_banner_status);
          setBottomPermotionBannerImg(res?.home?.bottom_permotion_banner_img);
          setValue(
            "bottom_promotion_title",
            res?.home?.bottom_promotion_title[language || "en"]
          );
          setValue(
            "bottom_promotion_description",
            res?.home?.bottom_promotion_description[language || "en"]
          );
          setValue(
            "bottom_promotion_button_name",
            res?.home?.bottom_promotion_button_name[language || "en"]
          );
          setValue(
            "bottom_promotion_button_link",
            res?.home?.bottom_promotion_button_link[language || "en"]
          );
          setValue(
            "bottom_permotion_background_color",
            res?.home?.bottom_permotion_background_color[language || "en"]
          );
          setValue(
            "bottom_permotion_text_color",
            res?.home?.bottom_permotion_text_color[language || "en"]
          );
          //slider
          setSliderImage(res?.slider?.first_img);
          setSliderImageTwo(res?.slider?.second_img);
          setSliderImageThree(res?.slider?.third_img);
          setSliderImageFour(res?.slider?.four_img);
          setSliderImageFive(res?.slider?.five_img);
          setLeftRightArrow(res?.slider?.left_right_arrow);
          setBottomDots(res?.slider?.bottom_dots);
          setBothSliderOption(res?.slider?.both_slider);
          setStaticConetnt(res?.slider?.static_content);

          setValue("slider_title", res?.slider?.first_title[language || "en"]);
          setValue(
            "slider_description",
            res?.slider?.first_description[language || "en"]
          );
          setValue(
            "slider_button_name",
            res?.slider?.first_button[language || "en"]
          );
          setValue("slider_button_link", res?.slider?.first_link);
          setValue(
            "slider_first_background_color",
            res?.slider?.slider_first_background_color[language || "en"]
          );
          setValue(
            "slider_first_text_color",
            res?.slider?.slider_first_text_color[language || "en"]
          );
          setValue(
            "slider_title_two",
            res?.slider?.second_title[language || "en"]
          );
          setValue(
            "slider_description_two",
            res?.slider?.second_description[language || "en"]
          );
          setValue(
            "slider_button_name_two",
            res?.slider?.second_button[language || "en"]
          );
          setValue("slider_button_link_two", res?.slider?.second_link);
          setValue(
            "slider_second_background_color",
            res?.slider?.slider_second_background_color[language || "en"]
          );
          setValue(
            "slider_second_text_color",
            res?.slider?.slider_second_text_color[language || "en"]
          );

          setValue(
            "slider_title_three",
            res?.slider?.third_title[language || "en"]
          );
          setValue(
            "slider_description_three",
            res?.slider?.third_description[language || "en"]
          );
          setValue(
            "slider_button_name_three",
            res?.slider?.third_button[language || "en"]
          );
          setValue("slider_button_link_three", res?.slider?.third_link);
          setValue(
            "slider_third_background_color",
            res?.slider?.slider_third_background_color[language || "en"]
          );
          setValue(
            "slider_third_text_color",
            res?.slider?.slider_third_text_color[language || "en"]
          );

          setValue(
            "slider_title_four",
            res?.slider?.four_title[language || "en"]
          );
          setValue(
            "slider_description_four",
            res?.slider?.four_description[language || "en"]
          );
          setValue(
            "slider_button_name_four",
            res?.slider?.four_button[language || "en"]
          );
          setValue("slider_button_link_four", res?.slider?.four_link);
          setValue(
            "slider_four_background_color",
            res?.slider?.slider_four_background_color[language || "en"]
          );
          setValue(
            "slider_four_text_color",
            res?.slider?.slider_four_text_color[language || "en"]
          );

          setValue(
            "slider_title_five",
            res?.slider?.five_title[language || "en"]
          );
          setValue(
            "slider_description_five",
            res?.slider?.five_description[language || "en"]
          );
          setValue(
            "slider_button_name_five",
            res?.slider?.five_button[language || "en"]
          );
          setValue("slider_button_link_five", res?.slider?.five_link);
          setValue(
            "slider_five_background_color",
            res?.slider?.slider_five_background_color[language || "en"]
          );
          setValue(
            "slider_five_text_color",
            res?.slider?.slider_five_text_color[language || "en"]
          );

          //  second slider

          setSecondSlider(res?.second_slider?.second_slider_status);
          setSecondSliderImage(res?.second_slider?.first_img);
          setSecondSliderImageTwo(res?.second_slider?.second_img);
          setSecondSliderImageThree(res?.second_slider?.third_img);
          setSecondSliderImageFour(res?.second_slider?.four_img);
          setSecondSliderImageFive(res?.second_slider?.five_img);

          setValue(
            "second_slider_title",
            res?.second_slider?.first_title[language || "en"]
          );
          setValue(
            "second_slider_description",
            res?.second_slider?.first_description[language || "en"]
          );
          setValue(
            "second_slider_title_two",
            res?.second_slider?.second_title[language || "en"]
          );
          setValue(
            "second_slider_description_two",
            res?.second_slider?.second_description[language || "en"]
          );
          setValue(
            "second_slider_title_three",
            res?.second_slider?.third_title[language || "en"]
          );
          setValue(
            "second_slider_description_three",
            res?.second_slider?.third_description[language || "en"]
          );
          setValue(
            "second_slider_title_four",
            res?.second_slider?.four_title[language || "en"]
          );
          setValue(
            "second_slider_description_four",
            res?.second_slider?.four_description[language || "en"]
          );
          setValue(
            "second_slider_title_five",
            res?.second_slider?.five_title[language || "en"]
          );
          setValue(
            "second_slider_description_five",
            res?.second_slider?.five_description[language || "en"]
          );

          //bottom Slider
          setBottomSlider(res?.bottom_slider?.bottom_slider_status);
          setBottomSliderImage(res?.bottom_slider?.first_img);
          setBottomSliderImageTwo(res?.bottom_slider?.second_img);
          setBottomSliderImageThree(res?.bottom_slider?.third_img);
          setBottomSliderImageFour(res?.bottom_slider?.four_img);
          setBottomSliderImageFive(res?.bottom_slider?.five_img);

          setValue(
            "bottom_slider_title",
            res?.bottom_slider?.first_title[language || "en"]
          );
          setValue(
            "bottom_slider_description",
            res?.bottom_slider?.first_description[language || "en"]
          );
          setValue(
            "bottom_slider_background_color_first",
            res?.bottom_slider?.bottom_slider_background_color_first[
              language || "en"
            ]
          );
          setValue(
            "bottom_slider_text_color_first",
            res?.bottom_slider?.bottom_slider_text_color_first[language || "en"]
          );
          setValue(
            "bottom_slider_title_two",
            res?.bottom_slider?.second_title[language || "en"]
          );
          setValue(
            "bottom_slider_description_two",
            res?.bottom_slider?.second_description[language || "en"]
          );
          setValue(
            "bottom_slider_background_color_second",
            res?.bottom_slider?.bottom_slider_background_color_second[
              language || "en"
            ]
          );
          setValue(
            "bottom_slider_text_color_second",
            res?.bottom_slider?.bottom_slider_text_color_second[
              language || "en"
            ]
          );
          setValue(
            "bottom_slider_title_three",
            res?.bottom_slider?.third_title[language || "en"]
          );
          setValue(
            "bottom_slider_description_three",
            res?.bottom_slider?.third_description[language || "en"]
          );
          setValue(
            "bottom_slider_background_color_third",
            res?.bottom_slider?.bottom_slider_background_color_third[
              language || "en"
            ]
          );
          setValue(
            "bottom_slider_text_color_third",
            res?.bottom_slider?.bottom_slider_text_color_third[language || "en"]
          );
          setValue(
            "bottom_slider_title_four",
            res?.bottom_slider?.four_title[language || "en"]
          );
          setValue(
            "bottom_slider_description_four",
            res?.bottom_slider?.four_description[language || "en"]
          );
          setValue(
            "bottom_slider_background_color_four",
            res?.bottom_slider?.bottom_slider_background_color_four[
              language || "en"
            ]
          );
          setValue(
            "bottom_slider_text_color_four",
            res?.bottom_slider?.bottom_slider_text_color_four[language || "en"]
          );
          setValue(
            "bottom_slider_title_five",
            res?.bottom_slider?.five_title[language || "en"]
          );
          setValue(
            "bottom_slider_description_five",
            res?.bottom_slider?.five_description[language || "en"]
          );
          setValue(
            "bottom_slider_background_color_five",
            res?.bottom_slider?.bottom_slider_background_color_five[
              language || "en"
            ]
          );
          setValue(
            "bottom_slider_text_color_five",
            res?.bottom_slider?.bottom_slider_text_color_five[language || "en"]
          );

          //checkout
          setValue(
            "personal_details",
            res?.checkout?.personal_details[language || "en"]
          );
          setValue("first_name", res?.checkout?.first_name[language || "en"]);
          setValue("last_name", res?.checkout?.last_name[language || "en"]);
          setValue(
            "email_address",
            res?.checkout?.email_address[language || "en"]
          );
          setValue(
            "checkout_phone",
            res?.checkout?.checkout_phone[language || "en"]
          );
          setValue(
            "shipping_details",
            res?.checkout?.shipping_details[language || "en"]
          );
          setValue(
            "street_address",
            res?.checkout?.street_address[language || "en"]
          );
          setValue("city", res?.checkout?.city[language || "en"]);
          setValue("country", res?.checkout?.country[language || "en"]);
          setValue("zip_code", res?.checkout?.zip_code[language || "en"]);
          setValue(
            "shipping_cost",
            res?.checkout?.shipping_cost[language || "en"]
          );
          setValue(
            "payment_method",
            res?.checkout?.payment_method[language || "en"]
          );
          setValue(
            "continue_button",
            res?.checkout?.continue_button[language || "en"]
          );
          setValue(
            "confirm_button",
            res?.checkout?.confirm_button[language || "en"]
          );
          setValue(
            "order_summary",
            res?.checkout?.order_summary[language || "en"]
          );
          setValue(
            "apply_button",
            res?.checkout?.apply_button[language || "en"]
          );
          setValue("sub_total", res?.checkout?.sub_total[language || "en"]);
          setValue("discount", res?.checkout?.discount[language || "en"]);
          setValue("total_cost", res?.checkout?.total_cost[language || "en"]);

          //dashboard
          setValue(
            "invoice_message_first",
            res?.dashboard?.invoice_message_first[language || "en"]
          );
          setValue(
            "invoice_message_last",
            res?.dashboard?.invoice_message_last[language || "en"]
          );
          setValue(
            "print_button",
            res?.dashboard?.print_button[language || "en"]
          );
          setValue(
            "download_button",
            res?.dashboard?.download_button[language || "en"]
          );
          setValue(
            "dashboard_title",
            res?.dashboard?.dashboard_title[language || "en"]
          );
          setValue(
            "total_order",
            res?.dashboard?.total_order[language || "en"]
          );
          setValue(
            "pending_order",
            res?.dashboard?.pending_order[language || "en"]
          );
          setValue(
            "processing_order",
            res?.dashboard?.processing_order[language || "en"]
          );
          setValue(
            "complete_order",
            res?.dashboard?.complete_order[language || "en"]
          );
          setValue(
            "recent_order",
            res?.dashboard?.recent_order[language || "en"]
          );
          setValue("my_order", res?.dashboard?.my_order[language || "en"]);
          setValue(
            "update_profile",
            res?.dashboard?.update_profile[language || "en"]
          );
          setValue("full_name", res?.dashboard?.full_name[language || "en"]);
          setValue("address", res?.dashboard?.address[language || "en"]);
          setValue("user_phone", res?.dashboard?.user_phone[language || "en"]);
          setValue("user_email", res?.dashboard?.user_email[language || "en"]);
          setValue(
            "update_button",
            res?.dashboard?.update_button[language || "en"]
          );
          setValue(
            "current_password",
            res?.dashboard?.current_password[language || "en"]
          );
          setValue(
            "new_password",
            res?.dashboard?.new_password[language || "en"]
          );
          setValue(
            "change_password",
            res?.dashboard?.change_password[language || "en"]
          );
          // scrolling
          setScrollingBanner(res?.scrolling?.scrolling_banner_status);
          setScrollingImageOne(res?.scrolling?.one_img);
          setScrollingImageTwo(res?.scrolling?.two_img);
          setScrollingImageThree(res?.scrolling?.three_img);
          setScrollingImageFour(res?.scrolling?.four_img);
          setScrollingImageFive(res?.scrolling?.five_img);
          setScrollingImageSix(res?.scrolling?.six_img);
          setScrollingImageSeven(res?.scrolling?.seven_img);
          setScrollingImageEight(res?.scrolling?.eight_img);
          setScrollingImageTen(res?.scrolling?.nine_img);
          setScrollingImageNine(res?.scrolling?.ten_img);

          //footer
          setFooterBlock1(res?.footer?.block1_status);
          setFooterBlock2(res?.footer?.block2_status);
          setFooterBlock3(res?.footer?.block3_status);
          setFooterBlock4(res?.footer?.block4_status);
          setFooterLogo(res?.footer?.block4_logo);
          setPaymentImage(res?.footer?.payment_method_img);
          setFooterSocialLinks(res?.footer?.social_links_status);
          setFooterPaymentMethod(res?.footer?.payment_method_status);
          setFooterBottomContact(res?.footer?.bottom_contact_status);

          setValue(
            "promo_free_shipping",
            res?.footer?.shipping_card[language || "en"]
          );
          setValue(
            "promo_support",
            res?.footer?.support_card[language || "en"]
          );
          setValue(
            "promo_payment",
            res?.footer?.payment_card[language || "en"]
          );
          setValue("promo_offer", res?.footer?.offer_card[language || "en"]);
          setValue(
            "footer_block_one_title",
            res?.footer?.block1_title[language || "en"]
          );

          setValue("footer_block_one_link_one", res?.footer?.block1_sub_link1);
          setValue("footer_block_one_link_two", res?.footer?.block1_sub_link2);
          setValue(
            "footer_block_one_link_three",
            res?.footer?.block1_sub_link3
          );
          setValue("footer_block_one_link_four", res?.footer?.block1_sub_link4);

          setValue(
            "footer_block_one_link_one_title",
            res?.footer?.block1_sub_title1[language || "en"]
          );
          setValue(
            "footer_block_one_link_two_title",
            res?.footer?.block1_sub_title2[language || "en"]
          );
          setValue(
            "footer_block_one_link_three_title",
            res?.footer?.block1_sub_title3[language || "en"]
          );
          setValue(
            "footer_block_one_link_four_title",
            res?.footer?.block1_sub_title4[language || "en"]
          );

          setValue(
            "footer_block_two_title",
            res?.footer?.block2_title[language || "en"]
          );
          setValue("footer_block_two_link_one", res?.footer?.block2_sub_link1);
          setValue("footer_block_two_link_two", res?.footer?.block2_sub_link2);
          setValue(
            "footer_block_two_link_three",
            res?.footer?.block2_sub_link3
          );
          setValue("footer_block_two_link_four", res?.footer?.block2_sub_link4);

          setValue(
            "footer_block_two_link_one_title",
            res?.footer?.block2_sub_title1[language || "en"]
          );
          setValue(
            "footer_block_two_link_two_title",
            res?.footer?.block2_sub_title2[language || "en"]
          );
          setValue(
            "footer_block_two_link_three_title",
            res?.footer?.block2_sub_title3[language || "en"]
          );
          setValue(
            "footer_block_two_link_four_title",
            res?.footer?.block2_sub_title4[language || "en"]
          );

          setValue(
            "footer_block_three_title",
            res?.footer?.block3_title[language || "en"]
          );
          setValue(
            "footer_block_three_link_one",
            res?.footer?.block3_sub_link1
          );
          setValue(
            "footer_block_three_link_two",
            res?.footer?.block3_sub_link2
          );
          setValue(
            "footer_block_three_link_three",
            res?.footer?.block3_sub_link3
          );
          setValue(
            "footer_block_three_link_four",
            res?.footer?.block3_sub_link4
          );

          setValue(
            "footer_block_three_link_one_title",
            res?.footer?.block3_sub_title1[language || "en"]
          );
          setValue(
            "footer_block_three_link_two_title",
            res?.footer?.block3_sub_title2[language || "en"]
          );
          setValue(
            "footer_block_three_link_three_title",
            res?.footer?.block3_sub_title3[language || "en"]
          );
          setValue(
            "footer_block_three_link_four_title",
            res?.footer?.block3_sub_title4[language || "en"]
          );

          setValue(
            "footer_block_four_address",
            res?.footer?.block4_address[language || "en"]
          );
          setValue("footer_block_four_phone", res?.footer?.block4_phone);
          setValue("footer_block_four_email", res?.footer?.block4_email);

          setValue("social_facebook", res?.footer?.social_facebook);
          setValue("social_twitter", res?.footer?.social_twitter);
          setValue("social_pinterest", res?.footer?.social_pinterest);
          setValue("social_linkedin", res?.footer?.social_linkedin);
          setValue("social_whatsapp", res?.footer?.social_whatsapp);
          setValue("footer_Bottom_Contact", res?.footer?.bottom_contact);
          setValue(
            "footer_background_color",
            res?.footer?.footer_background_color[language || "en"]
          );
          setValue(
            "footer_text_color",
            res?.footer?.footer_text_color[language || "en"]
          );

          // slug
          setSingleProductPageRightBox(res?.slug?.right_box_status);
          setValue(
            "slug_page_card_icon_one",
            res?.slug?.slug_page_card_icon_one
          );
          setValue(
            "slug_page_card_description_one",
            res?.slug?.card_description_one[language || "en"]
          );

          setValue(
            "slug_page_card_icon_two",
            res?.slug?.slug_page_card_icon_two
          );
          setValue(
            "slug_page_card_description_two",
            res?.slug?.card_description_two[language || "en"]
          );

          setValue(
            "slug_page_card_icon_three",
            res?.slug?.slug_page_card_icon_three
          );
          setValue(
            "slug_page_card_description_three",
            res?.slug?.card_description_three[language || "en"]
          );

          setValue(
            "slug_page_card_icon_four",
            res?.slug?.slug_page_card_icon_four
          );
          setValue(
            "slug_page_card_description_four",
            res?.slug?.card_description_four[language || "en"]
          );

          setValue(
            "slug_page_card_icon_five",
            res?.slug?.slug_page_card_icon_five
          );
          setValue(
            "slug_page_card_description_five",
            res?.slug?.card_description_five[language || "en"]
          );

          setValue(
            "slug_page_card_icon_six",
            res?.slug?.slug_page_card_icon_six
          );
          setValue(
            "slug_page_card_description_six",
            res?.slug?.card_description_six[language || "en"]
          );

          setValue(
            "slug_page_card_icon_seven",
            res?.slug?.slug_page_card_icon_seven
          );
          setValue(
            "slug_page_card_description_seven",
            res?.slug?.card_description_seven[language || "en"]
          );

          // about us

          setSectionOne(res?.about_us?.section_first_status);
          setLeftSideImg(res?.about_us?.section_first_left_img);
          setRightSideImg(res?.about_us?.section_first_right_img);
          setSectionSecond(res?.about_us?.section_second_status);
          setSectionSecondImg(res?.about_us?.section_second_img);
          setSectionThird(res?.about_us?.section_third_status);
          setSectionThirdImg(res?.about_us?.section_third_img);
          setSectionFrour(res?.about_us?.section_four_status);
          setSectionFrourImg(res?.about_us?.section_four_img);
          setSectionFive(res?.about_us?.section_five_status);
          setSectionFiveImg(res?.about_us?.section_five_img);

          setAboutPageHeader(res?.about_us?.header_status);
          setAboutHeaderBg(res?.about_us?.header_bg);
          setAboutTopContentLeft(res?.about_us?.content_left_status);
          setAboutTopContentRight(res?.about_us?.content_right_status);
          setAboutTopContentRightImage(res?.about_us?.content_right_img);
          setAboutMiddleContentSection(res?.about_us?.content_middle_status);
          setAboutMiddleContentImage(res?.about_us?.content_middle_Img);
          setOurFounderSection(res?.about_us?.founder_status);
          setOurFounderOneImage(res?.about_us?.founder_one_img);
          setOurFounderTwoImage(res?.about_us?.founder_two_img);
          setOurFounderThreeImage(res?.about_us?.founder_three_img);
          setOurFounderFourImage(res?.about_us?.founder_four_img);
          setOurFounderFiveImage(res?.about_us?.founder_five_img);
          setOurFounderSixImage(res?.about_us?.founder_six_img);

          setValue(
            "section_first_title",
            res?.about_us?.section_first_title[language || "en"]
          );

          setValue(
            "section_first_description",
            res?.about_us?.section_first_description[language || "en"]
          );
          setValue(
            "section_first_button_name",
            res?.about_us?.section_first_button_name[language || "en"]
          );
          setValue(
            "section_first_button_link",
            res?.about_us?.section_first_button_link[language || "en"]
          );
          setValue(
            "section_first_background_color",
            res?.about_us?.section_first_background_color[language || "en"]
          );
          setValue(
            "section_first_text_color",
            res?.about_us?.section_first_text_color[language || "en"]
          );

          setValue(
            "section_second_title",
            res?.about_us?.section_second_title[language || "en"]
          );

          setValue(
            "section_second_description",
            res?.about_us?.section_second_description[language || "en"]
          );
          setValue(
            "section_second_description_1",
            res?.about_us?.section_second_description_1[language || "en"]
          );
          setValue(
            "section_second_button_name",
            res?.about_us?.section_second_button_name[language || "en"]
          );

          setValue(
            "section_second_button_link",
            res?.about_us?.section_second_button_link[language || "en"]
          );
          setValue(
            "section_second_background_color",
            res?.about_us?.section_second_background_color[language || "en"]
          );

          setValue(
            "section_second_text_color",
            res?.about_us?.section_second_text_color[language || "en"]
          );

          setValue(
            "section_third_title",
            res?.about_us?.section_third_title[language || "en"]
          );
          setValue(
            "section_third_description",
            res?.about_us?.section_third_description[language || "en"]
          );

          setValue(
            "section_third_background_color",
            res?.about_us?.section_third_background_color[language || "en"]
          );
          setValue(
            "section_third_text_color",
            res?.about_us?.section_third_text_color[language || "en"]
          );
          setValue(
            "section_four_title",
            res?.about_us?.section_four_title[language || "en"]
          );
          setValue(
            "section_four_description",
            res?.about_us?.section_four_description[language || "en"]
          );

          setValue(
            "section_four_description_1",
            res?.about_us?.section_four_description_1[language || "en"]
          );
          setValue(
            "section_four_background_color",
            res?.about_us?.section_four_background_color[language || "en"]
          );
          setValue(
            "section_four_text_color",
            res?.about_us?.section_four_text_color[language || "en"]
          );
          setValue(
            "section_five_title",
            res?.about_us?.section_five_title[language || "en"]
          );

          setValue(
            "section_five_description",
            res?.about_us?.section_five_description[language || "en"]
          );
          setValue(
            "section_five_button_name",
            res?.about_us?.section_five_button_name[language || "en"]
          );

          setValue(
            "section_five_button_link",
            res?.about_us?.section_five_button_link[language || "en"]
          );
          setValue(
            "section_five_background_color",
            res?.about_us?.section_five_background_color[language || "en"]
          );
          setValue(
            "section_five_text_color",
            res?.about_us?.section_five_text_color[language || "en"]
          );

          setValue(
            "about_page_Top_title",
            res?.about_us?.top_title[language || "en"]
          );

          setValue(
            "about_us_top_description",
            res?.about_us?.top_description[language || "en"]
          );
          setValue(
            "about_page_Top_left_box_one_title",
            res?.about_us?.card_one_title[language || "en"]
          );
          setValue(
            "about_page_Top_left_box_one_subtitle",
            res?.about_us?.card_one_sub[language || "en"]
          );
          setValue(
            "about_us_top_box_one_description",
            res?.about_us?.card_one_description[language || "en"]
          );
          setValue(
            "about_page_Top_left_box_two_title",
            res?.about_us?.card_two_title[language || "en"]
          );
          setValue(
            "about_page_Top_left_box_two_subtitle",
            res?.about_us?.card_two_sub[language || "en"]
          );
          setValue(
            "about_us_top_box_two_description",
            res?.about_us?.card_two_description[language || "en"]
          );
          setValue(
            "about_us_middle_description_one",
            res?.about_us?.middle_description_one[language || "en"]
          );
          setValue(
            "about_us_middle_description_two",
            res?.about_us?.middle_description_two[language || "en"]
          );
          setValue(
            "about_page_ourfounder_title",
            res?.about_us?.founder_title[language || "en"]
          );
          setValue(
            "about_us_ourfounder_description",
            res?.about_us?.founder_description[language || "en"]
          );
          setValue(
            "about_page_ourfounder_one_title",
            res?.about_us?.founder_one_name[language || "en"]
          );
          setValue(
            "about_page_ourfounder_one_sub_title",
            res?.about_us?.founder_one_sub[language || "en"]
          );
          setValue(
            "about_page_ourfounder_two_title",
            res?.about_us?.founder_two_name[language || "en"]
          );
          setValue(
            "about_page_ourfounder_two_sub_title",
            res?.about_us?.founder_two_sub[language || "en"]
          );
          setValue(
            "about_page_ourfounder_three_title",
            res?.about_us?.founder_three_name[language || "en"]
          );
          setValue(
            "about_page_ourfounder_three_sub_title",
            res?.about_us?.founder_three_sub[language || "en"]
          );
          setValue(
            "about_page_ourfounder_four_title",
            res?.about_us?.founder_four_name[language || "en"]
          );
          setValue(
            "about_page_ourfounder_four_sub_title",
            res?.about_us?.founder_four_sub[language || "en"]
          );
          setValue(
            "about_page_ourfounder_five_title",
            res?.about_us?.founder_five_name[language || "en"]
          );
          setValue(
            "about_page_ourfounder_five_sub_title",
            res?.about_us?.founder_five_sub[language || "en"]
          );
          setValue(
            "about_page_ourfounder_six_title",
            res?.about_us?.founder_six_name[language || "en"]
          );
          setValue(
            "about_page_ourfounder_six_sub_title",
            res?.about_us?.founder_six_sub[language || "en"]
          );

          //contact us
          setContactPageHeader(res?.contact_us?.header_status);
          setContactHeaderBg(res?.contact_us?.header_bg);
          setEmailUsBox(res?.contact_us?.email_box_status);
          setCallUsBox(res?.contact_us?.call_box_status);
          setAddressBox(res?.contact_us?.address_box_status);
          setContactMidLeftColStatus(res?.contact_us?.left_col_status);
          setContactMidLeftColImage(res?.contact_us?.left_col_img);
          setContactFormStatus(res?.contact_us?.form_status);
          setValue(
            "contact_page_title",
            res?.contact_us?.title[language || "en"]
          );
          setValue(
            "email_box_title",
            res?.contact_us?.email_box_title[language || "en"]
          );
          setValue(
            "email_box_email",
            res?.contact_us?.email_box_email[language || "en"]
          );
          setValue(
            "email_box_text",
            res?.contact_us?.email_box_text[language || "en"]
          );
          setValue(
            "callUs_box_title",
            res?.contact_us?.call_box_title[language || "en"]
          );
          setValue(
            "callUs_box_phone",
            res?.contact_us?.call_box_phone[language || "en"]
          );
          setValue(
            "callUs_box_text",
            res?.contact_us?.call_box_text[language || "en"]
          );
          setValue(
            "address_box_title",
            res?.contact_us?.address_box_title[language || "en"]
          );
          setValue(
            "address_box_address_one",
            res?.contact_us?.address_box_address_one[language || "en"]
          );
          setValue(
            "address_box_address_two",
            res?.contact_us?.address_box_address_two[language || "en"]
          );
          setValue(
            "address_box_address_three",
            res?.contact_us?.address_box_address_three[language || "en"]
          );
          setValue(
            "contact_form_title",
            res?.contact_us?.form_title[language || "en"]
          );
          setValue(
            "contact_form_description",
            res?.contact_us?.form_description[language || "en"]
          );

          //privacy policy
          setPrivacyPolicy(res?.privacy_policy?.status);
          setPrivacyPolicyHeaderBg(res?.privacy_policy?.header_bg);
          setValue(
            "privacy_page_title",
            res?.privacy_policy?.title[language || "en"]
          );

          setTextEdit(
            createEditorState(
              showingTranslateValue(res?.privacy_policy?.description)
            )
          );

          //term and condition
          setTermsConditions(res?.term_and_condition?.status);
          setTermsConditionsHeaderBg(res?.term_and_condition?.header_bg);
          setValue(
            "termsConditions_page_title",
            res?.term_and_condition?.title[language || "en"]
          );

          setTermsConditionsTextEdit(
            createEditorState(
              showingTranslateValue(res?.term_and_condition?.description)
            )
          );

          //refund and plociy
          setRefundPolicy(res?.refund_policy?.status);
          setRefundPolicyImgBg(res?.refund_policy?.header_bg);
          setValue(
            "refund_policy_title",
            res?.refund_policy?.title[language || "en"]
          );

          setRefundPolicyTextEditor(
            createEditorState(
              showingTranslateValue(res?.refund_policy?.description)
            )
          );
          //faq
          setFaqStatus(res?.faq?.page_status);
          setFaqHeaderBg(res?.faq?.header_bg);
          setFaqLeftColImage(res?.faq?.left_img);
          setFaqLeftColStatus(res?.faq?.leftcol_status);
          setFaqRightColStatus(res?.faq?.rightcol_status);
          setValue("faq_page_title", res?.faq?.title[language || "en"]);
          setValue("faq_title_one", res?.faq?.faq_one[language || "en"]);
          setValue(
            "faq_description_one",
            res?.faq?.description_one[language || "en"]
          );
          setValue("faq_title_two", res?.faq?.faq_two[language || "en"]);
          setValue(
            "faq_description_two",
            res?.faq?.description_two[language || "en"]
          );
          setValue("faq_title_three", res?.faq?.faq_three[language || "en"]);
          setValue(
            "faq_description_three",
            res?.faq?.description_three[language || "en"]
          );
          setValue("faq_title_four", res?.faq?.faq_four[language || "en"]);
          setValue(
            "faq_description_four",
            res?.faq?.description_four[language || "en"]
          );
          setValue("faq_title_five", res?.faq?.faq_five[language || "en"]);
          setValue(
            "faq_description_five",
            res?.faq?.description_five[language || "en"]
          );
          setValue("faq_title_six", res?.faq?.faq_six[language || "en"]);
          setValue(
            "faq_description_six",
            res?.faq?.description_six[language || "en"]
          );
          setValue("faq_title_seven", res?.faq?.faq_seven[language || "en"]);
          setValue(
            "faq_description_seven",
            res?.faq?.description_seven[language || "en"]
          );
          setValue("faq_title_eight", res?.faq?.faq_eight[language || "en"]);
          setValue(
            "faq_description_eight",
            res?.faq?.description_eight[language || "en"]
          );

          //offers
          setOffersPageHeader(res?.offers?.header_status);
          setOffersHeaderBg(res?.offers?.header_bg);

          setOfferSectionFirst(res?.offers?.section_first_status);
          setOfferLeftSideImg(res?.offers?.section_first_left_side_img);
          setOfferRightSideImg(res?.offers?.section_first_right_side_img);
          setOfferSectionSecond(res?.offers?.section_second_status);
          setOfferParentImg(res?.offers?.section_second_parent_img);
          setOfferChildImg(res?.offers?.section_second_child_img);
          setOfferBackgroundImg(res?.offers?.section_third_background_img);
          setOfferSectionThird(res?.offers?.section_third_status);
          setOfferTestimonial(res?.offers?.section_four_status);
          setOfferTestimonilaImgFirst(res?.offers?.section_four_img_one);
          setOfferTestimonialImgSecond(res?.offers?.section_four_img_two);
          setTestimonialImgThird(res?.offers?.section_four_img_three);
          setValue(
            "offer_section_first_title",
            res?.offers?.offer_section_first_title[language || "en"]
          );
          setValue(
            "offer_section_first_description",
            res?.offers?.offer_section_first_description[language || "en"]
          );
          setValue(
            "offer_section_first_button_name",
            res?.offers?.offer_section_first_button_name[language || "en"]
          );
          setValue(
            "offer_section_first_button_link",
            res?.offers?.offer_section_first_button_link[language || "en"]
          );
          setValue(
            "offer_section_first_background_color",
            res?.offers?.offer_section_first_background_color[language || "en"]
          );
          setValue(
            "offer_section_first_text_color",
            res?.offers?.offer_section_first_text_color[language || "en"]
          );
          setValue(
            "offer_section_second_title",
            res?.offers?.offer_section_second_title[language || "en"]
          );
          setValue(
            "offer_section_second_title_1",
            res?.offers?.offer_section_second_title_1[language || "en"]
          );
          setValue(
            "offer_section_second_description",
            res?.offers?.offer_section_second_description[language || "en"]
          );
          setValue(
            "offer_section_second_description_1",
            res?.offers?.offer_section_second_description_1[language || "en"]
          );
          setValue(
            "offer_section_second_background_color",
            res?.offers?.offer_section_second_background_color[language || "en"]
          );
          setValue(
            "offer_section_second_text_color",
            res?.offers?.offer_section_second_text_color[language || "en"]
          );
          setValue(
            "offer_section_third_title",
            res?.offers?.offer_section_third_title[language || "en"]
          );
          setValue(
            "offer_section_third_description",
            res?.offers?.offer_section_third_description[language || "en"]
          );
          setValue(
            "offer_section_third_button_name",
            res?.offers?.offer_section_third_button_name[language || "en"]
          );
          setValue(
            "offer_section_third_button_link",
            res?.offers?.offer_section_third_button_link[language || "en"]
          );
          setValue(
            "offer_section_third_background_color",
            res?.offers?.offer_section_third_background_color[language || "en"]
          );
          setValue(
            "offer_section_third_text_color",
            res?.offers?.offer_section_third_text_color[language || "en"]
          );
          setValue(
            "offer_testimonial_title_header",
            res?.offers?.offer_testimonial_title_header[language || "en"]
          );
          setValue(
            "offer_testimonial_subtitle",
            res?.offers?.offer_testimonial_subtitle[language || "en"]
          );
          setValue(
            "offer_testimonial_title_one",
            res?.offers?.offer_testimonial_title_one[language || "en"]
          );
          setValue(
            "offer_testimonial_description_one",
            res?.offers?.offer_testimonial_description_one[language || "en"]
          );
          setValue(
            "offer_testimonial_title_two",
            res?.offers?.offer_testimonial_title_two[language || "en"]
          );
          setValue(
            "offer_testimonial_description_two",
            res?.offers?.offer_testimonial_description_two[language || "en"]
          );
          setValue(
            "offer_testimonial_title_three",
            res?.offers?.offer_testimonial_title_three[language || "en"]
          );
          setValue(
            "offer_testimonial_description_three",
            res?.offers?.offer_testimonial_description_three[language || "en"]
          );
          setValue(
            "offer_testimonial_background_color",
            res?.offers?.offer_testimonial_background_color[language || "en"]
          );
          setValue(
            "offer_testimonial_text_color",
            res?.offers?.offer_testimonial_text_color[language || "en"]
          );
          setValue("offers_page_title", res?.offers?.title[language || "en"]);
          // setValue('offers_coupon_code', res.offers_coupon_code);
          setCouponList1(res?.offers?.coupon_code);
        }
      } catch (err) {
        notifyError(err ? err?.response?.data?.message : err?.message);
      }
    };
    getStoreCustomizationData();
    return () => {
      const controller = new AbortController();
      controller.abort();
    };
  }, [language, setValue]);

  const handleSelectLanguage = (lang) => {
    // console.log("resData", resData);
    setLanguage(lang);
  };
  return {
    register,
    handleSubmit,
    onSubmit,
    setValue,
    errors,
    headerLogo,
    setHeaderLogo,
    sliderImage,
    setSliderImage,
    sliderImageTwo,
    setSliderImageTwo,
    sliderImageThree,
    setSliderImageThree,
    sliderImageFour,
    setSliderImageFour,
    sliderImageFive,
    setSliderImageFive,
    placeholderImage,
    setPlaceHolderImage,
    quickSectionImage,
    setQuickSectionImage,
    getYourDailyNeedImageLeft,
    setGetYourDailyNeedImageLeft,
    getYourDailyNeedImageRight,
    setGetYourDailyNeedImageRight,
    footerLogo,
    setFooterLogo,
    paymentImage,
    setPaymentImage,
    allowDiscount,
    setAllowDiscount,
    allowPromotionBanner,
    setAllowPromotionBanner,
    printSlip,
    setPrintSlip,
    orderProcess,
    setOrderProcess,
    paymentOption,
    setPaymentOption,
    isSave,
    allowOutOfStock,
    setAllowOutOfStock,
    isCoupon,
    isPlaceholder,
    isSliderFullWidth,
    setIsCoupon,
    setDiscount_coupon_status,
    discount_coupon_status,
    setIsPlaceholder,
    setIsSliderFullWidth,
    emailSlip,
    setEmailSlip,
    setPromotionBanner,
    promotionBanner,
    featuredCategories,
    setFeaturedCategories,
    popularProducts,
    setPopularProducts,
    setQuickDelivery,
    quickDelivery,
    setLatestDiscounted,
    latestDiscounted,
    setDailyNeeds,
    dailyNeeds,
    setFeaturePromo,
    featurePromo,
    setFooterBlock1,
    footerBlock1,
    setFooterBlock2,
    footerBlock2,
    setFooterBlock3,
    footerBlock3,
    setFooterBlock4,
    footerBlock4,
    setFooterSocialLinks,
    footerSocialLinks,
    setFooterPaymentMethod,
    footerPaymentMethod,
    setSingleProductPageRightBox,
    singleProductPageRightBox,
    handleSelectLanguage,
    setLeftRightArrow,
    leftRightArrow,
    setBottomDots,
    bottomDots,
    setBothSliderOption,
    setStaticConetnt,
    staticContent,
    bothSliderOption,
    getButton1image,
    setGetButton1image,
    getButton2image,
    setGetButton2image,
    setFooterBottomContact,
    footerBottomContact,
    setCategoriesMenuLink,
    categoriesMenuLink,
    setAboutUsMenuLink,
    aboutUsMenuLink,
    setContactUsMenuLink,
    contactUsMenuLink,
    setOffersMenuLink,
    offersMenuLink,
    setFaqMenuLink,
    faqMenuLink,
    setPrivacyPolicyMenuLink,
    privacyPolicyMenuLink,
    setTermsConditionsMenuLink,
    termsConditionsMenuLink,
    setAboutPageHeader,
    aboutPageHeader,
    setAboutTopContentLeft,
    aboutTopContentLeft,
    setAboutHeaderBg,
    aboutHeaderBg,
    setAboutTopContentRight,
    aboutTopContentRight,
    setAboutTopContentRightImage,
    aboutTopContentRightImage,
    setAboutMiddleContentSection,
    aboutMiddleContentSection,
    setAboutMiddleContentImage,
    aboutMiddleContentImage,
    setOurFounderSection,
    ourFounderSection,
    setOurFounderOneImage,
    ourFounderOneImage,
    setOurFounderTwoImage,
    ourFounderTwoImage,
    setOurFounderThreeImage,
    ourFounderThreeImage,
    setOurFounderFourImage,
    ourFounderFourImage,
    setOurFounderFiveImage,
    ourFounderFiveImage,
    setOurFounderSixImage,
    ourFounderSixImage,
    setPrivacyPolicy,
    privacyPolicy,
    setPrivacyPolicyHeaderBg,
    privacyPolicyHeaderBg,
    setTermsConditions,
    termsConditions,
    setTermsConditionsHeaderBg,
    termsConditionsHeaderBg,
    setRefundPolicy,
    refundPolicy,
    refundPolicyImgBg,
    setRefundPolicyImgBg,
    setRefundPolicyTextEditor,
    refundPolicyTextEditor,
    setFaqStatus,
    faqStatus,
    setFaqLeftColStatus,
    faqLeftColStatus,
    setFaqRightColStatus,
    faqRightColStatus,
    setFaqHeaderBg,
    faqHeaderBg,
    setFaqLeftColImage,
    faqLeftColImage,
    setOffersPageHeader,
    offersPageHeader,
    setOffersHeaderBg,
    offersHeaderBg,
    setContactPageHeader,
    contactPageHeader,
    setContactHeaderBg,
    contactHeaderBg,
    setEmailUsBox,
    emailUsBox,
    setCallUsBox,
    callUsBox,
    setAddressBox,
    addressBox,
    setContactMidLeftColStatus,
    contactMidLeftColStatus,
    setContactMidLeftColImage,
    contactMidLeftColImage,
    setContactFormStatus,
    contactFormStatus,
    couponList,
    setCouponList,
    couponList1,
    setCouponList1,
    textEdit,
    setTextEdit,
    termsConditionsTextEdit,
    setTermsConditionsTextEdit,
    isSubmitting,
    setBottomSlider,
    bottomSlider,
    bottomSliderImage,
    setBottomSliderImage,
    bottomSliderImageTwo,
    setBottomSliderImageTwo,
    bottomSliderImageThree,
    setBottomSliderImageThree,
    bottomSliderImageFour,
    setBottomSliderImageFour,
    bottomSliderImageFive,
    setBottomSliderImageFive,
    permotionBannerImg,
    setPermotionBannerImg,
    setScrollingBanner,
    scrollingBanner,
    scrollingImageOne,
    setScrollingImageOne,
    scrollingImageTwo,
    setScrollingImageTwo,
    scrollingImageThree,
    setScrollingImageThree,
    scrollingImageFour,
    setScrollingImageFour,
    scrollingImageFive,
    setScrollingImageFive,
    scrollingImageSix,
    setScrollingImageSix,
    scrollingImageSeven,
    setScrollingImageSeven,
    scrollingImageEight,
    setScrollingImageEight,
    scrollingImageNine,
    setScrollingImageNine,
    scrollingImageTen,
    setScrollingImageTen,

    setBottomPermotionBanner,
    bottomPermotionBanner,
    bottomPermotionBannerImg,
    setBottomPermotionBannerImg,
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

    featurePromoOneImg,
    setFeaturePromoOneImg,
    featurePromoTwoImg,
    setFeaturePromoTwoImg,
    featurePromoThreeImg,
    setFeaturePromoThreeImg,
    featurePromoFourImg,
    setFeaturePromoFourImg,
    featurePromoFiveImg,
    setFeaturePromoFiveImg,

    setSecondSlider,
    secondSlider,
    secondSliderImage,
    setSecondSliderImage,
    secondSliderImageTwo,
    setSecondSliderImageTwo,
    secondSliderImageThree,
    setSecondSliderImageThree,
    secondSliderImageFour,
    setSecondSliderImageFour,
    secondSliderImageFive,
    setSecondSliderImageFive,

    testimonial,
    setTestimonial,
    testimonialBannerImg,
    setTestimonialBannerImg,
    testimonialBannerImgTwo,
    setTestimonialBannerImgTwo,
    testimonialBannerImgThree,
    setTestimonialBannerImgThree,

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
  };
};

export default useStoreHomeSubmit;
