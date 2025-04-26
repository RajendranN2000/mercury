import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F3F4F6] rounded-t-3xl px-6 md:px-12 lg:px-20 2xl:px-32 pb-20 py-32">
      <div className=" mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10">
          <div className="flex items-center space-x-4">
            <img className="h-6 lg:h-8 w-auto" src="/assets/images/logo.png" alt="" />
            <div className="h-4 w-[2px] bg-[#C5C8CC]"></div>
            <p className="text-[#3B3C45] text-[10px] lg:text-sm">
              Simple description or information about the company can be added
              here
            </p>
          </div>

          <div className="flex space-x-4 lg:space-x-6 text-[#2B2B31] text-lg lg:text-2xl">
            <FaInstagram className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-xs lg:text-sm text-[#6D7079]">
          <div>
            <h3 className="text-[#878A92] font-semibold mb-4 uppercase">
              Flexi System
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              <li>Budgeting</li>
              <li>Savings</li>
              <li>Accounts</li>
              <li className="flex items-center gap-2">
                Secured Data{" "}
                <span className="text-[10px] lg:text-xs bg-white text-[#0E0E11] px-2 py-1 rounded-md shadow">
                  New
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#878A92] font-semibold mb-4 uppercase">
              Solutions
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              <li>Financial Planning</li>
              <li className="flex items-center gap-2">
                Mercury API{" "}
                <span className="text-[10px] lg:text-xs bg-white text-[#0E0E11] px-2 py-1 rounded-md shadow">
                  New
                </span>
              </li>
              <li>Fraud Detections</li>
              <li>Auto - Fix</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#878A92] font-semibold mb-4 uppercase">
              Resources
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              <li>Blog</li>
              <li>Community</li>
              <li>Tutorials</li>
              <li className="flex items-center gap-2">
                Monitoring{" "}
                <span className="text-[10px] lg:text-xs bg-white text-[#0E0E11] px-2 py-1 rounded-md shadow">
                  New
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#878A92] font-semibold mb-4 uppercase">
              Company
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              <li className="flex items-center gap-2">
                Careers{" "}
                <span className="text-[10px] lg:text-xs bg-white text-[#0E0E11] px-2 py-0.5 rounded-md shadow">
                  New
                </span>
              </li>
              <li>Team</li>
              <li>About Us!</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-xs text-[#3B3C45] border-t pt-6 space-y-4 md:space-y-0">
          <p>©2023 Mercury; All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
