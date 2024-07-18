import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const AmenityCard = ({ img, text, index }) => {
  const image = getImage(img);
  return (
    <div className="flex flex-col  sm:w-[200px] sm:h-[280px] h-[240px] w-[160px]  text-[#00357B] font-[500] bg-white shadow-xl cursor-pointer text-center amenity-card  hover:scale-110 ">
      <GatsbyImage image={image} alt="img" width={170} height={210} />

      <h1 className={`mt-3 ${index === 0 ? "w-[70px]" : "w-[110px]"} mx-auto`}>
        {text}
      </h1>
    </div>
  );
};

export default AmenityCard;
