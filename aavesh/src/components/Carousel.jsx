import { useState } from 'react';
import PropTypes from 'prop-types';
import { EVENTS_DATA } from '../constants/events';
import Heading from './Heading';


const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const DownArrowIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path>
  </svg>
);


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

DecoratorCircleFirst.propTypes = {
  className: PropTypes.string
};

DecoratorLinesFirst.propTypes = {
  className: PropTypes.string
};

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % EVENTS_DATA.length);
  };

  const currentEvent = EVENTS_DATA[currentIndex];

  return (
    <div id={props.id} className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-200 p-4 antialiased">
      
      <header className="w-full max-w-5xl mb-20">
        <div className="inline-flex flex-col">
          <div className="self-start">
            <DecoratorCircleFirst className="text-gray-400" />
          </div>
          <div className="self-center">
            <Heading as="h1" size="md" className="py-2">Upcoming Events</Heading>
          </div>
          <div className="self-end">
            <DecoratorLinesFirst className="text-gray-400" />
          </div>
        </div>
      </header>

      <main className="w-full max-w-5xl">
        <div className="bg-[#212121] rounded-lg shadow-2xl shadow-cyan-400/20 grid grid-cols-1 md:grid-cols-2 gap-x-10 items-start relative p-8 md:p-10">
          
          {/* Left side - Image & Date */}
          <div className="flex flex-col md:-mt-16">
            <img 
              src={currentEvent.image} 
              alt={currentEvent.title} 
              className="rounded-md w-full object-contain aspect-square md:aspect-[4/3] shadow-lg shadow-black/30 bg-black"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/212121/FFFFFF?text=Event+Image'; }}
            />
            <div className="w-full flex justify-between items-center mt-6">
              <div className="text-left">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{currentEvent.date.split(' ')[0]}</p>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400">{currentEvent.date.split(' ').slice(1).join(' ')}</p>
              </div>
              {/* Desktop version - social icons and register button */}
              <div className="hidden md:flex gap-4 items-center ml-6">
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><InstagramIcon /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><LinkedinIcon /></a>
                {currentEvent.formLink && (
                  <a 
                    href={currentEvent.formLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cursor-target bg-teal-600 text-white rounded-none px-6 h-14 flex items-center justify-center shadow-lg shadow-black/50 hover:bg-teal-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/50 text-lg font-semibold"
                  >
                    Register
                  </a>
                )}
              </div>
              {/* Mobile version - only social icons */}
              <div className="flex md:hidden gap-4 items-center ml-6">
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><InstagramIcon /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><LinkedinIcon /></a>
              </div>
            </div>
            {/* Mobile-only register and next arrow buttons */}
            <div className="mt-4 flex gap-4 items-center justify-end md:hidden">
              {currentEvent.formLink && (
                <a 
                  href={currentEvent.formLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cursor-target bg-teal-600 text-white rounded-none px-6 h-14 flex items-center justify-center shadow-lg shadow-black/50 hover:bg-teal-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/50 text-lg font-semibold"
                >
                  Register
                </a>
              )}
              <button 
                onClick={handleNextEvent} 
                className="cursor-target bg-teal-600 text-white rounded-none w-14 h-14 flex items-center justify-center shadow-lg shadow-black/50 hover:bg-teal-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
                aria-label="Next Event"
              >
                <DownArrowIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right side - Event Info */}
          <div className="flex flex-col h-full relative pb-16 pt-6 md:pt-0">
            <div className="flex-grow">
              <Heading as="h2" size="md" colorClass="text-white" className="font-bold mb-4">{currentEvent.title}</Heading>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                {currentEvent.description}
              </p>
            </div>
            {/* Desktop-only next arrow */}
            <div className="hidden md:block absolute bottom-0 right-0">
              <button 
                onClick={handleNextEvent} 
                className="cursor-target bg-teal-600 text-white rounded-none w-14 h-14 flex items-center justify-center shadow-lg shadow-black/50 hover:bg-teal-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
                aria-label="Next Event"
              >
                <DownArrowIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

Carousel.propTypes = {
  id: PropTypes.string,
};

export default Carousel;
