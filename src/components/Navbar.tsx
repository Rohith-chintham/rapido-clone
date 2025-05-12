
import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-rapido-red">Rapido</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-rapido-red">Ride</a>
            <a href="#" className="text-gray-700 hover:text-rapido-red">About</a>
            <a href="#" className="text-gray-700 hover:text-rapido-red">Safety</a>
            <a href="#" className="text-gray-700 hover:text-rapido-red">Careers</a>
            <a href="#" className="rapido-btn">Download App</a>
          </div>
          
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-rapido-red">Ride</a>
            <a href="#" className="block text-gray-700 hover:text-rapido-red">About</a>
            <a href="#" className="block text-gray-700 hover:text-rapido-red">Safety</a>
            <a href="#" className="block text-gray-700 hover:text-rapido-red">Careers</a>
            <a href="#" className="rapido-btn inline-block">Download App</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
