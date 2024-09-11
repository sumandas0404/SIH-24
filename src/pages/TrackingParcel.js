// src/components/TrackingParcel.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function TrackingParcel() {
  const [trackingId, setTrackingId] = useState('');
  const [parcelData, setParcelData] = useState(null);
  const [postOfficeData, setPostOfficeData] = useState(null);
  const [error, setError] = useState('');

  const handleTrack = async (e) => {
    e.preventDefault();

    // Validation
    if (!trackingId.trim()) {
      setError('Tracking ID cannot be empty.');
      return;
    }

    setError('');

    // Replace with your API call
    try {
      const fetchedParcelData = await fetchParcelData(trackingId);
      const nearestPostOffice = await fetchNearestPostOffice(fetchedParcelData.location);

      setParcelData(fetchedParcelData);
      setPostOfficeData(nearestPostOffice);
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    }
  };

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Track Your Parcel</h2>
      <form onSubmit={handleTrack} className="mb-6">
        <input
          type="text"
          placeholder="Enter Tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${error ? 'border-red-500' : 'border-gray-300'} focus:ring-[#007bff]`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <button
          type="submit"
          className="mt-4 bg-[#007bff] text-white px-4 py-2 rounded-md hover:bg-[#0056b3] transition"
        >
          Track
        </button>
      </form>

      {parcelData && (
        <div className="space-y-4">
          <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-xl font-semibold">Parcel Details</h3>
            <p><strong>Status:</strong> {parcelData.status}</p>
            <p><strong>Location:</strong> {parcelData.location}</p>
            <p><strong>Estimated Delivery:</strong> {parcelData.estimatedDelivery} days</p>
          </div>

          {postOfficeData && (
            <div className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-xl font-semibold">Nearest Post Office</h3>
              <p><strong>Name:</strong> {postOfficeData.name}</p>
              <p><strong>Address:</strong> {postOfficeData.address}</p>
              <p><strong>Contact:</strong> {postOfficeData.contact}</p>
            </div>
          )}

          {postOfficeData && (
            <div className="w-full h-64 bg-gray-200 rounded-md">
              <MapContainer center={postOfficeData.coordinates} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={postOfficeData.coordinates}>
                  <Popup>
                    {postOfficeData.name}<br />{postOfficeData.address}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Mock API calls
const fetchParcelData = async (trackingId) => {
  // Replace with actual API call
  return {
    status: 'In Transit',
    location: 'City Center',
    estimatedDelivery: 3
  };
};

const fetchNearestPostOffice = async (location) => {
  // Replace with actual API call
  return {
    name: 'Main Post Office',
    address: '123 Main St, City Center',
    contact: '555-1234',
    coordinates: [51.505, -0.09]
  };
};

export default TrackingParcel;
