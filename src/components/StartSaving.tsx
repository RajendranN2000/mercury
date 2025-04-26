import { FaApple } from "react-icons/fa";
import { BsFillCursorFill } from "react-icons/bs";
import React from "react";

const StartSaving: React.FC = () => {
  return (
    <div className="px-6 md:px-12 lg:px-32 py-6 lg:py-12">
      <div className="flex gap-4 2xl:gap-24 justify-center items-center">
        <div className="">
          <div className="flex justify-end">
            <BsFillCursorFill className="h-3 lg:h-5 w-auto" />
          </div>
          <div className="text-[10px] lg:text-base text-[#FFFFFF] bg-black font-semibold px-3 lg:px-5 py-2 rounded-full mx-2 lg:mx-5 mt-[-4px]">
            John
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="inline-block mb-6 rounded-full border text-nowrap border-[#E1E2E5] bg-white text-black font-medium text-xs lg:text-sm py-3 px-5">
            Mercury Finance App
          </div>
          <h1 className="text-3xl lg:text-[56px] lg:leading-[60px] text-[#0E0E11] font-bold text-center lg:text-start">
            Start Saving{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A785FE] to-[#67E9F0]">
              Today
            </span>
          </h1>

          <p className="text-[#3B3C45] mt-4 text-xs lg:text-lg max-w-xl text-center">
            Your powerful companion on the road to financial success! Explore{" "}
            <br></br>
            personal budget management, investment opportunities and more.
          </p>
          <div className="text-[#FFFFFF] bg-black font-semibold px-3 lg:px-6 py-4 rounded-full flex items-center mt-4">
            <FaApple className="mr-2 h-4 w-4" />
            <div className="text-xs lg:text-sm ">Download App Store</div>
          </div>
        </div>
        <div className="pt-24">
          <div className="flex justify-start ">
            <BsFillCursorFill className="h-3 lg:h-5 w-auto -rotate-90" />
          </div>
          <div className="text-[10px] lg:text-base text-[#FFFFFF] bg-black font-semibold px-3 lg:px-5 py-2 rounded-full mx-2 lg:mx-5 mt-[-8px] lg:mt-[-4px]">
            John
          </div>
        </div>
      </div>
      <div className="mt-12">
        <img
          className="w-full h-auto"
          src="/assets/images/start-saving-phone.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default StartSaving;
