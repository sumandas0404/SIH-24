import React from 'react';
import { FaMapMarkedAlt, FaRoute, FaClock, FaTruckMoving, FaDollarSign, FaBell, FaSyncAlt, FaCloudSun } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaMapMarkedAlt className="text-[#1e90ff] w-12 h-12 mb-4" />,
      title: 'Effortless Parcel Tracking',
      description:
        'Track your parcels seamlessly with our advanced tracking system that keeps you informed at every step.',
    },
    {
      icon: <FaRoute className="text-[#1e90ff] w-12 h-12 mb-4" />,
      title: 'Optimized Routing',
      description:
        'Discover the most efficient routes to ensure quicker delivery times while saving resources.',
    },
    {
      icon: <FaClock className="text-[#1e90ff] w-12 h-12 mb-4" />,
      title: 'Time-Efficient',
      description:
        'Reduce delays and streamline your delivery process with our time-saving solutions.',
    },
    {
      icon: <FaTruckMoving className="text-[#1e90ff] w-12 h-12 mb-4" />,
      title: 'Real-Time Updates',
      description:
        'Stay informed with real-time updates on your deliveries, ensuring you’re always in the loop.',
    },
    {
      icon: <FaDollarSign className="text-[#1e90ff] w-12 h-12 mb-4" />,
      title: 'Cost-Effective Solutions',
      description:
        'Save money with our affordable and reliable delivery options that do not compromise on quality.',
    },
    {
      icon: <FaBell className="text-[#1e90ff] w-12 h-12 mb-4" />,
      title: 'Instant Alerts',
      description:
        'Receive prompt notifications about your parcel status to keep you informed of any important updates.',
    },
    {
      icon: <FaSyncAlt className="text-[#1e90ff] w-12 h-12 mb-4" />,
      title: 'Dynamic Mode Switching',
      description:
        'In case of unexpected disruptions, the system can switch to the next best available transport mode (e.g., road to rail or air) based on real-time data to minimize delays.',
    },
    {
      icon: <FaCloudSun className="text-[#1e90ff] w-12 h-12 mb-4" />,
      title: 'Predictive Traffic and Weather Analysis',
      description:
        'Utilize real-time traffic and weather data to predict delays and suggest alternate routes or transport modes for timely delivery.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-700 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
