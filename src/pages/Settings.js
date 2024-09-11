import React, { useState } from 'react';

function Settings() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    e.preventDefault();

    // Validation
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    // Add password change logic here
    alert('Password changed successfully!');
  };

  const handleAccountDelete = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      setIsDeleting(true);
      // Add account delete logic here
      alert('Account deleted successfully!');
      // Perform logout
      handleLogout();
    }
  };

  const handleLogout = () => {
    // Add logout logic here (e.g., clearing user session, redirecting to login page)
    alert('Logged out successfully!');
    // Example: Redirect to login page
    window.location.href = '/login';
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-[#007bff] mb-6">Settings</h2>

        {/* Password Change Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Change Password</h3>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="New Password"
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${error ? 'border-red-500' : 'border-gray-300'} focus:ring-[#007bff]`}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Confirm Password"
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${error ? 'border-red-500' : 'border-gray-300'} focus:ring-[#007bff]`}
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
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#007bff] text-white p-3 rounded-md hover:bg-[#0056b3] transition"
            >
              Change Password
            </button>
          </form>
        </div>

        {/* Delete Account Section */}
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-red-600 mb-4">Delete Account</h3>
          <p className="mb-4 text-gray-700">This action cannot be undone. Deleting your account will remove all your data permanently.</p>
          <button
            onClick={handleAccountDelete}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
