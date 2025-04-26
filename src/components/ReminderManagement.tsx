import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ReminderManagement: React.FC = () => {
  return (
    <div className="text-white p-8 md:p-16 rounded-3xl max-w-4xl mx-auto">
      <div className="inline-block mb-6 rounded-full border border-[#E1E2E5] bg-white text-black font-medium text-sm py-3 px-5">
        Mercury Finance App
      </div>

      <h1 className="text-[56px] leading-[70px] text-[#0E0E11] font-bold">
        Bill and Reminder <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A785FE] to-[#67E9F0]">
          Management
        </span>
      </h1>

      <p className="text-[#3B3C45] mt-4 text-lg max-w-xl">
        Mercury uses a reminder system to track regular bills and payments,
        ensuring timely payments and avoiding late fees.
      </p>

      <div className="mt-8 space-y-3 text-base">
        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-[#8792F7] w-5 h-5 mt-1" />
          <div className="text-[#3B3C45] text-sm">
            No account fees on balances of <span className="text-[#0E0E11] font-semibold">$40,000 </span> or more
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-[#8792F7] w-5 h-5 mt-1" />
          <div className="text-[#3B3C45] text-sm">
            No fees on your <span className="text-[#0E0E11] font-semibold">foreign currency</span>expenses
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-[#8792F7] w-5 h-5 mt-1" />
          <div className="text-[#3B3C45] text-sm">
           <span className="text-[#0E0E11] font-semibold">Personalized </span>Mercury credit card
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-[#8792F7] w-5 h-5 mt-1" />
          <div className="text-[#3B3C45] text-sm">
            Priority service and security team <span className="text-[#0E0E11] font-semibold"> access included</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderManagement;
