import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-[rgb(6,2,35)] p-4 navbar w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left side: Logo and primary navigation */}
          <div className="flex items-center space-x-3 sm:space-x-8">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img 
                src='../Jurident-Logo.png'
                alt="Jurident Logo" 
                className="h-6 sm:h-8"
              />
            </NavLink>

            {/* Left-aligned navigation links */}
            <NavLink 
              to="/contact"
              className={({ isActive }) =>
                `text-xs sm:text-sm ${isActive ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`
              }
            >
              Contact Us
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) =>
                `text-xs sm:text-sm ${isActive ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors`
              }
            >
              About Us
            </NavLink>
          </div>

          {/* Right side: Login/Signup */}
          <div>
            <NavLink 
              to="/register"
              className={({ isActive }) =>
                `text-xs sm:text-sm ${isActive ? 'text-[#FFD700]' : 'text-[#FFD700]'}`
              }
            >
              Login / Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;