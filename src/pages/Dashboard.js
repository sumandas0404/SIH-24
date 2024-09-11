import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './animations.css'; // Import the CSS file with animations

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md animate-slideIn">
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          <h1 className="text-lg font-semibold text-[#007bff] animate-fadeIn">Dashboard</h1>
          <Link to="/login">
            <button className="bg-[#007bff] text-white px-4 py-2 rounded-md hover:bg-[#0056b3] transition">
              Logout
            </button>
          </Link>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:bg-[#007bff] hover:text-white transition rounded-md animate-fadeIn"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/my-profile"
                className="block px-4 py-2 text-gray-700 hover:bg-[#007bff] hover:text-white transition rounded-md animate-fadeIn"
              >
                My Profile Page
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/my-dashboard"
                className="block px-4 py-2 text-gray-700 hover:bg-[#007bff] hover:text-white transition rounded-md animate-fadeIn"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/cost-calculate"
                className="block px-4 py-2 text-gray-700 hover:bg-[#007bff] hover:text-white transition rounded-md animate-fadeIn"
              >
                Delivery Cost
              </Link>
            </li>
            <li>
  <Link
    to="/dashboard/tracking-parcel"
    className="block px-4 py-2 text-gray-700 hover:bg-[#007bff] hover:text-white transition rounded-md"
  >
    Track Parcel
  </Link>
</li>
            <li>
              <Link
                to="/dashboard/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-[#007bff] hover:text-white transition rounded-md animate-fadeIn"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-[#007bff] hover:text-white transition rounded-md animate-fadeIn"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 animate-fadeIn">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
