// src/components/IntroPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/Intro.css';  // Import the unique CSS file

const Intro = () => {
  return (
    <div className="intro-page">
      <Header /> {/* Include Header at the top */}
      <section id="home">
        <div className="hero">
          <h2>Explore the World with TravelEase</h2>
          <p>Find the best deals on flights, hotels, and activities.</p>
          <Link to="/destination" className="btn">Get Started</Link>
        </div>
      </section>
      <Footer /> {/* Include Footer at the bottom */}
    </div>
  );
};

export default Intro;
