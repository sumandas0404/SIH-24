import React, { useState } from 'react';

const CostCalculator = () => {
  const [sourcePincode, setSourcePincode] = useState('');
  const [destinationPincode, setDestinationPincode] = useState('');
  const [weight, setWeight] = useState('');
  const [transportMode, setTransportMode] = useState('land');
  const [cost, setCost] = useState(null);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (!sourcePincode.match(/^\d{6}$/)) {
      newErrors.sourcePincode = 'Source pincode must be a 6-digit number.';
    }
    if (!destinationPincode.match(/^\d{6}$/)) {
      newErrors.destinationPincode = 'Destination pincode must be a 6-digit number.';
    }
    if (!weight || isNaN(weight) || weight <= 0) {
      newErrors.weight = 'Weight must be a positive number.';
    }
    return newErrors;
  };

  const calculateCost = () => {
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // Example cost calculation logic
    let baseCost = 0;
    let weightCost = 0;
    let transportCost = 0;

    // Base cost based on source and destination
    baseCost = 50; // Example base cost

    // Cost based on weight
    weightCost = weight * 5; // Example cost per kg

    // Additional cost based on transport mode
    switch (transportMode) {
      case 'land':
        transportCost = 10;
        break;
      case 'rail':
        transportCost = 20;
        break;
      case 'air':
        transportCost = 30;
        break;
      case 'water':
        transportCost = 25;
        break;
      default:
        transportCost = 0;
    }

    // Calculate total cost
    const totalCost = baseCost + weightCost + transportCost;
    setCost(totalCost);
  };

  return (
    <div className="cost-calculator p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Cost Calculator</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Source Pincode</label>
        <input
          type="text"
          value={sourcePincode}
          onChange={(e) => setSourcePincode(e.target.value)}
          className={`mt-1 block w-full border ${errors.sourcePincode ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
        />
        {errors.sourcePincode && <p className="text-red-500 text-sm">{errors.sourcePincode}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Destination Pincode</label>
        <input
          type="text"
          value={destinationPincode}
          onChange={(e) => setDestinationPincode(e.target.value)}
          className={`mt-1 block w-full border ${errors.destinationPincode ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
        />
        {errors.destinationPincode && <p className="text-red-500 text-sm">{errors.destinationPincode}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className={`mt-1 block w-full border ${errors.weight ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
        />
        {errors.weight && <p className="text-red-500 text-sm">{errors.weight}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Transport Mode</label>
        <select
          value={transportMode}
          onChange={(e) => setTransportMode(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        >
          <option value="land">Land</option>
          <option value="rail">Rail</option>
          <option value="air">Air</option>
          <option value="water">Water</option>
        </select>
      </div>
      <button
        type="button"
        onClick={calculateCost}
        className="bg-[#007bff] text-white px-4 py-2 rounded-md hover:bg-[#0056b3] transition"
      >
        Calculate Cost
      </button>
      {cost !== null && (
        <div className="mt-4 text-lg font-semibold">
          Estimated Delivery Cost: ₹{cost}
        </div>
      )}
    </div>
  );
};

export default CostCalculator;
