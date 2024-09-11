import React, { useState } from 'react';

function MyProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    gender: 'Male',
    address: 'NIT Silchar',
    state: 'Assam',
    pincode: 'XXXXXX'
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex flex-col w-full h-full p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-[#007bff]">My Profile</h2>
        <button
          onClick={handleEditClick}
          className="bg-[#007bff] text-white px-6 py-2 rounded-lg hover:bg-[#0056b3] transition"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#007bff]">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-2 right-2 bg-[#007bff] text-white p-2 rounded-full shadow-md hover:bg-[#0056b3] transition">
              Edit
            </button>
          </div>
          <div className="text-center mt-4 text-[#007bff] font-semibold">
            <h3 className="text-xl">{profile.name}</h3>
            <p className="text-gray-600">{profile.email}</p>
          </div>
        </div>
        <div className="space-y-4">
          {Object.keys(profile).map((key) => (
            <div key={key} className="flex items-center">
              <label className="w-32 font-semibold text-gray-700">
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name={key}
                  value={profile[key]}
                  onChange={handleChange}
                  className="ml-4 p-2 border rounded-md w-full"
                />
              ) : (
                <span className="ml-4 text-gray-900">{profile[key]}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProfilePage;
