import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './animations.css'; // Import the CSS file with animations

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = 'Invalid email address.';
    if (!password) errors.password = 'Password is required.';
    if (password && password.length < 6) errors.password = 'Password must be at least 6 characters long.';
    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Add authentication logic here
      // If authentication is successful:
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f7f9] container">
      <h2 className="text-4xl font-bold mb-6 text-[#007bff] animate-fadeIn">Login</h2>
      <form onSubmit={handleLogin} className="bg-white p-8 shadow-lg rounded-lg w-96 animate-scaleUp">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className={`w-full p-3 border rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#007bff] ${errors.email ? 'border-red-500' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className={`w-full p-3 border rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#007bff] ${errors.password ? 'border-red-500' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-[#007bff] text-white p-3 rounded-md hover:bg-[#0056b3] transition-transform transform hover:scale-105"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-[#007bff] hover:underline"
          >
            Return to Home Page
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
