import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import "@fontsource/oswald/500.css";
const Card = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="card lg:w-[340px] sm:w-[300px] max-w-[380px] oswald sm:mx-0 mx-auto h-[350px] text-white md:mb-0 mb-12 md:mt-0 mt-12 rounded-2xl ">
        <div className="w-full px-6 h-[80%] py-8">
          <p className="text-[12px] font-[300] mb-2 tracking-[4px] ">
            PRICING STARTS FROM
          </p>
          <h1 className="text-5xl font-[500] ">$ 425,000</h1>
          <h1 className="text-2xl my-3 ">AED 1.3 Million</h1>
          <button
            className="text-white  py-4 w-full mx-auto text-[14px] rounded-md mt-6 font-[600] tracking-[2px]  bg-[#17ABFF] hover:scale-110"
            onClick={() => setShow(true)}
          >
            GET A PRESENTATION
          </button>
          <div></div>
        </div>
        <div className="h-[20%]  border-t-[1px] border-black flex items-center justify-center">
          <p className="text-[12.5px]  w-[79.8%] mx-auto text-[#98C5E8] font-[300] ">
            Get an Expert’s Presentation of Real Estate in Dubai for Life and
            investment
          </p>
        </div>
      </div>
      {show && <Modal setShow={setShow} />}
    </>
  );
};

export default Card;
