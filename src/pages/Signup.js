import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './animations.css'; // Import the CSS file with animations

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = 'Name is required.';
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = 'Invalid email address.';
    if (!phone.match(/^\d{10}$/)) errors.phone = 'Phone number must be 10 digits.';
    if (password.length < 6) errors.password = 'Password must be at least 6 characters long.';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match.';
    if (!pinCode.match(/^\d{6}$/)) errors.pinCode = 'PIN Code must be 6 digits.';

    return errors;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Add signup logic here
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f7f9] animate-fadeIn">
      <h2 className="text-4xl font-bold mb-6 text-[#007bff] animate-scaleUp">Signup</h2>
      <form onSubmit={handleSignup} className="bg-white p-8 shadow-lg rounded-lg w-96 animate-scaleUp">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className={`w-full p-3 border rounded-md input-field ${errors.name ? 'border-red-500' : ''}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className={`w-full p-3 border rounded-md input-field ${errors.email ? 'border-red-500' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Phone Number"
            className={`w-full p-3 border rounded-md input-field ${errors.phone ? 'border-red-500' : ''}`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <div className="relative mb-4">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            className={`w-full p-3 border rounded-md input-field ${errors.password ? 'border-red-500' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
          >
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div className="relative mb-4">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Confirm Password"
            className={`w-full p-3 border rounded-md input-field ${errors.confirmPassword ? 'border-red-500' : ''}`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
          >
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="PIN Code"
            className={`w-full p-3 border rounded-md input-field ${errors.pinCode ? 'border-red-500' : ''}`}
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
          {errors.pinCode && <p className="text-red-500 text-sm">{errors.pinCode}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-[#007bff] text-white p-3 rounded-md button"
        >
          Signup
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

export default Signup;
