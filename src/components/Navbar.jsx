"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <div
        className="w-full h-[100px] flex justify-center z-[2] absolute "
        id="navbar"
      >
        <div className="lg:w-[80%] w-[90%] h-[100px]   max-w-[1600px]  flex justify-between items-center relative z-[3]">
          <svg
            height="22"
            viewBox="0 0 166 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-[166px] w-[120px]"
            // onClick={() => setMobile(true)}
          >
            <path
              d="M32.0893 10.9004C33.4092 7.64807 33.2959 5.12089 31.7492 3.31525C30.2026 1.51679 27.2854 0.61038 22.9994 0.61038H8.48309L7.17183 3.86987H17.1667C22.2653 3.86987 23.7422 6.48499 21.9828 10.816C20.968 13.3217 20.0682 15.6263 17.9461 16.6511C16.0037 17.5917 13.9984 17.8663 10.4291 17.8663L5.80651 17.8573L9.25903 9.42499H4.90502L0 21.4291H13.1562C16.8441 21.4291 19.7561 21.0773 21.9043 20.3773C24.2566 19.6001 26.363 18.3222 28.2252 16.5452C29.9567 14.8509 31.2453 12.9717 32.0893 10.9004ZM122.816 0.588841L122.819 0.604995H117.429L96.7212 20.5514L104.815 0.608585H95.9382L85.2145 9.25628L79.694 13.9229H79.4429L82.041 7.12397L78.8744 0.608585H69.9571L61.8507 20.5891L57.1793 0.608585H47.4059L25.8224 21.4273H31.2174L36.7345 15.9835H50.3336L51.4164 21.4273H65.8664L71.0888 8.55987C71.3521 7.91371 71.6032 7.17064 71.8491 6.33961C71.8735 7.01089 72.0513 7.72525 72.3722 8.4773L76.9668 19.2106H77.7445L90.8885 8.51499C91.382 8.11294 92.1283 7.38781 93.1239 6.33961C92.6147 7.31064 92.259 8.04653 92.0515 8.55987L86.8292 21.4273H96.3689L96.3707 21.4219H106.428L111.884 15.9529H126.01L127.143 21.4219H132.108L127.269 0.587046H122.816V0.588841ZM39.5767 13.1278L48.1836 4.65423L49.7372 13.1278H39.5767ZM114.735 13.0973L123.572 4.24141L125.408 13.0973H114.735ZM165.843 0.570892H151.196C146.907 0.570892 143.252 1.4773 140.246 3.28115C137.236 5.08499 135.069 7.61935 133.747 10.8735C132.905 12.9411 132.666 14.8347 133.027 16.5201C133.454 18.3042 134.518 19.5858 136.244 20.3611C137.813 21.0576 140.451 21.4129 144.139 21.4129H157.269L158.582 18.1068H151.184C147.621 18.1068 145.245 17.6329 144.061 16.6888C142.769 15.6676 142.913 13.3019 143.921 10.7891C145.688 6.45089 149.376 3.74782 154.474 3.74782H160.207L158.893 7.01269H163.243L165.843 0.570892Z"
              fill="#F5F5F5"
            />
          </svg>
          <button
            className={` md:flex items-center  h-[45px] py-3 px-8 text-sm font-bold rounded-md sm:block hidden outline outline-2 text-[#17ABFF]`}
            onClick={() => setShow(true)}
          >
            ENQUIRE NOW
          </button>

          <svg
            width="24"
            height="13"
            viewBox="0 0 24 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:hidden block"
            onClick={() => {
              setMobile(true);
            }}
          >
            <rect
              x="3"
              y="0.0974121"
              width="21"
              height="2"
              rx="1"
              fill="white"
            />
            <rect x="3" y="5.09741" width="21" height="2" rx="1" fill="white" />
            <rect x="3" y="10.0974" width="21" height="2" rx="1" fill="white" />
          </svg>
        </div>
      </div>
      {show && <Modal setShow={setShow} />}
      {mobile && (
        <MobileNavbar setMobile={setMobile} setShow={setShow} mobile />
      )}
    </>
  );
};

export default Navbar;
