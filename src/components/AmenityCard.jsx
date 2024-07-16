import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const AmenityCard = ({ img, text }) => {
  const image = getImage(img);
  return (
    <div className="flex flex-col  sm:w-[223px] sm:h-[300px] w-[160px]  text-[#00357B] font-[500] bg-white shadow-xl cursor-pointer text-center amenity-card pb-3 hover:scale-110 ">
      <GatsbyImage
        image={image}
        alt="img"
        width={240}
        height={300}
        className=" sm:w-[223px] w-full "
      />
      <h1 className="mt-3 w-[120px] mx-auto">{text}</h1>
    </div>
  );
};

export default AmenityCard;
