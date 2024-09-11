import React from 'react';
import { FaMapSigns, FaShippingFast, FaSyncAlt, FaRegMoneyBillAlt, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import { GiPathDistance } from 'react-icons/gi';
import { BsBell } from 'react-icons/bs';
import { motion } from 'framer-motion';
import './Benefits.css'; // Ensure this CSS file is imported

const Benefits = () => {
  const benefits = [
    {
      icon: <FaMapSigns className="text-teal-500 w-12 h-12 mb-4" />,
      title: 'Easy Tracking',
      description: 'Our platform provides seamless parcel tracking, keeping you updated at every stage of the journey.',
    },
    {
      icon: <GiPathDistance className="text-indigo-600 w-12 h-12 mb-4" />,
      title: 'Most Efficient Route',
      description: 'We optimize the delivery routes to save time, ensuring faster and more reliable deliveries.',
    },
    {
      icon: <FaSyncAlt className="text-yellow-600 w-12 h-12 mb-4" />,
      title: 'Real-Time Updates',
      description: 'Get real-time notifications on your parcels, keeping you informed and in control.',
    },
    {
      icon: <FaRegMoneyBillAlt className="text-red-600 w-12 h-12 mb-4" />,
      title: 'Cost-Effective',
      description: 'Deliver packages at lower costs without compromising on speed or quality.',
    },
    {
      icon: <FaShieldAlt className="text-green-500 w-12 h-12 mb-4" />,
      title: 'Improved Reliability',
      description: 'Our platform minimizes disruptions by dynamically adjusting transport modes in real-time. This ensures more reliable delivery times, even during unexpected situations like natural disasters, strikes, or traffic blockages.',
    },
   
    {
      icon: <BsBell className="text-blue-600 w-12 h-12 mb-4" />,
      title: 'Customer Alerts',
      description: 'Receive instant alerts to stay updated on the latest parcel status changes.',
    },
    {
      icon: <FaShippingFast className="text-purple-600 w-12 h-12 mb-4" />,
      title: 'Fast Delivery',
      description: 'Experience rapid delivery times thanks to our streamlined process and optimized routing.',
    },
    {
      icon: <FaLeaf className="text-green-700 w-12 h-12 mb-4" />,
      title: 'Sustainable Delivery Solutions',
      description: 'By optimizing transport routes and utilizing the most efficient modes of transportation, our platform reduces fuel consumption and carbon emissions, promoting environmentally-friendly mail transmission solutions.',
    },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-glass p-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                animate={{
                  rotate: [0, 15, -15, 0], // Rotate animation
                  scale: [1, 1.1, 1], // Optional pulse effect
                }}
                transition={{
                  rotate: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  scale: {
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-700 text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
