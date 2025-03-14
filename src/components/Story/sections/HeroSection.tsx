"use client";

import Button from "@/components/Button";
import { Header1, Header1Plus, Header3, Paragraph3 } from "@/components/Text";
import React from "react";
import AOS from "aos";

function HeroSection() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="mt-[90px]">
      <div className=" container1 relative h-[460px xl:rounded-lg overflow-hidden w-full bg-black">
        <div
          className="relative z-10 px-2 xl:p-[100px] py-[32px] pt-[150px] xl:py-[70px]"
          data-aos="fade-right"
        >
          <div className=" flex flex-col xl:w-[60%] w-full xl:space-y-[24px] ">
            <Header3 className="text-white col-span-1">
              Discover Lala Healthy Foods: where
              <span className="text-secondary  "> Nourishment </span>
              Meets Delight!
            </Header3>
            <Paragraph3 className="xl:mt-[16px] mb-[24px] xl:mb-[48px] text-white">
              At Lala Healthy Foods, we celebrate wholesome living, offering
              meals that nourish, inspire, and bring out the best in you.
            </Paragraph3>

            <Button
              text="Start Your Beauty Journey"
              href="/products"
              isLink={true}
              additionalClasses="border-primary xl:w-fit w-full  "
            />
          </div>
        </div>

        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover xl:-top-[100px] xl:-left-[0px] -left-[150px] -top-[24px] bg-center- z-0"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dcb4ilgmr/image/upload/v1732569942/utilities/kelsey-chance-ZrhtQyGFG6s-unsplash_t5mub1.jpg')",
          }}
        ></div>
        {/* Dark overlay for the background image */}
        <div className="absolute inset-0  bg-black opacity-70 z-0"></div>
      </div>
    </div>
  );
}

export default HeroSection;
