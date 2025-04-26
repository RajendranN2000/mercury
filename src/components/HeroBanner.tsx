import { FaApple } from "react-icons/fa";
import Header from "./Header";
import React from "react";

const Banner:React.FC = () => {
  return (
    <div className="">
      <Header />
      <div className="bg-[#FFFFFF] text-white font-sans flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
        <div className="max-w-xl w-full lg:w-1/2 pr-6 lg:pr-0 pl-6 md:pl-12 lg:pl-20 2xl:pl-32 flex flex-col items-center lg:items-start">
          <div className=" border border-[#E1E2E5] text-[#0E0E11] px-4 py-2 rounded-full inline-block mb-6">
            Financial Management
          </div>
          <h1 className="text-3xl lg:text-6xl font-bold text-[#0E0E11] leading-tight text-center lg:text-start">
            A simpler,
            <br /> smarter basic <br /> credit{" "}
            <span className="bg-gradient-to-r from-[#A785FE] to-[#67E9F0] bg-clip-text text-transparent">
              card.
            </span>
          </h1>
          <p className="text-[#3B3C45] mt-6 text-base  text-center lg:text-start">
            Your powerful companion on the road to financial success! Explore
            personal budget management, investment opportunities.
          </p>

          <div className="mt-8 flex justify-center items-center space-x-3 lg:space-x-6 w-[300px]">
            <div className="text-[#FFFFFF] bg-black font-semibold px-2 lg:px-6 py-2 lg:py-3 rounded-full flex items-center">
              <FaApple className="mr-2" />
              <div className="text-sm text-nowrap">App Store</div>
            </div>
            <div className="relative items-center flex justify-center w-full lg:w-1/2 mt-3 lg:mt-0">
              <div className="h-12"></div>
              <div className="absolute left-0 top-0">
                <img
                  src="/assets/images/white-bg-1.png"
                  className="h-8 lg:h-12 w-8 lg:w-12 rounded-full"
                  alt="user1"
                />
              </div>
              <div className="absolute left-8  top-0">
                <img
                  src="/assets/images/white-bg-2.png"
                  className="h-8 lg:h-12 w-8 lg:w-12 rounded-full"
                  alt="user2"
                />
              </div>
              <div className="absolute left-16  top-0">
                <img
                  src="/assets/images/white-bg-3.png"
                  className="h-8 lg:h-12 w-8 lg:w-12 rounded-full"
                  alt="user3"
                />
              </div>
              <div className="absolute left-28 lg:left-32 top-0">
                <div className="text-[#0E0E11] text-xs lg:text-base">24K+</div>
                <div className="text-[#6D7079] text-[10px] lg:text-xs text-nowrap">Active Users</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 pr-4 pt-4 relative">
          <div className="flex justify-end">
            <img
              className="h-full lg:min-h-[700px] max-h-[100vh] w-[80%]"
              src="/assets/images/gradient-bg.png"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 left-12">
            <img className="w-[50%]" src="/assets/images/mobile.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
