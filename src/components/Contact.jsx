import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { navigate } from "gatsby";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData, "FORMDATATA");
    navigate("/thankyou");
  }
  function handleChange(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  return (
    <div className="w-full min-h-[500px] h-fit relative  mx-auto">
      <div className="lg:h-[480px] h-fit md:w-[77%] max-w-[1400px] w-[96%] lg:bg-[#FDFDFD] mx-auto flex gap-8 lg:gap-[100px] lg:flex-row flex-col lg:absolute middle-div lg:top-[-80px] rounded-lg p-4">
        <div className="h-full lg:w-1/2 pl-3">
          <h1 className="text-4xl text-[#00357B] oswald  font-[500] mt-6">
            LEAVE A REQUEST
          </h1>
          <p className="poppins text-[14px] mt-3 mb-6">
            to get a unique offer from our consultant.
          </p>
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              placeholder="Full Name*"
              className="p-3 bg-[#F4F4F4] w-full rounded-md"
              onChange={handleChange}
              name="name"
              value={formData.name}
              required
            />
            <input
              placeholder="Email*"
              className="p-3 bg-[#F4F4F4] w-full rounded-md"
              onChange={handleChange}
              name="email"
              value={formData.email}
              required
            />
            <input
              placeholder="Phone Number*"
              className="p-3 bg-[#F4F4F4] w-full rounded-md"
              onChange={handleChange}
              name="number"
              value={formData.number}
              required
            />
            <button className="font-[600] text-lg poppins bg-[#00357B] py-3 md:max-w-[300px] max-w-[250px] text-white mt-3 rounded-md">
              SUBMIT NOW
            </button>
          </form>
          <p className="text-[#B2B2B2] text-sm mt-3 underline italic md:max-w-full  max-w-[290px]">
            By Sumbmitting the data, you agree to the terms of the privacy
            policy and data return
          </p>
        </div>
        <div className="lg:w-1/2 h-full">
          <StaticImage
            src="../images/footerImage.png"
            className="mt-2 object-cover"
            width={800}
            height={600}
            alt="fo0ter-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
