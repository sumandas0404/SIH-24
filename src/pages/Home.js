// frontend/src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';
import CustomRouteTracking from '../components/CustomRouteTracking';
import HomepageSection from '../components/HomepageSection'; // Import the new section

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CustomRouteTracking />
      <Features />
      <HomepageSection />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Home;
