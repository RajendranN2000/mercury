import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ReminderManagement: React.FC = () => {
  return (
    <div className="text-white p-4 lg:p-8 rounded-3xl flex flex-col items-center lg:items-start mx-auto">
      <div className="inline-block mb-6 rounded-full border border-[#E1E2E5] bg-white text-black font-medium text-xs lg:text-sm py-3 px-5">
        Mercury Finance App
      </div>

      <h1 className="text-3xl lg:text-[56px] text-center lg:text-start lg:leading-[70px] text-[#0E0E11] font-bold">
        Bill and Reminder <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A785FE] to-[#67E9F0]">
          Management
        </span>
      </h1>

      <p className="text-[#3B3C45] mt-4 text-sm lg:text-lg max-w-xl text-center lg:text-start">
        Mercury uses a reminder system to track regular bills and payments,
        ensuring timely payments and avoiding late fees.
      </p>

      <div className="mt-8 space-y-3 text-base">
        <div className="flex items-center space-x-3">
          <div className="">
            <FaCheckCircle className="text-[#8792F7] w-4 lg:w-5 h-4 lg:h-5 mt-1" />
          </div>
          <div className="text-[#3B3C45] text-xs lg:text-sm">
            No account fees on balances of{" "}
            <span className="text-[#0E0E11] font-semibold">$40,000 </span> or
            more
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="">
            <FaCheckCircle className="text-[#8792F7] w-4 lg:w-5 h-4 lg:h-5 mt-1" />
          </div>
          <div className="text-[#3B3C45] text-xs lg:text-sm">
            No fees on your{" "}
            <span className="text-[#0E0E11] font-semibold">
              foreign currency
            </span>
            expenses
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="">
            <FaCheckCircle className="text-[#8792F7] w-4 lg:w-5 h-4 lg:h-5 mt-1" />
          </div>
          <div className="text-[#3B3C45] text-xs lg:text-sm">
            <span className="text-[#0E0E11] font-semibold">Personalized </span>
            Mercury credit card
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="">
            <FaCheckCircle className="text-[#8792F7] w-4 lg:w-5 h-4 lg:h-5 mt-1" />
          </div>
          <div className="text-[#3B3C45] text-xs lg:text-sm">
            Priority service and security team{" "}
            <span className="text-[#0E0E11] font-semibold">
              {" "}
              access included
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderManagement;
