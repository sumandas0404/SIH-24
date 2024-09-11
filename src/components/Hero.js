import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; // Ensure you have this CSS file for styles

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Revolutionizing Your Mail Experience</h1>
        <p>Discover innovative, reliable, and lightning-fast mail solutions designed to simplify your life and connect the world.</p>
        <Link to="/signup">
          <button className="hero-button">Join Us Today</button>
        </Link>
      </div>
      <div className="hero-graphics">
        <div className="graphic-item graphic-one"></div>
        <div className="graphic-item graphic-two"></div>
        <div className="graphic-item graphic-three"></div>
      </div>
    </div>
  );
};

export default Hero;
