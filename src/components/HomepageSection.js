// frontend/src/components/HomepageSection.js
import React from 'react';
import videoSource from '../assets/images/astar.mp4'; // Adjust the path to your video file

const HomepageSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Experience Our Innovative Solution
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto">
          Discover how our dynamic mail transmission solution is transforming the way parcels are delivered with cutting-edge technology and real-time updates.
        </p>
        <div className="w-full flex justify-center">
          <video 
            src={videoSource} 
            alt="Dynamic Mail Transmission" 
            className="w-full max-w-7xl h-[500px] rounded-lg shadow-lg" // Increased max-width and height
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </section>
  );
};

export default HomepageSection;
