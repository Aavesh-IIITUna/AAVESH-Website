import { useEffect } from 'react';
import PropTypes from 'prop-types';

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50">
      <AaveshMinimalLoader />
    </div>
  );
};

LoadingScreen.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired,
};

function AaveshMinimalLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black p-4">
      <div className="relative w-40 h-40 flex items-center justify-center mb-8">
        <div className="absolute inset-0 border-2 border-white rounded-full opacity-0 animate-pulse-ring"></div>
        <img
          src="/src/assets/AAVESH_LOGO.svg"
          alt="Aavesh Logo"
          className="w-32 h-32 object-contain animate-fade-in drop-shadow-lg rounded-full"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/128x128/000000/FFFFFF?text=A'; }}
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-slow {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;
