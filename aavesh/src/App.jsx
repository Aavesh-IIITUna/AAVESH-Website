import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoadingScreen from "./components/Loadingscreen";
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="relative">
      {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!loading && (
        <div className="main-content">
          <Header />
          <Hero />
          <Carousel />
        </div>
      )}
    </div>
  );
};

export default App;
