import React, { useEffect } from "react";
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
import { getStyles } from "../../utils/Constants";

export const Home = () => {

  const dynamicStoreData = useSelector(store => store?.storeSettings);

  return (
    <div>
      <HomeCarousel homeSliderData={dynamicStoreData?.slider} />
      <div className="container-fluid g-0">
        <CarouselSection secondSliderData={dynamicStoreData?.second_slider} />
        {Array.isArray(dynamicStoreData.categories) && dynamicStoreData?.categories[0].children && <PrimaryProduct categoriesData={dynamicStoreData?.categories[0].children} />}
        {
          dynamicStoreData?.home && <SnacksGif promotionBannarData={dynamicStoreData?.home} styles={getStyles(dynamicStoreData?.home, 'permotion_background_color', 'permotion_text_color')} />
        }
        {
          dynamicStoreData?.home && <Productoverview testimonialData={dynamicStoreData?.home} styles={getStyles(dynamicStoreData.home, 'testimonial_background_color', 'testimonial_text_color')} />
        }

        {Array.isArray(dynamicStoreData.categories) && dynamicStoreData?.categories[0] && <ReviewedProduct categoryId={dynamicStoreData?.categories[0]._id}/>}
        {dynamicStoreData?.home && <OneFeedsHome bottomPromotionData={dynamicStoreData?.home} styles={getStyles(dynamicStoreData.home, 'bottom_permotion_background_color', 'bottom_permotion_text_color')} />}
        {dynamicStoreData?.bottom_slider && <CustomerCaursel bottomSliderData={dynamicStoreData?.bottom_slider} />}
        {dynamicStoreData?.home && <FeaturePromo featurePromoData={dynamicStoreData?.home} />}
      </div>
    </div>
  );
};