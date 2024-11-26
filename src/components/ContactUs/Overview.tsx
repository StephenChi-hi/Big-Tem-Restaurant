"use client";

import { Header1Plus, Paragraph1 } from "@/components/Text";
import React from "react";
import FormComponent from "./FormSection";
import AOS from "aos";

function Overview() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className=" bg-bg_gray py-[70px] xl:py-[100px]">
      <div
        className=" container1 py-[32px]  bg-white text-p_black"
        data-aos="flip-right"
      >
        {" "}
        <div className="  xl:p-[100px] flex flex-col  xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[44px]">
          <Header1Plus className="text-center">
            Let’s <span className="text-primary">Elevate</span> Your Dining
            Experience
          </Header1Plus>
          <Paragraph1 className="text-center">
            Have questions about our meals or need personalized recommendations?
            Fill out the form below, and let’s start your journey to wholesome,
            delicious eating together!
          </Paragraph1>

          <div className=" mt-[24px] flex w-full xl:mt-[36px] space-y-[24px] mb-[24px]">
            <FormComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
