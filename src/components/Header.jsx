import React from "react";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <div>
      <div className="w-full h-[72px] flex gap-[64px] items-center px-[20px] py-[18px] bg-white">
        <div className="flex gap-[6px]">
          <img className="w-[24px] h-[24px] object-cover" src="/images/Header_Images/green-frame.svg" alt="logo framer" />
          <h1 className="text-[20px] font-medium leading-[24px]">Dashboard</h1>
        </div>
        <div>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Header;
