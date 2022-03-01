import React from "react";
import Swiper from "react-id-swiper";
import heroSliderData from "../../data/hero-sliders/hero-slider-one.json";
import HeroSliderOneSingle from "../../components/hero-slider/HeroSliderOneSingle.js";
import HeroSliderThreeSingle from "../../components/hero-slider/HeroSliderThreeSingle.js";

const HeroSliderOne = ({spaceLeftClass,spaceRightClass}) => {
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };

  return (
    <div
    //  className="slider-area"
     className={`slider-area ${spaceLeftClass ? spaceLeftClass : ""} ${
      spaceRightClass ? spaceRightClass : ""
    }`} 
    >
      <div className="slider-active nav-style-1">
        <Swiper {...params}>
          {heroSliderData &&
            heroSliderData.map((single, key) => {
              return (
                <HeroSliderOneSingle
                  sliderClassName="swiper-slide"
                  data={single}
                  key={key}
                />
              //   <HeroSliderThreeSingle
              //   data={single}
              //   key={key}
              //   sliderClass="swiper-slide"
              // />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderOne;
