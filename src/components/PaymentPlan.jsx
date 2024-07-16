import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const PaymentPlan = () => {
  return (
    <div className="2xl:w-[80%] max-w-[1480px] w-[90%] min-h-[400px] h-fit oswald bg-blue-900 mx-auto mt-12 flex  rounded-2xl mb-[60px]">
      <div className="md:w-[60%] w-[90%] h-full mx-auto">
        <h1 className="text-4xl font-[450] w-[80%] md:mx-auto oswald text-white md:pl-4 mb-6 mt-12">
          PAYMENT PLAN
        </h1>
        <div className="sm:w-[80%] w-[90%] mx-auto lg:border-2 border-[0.7px] border-white payment-bg rounded-xl h-fit">
          <div className="flex lg:flex-row flex-col w-full h-full ">
            <div className="lg:w-1/2 w-full lg:border-r-2 lg:border-white border-[#FCFCFC] lg:h-[250px] lg:border-b-0 border-b-[0.7px] lg:pb-0 pb-6 px-3 pt-6">
              <h1 className="md:text-5xl text-4xl text-white font-[500]">
                80%
              </h1>
              <p className="md:text-2xl text-xl mt-2 font-[500] text-white poppins xl:w-[250px] lg:w-[220px] w-[250px]">
                During the construction period
              </p>
            </div>
            <div className="lg:w-1/2 w-full border-white lg:h-[250px] flex flex-col  justify-center p-3  lg:border-b-0 border-b-[0.7px] lg:pb-0 pb-6">
              <ul className="list-disc ml-6 md:text-xl text-lg text-white poppins">
                <li className="mb-2">20% + 4% DLD* when booking</li>
                <li className="mb-2">10% after 9 months</li>
                <li>5 payments of 10% every 6 months</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:border-t-2 border-white h-[150px] px-3 pt-6 oswald">
            <h1 className="text-4xl md:text-5xl text-white font-[500]">20%</h1>
            <p className="text-white text-xl poppins font-[450]">
              After completion
            </p>
          </div>
        </div>
        <div className="flex w-[80%] md:flex-row flex-col mx-auto gap-3 my-6">
          <p className="text-[#E0E0E0] md:text-normal text-sm  poppins font-[300]">
            *DLD - Dubai Land Department 4% - registration fee
          </p>
          <a
            href="pdf.pdf"
            download={"pdf.pdf"}
            className="px-3 py-4 mx-auto bg-[#17ABFF] text-white text-center md:w-1/2 shrink-0 md:text-normal text-sm rounded-lg poppins font-[600]"
          >
            <button>GET DETAILED CALCULATION</button>
          </a>
        </div>
      </div>
      <div className="w-[40%] h-auto min-h-[500px]  relative md:block hidden">
        <StaticImage
          src="../images/creditCardImage.png"
          className="absolute bottom-0 right-0 w-full  max-h-full "
          width={800}
          height={600}
          alt="credit-card"
        />
      </div>
    </div>
  );
};

export default PaymentPlan;
