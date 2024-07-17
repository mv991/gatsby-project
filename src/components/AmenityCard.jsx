import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const AmenityCard = ({ img, text }) => {
  const image = getImage(img);
  return (
    <div className="flex flex-col  sm:w-[200px] sm:h-[270px] h-[250px] w-[160px]  text-[#00357B] font-[500] bg-white shadow-xl cursor-pointer text-center amenity-card pb-3 hover:scale-110 ">
      <div className=" sm:w-[200px]  w-[160px] h-[250px]">
        <GatsbyImage image={image} alt="img" className="object-cover" />
      </div>
      <h1 className="mt-3 w-[120px] mx-auto">{text}</h1>
    </div>
  );
};

export default AmenityCard;
