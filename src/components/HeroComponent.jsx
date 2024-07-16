import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Card from "./Card";
const HeroComponent = () => {
  return (
    <div className="w-full min-h-screen h-fit relative ">
      <StaticImage
        src="../images/heroImage/landing-img.png"
        className=" absolute bottom-0 top-0  left-0 right-0 z-[-1] h-full"
        layout="fullWidth"
        alt="landing-page-image"
      />
      <div className="w-full min-h-screen h-fit ">
        <div className="flex md:flex-row flex-col min-h-screen h-fit items-center md:pt-0  sm:pt-[230px] pt-[150px]  lg:w-[80%] w-[90%] mx-auto  lg:max-w-[1600px]">
          <div className="md:w-1/2 w-full flex flex-col  h-1/2 ">
            <h1 className="text-3xl 2xl:text-6xl font-oswald md:w-[370px]   2xl:w-[550px] text-white font-semibold xl:leading-[60px] tracking-[2px]">
              HARBOUR LIGHTS
              <br />
              DE <span className="text-[#17ABFF]"> GRESOGONO</span>
            </h1>
            <p className="text-white font-semibold text-2xl mt-4 md:w-[400px] 2xl:w-[490px] max-w-full poppins">
              1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
            </p>
            <div className="h-fit w-[360px] card p-3 mt-[50px] font-[200] border-l-2 border-[#17ABFF] text-white max-w-[90%] poppins">
              Rental Returns of <span className="font-[400]">UPTO 11%**</span>
            </div>
            <div className="h-fit w-[360px] card p-3 mt-3 font-[200] border-l-2 border-[#17ABFF] text-white poppins max-w-[90%]">
              Capital Appreciation of{" "}
              <span className="font-[400]">UPTO 32%**</span>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-1/2  md:justify-end flex ">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
