import React, { useState } from "react";
import { navigate } from "gatsby";

const Modal = ({ setShow }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: null,
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
    <div className="fixed top-0 left-0 h-screen w-screen backdrop flex justify-center overflow-hidden sm:items-center items-end z-[7]">
      <div className="sm:w-[612px] sm:h-[499px] h-fit py-12 sm:p-0 bg-white relative rounded-lg">
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => setShow(false)}
        >
          <circle cx="19.5" cy="19.5" r="19.5" fill="#F4F4F4" />
          <path
            d="M25.3 25.3L19.5 19.5M19.5 19.5L13.7 13.7M19.5 19.5L25.3 13.7M19.5 19.5L13.7 25.3"
            stroke="#00357B"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="w-[80%] mx-auto flex flex-col items-center h-full justify-center ">
          <h1 className="text-[#00357B] sm:text-4xl text-3xl font-[700] oswald mb-12">
            OFFICIAL SALE HAS STARTED
          </h1>
          <form
            className="w-full flex flex-col gap-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              placeholder="Full Name*"
              className="bg-[#F4F4F4] p-3 rounded-lg"
              onChange={handleChange}
              value={formData.name}
              name="name"
            />
            <input
              placeholder="Email*"
              className="bg-[#F4F4F4] p-3 rounded-lg"
              onChange={handleChange}
              value={formData.email}
              name="email"
            />
            <input
              placeholder="Phone Number*"
              className="bg-[#F4F4F4] p-3 rounded-lg"
              onChange={handleChange}
              value={formData.number}
              name="number"
            />
            <button className="font-[600] text-lg poppins bg-[#00357B] py-3 w-[300px] mx-auto max-w-[250px] text-white mt-3 rounded-md">
              SUBMIT NOW
            </button>
          </form>
          <p className="text-[#B2B2B2] text-sm mt-3 underline italic md:max-w-full text-center  ">
            By Sumbmitting the data, you agree to the terms of the privacy
            policy and data return
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
