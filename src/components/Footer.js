// frontend/src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-indigo-600 py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-100">Stay Connected with Us</h3>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com"
            className="text-gray-200 hover:text-blue-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a
            href="https://www.twitter.com"
            className="text-gray-200 hover:text-blue-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com"
            className="text-gray-200 hover:text-blue-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-gray-200 hover:text-blue-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-200 text-lg">&copy; SIH 2024. All rights reserved.</p>
        <p className="text-gray-400 text-sm">Developed with passion for Smart India Hackathon</p>
      </div>
    </footer>
  );
};

export default Footer;
