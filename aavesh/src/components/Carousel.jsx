import { useState } from 'react';

// --- Sample Data ---
// In a real application, you would likely fetch this data from an API.
const eventsData = [
  {
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'ARD-WIN-O',
    date: '12 DEC 2024',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'TECH FORWARD',
    date: '25 JAN 2025',
    description: 'Join us for a look into the future of technology. A day full of inspiring keynotes, hands-on workshops, and networking opportunities with leaders from around the globe. Discover the next wave of innovation.',
  },
  {
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'MARKETING SUMMIT',
    date: '18 MAR 2025',
    description: 'The premier event for marketing professionals. Learn the latest strategies in digital marketing, content creation, and brand building from the experts who are shaping the industry.',
  },
];

// --- Reusable SVG Icon Components ---
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

// --- SVG Components for the Header Decoration ---

// This component draws the decorator: O---LINE
// eslint-disable-next-line react/prop-types
const DecoratorCircleFirst = ({ className }) => (
  <svg width="70" height="12" viewBox="0 0 70 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* A filled circle on the left */}
    <circle cx="4" cy="6" r="3.5" fill="currentColor"/>
    {/* A single line on the right */}
    <path d="M8 6H70" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

// This component draws the decorator: LINE---O
// eslint-disable-next-line react/prop-types
const DecoratorLinesFirst = ({ className }) => (
  <svg width="70" height="12" viewBox="0 0 70 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* A single line on the left */}
    <path d="M0 6H62" stroke="currentColor" strokeWidth="1"/>
    {/* A filled circle on the right */}
    <circle cx="66" cy="6" r="3.5" fill="currentColor"/>
  </svg>
);

// --- Main App Component ---
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // This function handles the logic for moving to the next event.
  const handleNextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
  };

  const currentEvent = eventsData[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-200 p-4 antialiased">
      
      {/* --- Custom Heading Component --- */}
      <header className="w-full max-w-5xl mb-20">
        <div className="inline-flex flex-col">
          {/* Top decorator, aligned left */}
          <div className="self-start">
            <DecoratorCircleFirst className="text-gray-400" />
          </div>
          
          {/* The actual text, centered */}
          <div className="self-center">
            <h1 className="text-4xl font-light tracking-[0.3em] uppercase text-gray-200 py-2">
              Upcoming Events
            </h1>
          </div>
          
          {/* Bottom decorator, aligned right */}
          <div className="self-end">
            <DecoratorLinesFirst className="text-gray-400" />
          </div>
        </div>
      </header>

      {/* --- Event Card --- */}
      <main className="w-full max-w-5xl">
        <div className="bg-[#212121] rounded-lg shadow-2xl shadow-cyan-400/20 grid grid-cols-1 md:grid-cols-2 gap-x-10 items-start relative p-8 md:p-10">
            
            {/* Image and Date/Social Column */}
            <div className="flex flex-col md:-mt-16">
                <img 
                    src={currentEvent.image} 
                    alt={currentEvent.title} 
                    className="rounded-md w-full object-cover aspect-square md:aspect-[4/3] shadow-lg shadow-black/30"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/212121/FFFFFF?text=Event+Image'; }}
                />
                <div className="w-full flex justify-between items-center mt-6">
                    <div className="text-left">
                        <p className="text-8xl font-bold text-white">{currentEvent.date.split(' ')[0]}</p>
                        <p className="text-3xl text-gray-400">{currentEvent.date.split(' ').slice(1).join(' ')}</p>
                    </div>
                    <div className="flex gap-4 text-gray-400">
                        <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><InstagramIcon /></a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><LinkedinIcon /></a>
                    </div>
                </div>
            </div>

            {/* Text Content and Actions Column */}
            <div className="flex flex-col h-full relative pb-16 pt-6 md:pt-0">
                {/* Title and Description */}
                <div className="flex-grow">
                    <h2 className="text-6xl font-bold text-white mb-4 uppercase">{currentEvent.title}</h2>
                    <p className="text-2xl text-gray-400 leading-relaxed">
                        {currentEvent.description}
                    </p>
                </div>

                {/* Arrow Button */}
                <div className="absolute bottom-0 right-0">
                    <button 
                        onClick={handleNextEvent} 
                        className="bg-teal-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg shadow-black/50 hover:bg-teal-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
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

export default Carousel;
