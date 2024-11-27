import React from "react";
import BasicPlanSvg from "../assets/images/svg/basic-plain.svg";
import StandardPlanSvg from "../assets/images/svg/strandard-plan.svg";
import GoldPlanSvg from "../assets/images/svg/gold-plan.svg";
import ColanIcon from "../assets/images/svg/colan-icon.svg";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const Pricing = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* <!-- ====================================== Section Pricing ===================================== --> */}
      
      {/* <!-- ====================================== Section Pricing End ===================================== --> */}
      {/* <!-- ====================================== Section Testimonials ===================================== --> */}
      
      {/* <!-- ====================================== Section Testimonials ===================================== --> */}
    </>
  );
};
export default Pricing;
