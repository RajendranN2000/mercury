import React from "react";
import { PiLightningFill } from "react-icons/pi";

const Newsletter: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 pt-12">
      <div className="grid grid-cols-2 gap-8 w-full">
        <div className="pl-2 text-[40px] text-center leading-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A785FE] to-[#67E9F0]">
          Mercury Ready to move faster
        </div>
        <div className="pl-2 text-[40px] text-center leading-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A785FE] to-[#67E9F0]">
          Mercury Ready to move faster
        </div>
      </div>
      <div className="bg-white rounded-3xl -mb-24 mt-12  flex flex-col md:flex-row items-center justify-between p-8 w-full max-w-6xl">
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-[24px] text-[#0E0E11] font-bold mb-2">
            Sign up to our newsletter !
          </h2>
          <p className="text-[#3B3C45] text-sm">
            Stay in the loop with the latest updates, exclusive offers, and
            financial tips by signing up for our newsletter.
          </p>
        </div>

        <div className="flex flex-col md:w-1/2 md:items-end w-full">
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Placeholder"
              className="flex-1 text-sm p-3 rounded-l-full border border-[#E8EAED] focus:outline-none focus:ring-black"
            />
            <button className="bg-black text-white rounded-r-full px-6 text-sm">
              Get Started
            </button>
          </div>
          <div className="w-full max-w-md flex gap-2 items-center text-[#3B3C45] text-xs mt-4">
            <PiLightningFill className="h-4 w-auto text-[#8792F7]" />
            Opt out at any time by using your account dashboard.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
