import PropTypes from 'prop-types';

const About = (props) => {
  return (
    <div id={props.id} className="w-full bg-black flex flex-col items-center justify-center py-16 sm:py-20 px-4 relative overflow-hidden">

      {/* Mobile heading */}
      <div className="w-full max-w-7xl lg:hidden text-center mb-8">
        <h2 className="text-white text-xl sm:text-3xl font-light tracking-wide">We are</h2>
        <h1 className="text-cyan-400 text-4xl sm:text-5xl font-bold tracking-widest font-iceland">AAVESH</h1>
        <p className="text-gray-300 text-base sm:text-lg font-medium mt-2">– ELECTRONICS & TECH SOCIETY–</p>
        <p className="text-gray-300 text-base sm:text-lg font-medium">IIITUNA</p>
      </div>

      {/* Image Row with Center Heading */}
      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-72 px-1 mb-12">

        {/* Left image */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[530px] overflow-hidden rounded-xl shadow-lg">
          <img
            src="./try.webp"
            alt="Left"
            className="w-full h-full object-cover scale-125"
          />
        </div>

        {/* Right image */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[530px] overflow-hidden rounded-xl shadow-lg">
          <img
            src="./try2.webp"
            alt="Right"
            className="w-full h-full object-cover scale-125"
          />
        </div>

        {/* Heading in center of image gap */}
        <div className="hidden lg:block absolute top-3/2 left-1/2 -translate-x-1/2 -translate-y-[130%] text-center z-20">
          <h2 className="text-white text-3xl md:text-4xl font-light tracking-wide">We are</h2>
          <h1 className="text-cyan-400 text-5xl md:text-6xl font-bold tracking-widest font-iceland">AAVESH</h1>
          <p className="text-gray-300 text-lg font-medium mt-2">– ELECTRONICS & TECH SOCIETY–</p>
          <p className="text-gray-300 text-lg font-medium">IIITUNA</p>
        </div>

        {/* Center overlapping text box */}
        <div className="hidden lg:block absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black/90 backdrop-blur-md p-8 lg:p-12 max-w-2xl text-center shadow-2xl ">
          <p className="text-white text-base md:text-lg lg:text-xl font-light mb-6 leading-relaxed">
            Aavesh is an electronics society that strives to teach and help students acquire new skills in an era of rapidly evolving technology in the field of electronics and communication engineering.
          </p>
          <p className="text-white text-base md:text-lg lg:text-xl font-light leading-relaxed">
            Empower students to acquire, demonstrate and articulate the value of knowledge and skills that will support them as lifelong lessons.
          </p>
        </div>
      </div>

      {/* Mobile text box below images */}
      <div className="lg:hidden w-full max-w-3xl bg-black/80 backdrop-blur-md p-6 sm:p-8 text-center rounded-xl shadow-2xl">
        <p className="text-white text-base sm:text-lg font-light mb-4 leading-relaxed">
          Aavesh is an electronics society that strives to teach and help students acquire new skills in an era of rapidly evolving technology in the field of electronics and communication engineering.
        </p>
        <p className="text-white text-base sm:text-lg font-light leading-relaxed">
          Empower students to acquire, demonstrate and articulate the value of knowledge and skills that will support them as lifelong lessons.
        </p>
      </div>
    </div>
  );
};

About.propTypes = {
  id: PropTypes.string,
};

export default About;
