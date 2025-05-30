import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const MenuTitle = (title: string, dropDown?: boolean) => (
    <div className="text-xs lg:text-sm text-[#0E0E11] flex items-center gap-1">
      {title}
      <IoIosArrowDown className={`h-4 mt-1 ${dropDown ? "block" : "hidden"}`} />
    </div>
  );

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-20 w-full flex justify-between items-center py-6 lg:py-8 px-6 md:px-12 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <img
          className="h-6 lg:h-8 w-auto"
          src="/assets/images/logo.png"
          alt="Logo"
        />
        <div className="hidden md:flex gap-8 justify-center">
          {MenuTitle("Product")}
          {MenuTitle("Compare", true)}
          {MenuTitle("Pricing")}
          {MenuTitle("Contact")}
        </div>

        <div className="hidden md:flex items-center justify-end gap-4">
          <div className="border border-[#0E0E11] text-xs lg:text-sm rounded-full px-3 lg:px-5 py-2 lg:py-3">
            Login
          </div>
          <div className="bg-[#0E0E11] rounded-full flex items-center gap-2 py-2 lg:py-3 px-3 lg:px-5">
            <div className="text-[#FFFFFF] text-xs lg:text-sm">Let's Talk</div>
            <FiArrowUpRight className="h-3 w-3 text-[#FFFFFF]" />
          </div>
        </div>

        <div className="md:hidden">
          <FiMenu className="h-6 w-6" onClick={toggleSidebar} />
        </div>
      </div>

      <div
        className={`fixed z-30 top-0 right-0 h-full w-full min-h-[100vh] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
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
