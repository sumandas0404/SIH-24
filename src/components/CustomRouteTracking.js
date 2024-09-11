import React, { useState, useEffect } from 'react';
import './CustomRouteTracking.css';
import { FaMapMarkerAlt, FaFlagCheckered } from 'react-icons/fa';

const generatePath = (type) => {
  // Simulate different paths for different conditions
  switch (type) {
    case 'normal':
      return 'M50,100 Q150,20 250,70 T450,90 T750,100'; // Curvy normal route
    case 'disaster':
      return 'M50,100 Q200,10 350,60 T600,80 T750,100'; // Curvy disaster route
    case 'optimized':
      return 'M50,100 Q100,50 250,60 T500,70 T750,100'; // Curvy optimized route
    default:
      return 'M50,100 Q150,20 250,70 T450,90 T750,100'; // Default to normal
  }
};

const CustomRouteTracking = () => {
  const [pathType, setPathType] = useState('normal'); // Default to normal path
  const [path, setPath] = useState(generatePath(pathType));

  useEffect(() => {
    // Simulate changing paths every few seconds
    const interval = setInterval(() => {
      // Toggle path type for demonstration
      setPathType((prev) => {
        if (prev === 'normal') return 'disaster';
        if (prev === 'disaster') return 'optimized';
        return 'normal';
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPath(generatePath(pathType));
  }, [pathType]);

  return (
    <div className="route-container">
      <div className="route-header">
        <h2>Track Your Route Progress</h2>
        <p>Explore dynamic route adjustments for a comprehensive journey visualization.</p>
      </div>
      <div className="route-graphics">
        {/* SVG for the curved routes */}
        <svg className="route-path" viewBox="0 0 800 150">
          {/* Normal Path */}
          <path
            d={generatePath('normal')}
            stroke="#1c88e5"
            strokeWidth="4"
            fill="none"
            className="route-path-normal"
          />
          {/* Disaster Path */}
          <path
            d={generatePath('disaster')}
            stroke="#f44336"
            strokeWidth="4"
            fill="none"
            className="route-path-disaster"
          />
          {/* Optimized Path */}
          <path
            d={generatePath('optimized')}
            stroke="#4caf50"
            strokeWidth="4"
            fill="none"
            className="route-path-optimized"
          />
          {/* Animated Path */}
          <path
            d={path}
            stroke="#ff9800"
            strokeWidth="4"
            fill="none"
            className="animated-route"
          />
        </svg>
        {/* Icons at start and end */}
        <div className="icon-container source-icon">
          <FaMapMarkerAlt size={40} color="#e53935" aria-label="Start" />
          <span>Start</span>
        </div>
        <div className="icon-container destination-icon">
          <FaFlagCheckered size={40} color="#43a047" aria-label="Finish" />
          <span>Finish</span>
        </div>
      </div>
    </div>
  );
};

export default CustomRouteTracking;
