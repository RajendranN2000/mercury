import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
const Header:React.FC = () => {
    const MenuTitle=(title:string)=>{
        return(
            <div className="text-sm text-[#0E0E11]">{title}</div>
        )
    }
  return (
    <div className="grid grid-cols-3 w-full items-center py-6 px-12">
      <img className="h-8 w-auto" src="/assets/images/logo.png" alt="" />
      <div className="flex gap-8 justify-center">  
        {MenuTitle("Product")}
        {MenuTitle("Compare")}
        {MenuTitle("Pricing")}
        {MenuTitle("Contact")}
      </div>
      <div className="flex items-center justify-end gap-4">
        <div className="border border-[#0E0E11] text-sm rounded-full px-5 py-3">Login</div>
        <div className="bg-[#0E0E11] rounded-full flex items-center gap-2 py-3 px-5">
            <div className="text-[#FFFFFF] text-sm">Let's Talk</div>
            <FiArrowUpRight className="h-4 w-4 text-[#FFFFFF]"/>
        </div>
      </div>
    </div>
  );
};
export default Header;
