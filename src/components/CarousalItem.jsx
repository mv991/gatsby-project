import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const CarousalItem = ({ h, p, img }) => {
  const image = getImage(img, "img");

  return (
    <div className="sm:w-[180px]  h-fit flex flex-col-reverse   items-center xl:shrink-0">
      <div className="h-[6px]  sm:w-[50%] w-[100px]  bg-[#DBE0E5] rounded-xl mt-2"></div>
      <h1 className="xl:text-4xl text-2xl oswald text-[#00357B] font-semibold">
        {h}
      </h1>
      <p className="text-[#00357B] xl:text-lg  text-center  ">{p}</p>
      <GatsbyImage
        image={image}
        className="mb-2  xl:w-[50px] w-[40px] "
        alt="carousalImage"
        width={50}
      />
    </div>
  );
};

export default CarousalItem;
