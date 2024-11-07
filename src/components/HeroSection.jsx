// src/components/HeroSection.jsx
import React from 'react';
import Button from './Button';

const HeroSection = () => (
  <div className="bg-blue-100 p-8 text-center">
    <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
    <p className="text-lg mb-6">This is a description of what the app does.</p>
    <div className="flex justify-center space-x-4">
      <Button className="bg-blue-500 text-white">Get Started</Button>
      <Button className="bg-gray-200 text-gray-700">Learn More</Button>
    </div>
  </div>
);

export default HeroSection;
