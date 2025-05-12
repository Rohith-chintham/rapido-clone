
import React from 'react';
import RideBookingForm from './RideBookingForm';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-20 bg-gradient-to-br from-white via-white to-rapido-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 space-y-12 lg:space-y-0">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rapido-dark leading-tight">
              Book Your <span className="text-rapido-red">Ride</span> in Seconds
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Fast, affordable and safe rides at your fingertips. Choose from bikes, autos, or cars for your daily commute.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rapido-btn flex items-center justify-center gap-2">
                <span>Download App</span>
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50">
                Learn More
              </button>
            </div>
            <div className="pt-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">4.8/5</span> from 10k+ reviews
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-5/12 w-full">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <RideBookingForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements - abstract shapes */}
      <div className="hidden lg:block absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-rapido-red opacity-10"></div>
      <div className="hidden lg:block absolute top-32 right-10 w-40 h-40 rounded-full bg-rapido-yellow opacity-10"></div>
    </div>
  );
};

export default HeroSection;
