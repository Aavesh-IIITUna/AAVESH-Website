import { marqueeDataTop, marqueeDataBottom } from '../constants/whatWeDo'; // Import static data from constants
import PropTypes from 'prop-types';
import { useState } from 'react';
import Heading from './Heading';

// Reuse same decorative header visuals as other sections
const DecoratorCircleFirst = ({ className }) => (
  <svg width="70" height="12" viewBox="0 0 70 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="4" cy="6" r="3.5" fill="currentColor"/>
    <path d="M8 6H70" stroke="currentColor" strokeWidth="1"/>
  </svg>
);
const DecoratorLinesFirst = ({ className }) => (
  <svg width="70" height="12" viewBox="0 0 70 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 6H62" stroke="currentColor" strokeWidth="1"/>
    <circle cx="66" cy="6" r="3.5" fill="currentColor"/>
  </svg>
);
DecoratorCircleFirst.propTypes = { className: PropTypes.string };
DecoratorLinesFirst.propTypes = { className: PropTypes.string };


const marqueeStyles = `
  @keyframes marquee-left {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
  @keyframes marquee-right {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0%); }
  }
  .animate-marquee-left {
    animation: marquee-left 40s linear infinite;
  }
  .animate-marquee-right {
    animation: marquee-right 40s linear infinite;
  }
  /* Pause animation on hover, but only if not paused by a hover */
  .marquee-container:not(.paused):hover .animate-marquee-left,
  .marquee-container:not(.paused):hover .animate-marquee-right {
    animation-play-state: paused;
  }
`;


const WhatWeDo = (props) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isTextHovered, setIsTextHovered] = useState(false);

  const handleItemHover = (item) => {
    setHoveredItem(item);
    setIsTextHovered(true);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
    setIsTextHovered(false);
  };

  const topContent = [...marqueeDataTop, ...marqueeDataTop];
  const bottomContent = [...marqueeDataBottom, ...marqueeDataBottom];

  return (
    <>
      <style>{marqueeStyles}</style>
      <div id={props.id} className="relative flex flex-col items-start justify-center bg-black text-white overflow-x-hidden p-4 md:py-12 md:px-24">
        
        <header className="w-full max-w-6xl mb-10 md:mb-20 mx-auto">
          <div className="flex items-center justify-between">
            <div className="inline-flex flex-col">
              <div className="self-start">
                <DecoratorCircleFirst className="text-gray-400" />
              </div>
              <div className="self-center">
                <h1 className="text-4xl sm:text-5xl md:text-5xl font-light tracking-[0.3em] uppercase text-gray-200 py-2">
                  What we do!
                </h1>
              </div>
              <div className="self-end">
                <DecoratorLinesFirst className="text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        
        <div className={`relative w-full marquee-container space-y-8${isTextHovered ? ' paused' : ''}`}>
          {/* Top Row */}
          <div className="overflow-hidden">
            <div 
              className="flex animate-marquee-left"
            >
              {topContent.map((item, index) => (
                <div key={`top-${index}`} 
                     onMouseEnter={() => handleItemHover(item)} 
                     onMouseLeave={handleItemLeave}
                     className="flex-shrink-0 mx-8 text-4xl md:text-6xl font-bold tracking-[0.2em] uppercase whitespace-nowrap cursor-pointer hover:text-teal-400 transition-colors duration-300">
                  {item.text} <span className="text-teal-500 font-sans mx-4">&gt;</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex animate-marquee-right"
            >
              {bottomContent.map((item, index) => (
                <div key={`bottom-${index}`} 
                     onMouseEnter={() => handleItemHover(item)} 
                     onMouseLeave={handleItemLeave}
                     className="flex-shrink-0 mx-8 text-4xl md:text-6xl font-bold tracking-[0.2em] uppercase whitespace-nowrap cursor-pointer hover:text-teal-400 transition-colors duration-300">
                  {item.text} <span className="text-teal-500 font-sans mx-4">&gt;</span>
                </div>
              ))}
            </div>
          </div>
        </div>


        {hoveredItem && (
          <div 
            className="absolute z-10 p-2 bg-white rounded-md shadow-2xl shadow-black/50 -rotate-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            onMouseEnter={() => handleItemHover(hoveredItem)}
            onMouseLeave={handleItemLeave}
          >
            <img
              src={hoveredItem.image}
              alt={hoveredItem.text}
              className="w-96 h-auto rounded"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x150/000000/FFFFFF?text=Image'; }}
            />
          </div>
        )}
      </div>
    </>
  );
}

WhatWeDo.propTypes = {
  id: PropTypes.string,
};

export default WhatWeDo;
