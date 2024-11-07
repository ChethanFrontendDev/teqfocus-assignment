// // src/App.jsx

import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import DashboardPage from "./components/DashboardPage";

const Navbar_Data = [
  "/images/NavBar_Images/Frame.svg",
  "/images/NavBar_Images/home.svg",
  "/images/NavBar_Images/magicpen.svg",
  "/images/NavBar_Images/danger.svg",
  "/images/NavBar_Images/money-send.svg",
  "/images/NavBar_Images/math.svg",
  "/images/NavBar_Images/diagram.svg",
  "/images/NavBar_Images/align-horizontally.svg",
  "/images/NavBar_Images/user.svg",
  "/images/NavBar_Images/share.svg",
];

const App = () => {
  return (
    <div className="flex bg-[#F5F7F9]">
      <Navbar data={Navbar_Data} />
      <div className="flex flex-col w-full">
        <Header />
        <div className="ml-[-100px] mt-[-20px] p-6 flex-grow">
          <DashboardPage />
        </div>
      </div>
    </div>
  );
};

export default App;
