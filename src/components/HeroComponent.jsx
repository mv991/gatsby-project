import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Card from "./Card";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/700.css";
import "@fontsource/oswald/500.css";
const HeroComponent = () => {
  return (
    <div className="w-full min-h-screen h-fit relative ">
      <div className="absolute bottom-0 top-0  left-0 right-0 z-[-1] ">
        <StaticImage
          src="../images/heroImage/landing-img.png"
          className=" absolute bottom-0 top-0  left-0 right-0 z-[-1] h-full"
          layout="fullWidth"
          alt="landing-page-image"
        />
      </div>
      <div className="w-full min-h-screen h-fit ">
        <div className="flex md:flex-row flex-col min-h-screen h-fit items-center md:pt-0  sm:pt-[230px] pt-[150px]  lg:w-[80%] w-[90%] mx-auto  lg:max-w-[1600px]">
          <div className="md:w-1/2 w-full flex flex-col  h-1/2 ">
            <h1 className="text-[37px] 2xl:text-6xl    2xl:w-[550px] text-white font-[500] 2xl:leading-[73px] leading-[46px]">
              HARBOUR LIGHTS
              <br />
              DE <span className="text-[#17ABFF] oswald"> GRESOGONO</span>
            </h1>
            <p className="text-white font-[700] sm:text-2xl text-[1rem] mt-4 md:w-[400px] w-[300px] 2xl:w-[490px] max-w-full ">
              1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
            </p>
            <div className="h-fit w-[360px] card p-3 pl-4 mt-[50px] font-[200] border-l-4 sm:text-base text-sm border-[#17ABFF] text-white max-w-[90%] ">
              Rental Returns of{" "}
              <span className="font-[400] sm:text-lg">UPTO 11%**</span>
            </div>
            <div className="h-fit w-[360px] card p-3 pl-4 mt-3 font-[200] border-l-4  sm:text-base text-sm border-[#17ABFF] text-white  max-w-[90%]">
              Capital Appreciation of{" "}
              <span className="font-[400] sm:text-lg">UPTO 32%**</span>
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
