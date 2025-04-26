import React from "react";

const OurSolution: React.FC = () => {
  const Card = (image: string, title: string, content: string) => {
    return (
      <div className="bg-[#F3F4F6] rounded-xl p-4">
        <img className="w-full h-auto" src={image} alt="" />
        <div className="text-[24px] text-[#0E0E11] font-semibold px-6">
          {title}
        </div>
        <div className="text-[#3B3C45] text-sm leading-[24px] mt-1 px-6">
          {content}
        </div>
      </div>
    );
  };

  const TextCard = (title: string, content: string) => {
    return (
      <div className="border-2 border-[#F3F4F6] rounded-xl p-4 text-center">
        <div className="text-[18px] text-[#3B3C45] font-semibold">{title}</div>
        <div className="text-[#3B3C45] text-sm mt-2">{content}</div>
      </div>
    );
  };

  return (
    <div className="px-32 flex flex-col items-center py-12">
      <div className="inline-block mb-6 rounded-full border border-[#E1E2E5] bg-white text-black font-medium text-sm py-3 px-5">
        Mercury Finance App
      </div>
      <h1 className="text-[56px] leading-[70px] text-[#0E0E11] font-bold text-center ">
        Our Solution Empowers
        <div className="pl-2 text-transparent bg-clip-text bg-gradient-to-r from-[#A785FE] to-[#67E9F0]">
          Financial Freedom!
        </div>
      </h1>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {Card(
          "/assets/images/oursolution/our-solution-1.png",
          "Thousands of data sources of Mercury",
          "Sync your calendar and track your meeting expenses. Mercury will read this and categorize your expense against your budget in seconds."
        )}
        {Card(
          "/assets/images/oursolution/our-solution-2.png",
          "Instant transfers for users",
          "Instantly transfer money to other Mercury users in seconds. Better yet, no transaction fees."
        )}
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
        {TextCard(
          "Real-time Notifications",
          "Our solution empowers users with real-time notifications."
        )}
        {TextCard(
          "Spending Warnings",
          "Our solution provides comprehensive tools to "
        )}
        {TextCard(
          "Designed to Boost Savings",
          "Our solution is designed to boost your savings"
        )}
      </div>
    </div>
  );
};
export default OurSolution;
