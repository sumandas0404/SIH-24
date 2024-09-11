import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa'; // Import a mail icon
import logo from '../assets/images/logo.png'; // Import your image (adjust the path as needed)

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <FaEnvelope size={24} className="text-white" />
        <Link to="/" className="text-xl font-bold hover:text-gray-300 flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span>OptiMail Connect</span>
        </Link>
      </div>
      <div className="space-x-6">
        <Link to="/login" className="px-6 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out">
          Login
        </Link>
        <Link to="/signup" className="px-6 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
