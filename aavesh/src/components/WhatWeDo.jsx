import { marqueeDataTop, marqueeDataBottom } from '../constants/whatWeDo'; // Import static data from constants
import PropTypes from 'prop-types';
import { useState } from 'react';


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
        
        <header className="w-full mb-16 md:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-widest">What we do!</h1>
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
