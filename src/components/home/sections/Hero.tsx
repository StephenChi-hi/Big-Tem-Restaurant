/** @format */

import React from "react";
import BannerCarousel from "./others/Banner";
import Image from "next/image";

const HomePage = () => {
  const imageUrls = [
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1698900201/utilities/b292e3e9f1084999386da464aa1e557b_iny161.jpg",
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1698900201/utilities/delicious-food-banner-template-design-cd3994e39458960f4f33e73b8c60edb9_screen_mwh00d.jpg",
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1698898818/utilities/healthy-food-restaurant-banner-design-template-5d8526f015d6a01027536b17714b98d3_screen_mvmcok.jpg",
  ];

  return (
    <div className="  ">
      <div className="bg-black text-white pt-[80px]  ">
        <div className="flex py-2 container1">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <h1 className="text-white text-[14px]">
            Delivery around FUTO (10:00 am - 8:00 pm)
          </h1>
        </div>
      </div>
      <BannerCarousel imageUrls={imageUrls} />

      
    </div>
  );
};

export default HomePage;
