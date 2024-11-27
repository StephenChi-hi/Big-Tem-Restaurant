"use client";

import Button from "@/components/Button";
import {
  Header3,
  Header4,
  Paragraph1,
  ParagraphLink1,
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";
import RandomFaces from "./others/RandomFaces";
import ProductCard from "@/components/Products/ProductCard";

interface Section2Props {
  featuredProducts: any;
}

const Section2: React.FC<Section2Props> = ({ featuredProducts }) => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  const cardsData = [
    {
      name: "Mega spot",
      location: "futo market",
      imageUrl:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1732620784/utilities/IMG_0295_kspmax.jpg",

      link: "/spots/megaspot",
    },
    {
      name: "Mini spot",
      location: "futo market",
      imageUrl:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1732620768/utilities/MIQLDU2FKRFBBJNXS7DJ6JGICE_amqoqf.avif",
      link: "/spots/minispot",
    },
    {
      name: "Ice creams",
      location: "futo market",
      imageUrl:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1732620766/utilities/p03w4lng_cl9yba.jpg",
      link: "/spots/icecreamspot",
    },
    {
      name: "Drink spot",
      location: "futo market",
      imageUrl:
        "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1732620768/utilities/get-15_kdaolr.jpg",
      link: "/spots/drinkspot",
    },
  ];

  return (
    <div>
      <div className=" text-p_black flex flex-col pt-[24px] xl:pt-[40px]  justify-center items-center container1 border-b-2- border-secondary  ">
        <Header3 className=" text-center ">
          Lala <span className="text-primary">Spots</span>
        </Header3>
        <Paragraph1 className="max-w-[883px] text-center">
          Discover delicious meal spots curated to satisfy every craving, all in
          one place
        </Paragraph1>
      </div>

      <div className=" pt-[14px]  container1 grid grid-cols-2 sm:grid-cols-4 gap-[24px] xl:gap-[30px]">
        {cardsData.map((card, index) => (
          <Link
            href="/products"
            className=" flex flex-col items-center justify-center"
          >
            <div
              key={index}
              className=" relative w-full rounded-lg overflow-hidden flex justify-center items-center bg-primary h-[80px] sm:h-[100px] p-2 "
            >
              {/* <img src={card.imageUrl} alt="" className=" rounded-lg h-full z-10" /> */}

              <img
                src={card.imageUrl}
                alt=""
                className=" absolute flex w-full h-full object-cover opacity-55 rounded-lg"
              />
            </div>
            <div className=" hidde sm:flex text-center text-gray-500 text-[12px] w-wit truncate whitespace-nowrap">
              {card.name}: {card.location}{" "}
            </div>
          </Link>
        ))}
      </div>

      <div className=" container1 pt-[24px] xl:pt-[50px]  text-p_black">
        {" "}
        <div
          className=" flex flex-col gap-[8px] xl:gap-[24px] text-center items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>
            Our <span className="text-primary">Featured</span> Meals
          </Header3>
          <Paragraph1 className="max-w-[883px] text-center">
            Each meal is thoughtfully crafted to nourish your body and delight
            your taste buds, offering a perfect balance of health, flavor, and
            satisfaction.
          </Paragraph1>
        </div>
        {/* data-aos="fade-right" */}
        <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-1 gap-[24px] xl:gap-[30px]">
          {featuredProducts && featuredProducts.length > 0
            ? featuredProducts
                .slice(0, 4)
                .map((product: any) => (
                  <ProductCard
                    key={product.id}
                    image={product.productImageURL1}
                    title={product.name}
                    price={product.currentPrice}
                    product={product}
                  />
                ))
            : Array(4)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="h-[300px] w-full bg-gray-200 rounded-md animate-pulse"
                  ></div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
