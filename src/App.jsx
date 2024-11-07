// // src/App.jsx

import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';

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
    <div className='flex bg-[#F5F7F9]'>
      <Navbar data={Navbar_Data}/>
      <Header />
    </div>
  )
}

export default App



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import DashboardPage from './pages/DashboardPage';

// const App = () => (
//   <Router>
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <HeroSection />
//       <div className="container mx-auto">
//         <Routes>
//           <Route path="/" element={<DashboardPage />} />
//           {/* Additional routes can go here */}
//         </Routes>
//       </div>
//     </div>
//   </Router>
// );

// export default App;
