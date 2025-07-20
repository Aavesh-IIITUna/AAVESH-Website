import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import About from "../components/About"
// import InfoCard from "../components/InfoCard";
import Sponsors from "../components/Sponsors";



const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <Carousel/>
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
