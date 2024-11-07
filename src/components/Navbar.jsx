// src/components/Navbar.jsx
import React from "react";

const Navbar = ({data}) => (
  <nav>
    <div className="w-[80px] h-[80px] flex justify-center items-center border-b-2 bg-[#FFFFFF]">
      <div className="w-[65px] h-[65px] py-[4px] px-[7px]">
        <img
          className="w-full h-full object-cover"
          src="/images/NavBar_Images/Logo.svg"
          alt="logo"
        />
      </div>
    </div>
    {data.map((item, idx) => (
      <div key={idx} className="w-[80px] h-[80px] flex justify-center items-center border-b-2 bg-[#FFFFFF]">
      <div className="w-[24px] h-[24px]">
        <img
          className="w-full h-full object-cover"
          src={item}
          alt="frame icon"
        />
      </div>
    </div>
    ))}
  </nav>
);

export default Navbar;
