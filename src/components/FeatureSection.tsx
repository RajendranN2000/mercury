import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
interface Feature {
  title: string;
  img: string;
}

const features: Feature[] = [
  {
    title: "Expense Management",
    img: "/assets/images/finance/finance-1.png",
  },
  {
    title: "Command + K",
    img: "/assets/images/finance/finance-2.png",
  },
  {
    title: "Financial Planner",
    img: "/assets/images/finance/finance-3.png",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <div className="text-[#0E0E11] py-6 lg:py-16 px-6 md:px-12 lg:px-20 2xl:px-32 text-center">
      <h2 className="text-3xl lg:text-[55px] font-bold leading-tight mb-4">
        Mercury Money Your <br />
        Ultimate{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A785FE] to-[#67E9F0]">
          Finance
        </span>{" "}
        Companion
      </h2>
      <p className="text-[#3B3C45] text-sm lg:text-base max-w-2xl mx-auto mb-6 lg:mb-12">
        Welcome to Mercury, your all-in-one finance management solution! Take
        control of your financial matters like never before with our powerful
        and user-friendly app.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index}>
            <img src={feature.img} alt="" />
            <div className="bg-black py-4 rounded-2xl text-white font-semibold text-sm lg:text-sm 2xl:text-lg flex items-center justify-between px-6">
              {feature.title}
              <FaArrowUpLong className="w-3 lg:w-5 h-3 lg:h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
