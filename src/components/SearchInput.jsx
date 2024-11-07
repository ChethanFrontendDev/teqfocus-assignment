import React from "react";

const SearchInput = ({ data }) => {
  // Merge the objects from the array into one object
  const { placeholder, logo } = Object.assign({}, ...data);

  return (
    <div className="flex items-center justify-between">
      <div className="relative overflow-hidden flex items-center">
        <input
          type="text"
          className="pl-[32px] pr-[10px] w-full max-w-[257px] h-[36px] bg-[#F5F7F9] placeholder:text-[#A4A5A6] placeholder:text-[12px] placeholder:font-light placeholder:leading-[16px] border-none rounded-[4px] outline-none"
          placeholder={placeholder}
        />
        <img
          className="w-[16px] absolute left-[8px] top-1/2 transform -translate-y-1/2"
          src={logo}
          alt="Search Icon"
        />
      </div>
    </div>
  );
};

export default SearchInput;
