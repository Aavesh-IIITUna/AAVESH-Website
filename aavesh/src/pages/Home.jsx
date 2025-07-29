import WhatWeDo from "../components/WhatWeDo";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import About from "../components/About"
import Header from "../components/Header";
// import InfoCard from "../components/InfoCard";
import Sponsors from "../components/Sponsors";
import Gallery from "../components/Gallery";
// import SocialMediaFeeds from "../components/SocialMediaFeeds";
import OurAim from "../components/OurAim";



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
      <About id="about"/>
      <OurAim id="ouraim"/>
      <Carousel id="events"/>
      <WhatWeDo id="whatwedo" />
      <Gallery id="gallery" />
      {/* <InfoCard
        image={dummyData.image}
        name={dummyData.name}
        position={dummyData.position}
        email={dummyData.email}
      /> */}
      <Sponsors id="sponsors"/>
      {/* <SocialMediaFeeds id="contact" /> */}
    </>
  )
}

export default Home;
