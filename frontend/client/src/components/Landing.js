// src/components/Landing.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';  // Import the unique CSS file

const Landing = () => {
  useEffect(() => {
    // Add the landing-page class to the body when this page is rendered
    document.body.classList.add('landing-page');
    
    // Clean up by removing the class when leaving this page
    return () => document.body.classList.remove('landing-page');
  }, []);

  return (
    <div className="landing-container">
     <h1 style={{ color: '#ff6f61' }}>Welcome to TravelEase</h1>

      <Link to="/register" className="btn">Register</Link>
      <Link to="/login" className="btn">Login</Link>
    </div>
  );
};

export default Landing;
