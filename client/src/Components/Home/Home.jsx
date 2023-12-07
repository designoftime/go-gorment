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

export const Home = () => {

  return (
    <div>
      <HomeCarousel />
      <div className="container-fluid g-0">
        <CarouselSection />
        <PrimaryProduct />
        <SnacksGif />
        <Productoverview />
        <ReviewedProduct />
        <OneFeedsHome />
        <CustomerCaursel />
      </div>
    </div>
  );
};
