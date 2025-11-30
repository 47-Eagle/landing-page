import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LandingPage from './pages/LandingPage';

// Global styles and animations
import './index.css';

export default function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}
