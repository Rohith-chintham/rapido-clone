
import React, { useState, useEffect } from 'react';
import LocationInput from './LocationInput';
import VehicleSelector from './VehicleSelector';
import FareEstimate from './FareEstimate';
import BookRideButton from './BookRideButton';
import { toast } from 'sonner';

const RideBookingForm: React.FC = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('bike');
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock data for fare estimation
  const fareData = {
    bike: { distance: 3.2, duration: 12, price: 50 },
    auto: { distance: 3.2, duration: 18, price: 75 },
    car: { distance: 3.2, duration: 15, price: 120 }
  };

  const handleFindRides = () => {
    if (!pickup || !dropoff) {
      toast.error('Please enter pickup and drop-off locations');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Rides found! Choose your preferred vehicle.');
    }, 1500);
  };

  const isFormValid = Boolean(pickup && dropoff);

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-rapido-dark">Book a Ride</h2>
        <p className="text-sm text-gray-500">Get a ride in minutes!</p>
      </div>

      <div className="space-y-4">
        <LocationInput
          label="Pickup Location"
          placeholder="Enter pickup location"
          value={pickup}
          onChange={setPickup}
        />
        
        <LocationInput
          label="Drop-off Location"
          placeholder="Enter drop-off location"
          value={dropoff}
          onChange={setDropoff}
        />
        
        <button 
          className="rapido-btn w-full"
          disabled={!isFormValid || isLoading}
          onClick={handleFindRides}
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Finding rides...</span>
            </div>
          ) : (
            'Find Rides'
          )}
        </button>
      </div>

      {isFormValid && (
        <>
          <div className="border-t border-gray-200 pt-4">
            <VehicleSelector 
              selectedVehicle={selectedVehicle}
              onVehicleSelect={setSelectedVehicle}
            />
          </div>
          
          <FareEstimate 
            distance={fareData[selectedVehicle as keyof typeof fareData].distance}
            duration={fareData[selectedVehicle as keyof typeof fareData].duration}
            price={fareData[selectedVehicle as keyof typeof fareData].price}
          />
          
          <BookRideButton isDisabled={!isFormValid} />
        </>
      )}
    </div>
  );
};

export default RideBookingForm;
