const About = () => {
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">

      {/* Image Row with Center Heading */}
      <div className="relative w-full max-w-7xl flex justify-between items-center gap-72 px-1 mb-12">

        {/* Left image */}
        <div className="w-1/2 h-[530px] overflow-hidden rounded-xl shadow-lg">
          <img
            src="./try.webp"
            alt="Left"
            className="w-full h-full object-cover scale-125"
          />
        </div>

        {/* Right image */}
        <div className="w-1/2 h-[530px] overflow-hidden rounded-xl shadow-lg">
          <img
            src="./try2.webp"
            alt="Right"
            className="w-full h-full object-cover scale-125"
          />
        </div>

        {/* Heading in center of image gap */}
        <div className="absolute top-3/2 left-1/2 -translate-x-1/2 -translate-y-[130%] text-center z-20">
          <h2 className="text-white text-3xl md:text-4xl font-light tracking-wide">We are</h2>
          <h1 className="text-cyan-400 text-5xl md:text-6xl font-bold tracking-widest font-iceland">AAVESH</h1>
          <p className="text-gray-300 text-lg font-medium mt-2">– ELECTRONICS & TECH SOCIETY–</p>
          <p className="text-gray-300 text-lg font-medium">IIITUNA</p>
        </div>

        {/* Center overlapping text box */}
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black/90 backdrop-blur-md p-8 lg:p-12 max-w-2xl text-center shadow-2xl ">
          <p className="text-white text-base md:text-lg lg:text-xl font-light mb-6 leading-relaxed">
            Aavesh is an electronics society that strives to teach and help students acquire new skills in an era of rapidly evolving technology in the field of electronics and communication engineering.
          </p>
          <p className="text-white text-base md:text-lg lg:text-xl font-light leading-relaxed">
            Empower students to acquire, demonstrate and articulate the value of knowledge and skills that will support them as lifelong lessons.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
