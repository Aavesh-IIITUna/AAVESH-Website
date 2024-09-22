import { useEffect,useState} from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    return () => clearTimeout(timer); 
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        <img
          src="logo.png"
          alt="Aavesh Logo"
          className="h-40 animate-logoRotateAndMove"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
