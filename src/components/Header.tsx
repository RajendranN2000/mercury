import React, { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const MenuTitle = (title: string) => (
    <div className="text-xs lg:text-sm text-[#0E0E11]">{title}</div>
  );

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <div className="w-full flex justify-between items-center py-6 px-6 md:px-12">
        <img className="h-6 lg:h-8 w-auto" src="/assets/images/logo.png" alt="Logo" />
        <div className="hidden md:flex gap-8 justify-center">
          {MenuTitle("Product")}
          {MenuTitle("Compare")}
          {MenuTitle("Pricing")}
          {MenuTitle("Contact")}
        </div>

        <div className="hidden md:flex items-center justify-end gap-4">
          <div className="border border-[#0E0E11] text-xs lg:text-sm rounded-full px-3 lg:px-5 py-2 lg:py-3">
            Login
          </div>
          <div className="bg-[#0E0E11] rounded-full flex items-center gap-2 py-2 lg:py-3 px-3 lg:px-5">
            <div className="text-[#FFFFFF] text-xs lg:text-sm">Let's Talk</div>
            <FiArrowUpRight className="h-4 w-4 text-[#FFFFFF]" />
          </div>
        </div>

        <div className="md:hidden">
          <FiMenu className="h-6 w-6" onClick={toggleSidebar} />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full min-h-[100vh] z-10 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50",
           ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}  
        `}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <img
            className="h-6 w-auto"
            src="/assets/images/logo.png"
            alt="Logo"
          />
          <FiX className="h-5 w-5 text-black" onClick={toggleSidebar} />
        </div>

        <div className="flex flex-col gap-6 p-6">
          {MenuTitle("Product")}
          {MenuTitle("Compare")}
          {MenuTitle("Pricing")}
          {MenuTitle("Contact")}
          <div className="border border-[#0E0E11] text-xs rounded-full min-w-[100px] text-center px-5 py-2 w-max">
            Login
          </div>
          <div className="bg-[#0E0E11] rounded-full flex items-center gap-2 min-w-[100px] text-center py-3 px-3 w-max">
            <div className="text-[#FFFFFF] text-xs">Let's Talk</div>
            <FiArrowUpRight className="h-3 w-3 text-[#FFFFFF]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
