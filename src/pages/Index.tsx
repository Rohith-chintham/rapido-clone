
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { Toaster } from '@/components/ui/sonner';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      <HeroSection />
      
      {/* Features section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Rapido</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the best way to travel in the city with safe, affordable and quick rides.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quick & Reliable",
                description: "Get a ride in minutes with our vast network of captains."
              },
              {
                title: "Affordable Prices",
                description: "Pay less with our competitive pricing and save on travel."
              },
              {
                title: "Safety First",
                description: "All rides are tracked and captains are verified for your safety."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-rapido-light p-6 rounded-2xl text-center">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-rapido-red rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How it works */}
      <section className="py-20 bg-rapido-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Book a ride in 3 easy steps and get moving in no time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Enter Location",
                description: "Tell us where you are and where you want to go."
              },
              {
                step: "2",
                title: "Choose Vehicle",
                description: "Select from bikes, autos or cars based on your need."
              },
              {
                step: "3",
                title: "Confirm & Ride",
                description: "Confirm your booking and enjoy your comfortable ride."
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-rapido-red text-white flex items-center justify-center font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-center text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-rapido-red text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-2">Ready to ride with Rapido?</h2>
              <p className="text-white text-opacity-90">
                Download the app now and book your first ride!
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="py-3 px-6 bg-white text-rapido-red rounded-xl font-medium hover:bg-opacity-90">
                Download App
              </button>
              <button className="py-3 px-6 border border-white rounded-xl font-medium hover:bg-white hover:bg-opacity-10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Rapido</h3>
              <p className="text-gray-400">
                The largest bike taxi service providing quick, safe and affordable rides.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Ride</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Delivery</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Corporate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Captain</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Refund Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Safety</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Rapido Clone. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
