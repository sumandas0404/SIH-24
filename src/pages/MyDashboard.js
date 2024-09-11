import React, { useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';
import MapComponent from './MapComponent';
import DeliveryPhases from './DeliveryPhases';

function MyDashboard() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [timeFactor, setTimeFactor] = useState('');
  const [sourceCoords, setSourceCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [error, setError] = useState('');

  const handleGeocode = async (location) => {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: location,
          format: 'json',
          limit: 1
        },
      });

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { lat, lon };
      } else {
        throw new Error('Location not found');
      }
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  const handleAddLocations = async (e) => {
    e.preventDefault();
    setError('');

    const sourceLocation = await handleGeocode(source);
    const destinationLocation = await handleGeocode(destination);

    if (sourceLocation && destinationLocation) {
      setSourceCoords(sourceLocation);
      setDestinationCoords(destinationLocation);
      generateCSV({ source, destination, timeFactor, ...sourceLocation, ...destinationLocation });
    }
  };

  const generateCSV = (data) => {
    // Convert the data to CSV format
    const csv = Papa.unparse([data]);

    // Create a Blob from the CSV data
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    // Save the Blob as a file
    saveAs(blob, 'locations_data.csv');
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-[#007bff]">Dashboard</h2>
      <form onSubmit={handleAddLocations} className="space-y-4">
        <div>
          <label className="block text-gray-700">Source Location (City/State)</label>
          <input
            type="text"
            placeholder="Enter city or state"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">Destination Location (City/State)</label>
          <input
            type="text"
            placeholder="Enter city or state"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">Time Factor</label>
          <input
            type="text"
            placeholder="Enter time factor"
            value={timeFactor}
            onChange={(e) => setTimeFactor(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-[#007bff] text-white px-4 py-2 rounded-md hover:bg-[#0056b3] transition"
        >
          Add Locations
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
      <div className="mt-6">
        {sourceCoords && destinationCoords && (
          <>
            <MapComponent source={sourceCoords} destination={destinationCoords} />
            <DeliveryPhases />
          </>
        )}
      </div>
    </div>
  );
}

export default MyDashboard;
