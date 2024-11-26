"use client";

import Button from "@/components/Button";
import { Header3, Header4, Header5, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React, { useState } from "react";
import AOS from "aos";


function Section5() {
  const [openedQuestionIndex, setOpenedQuestionIndex] = useState(null);

  const toggleParagraphVisibility = (index: any) => {
    setOpenedQuestionIndex(openedQuestionIndex === index ? null : index);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  // Array of FAQ items
  const faqs = [
    {
      id: 1,
      question: "Q. What types of meals do you offer?",
      answer:
        "At Lala Healthy Foods, we offer a variety of wholesome meals, including soups, rice dishes, swallows, snacks, and more. Each meal is crafted to provide a perfect balance of nutrition and flavor.",
    },
    {
      id: 2,
      question: "Q. How can I place an order?",
      answer:
        "Placing an order is simple! Browse our menu, add your favorite meals to the cart, and proceed to checkout. If you need assistance, our team is happy to help.",
    },
    {
      id: 3,
      question: "Q. How long does it take to prepare and deliver orders?",
      answer:
        "We prepare each order fresh to ensure quality. Orders are typically ready for pickup or delivery within 30-45 minutes. Delivery times may vary based on your location.",
    },
    {
      id: 4,
      question: "Q. Do you cater to dietary restrictions or preferences?",
      answer:
        "Yes! We offer vegetarian, vegan, and gluten-free options, and we’re happy to accommodate specific dietary needs where possible. Feel free to let us know when placing your order.",
    },
    {
      id: 5,
      question: "Q. Can I book a reservation?",
      answer:
        "Absolutely! You can book a table through our website or by giving us a call. Reservations are recommended for larger groups or special occasions.",
    },
    {
      id: 6,
      question: "Q. Do you offer catering for events?",
      answer:
        "Yes, we provide catering services for events of all sizes. Contact us to discuss your requirements, and we’ll create a customized menu to make your event special.",
    },
  ];


  return (
    <div>
      <div className=" container1 py-[54px] xl:p5-[100px] text-p_black">
        {" "}
        <div
          className=" flex flex-col xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>
            Frequently Asked <span className=" text-primary">Questions</span>{" "}
          </Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Find answers to all your questions about our meals, ordering
            process, and services.
          </Paragraph1>
        </div>
        <div
          className="flex-row items-center justify-center py-4 xl:py-[37px] bg-bg_gray rounded-lg "
          data-aos="flip-up"
        >
          {/* Mapping over FAQ items */}
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`w-full px-4 xl:px-[37px] pt-4 xl:py-[21px] ${
                index !== faqs.length - 1
                  ? "border-b-4 border-[#E4E4E7]"
                  : "xl:-mb-6"
              }`}
            >
              <div
                className="flex items-start   justify-between cursor-pointer"
                onClick={() => toggleParagraphVisibility(faq.id)}
              >
                <Header5 className="text-[18px] w-[250px] xl:w-full font-medium text-primary-50">
                  {faq.question}
                </Header5>
                <button
                  className=" flex justify-center items-center h-4 w-4  cursor-pointer"
                  onClick={() => toggleParagraphVisibility(faq.id)}
                >
                  <img
                    src={
                      openedQuestionIndex === faq.id
                        ? "/icons/dash.svg"
                        : "/icons/plus.svg"
                    }
                    alt=""
                    className=""
                    style={{
                      transform:
                        openedQuestionIndex === faq.id
                          ? "rotate(0deg)" // Keep it static or adjust if necessary
                          : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
              </div>
              <p
                className={`text-[12px] xl:text-[14px]- md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[18px]  overflow-hidden  transition-all pb-4 pt-4 max-w-[90%] duration-300 ${
                  openedQuestionIndex === faq.id ? "max-h-[500px]" : "max-h-0"
                }`}
                style={{ opacity: openedQuestionIndex === faq.id ? "1" : "0" }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section5;
