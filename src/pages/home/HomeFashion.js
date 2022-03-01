import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import TabProductThree from "../../wrappers/product/TabProductThree";
import TabProductFour from "../../wrappers/product/TabProductFour";
import HeroSliderFour from "../../wrappers/hero-slider/HeroSliderFour";
import CountDownTwo from "../../wrappers/countdown/CountDownTwo";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import bannerData from "../../data/banner/banner-three.json";
import BannerThreeSingle from "../../components/banner/BannerThreeSingle";
const HomeFashion = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderOne />

        {/* featured icon */}
        {/* <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" /> */}
        <FeatureIconFour sapceTopClass="pt-50" spaceBottomClass="pb-90" />

        {/* tab product */}
        <TabProductFour spaceBottomClass="pb-100" category="fashion" />
        {/* <TabProduct spaceBottomClass="pb-60" category="fashion" /> */}

        <div className={`banner-area`} style={{overflow:"hidden"}}>
          <div className="row">
            {bannerData &&
              bannerData.map((single, key) => {
                return (
                  <BannerThreeSingle
                    data={single}
                    key={key}
                    spaceBottomClass="mb-30"
                  />
                );
              })}
            {/* <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12">
            <div className="home-banner home-banner-left">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/home/banner-1.jpg"}
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12">
          <div className="home-banner home-banner-right">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/home/banner-2.jpg"}
                alt=""
              />
            </div>
          </div> */}
          </div>
        </div>

        { /*Deal of the Day */}
        <CountDownTwo
          spaceTopClass="pt-60"
          spaceBottomClass="pb-85"
          dateTime="November 13, 2020 12:12:00"
        />

        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
