import { useState, useEffect } from "react";
import logo from "../assets/AAVESH_B_WBG.svg";
import { HERO_WORDS } from "../constants/hero";
import ScrollReveal from "./ScrollReveal";
import ConstellationCanvas from "./ConstellationCanvas";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = HERO_WORDS;

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = index % words.length;
      const fullText = words[currentIndex];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex(currentIndex + 1);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 45 : 120);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* interactive background */}
      <div className="absolute inset-0">
        <ConstellationCanvas />
        {/* soft gradient vignette to focus center */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.8))]" />
      </div>

      {/* content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className="absolute top-3 right-4">
          <img src={logo} alt="AAVESH Logo" className="w-28 md:w-32 logo select-none" draggable="false" />
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight tracking-tight">
          <span className="opacity-90">We</span>
          <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]"> {text}</span>
        </h1>

        <ScrollReveal>
          Robotics, AI, and innovation—crafted by the AAVESH team.
        </ScrollReveal>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="group relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto flex items-center justify-center">
            {/* Orbiting Buttons */}
            {/* Our Work */}
            <a href="#whatwedo" className="cursor-target absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-cyan-900/50 border border-cyan-600/50 rounded-none flex items-center justify-center text-center text-cyan-300 text-xs sm:text-sm transition-all duration-500 ease-in-out transform -translate-y-16 sm:translate-y-0 sm:-translate-x-24 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:-translate-x-28 hover:bg-cyan-800/70 hover:border-cyan-500">
              Our Work
            </a>
            {/* Get in Touch */}
            <a href="#contact" className="cursor-target absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-cyan-900/50 border border-cyan-600/50 rounded-none flex items-center justify-center text-center text-cyan-300 text-xs sm:text-sm transition-all duration-500 ease-in-out transform translate-y-16 sm:translate-y-0 sm:translate-x-24 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:translate-x-28 hover:bg-cyan-800/70 hover:border-cyan-500">
              Get in Touch
            </a>

            {/* Center Button */}
            <button className="cursor-target relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-black border-2 border-cyan-500 rounded-none text-cyan-400 text-base sm:text-lg font-medium z-10 transition-all duration-300 group-hover:scale-95 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* subtle parallax accents */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
