import Carousel from "./components/Carousel";
import "./App.css"

import LoadingScreen from "./components/Loadingscreen";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import Developers from "./pages/Developers";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmoothScrollManager from './components/SmoothScrollManager';
import TargetCursor from './components/TargetCursor';
import { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  // Detect mobile view
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative">
      {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!loading && (
        <BrowserRouter>
          <SmoothScrollManager />
          {!isMobile && <TargetCursor />}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/team' element={<TeamPage />} />
            <Route path='/developers' element={<Developers />} />
            <Route path='/carousel' element={<Carousel />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
