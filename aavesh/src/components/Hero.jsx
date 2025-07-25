import { useState, useEffect, Suspense } from "react";
import React from "react";
import logo from "../assets/AAVESH_B_WBG.svg";
import { HERO_WORDS, HERO_RANDOM_WORDS } from '../constants/hero';

const RoboArm = React.lazy(() => import("./RoboArm"));

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
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex(currentIndex + 1);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 50 : 150);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  const randomWords = HERO_RANDOM_WORDS;

  return (
    <div className="h-screen overflow-hidden relative w-full flex justify-center items-center">
      <div className="absolute inset-0 flex justify-center items-center">
        <Suspense fallback={<div>Loading Animation...</div>}>
          <RoboArm />
        </Suspense>
      </div>
      <div className="absolute top-0.5 right-4 z-10">
        <img src={logo} alt="Logo" className="w-32 md:w-32 logo" />
      </div>
      <div className="absolute top-24 left-1/2 font-extrabold transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <span className="text-4xl md:text-5xl mb-4 font-iceland">We </span>
        <span className="text-4xl md:text-5xl text-cyan-600 mb-4 font-iceland">
          {text}
        </span>
      </div>
      {randomWords.map((item, i) => (
        <div
          key={i}
          style={{ position: "absolute", ...item.style }}
          className="text-white text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold font-iceland animate-floatAndFade z-10"
        >
          {item.word}
        </div>
      ))}
    </div>
  );
};

export default Hero;
