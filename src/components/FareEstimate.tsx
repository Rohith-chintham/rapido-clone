
import React from 'react';

interface FareEstimateProps {
  distance: number;
  duration: number;
  price: number;
}

const FareEstimate: React.FC<FareEstimateProps> = ({ 
  distance, 
  duration, 
  price 
}) => {
  return (
    <div className="bg-rapido-light rounded-xl p-4 space-y-3">
      <h3 className="font-medium">Fare Estimate</h3>
      
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center space-x-3">
            <div className="text-lg font-semibold">₹{price}</div>
            <div className="text-xs py-0.5 px-2 bg-green-100 text-green-700 rounded-full">Best Price</div>
          </div>
          <div className="text-sm text-gray-500">
            {distance} km • {duration} min
          </div>
        </div>
        <div className="text-xs text-rapido-red underline cursor-pointer">
          View breakup
        </div>
      </div>

      <div className="text-xs p-2 bg-yellow-50 text-yellow-700 rounded-lg">
        Prices may be higher during peak hours or bad weather.
      </div>
    </div>
  );
};

export default FareEstimate;
