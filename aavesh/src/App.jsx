import Home  from "./pages/Home";
// import Carousel from "./components/Carousel";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/team' element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
