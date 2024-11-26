"use client";

import {
  Header3,
  Header4,
  Paragraph1,
  ParagraphLink1,
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";


function Section3() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });


  return (
    <div>
      {" "}
      <div className=" container1 py-[24px] xl:py-[100px]  text-p_black">
        {" "}
        <div
          className=" flex xl:gap-[24px] flex-col items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>Get to Know Us</Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Your Destination for Wholesome and Nourishing Meals
          </Paragraph1>
        </div>
        <div className=" grid col-span-1 xl:items-center xl:grid-cols-6 gap-[24px] xl:gap-[30px]">
          <div className=" xl:col-span-3">
            <div
              className=" bg-white rounded-lg p-[31px overflow-hidden "
              data-aos="fade-left"
            >
              <img
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1732569009/utilities/jay-wennington-N_Y88TWmGwA-unsplash_e185js.jpg"
                alt="branding"
                className="w-full rounded-lg"
              />{" "}
            </div>
          </div>
          <div className=" xl:col-span-3  xl:space-y-[30px]">
            <div className="  " data-aos="fade-right">
              <div className="space-y-[12px]  xl:space-y-[32px] md:space-y-[32px]">
                <Header4>Celebrating Healthy Living</Header4>
                <Paragraph1>
                  Our dedicated team is passionate about crafting a menu that
                  inspires and empowers you to embrace a healthier lifestyle
                  every day. At Lala Healthy Foods, we believe that good food is
                  a celebration of life, and every dish we create is designed to
                  nourish your body and delight your senses.
                </Paragraph1>
                <Paragraph1>
                  Guided by a commitment to quality and wellness, our mission is
                  to connect with individuals seeking flavorful, nutritious
                  meals that support their journey to health and happiness,
                  offering dishes that make you feel your best inside and out.
                </Paragraph1>

                <div>
                  <Link
                    href="/about-us"
                    className=" text-[20px] text-primary font-bold underline "
                  >
                    <ParagraphLink1> Read More</ParagraphLink1>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
