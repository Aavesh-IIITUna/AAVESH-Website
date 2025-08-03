import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      if (currentProgress <= 100) {
        setProgress(currentProgress);
      }
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50">
      <AaveshLoader progress={progress} loadingMessage="Initializing Aavesh Systems..." />
    </div>
  );
};

LoadingScreen.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired,
};

function AaveshLoader({ progress, loadingMessage = "Loading Aavesh..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-900 to-black p-4 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative w-40 h-40 mb-8 z-10">
        <div className="absolute inset-0 border-4 border-t-4 border-blue-500 border-opacity-75 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 border-4 border-gray-700 rounded-full animate-pulse-fast"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl font-extrabold text-blue-400 drop-shadow-lg transform -rotate-12 animate-bounce-slow">
            A
          </span>
        </div>
      </div>

      <p className="text-xl text-blue-300 font-semibold tracking-wide mb-4 animate-fade-in-out z-10">
        {loadingMessage}
      </p>

      <div className="w-64 bg-gray-700 rounded-full h-3 relative overflow-hidden z-10">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-300 ease-out shadow-lg"
          style={{ width: `${progress}%` }}
        ></div>
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white text-shadow-sm">
          {progress}%
        </span>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse-fast {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-10px) rotate(-15deg); }
        }
        @keyframes fade-in-out {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
        .animate-pulse-fast {
          animation: pulse-fast 1.5s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }
        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

AaveshLoader.propTypes = {
  progress: PropTypes.number.isRequired,
  loadingMessage: PropTypes.string,
};

export default LoadingScreen;
