import PropTypes from 'prop-types';
import Heading from './Heading';
import ElectricBorder from './ElectricBorder';

const About = (props) => {
  return (
    <div id={props.id} className="w-full bg-black flex flex-col items-center justify-center py-16 sm:py-20 px-4 relative overflow-hidden">

      {/* Mobile heading */}
      <div className="w-full max-w-7xl lg:hidden text-center mb-8">
  <Heading as="h2" align="center" size="md" colorClass="text-white" className="tracking-wide">We are</Heading>
  <Heading as="h1" align="center" size="md" colorClass="text-cyan-400 font-iceland" className="font-bold tracking-widest">AAVESH</Heading>
        <p className="text-gray-300 text-base sm:text-lg font-medium mt-2">– ELECTRONICS & TECH SOCIETY–</p>
        <p className="text-gray-300 text-base sm:text-lg font-medium">IIITUNA</p>
      </div>

      {/* Image Row with Center Heading */}
      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-72 px-1 mb-12">

        {/* Left image */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[630px] overflow-hidden rounded-xl shadow-lg">
          <img
            src="./try.webp"
            alt="Left"
            className="w-full h-full object-cover scale-125"
          />
        </div>

        {/* Right image */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[630px] overflow-hidden rounded-xl shadow-lg">
          <img
            src="./try2.webp"
            alt="Right"
            className="w-full h-full object-cover scale-125"
          />
        </div>

        {/* Heading in center of image gap */}
        <div className="hidden lg:block absolute top-3/2 left-1/2 -translate-x-1/2 -translate-y-[130%] text-center z-20">
          <Heading as="h2" align="center" size="md" colorClass="text-white" className="tracking-wide">We are</Heading>
          <Heading as="h1" align="center" size="md" colorClass="text-cyan-400 font-iceland" className="font-bold tracking-widest">AAVESH</Heading>
          <p className="text-gray-300 text-lg font-medium mt-2">– ELECTRONICS & TECH SOCIETY–</p>
          <p className="text-gray-300 text-lg font-medium">IIITUNA</p>
        </div>

        {/* Center overlapping text box in ElectricBorder */}
        <div className="hidden lg:block absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 max-w-2xl text-center">
          <ElectricBorder color="#7df9ff" speed={1.2} chaos={0.7} thickness={10} style={{ borderRadius: 24, padding: 4 }}>
            <div className="bg-black/90 lg:p-12 shadow-2xl m-6">
              <p className="text-white text-base md:text-lg lg:text-xl font-light mb-6 leading-relaxed">
                Aavesh is an electronics society that strives to teach and help students acquire new skills in an era of rapidly evolving technology in the field of electronics and communication engineering.
              </p>
              <p className="text-white text-base md:text-lg lg:text-xl font-light leading-relaxed">
                Empower students to acquire, demonstrate and articulate the value of knowledge and skills that will support them as lifelong lessons.
              </p>
            </div>
          </ElectricBorder>
        </div>
      </div>
      {/* Mobile ElectricBorder card between and over images */}
      <div className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl w-3/4  z-10 text-center">
        <ElectricBorder color="#7df9ff" speed={1.2} chaos={0.7} thickness={10} style={{ borderRadius: 24, padding: 10 }}>
          <div className="bg-black/90 p-6  sm:p-8 shadow-2xl">
            <p className="text-white text-base sm:text-md font-light mb-4 leading-relaxed">
              Aavesh is an electronics society that strives to teach and help students acquire new skills in an era of rapidly evolving technology in the field of electronics and communication engineering.
            </p>
            <p className="text-white text-base sm:text-md font-light leading-relaxed">
              Empower students to acquire, demonstrate and articulate the value of knowledge and skills that will support them as lifelong lessons.
            </p>
          </div>
        </ElectricBorder>
      </div>
    </div>
  );
};

About.propTypes = {
  id: PropTypes.string,
};

export default About;
