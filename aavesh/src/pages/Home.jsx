import WhatWeDo from "../components/WhatWeDo";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import About from "../components/About"
import Header from "../components/Header";
// import InfoCard from "../components/InfoCard";
import Sponsors from "../components/Sponsors";



const Home = () => {
  return (
    <>
      {/* Hero section with navbar */}
      <div className="flex">
        <Header />
        <div className="flex-1">
          <Hero />
        </div>
      </div>
      
      {/* Rest of the sections without navbar - full width */}
      <About/>
      <Carousel/>
      <WhatWeDo />
      {/* <InfoCard
        image={dummyData.image}
        name={dummyData.name}
        position={dummyData.position}
        email={dummyData.email}
      /> */}
      <Sponsors/>
    </>
  )
}

export default Home;
