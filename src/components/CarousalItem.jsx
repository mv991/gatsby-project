import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const CarousalItem = ({ h, p, img }) => {
  const image = getImage(img);
  return (
    <div className="sm:w-[180px]  h-fit flex flex-col-reverse   items-center xl:shrink-0">
      <div className="h-[6px]  sm:w-[50%] w-[100px]  bg-[#DBE0E5] rounded-xl mt-2"></div>
      <h1 className="xl:text-4xl text-2xl font-oswald text-[#00357B] font-semibold">
        {h}
      </h1>
      <h1 className="text-[#00357B] xl:text-lg  text-center poppins font-medium">
        {p}
      </h1>
      <GatsbyImage image={image} className="mb-2  xl:w-[50px] w-[40px] " />
    </div>
  );
};

export default CarousalItem;
