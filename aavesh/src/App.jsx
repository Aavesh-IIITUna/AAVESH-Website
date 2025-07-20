import Carousel from "./components/Carousel";
import Header from "./components/Header";
import "./App.css"

import LoadingScreen from "./components/Loadingscreen";
import { useState } from "react";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="relative">
      {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!loading && (
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/team' element={<TeamPage />} />
            <Route path='/carousel' element={<Carousel />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
