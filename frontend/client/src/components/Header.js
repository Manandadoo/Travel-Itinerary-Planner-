// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>TravelEase</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/intro">Home</Link></li>
          <li><Link to="/destination">Destinations</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
