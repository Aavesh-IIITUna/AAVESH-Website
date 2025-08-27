import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import aaveshLogo from "../assets/AAVESH_LOGO.svg";
import { NAV_LINKS } from '../constants/navbar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isDesktop = () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const smoothScrollTo = (elementId) => {
    // First go to top, then to the target for a full-page scroll feel
    window.scrollTo({ top: 0, behavior: "smooth" });
    const start = Date.now();
    const maxWait = 1800;
    const interval = setInterval(() => {
      const atTop = Math.round(window.scrollY) === 0;
      const timedOut = Date.now() - start > maxWait;
      if (atTop || timedOut) {
        clearInterval(interval);
        const element = document.getElementById(elementId);
        setTimeout(() => {
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }
        }, 20);
      }
    }, 50);
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
        onClick={() => { if (!isDesktop()) toggleSidebar(); }}
        onMouseEnter={() => { if (isDesktop()) setIsOpen(true); }}
        role="button"
        aria-label="Open navigation menu"
        title="Menu"
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
        onMouseLeave={() => { if (isDesktop()) setIsOpen(false); }}
      >
        {/* Navigation Menu - now mapped from NAV_LINKS */}
        <div className="py-6 pt-24">
          <ul className="space-y-2 px-3">
            {NAV_LINKS.map((nav) => (
              <li key={nav.label}>
                {nav.type === 'link' ? (
                  <Link
                    to={nav.to}
                    onClick={() => setIsOpen(false)}
                    className="cursor-target group flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg"
                  >
                    <span className="font-medium font-iceland text-2xl">{nav.label}</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  </Link>
                ) : (
                  <a
                    href={nav.href}
                    onClick={(e) => handleSmoothClick(e, nav.href.replace('#', ''))}
                    className={`cursor-target group flex items-center px-4 py-3 ${nav.label === 'Home' ? 'text-white' : 'text-gray-300'} hover:bg-gray-800/60 hover:text-blue-400 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 rounded-r-lg`}
                  >
                    <span className="font-medium font-iceland text-2xl">{nav.label}</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
