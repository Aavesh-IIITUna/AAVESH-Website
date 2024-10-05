
const About = () => {
  return (
    <div className='w-full bg-black flex flex-col lg:flex-row justify-evenly items-center relative'>
      <div className="first mb-4 lg:mb-0 flex flex-col gap-10 lg:mr-72 w-full lg:w-1/3 relative">
        <img src='./try.webp' alt="Electronics Image" className='w-full h-auto' />
        <img src='./try2.webp' alt="Electronics Image" className='w-full h-auto' />
      </div>
      <div className="second relative text-white w-full lg:w-1/3 text-center lg:text-left z-10 lg:absolute lg:top-1/4 lg:translate-y-[-20%]">
        <p className='font-sans text-2xl mb-2 text-center mr-20 md:text-xl '>WE ARE</p>
        <p className='text-4xl md:text-3xl font-bold mb-2 text-cyan-400 text-center ml-20'>AAVESH</p>
        <p className='text-xl md:text-lg text-center'>- ELECTRONICS & TECH SOCIETY -</p>
        <p className='text-xl md:text-lg mb-2 text-center'>IIIT UNA</p>
        <p className='text-lg leading-relaxed mb-4 mx-4 my-10 text-center'>
          Aavesh is an electronics society that strives to teach and help students acquire new skills in an era of rapidly evolving technology in the field of electronics and communication engineering.
        </p>
        <p className='text-lg leading-relaxed mx-4 mt-10 b-10 text-center'>
          Empower students to acquire, demonstrate, and articulate the value of knowledge and skills that will support them as lifelong lessons.
        </p>
      </div>
      <div className="third mb-4 lg:mb-0 flex flex-col gap-10 lg:ml-4 w-full lg:w-1/3 relative">
        <img src='./try3.webp' alt="Electronics Image" className='w-full h-auto' />
        <img src='./try4.webp' alt="Electronics Image" className='w-full h-auto' />
      </div>
    </div>
  )
}

export default About
