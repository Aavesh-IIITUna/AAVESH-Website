
import PropTypes from 'prop-types';
import { SPONSORS } from '../constants/sponsors';
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
// sponsors now imported from constants


const Sponsors = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Iceland&display=swap');
          .font-iceland {
            font-family: 'Iceland', cursive;
          }
        `}
      </style>
      <div className="flex flex-col items-center min-h-screen bg-black text-white p-4 md:p-8 font-iceland overflow-hidden">
        <header className="w-full max-w-5xl mb-12">
          <div className="inline-flex flex-col">
            <div className="self-start">
              <DecoratorCircleFirst className="text-gray-400" />
            </div>
            <div className="py-2 self-start">
              <h1 className="text-6xl font-normal tracking-[0.3em] uppercase text-gray-200">
                Sponsors
              </h1>
            </div>
            <div className="self-end">
              <DecoratorLinesFirst className="text-gray-400" />
            </div>
          </div>
        </header>
        <main className="w-full h-[60vh] flex items-center justify-center">
          <div className="relative w-full max-w-5xl h-full transform -skew-y-6">
            <img 
              src="/public/armssp.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            {SPONSORS.map(sponsor => (
              <div 
                key={sponsor.id} 
                className="absolute w-32 h-32 md:w-40 md:h-40 transform skew-y-6"
                style={sponsor.style}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-black/50 bg-red-500 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{sponsor.name}</span>
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
