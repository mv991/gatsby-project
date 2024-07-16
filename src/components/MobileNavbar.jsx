import React from "react";

const MobileNavbar = ({ setMobile, setShow, mobile }) => {
  return (
    <div
      className={`fixed bg-black w-screen h-screen inset-0 flex sidebar items-center justify-center sidebar text-center z-[2] ${
        mobile ? "mobile-navbar-enter-active" : "mobile-navbar-exit-active"
      }`}
    >
      <button
        className="fixed top-3 text-lg right-3 text-white"
        onClick={() => setMobile(false)}
      >
        x
      </button>
      <button
        className={` flex items-center z-[3]  h-[45px] py-3 px-8 text-sm font-bold rounded-md  outline outline-2 text-[#17ABFF]`}
        onClick={() => {
          setShow(true);
          setMobile(false);
        }}
      >
        ENQUIRE NOW
      </button>
    </div>
  );
};

export default MobileNavbar;
