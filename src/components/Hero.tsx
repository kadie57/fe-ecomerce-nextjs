"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-pink-purple-gradient-beautiful-gradient-gradient-geometric-image_11521.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: "https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-pink-purple-gradient-beautiful-gradient-gradient-geometric-image_11522.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$15",
    },
    {
      id: 2,
      img: "https://png.pngtree.com/thumb_back/fw800/background/20221228/pngtree-pink-banner-e-commerce-promotion-gradient-element-background-image_1501036.jpg",
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];
  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}{" "}
        </Slider>
      </div>
    </div>
  );
};
export default Hero;
