import ReminderManagement from "./ReminderManagement";
import { HiDotsVertical } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import React from "react";
const Management:React.FC = () => {
  const DeviceCard = (title: string) => {
    return (
      <div className="bg-[#F0F1FE] rounded-full text-[#8792F7] py-2 px-3 lg:px-5 text-[10px] lg:text-xs">
        {title}
      </div>
    );
  };
  return (
    <div className="flex flex-col-reverse md:flex-row px-6 md:px-12 lg:px-20 2xl:px-32 gap-4 items-center py-6 lg:py-12">
      <div className="md:w-1/2 relative">
        <div className="relative 2xl:ml-24">
          <img
            className="w-[340px] max-h-[450px] lg:max-h-auto"
            src="/assets/images/smarttools/Background.png"
            alt=""
          />
          <div className="absolute top-12 left-0 lg:left-12 w-full flex flex-col items-center lg:items-start px-8 lg:px-0">
            <div className="bg-[#FFFFFF] rounded-xl p-4 shadow-md w-[300px] lg:w-auto">
              <div className="text-xs lg:text-base">Device and Platform</div>
              <div className="flex gap-2 lg:gap-3 mt-4">
                {DeviceCard("Android")}
                {DeviceCard("IOS")}
                {DeviceCard("Windows")}
                {DeviceCard("Linux")}
              </div>
            </div>
          <div className="lg:ml-24 mt-8">
            <div className="bg-[#FFFFFF] shadow-md rounded-xl p-4 w-[300px]">
              <div className="flex justify-between items-center">
                <div className="text-[#0E0E11] text-sm font-semibold">
                  Shared Team Notes
                </div>
                <HiDotsVertical className="text-[#6D7079] h-4 w-auto" />
              </div>
              <div className="relative mt-4">
                <div className="w-full h-12"></div>
                <div className="absolute left-0 top-0">
                  <img
                    src="/assets/images/white-bg-1.png"
                    className="h-12 w-12 rounded-full"
                    alt="user1"
                  />
                </div>
                <div className="absolute left-8 top-0">
                  <img
                    src="/assets/images/white-bg-2.png"
                    className="h-12 w-12 rounded-full"
                    alt="user2"
                  />
                </div>
                <div className="absolute left-16 top-0">
                  <img
                    src="/assets/images/white-bg-3.png"
                    className="h-12 w-12 rounded-full"
                    alt="user3"
                  />
                </div>
                <div className="absolute left-28 top-4">
                  <div className="text-[#0D0D12] text-xs pl-2">24K+</div>
                </div>
                <div className="bg-[#F3F5F6] rounded-xl p-4 mt-4 flex w-full justify-between items-center">
                  <div className="text-sm">
                    <div className="text-[#6D7079] ">
                      Content Planning
                    </div>
                    <div className="text-[#0E0E11] mt-1 font-semibold">Q4 Content Strategy</div>
                  </div>
                  <FiArrowUpRight className="text-[#0E0E11] h-6 w-6"/>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <ReminderManagement />
      </div>
    </div>
  );
};
export default Management;
