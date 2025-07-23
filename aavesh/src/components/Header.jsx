import { useState } from 'react';
import { Link } from 'react-router-dom';
import aaveshLogo from '../assets/AAVESH_LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-200"
        aria-label="Toggle navigation menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </div>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar Navigation */}
      <nav className={`
        text-white h-screen flex flex-col shadow-2xl
        transition-all duration-300 ease-in-out z-50
        ${isOpen ? 'w-72 translate-x-0' : 'w-72 -translate-x-full md:translate-x-0'}
        md:w-72 md:translate-x-0
      `}
      style={{ 
        background: 'linear-gradient(to bottom, #121212 0%, #000000 100%)'
      }}>
        {/* Logo Section */}
        <div className="p-6">
          <div className="flex items-center justify-start">
            <img 
              src={aaveshLogo} 
              alt="AAVESH Logo" 
              className="h-16 w-auto"
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="py-6">
          <ul className="space-y-2 px-3">
            <li>
              <Link 
                to="/"
                onClick={() => setIsOpen(false)}
                className="group flex items-center px-4 py-3 text-white hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
              >
                <span className="font-medium font-iceland text-2xl">Home</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </Link>
            </li>
            <li>
              <a 
                href="#about"
                onClick={() => setIsOpen(false)}
                className="group flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
              >
                <span className="font-medium font-iceland text-2xl">About</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="#events"
                onClick={() => setIsOpen(false)}
                className="group flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
              >
                <span className="font-medium font-iceland text-2xl">Events</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="#gallery"
                onClick={() => setIsOpen(false)}
                className="group flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
              >
                <span className="font-medium font-iceland text-lg">Gallery</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </a>
            </li>
            <li>
              <Link 
                to="/team"
                onClick={() => setIsOpen(false)}
                className="group flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
              >
                <span className="font-medium font-iceland text-2xl">Team</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </Link>
            </li>
            <li>
              <a 
                href="#sponsors"
                onClick={() => setIsOpen(false)}
                className="group flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
              >
                <span className="font-medium font-iceland text-2xl">Sponsors</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="group flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
              >
                <span className="font-medium font-iceland text-2xl">Contact Us</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;