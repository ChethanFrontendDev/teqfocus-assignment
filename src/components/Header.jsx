import React from "react";
import SearchInput from "./SearchInput";
import UserProfile from "./UserProfile";

const Header = () => {
  const logo = "/images/Header_Images/green-frame.svg";

  const searchInput_Data = [{placeholder: "Ask for your Engineering Insight"},
    {logo: "/images/Header_Images/search-normal.svg"}]

  return (
    <header className="w-full h-[72px] flex gap-[64px] items-center justify-between px-[20px] py-[18px] bg-white">
      <div className="flex gap-[64px] items-center">
        <div className="flex gap-[6px] items-center">
          <img
            className="w-[24px] h-[24px] object-cover"
            src={logo} // Direct string value
            alt="Logo"
          />
          <h1 className="text-[20px] font-medium leading-[24px]">Dashboard</h1>
        </div>
        <SearchInput data={searchInput_Data} />
      </div>
      <UserProfile />
    </header>
  );
};

export default Header;
