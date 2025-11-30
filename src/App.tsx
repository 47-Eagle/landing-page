import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LandingPage from './pages/LandingPage';

// Global styles and animations
import './index.css';

export default function App() {
  return (
    <div className="App min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="text-white text-4xl font-bold">
        47 Eagle Test - Components Loading...
      </div>
      {/* <LandingPage /> */}
    </div>
  );
}
