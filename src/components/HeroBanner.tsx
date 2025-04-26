import { FaApple } from "react-icons/fa";
import Header from "./Header";
import React from "react";

const Banner:React.FC = () => {
  return (
    <div className="">
      <Header />
      <div className="bg-[#FFFFFF] text-white font-sans flex items-center justify-between">
        <div className="max-w-xl w-1/2 pl-32">
          <div className=" border border-[#E1E2E5] text-[#0E0E11] px-4 py-1 rounded-full inline-block mb-6">
            Financial Management
          </div>
          <h1 className="text-6xl font-bold text-[#0E0E11] leading-tight">
            A simpler,
            <br /> smarter basic <br /> credit{" "}
            <span className="bg-gradient-to-r from-[#A785FE] to-[#67E9F0] bg-clip-text text-transparent">
              card.
            </span>
          </h1>
          <p className="text-[#3B3C45] mt-6 text-base">
            Your powerful companion on the road to financial success! Explore
            personal budget management, investment opportunities.
          </p>

          <div className="mt-8 flex items-center space-x-6">
            <div className="text-[#FFFFFF] bg-black font-semibold px-6 py-3 rounded-full flex items-center">
              <FaApple className="mr-2" />
              <div className="text-sm ">App Store</div>
            </div>
            <div className="relative items-center w-1/2">
              <div className="w-full h-12"></div>
              <div className="absolute left-0 top-0">
                <img
                  src="/assets/images/white-bg-1.png"
                  className="h-12 w-12 rounded-full"
                  alt="user1"
                />
              </div>
              <div className="absolute left-8  top-0">
                <img
                  src="/assets/images/white-bg-2.png"
                  className="h-12 w-12 rounded-full"
                  alt="user2"
                />
              </div>
              <div className="absolute left-16  top-0">
                <img
                  src="/assets/images/white-bg-3.png"
                  className="h-12 w-12 rounded-full"
                  alt="user3"
                />
              </div>
              <div className="absolute left-32  top-0">
                <div className="text-[#0E0E11] text-base">24K+</div>
                <div className="text-[#6D7079] text-xs">Active Users</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 pr-4 relative">
          <div className="flex justify-end">
            <img
              className="h-full max-h-[100vh] w-[80%]"
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
