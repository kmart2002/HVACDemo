import { NavLink } from 'react-router-dom';
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <span className="text-blue-400 font-bold text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                CoolAir
              </span>
              <span className="ml-1 text-white font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                HVAC
              </span>
            </div>
            <p className="mt-4 text-sm">
              Providing quality heating, ventilation, and air conditioning services since 1995. Licensed, bonded, and insured for your peace of mind.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="hover:text-white transition-colors">Services & Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-white transition-colors">Contact Us</NavLink>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Customer Reviews</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">AC Installation</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Heating Systems</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Maintenance Plans</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Duct Cleaning</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">24/7 Emergency Repair</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Cooling Ave, Heatville, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>1-800-COOL-AIR</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@coolairhvac.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Mon-Fri: 8am-6pm<br />Sat: 9am-4pm<br />24/7 Emergency Service</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} CoolAir HVAC. All rights reserved. License #ABC123456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
