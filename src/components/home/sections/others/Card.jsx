/** @format */

// components/Card.js
import Link from "next/link";

import React from "react";

const Card = ({ name, imageUrl, location, link }) => {
  return (
    <Link href={link}>
    <div className="max-w-xs min-h-[18rem] flex flex-col justify-evenly p-4 sm:m-4 m-1  rounded-lg shadow-lg border-b-4 border-b-green-50">
      <center>
        <div className="bg-green-50 h-32 md:h-40 w-30 md:w-40  rounded-full flex items-center justify-center">
          <img src={imageUrl} alt={name} className="rounded-full md:w-32 w-20 md:h-32 h-20" />
        </div>
      </center>

      <p className="text-center font-bold text-[18px] mt-4">{name}</p>
      <p className="text-center text-[12px]">{location}</p>
    </div>
    </Link>
  );
};

export default Card;
