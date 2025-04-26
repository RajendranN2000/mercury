import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import UserCard from "./UserCard";
import TimeBreakdown from "./TimeBreakdown";
const SmartToolsSection: React.FC = () => {
  return (
    <section className="flex text-black py-16 text-center md:text-left px-32">
      <div className=" mx-auto w-1/2">
        <div className="inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
          Mercury Finance App
        </div>

        <h2 className="text-[54px] font-bold leading-[67px] mb-4">
          Achieve Your <br /> Savings Goals with{" "}
          <div className="text-transparent bg-clip-text bg-gradient-to-r mt-1 from-[#A785FE] to-[60%] to-[#67E9F0]">
            Smart Tools
          </div>
        </h2>

        <p className="text-[#3B3C45] max-w-2xl mx-auto md:mx-0 mb-6">
          Achieve your savings goals with the help of our smart tools. Set
          specific targets, create savings plans, and track your progress.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start mb-10">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#8792F7]" size={20} />
            <span className="text-[#3B3C45] text-sm">
              Spend up to{" "}
              <span className="text-[#0E0E11] font-medium">$40,000</span> per
              more
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#8792F7]" size={20} />
            <span className="text-[#3B3C45] text-sm">
              Competitive interest rates
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2">
            Get a Demo <FiArrowUpRight className="w-4 h-4" />
          </button>
          <button className=" border border-[#E8EAED] text-black px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-1/2 relative ml-44">
        <img
          className="w-[300px]"
          src="/assets/images/smarttools/Background.png"
          alt=""
        />
        <div className="absolute top-12 left-12">
          <UserCard
            name="Ivan Ryan"
            company="Mercurius"
            rating={4.5}
            avatarUrl="/assets/images/white-bg-1.png" // replace with actual avatar if needed
          />
          <div className="ml-28 mt-8">
            <TimeBreakdown
              totalHours={10}
              totalMinutes={31}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartToolsSection;
