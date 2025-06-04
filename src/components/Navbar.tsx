import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 font-bold text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                CoolAir
              </span>
              <span className="ml-1 text-gray-800 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                HVAC
              </span>
            </NavLink>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-blue-600 font-medium" 
                  : "text-gray-700 hover:text-blue-600 transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => 
                isActive 
                  ? "text-blue-600 font-medium" 
                  : "text-gray-700 hover:text-blue-600 transition-colors"
              }
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive 
                  ? "text-blue-600 font-medium" 
                  : "text-gray-700 hover:text-blue-600 transition-colors"
              }
            >
              Contact
            </NavLink>
            <div className="flex items-center text-blue-600">
              <Phone size={18} className="mr-2" />
              <span className="font-medium">1-800-COOL-AIR</span>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <div className="flex items-center px-3 py-2 text-blue-600">
              <Phone size={18} className="mr-2" />
              <span className="font-medium">1-800-COOL-AIR</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
