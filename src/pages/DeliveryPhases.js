import React from 'react';
import { FaMapMarkerAlt, FaTruck, FaBox, FaCheckCircle } from 'react-icons/fa';

const phases = [
  { icon: <FaMapMarkerAlt />, label: 'Order Placed', status: 'Completed' },
  { icon: <FaTruck />, label: 'In Transit', status: 'In Progress' },
  { icon: <FaBox />, label: 'Out for Delivery', status: 'Pending' },
  { icon: <FaCheckCircle />, label: 'Delivered', status: 'Pending' },
];

function DeliveryPhases() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-[#007bff] mb-4">Delivery Phases</h2>
      <div className="flex items-center justify-between">
        {phases.map((phase, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`p-4 rounded-full mb-2 ${phase.status === 'Completed' ? 'bg-green-200' : phase.status === 'In Progress' ? 'bg-yellow-200' : 'bg-gray-200'}`}>
              {phase.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{phase.label}</h3>
            <p className={`text-sm ${phase.status === 'Completed' ? 'text-green-600' : phase.status === 'In Progress' ? 'text-yellow-600' : 'text-gray-600'}`}>
              {phase.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveryPhases;
