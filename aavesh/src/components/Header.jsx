import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import aaveshLogo from "../assets/AAVESH_LOGO.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    setIsOpen(false);
  };

  const handleSmoothClick = (e, elementId) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        smoothScrollTo(elementId);
      }, 100);
    } else {
      smoothScrollTo(elementId);
    }
  };

  return (
    <>
      <div
        className="absolute md:fixed top-4 left-4 z-50 cursor-pointer"
        onClick={toggleSidebar}
        role="button"
        aria-label="Open navigation menu"
      >
        <img
          src={aaveshLogo}
          alt="AAVESH Logo"
          className="h-10 w-10  md:h-14 md:w-14 mt-5 top-4 object-cover rounded-full transition-transform duration-300 hover:scale-110"
        />
      </div>

  {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      <nav
        className={`
          fixed top-0 left-0 w-72 h-screen text-white flex flex-col shadow-2xl z-40
          transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
        style={{
          background: "linear-gradient(to bottom, #121212 0%, #000000 100%)",
        }}
      >
        {/* Navigation Menu */}
        <div className="py-6 pt-24">
          <ul className="space-y-2 px-3">
            <li>
              <a
                href="#home"
                onClick={(e) => handleSmoothClick(e, "home")}
                className="group flex items-center px-4 py-3 text-white hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
              >
                <span className="font-medium font-iceland text-2xl">Home</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothClick(e, "about")}
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
                onClick={(e) => handleSmoothClick(e, "events")}
                className="group flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
              >
                <span className="font-medium font-iceland text-2xl">
                  Events
                </span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#whatwedo"
                onClick={(e) => handleSmoothClick(e, "whatwedo")}
                className="group flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
              >
                <span className="font-medium font-iceland text-2xl">
                  What We Do
                </span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={(e) => handleSmoothClick(e, "gallery")}
                className="group flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
              >
                <span className="font-medium font-iceland text-2xl">
                  Gallery
                </span>
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
                onClick={(e) => handleSmoothClick(e, "sponsors")}
                className="group flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
              >
                <span className="font-medium font-iceland text-2xl">
                  Sponsors
                </span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothClick(e, "contact")}
                className="group flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
              >
                <span className="font-medium font-iceland text-2xl">
                  Contact Us
                </span>
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
