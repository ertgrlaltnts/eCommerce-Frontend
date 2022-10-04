import React from "react";
import Slider from "react-slick";
import { Crs } from "./styled-component/Carousel.style";

const Carousel = () => {
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    lazyLoad: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Crs.Container>
      <Slider {...settings}>
        <Crs.Item>
          <Crs.Img src={require("../assets/logo1.jpg")} />
        </Crs.Item>
        <Crs.Item>
          <Crs.Img src={require("../assets/logo2.jpg")} />
        </Crs.Item>
        <Crs.Item>
          <Crs.Img src={require("../assets/logo3.jpg")} />
        </Crs.Item>
        <Crs.Item>
          <Crs.Img src={require("../assets/logo4.jpg")} />
        </Crs.Item>
        <Crs.Item>
          <Crs.Img src={require("../assets/logo5.jpg")} />
        </Crs.Item>
      </Slider>
    </Crs.Container>
  );
};

export default Carousel;
