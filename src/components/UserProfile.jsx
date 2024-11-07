import React, { useState } from "react";

const UserProfile = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Toggle the dropdown visibility
  const handleToggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const options = ["Change Password", "Logout"];
  const username = "John Doe";

  // Extract initials from the username
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleToggleDropdown}
      >
        {/* Avatar with initials */}
        <div className="w-12 h-12 rounded-full bg-[#4CB134] flex justify-center items-center">
          <h1 className="text-sm font-medium text-white">
            {getInitials(username)}
          </h1>
        </div>

        {/* Username and dropdown icon */}
        <div className="flex items-center gap-1.5">
          <h4 className="text-sm font-medium leading-4">{username}</h4>
          <img
            className="w-3 h-1.5 mt-0.5"
            src="/images/Header_Images/dropdown.svg"
            alt="Dropdown icon"
          />
        </div>
      </div>

      {/* Dropdown menu */}
      {dropdownVisible && (
        <ul className="absolute top-full right-0 mt-3 bg-white shadow-md rounded-md z-10 w-[170px]">
          {options.map((option, index) => (
            <li
              key={index}
              className="flex items-center justify-center border-b border-gray-200 hover:bg-gray-100 cursor-pointer h-11 last:border-none"
            >
              <p className="text-sm font-light text-center">{option}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserProfile;
