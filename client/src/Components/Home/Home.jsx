import React from "react";
import "./Home.css";
import { CarouselSection } from "./Carousel/CarouselSection";
import { PrimaryProduct } from "./PrimaryProduct/PrimaryProduct";
import { SnacksGif } from "./SnacksGif/SnacksGif";
import { Productoverview } from "./ProductOverview/Productoverview";
import { CustomerCaursel } from "./CustomerCaursel/CustomerCaursel";
import { OneFeedsHome } from "./OnefeedsHome/OneFeedsHome";
import { ReviewedProduct } from "./ReviewedProduct/ReviewedProduct";
import HomeCarousel from "./HomeCarousel/HomeCarousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import FeaturePromo from "./FeaturePromo/Featurepromo";

export const Home = () => {

  const dynamicStoreData = useSelector(store => store?.storeSettings);

  return (
    <div>
      <HomeCarousel homeSliderData={dynamicStoreData?.slider} />
      <div className="container-fluid g-0">
        <CarouselSection secondSliderData={dynamicStoreData?.second_slider} />
        <PrimaryProduct categoriesData={dynamicStoreData?.categories} />
        <SnacksGif promotionBannarData={dynamicStoreData?.home} />
        <Productoverview testimonialData={dynamicStoreData?.home} />
        <ReviewedProduct />
        <OneFeedsHome bottomPromotionData={dynamicStoreData?.home} />
        <CustomerCaursel bottomSliderData={dynamicStoreData?.bottom_slider} />
        <FeaturePromo featurePromoData={dynamicStoreData?.home} />
      </div>
    </div>
  );
};
