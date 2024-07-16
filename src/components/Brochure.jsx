import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Brochure = () => {
  return (
    <div className="xl:w-[1118px] w-full bg-[#00357B] overflow-hidden flex lg:flex-row flex-col h-fit lg:rounded-xl lg:absolute middle-div lg:bottom-[-320px]">
      <div className="lg:w-[45%] flex flex-col px-8 md:py-12">
        <p className="text-xl text-[#17ABFF] poppins mt-8 md:mt-0">
          IN A NUTSHELL
        </p>
        <h1 className="oswald text-4xl my-3 text-white font-[500]">
          DOWNLOAD BROCHURE
        </h1>
        <p className="poppins text-white FONT-[300]">
          Harbour Lights de GRISOGONO Geneve is a residential tower in the heart
          of Dubai Maritime City. Future residents can choose from a number of
          1–3 bedroom branded residences. Certain premises come with a private
          swimming pool, letting you enjoy resort-like living without the need
          to leave home
        </p>
        <a
          href="pdf.pdf"
          download={"pdf.pdf"}
          className="text-white font-[500] w-[300px] py-3 px-4 bg-[#17ABFF] rounded-md mt-5"
        >
          <button>DOWNLOAD FREE PDF BROCHURE</button>
        </a>
      </div>
      <div className="lg:w-[55%] h-full w-full pr-2">
        <StaticImage
          src="../images/brochure.png"
          alt="brochure-imgae"
          objectFit="cover"
          className="w-[110%] "
          width={800}
          height={600}
        />
      </div>
    </div>
  );
};

export default Brochure;
