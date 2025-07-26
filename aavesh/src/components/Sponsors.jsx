import PropTypes from 'prop-types';
import {sponsors} from '../constants/sponsors'

// Decorator components remain the same
const DecoratorCircleFirst = ({ className }) => (
  <svg width="70" height="12" viewBox="0 0 70 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="4" cy="6" r="3.5" fill="currentColor"/>
    <path d="M8 6H70" stroke="currentColor" strokeWidth="1"/>
  </svg>
);
DecoratorCircleFirst.propTypes = {
  className: PropTypes.string,
};
const DecoratorLinesFirst = ({ className }) => (
  <svg width="70" height="12" viewBox="0 0 70 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 6H62" stroke="currentColor" strokeWidth="1"/>
    <circle cx="66" cy="6" r="3.5" fill="currentColor"/>
  </svg>
);
DecoratorLinesFirst.propTypes = {
  className: PropTypes.string,
};
//sponsers now imported from constants

const Sponsors = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Iceland&display=swap');
          .font-iceland {
            font-family: 'Iceland', cursive;
          }
          .trapezoid-skew {
            clip-path: polygon(0% 40%, 100% 0%, 100% 100%, 0% 80%);
          }
          @media screen and (max-width: 640px){
          .trapezoid-skew{
            clip-path: polygon(0% 30%, 100% 0%, 100% 100%, 0% 85%);
          }
          }
        `}
      </style>
      <div className="flex flex-col items-center bg-black text-white py-4 md:py-8 font-iceland overflow-hidden">
        <header className="w-full max-w-5xl relative z-10">
          <div className="inline-flex flex-col">
            <div className="self-start">
              <DecoratorCircleFirst className="text-gray-400" />
            </div>
            <div className="py-2 self-start">
              <h1 className="text-2xl sm:text-4xl font-normal tracking-[0.3em] uppercase text-gray-200">
                Sponsors
              </h1>
            </div>
            <div className="self-end">
              <DecoratorLinesFirst className="text-gray-400" />
            </div>
          </div>
        </header>

        <main className="w-full h-[50vh] sm:h-[150vh]  flex items-center justify-center -mt-20">
          <div className="relative w-full h-full grid grid-cols-10 grid-rows-10 trapezoid-skew">
            <div className="absolute inset-0 w-full bg-[#6E6D6DB2]">
              <img
                src="/armssp.jpg"
                alt="Futuristic background"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1024x768/1a1a1a/4a4a4a?text=Image+Error'; }}
              />
            </div>
            {sponsors.map(sponsor => (
              <div 
                key={sponsor.id} 
                className={`relative w-24 h-24 sm:w-56 sm:h-56 transform ${sponsor.gridSize}`}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-black/50">
                  <img 
                    src={sponsor.imageUrl} 
                    alt={sponsor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/160x160/cccccc/333333?text=Error`; }}
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Sponsors;
