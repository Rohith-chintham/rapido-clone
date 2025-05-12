
import React from 'react';

interface Vehicle {
  id: string;
  name: string;
  price: number;
  eta: string;
}

interface VehicleSelectorProps {
  selectedVehicle: string;
  onVehicleSelect: (vehicleId: string) => void;
}

const VehicleSelector: React.FC<VehicleSelectorProps> = ({ 
  selectedVehicle, 
  onVehicleSelect 
}) => {
  // Sample vehicles data
  const vehicles: Vehicle[] = [
    { id: 'bike', name: 'Bike', price: 50, eta: '4 min' },
    { id: 'auto', name: 'Auto', price: 75, eta: '6 min' },
    { id: 'car', name: 'Car', price: 120, eta: '8 min' },
  ];

  return (
    <div className="space-y-3">
      <h3 className="font-medium text-gray-700">Choose your ride</h3>
      <div className="grid grid-cols-3 gap-2">
        {vehicles.map((vehicle) => (
          <button
            key={vehicle.id}
            className={`p-3 rounded-xl border transition-all ${
              selectedVehicle === vehicle.id
                ? 'border-rapido-red bg-red-50'
                : 'border-gray-200 hover:bg-gray-50'
            }`}
            onClick={() => onVehicleSelect(vehicle.id)}
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 mb-1 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Vehicle icon placeholder */}
                <span className="text-xs font-medium">{vehicle.name[0]}</span>
              </div>
              <span className="text-sm font-medium">{vehicle.name}</span>
              <div className="text-xs mt-1 text-gray-500">₹{vehicle.price}</div>
              <div className="text-xs text-gray-500">{vehicle.eta}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehicleSelector;
