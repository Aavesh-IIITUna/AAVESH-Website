import { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import { letters, originalValue } from '../constants/aim';

const aimTexts = [
  originalValue,
  "AAVESH inspires students to push boundaries in electronics and technology, encouraging teamwork and leadership through innovative projects and competitions.",
  "By connecting theory with hands-on experience, AAVESH cultivates a community of future-ready engineers and creative problem solvers."
];

export default function OurAim(props) {

  // Generate initial scrambled text of the same length as the first aim text.
  const initialText = useMemo(() => {
    return aimTexts[0]
      .split('')
      .map(() => letters[Math.floor(Math.random() * letters.length)])
      .join('');
  }, []);

  const [displayText, setDisplayText] = useState(initialText);
  const [isHovering, setIsHovering] = useState(false);
  const [aimIndex, setAimIndex] = useState(0);

  // Refs to hold interval/timeout IDs and state without causing re-renders.
  const animationIntervalRef = useRef(null);
  const animationTimeoutRef = useRef(null);
  const loopTimeoutRef = useRef(null);
  const isRevealedRef = useRef(false);

  /**
   * The core scramble effect function.
   * All characters flicker randomly for a set duration, then resolve.
   * @param {string} targetValue - The final string to be revealed.
   * @param {function} onComplete - An optional callback to run after the animation.
   */
  const scramble = (targetValue, onComplete) => {
    // Clear any existing animations before starting a new one.
    clearInterval(animationIntervalRef.current);
    clearTimeout(animationTimeoutRef.current);
    clearTimeout(loopTimeoutRef.current);

    const flickerDuration = 800; // Total time for the flicker effect in milliseconds

    // Interval for the flickering visual effect
    animationIntervalRef.current = setInterval(() => {
      const randomText = Array.from({ length: targetValue.length })
        .map(() => letters[Math.floor(Math.random() * letters.length)])
        .join('');
      setDisplayText(randomText);
    }, 50); // Update the text every 50ms to create a flicker

    // Timeout to end the flicker and reveal the final text
    animationTimeoutRef.current = setTimeout(() => {
      clearInterval(animationIntervalRef.current);
      setDisplayText(targetValue);
      if (onComplete) onComplete();
    }, flickerDuration);
  };

  /**
   * Hovering forces the revealed state.
   */
  const handleMouseEnter = () => {
    setIsHovering(true);
    clearTimeout(loopTimeoutRef.current);
    scramble(aimTexts[aimIndex], () => {
      isRevealedRef.current = true;
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  /**
   * A single useEffect to manage the animation loop.
   */
  useEffect(() => {
    if (isHovering) {
      return;
    }

    // Animation loop cycles through aimTexts
    const animationLoop = () => {
      scramble(aimTexts[aimIndex], () => {
        // Move to next aim text, loop back after third
        setAimIndex((prev) => (prev + 1) % aimTexts.length);
        loopTimeoutRef.current = setTimeout(animationLoop, 5000);
      });
    };

    const startDelay = setTimeout(animationLoop, 1000);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(loopTimeoutRef.current);
      clearInterval(animationIntervalRef.current);
      clearTimeout(animationTimeoutRef.current);
    };
  }, [isHovering, aimIndex, initialText]);

  return (
    <div id={props.id} className="w-full mx-auto mb-10 md:mb-12 px-4">
      <main className="border-2 white rounded-lg h-auto md:h-48 mx-0 md:mx-20 py-4 md:py-2 overflow-hidden">
  <Heading as="h1" align="center" size="md" colorClass="text-white" className="font-bold mb-3 md:mb-4">Our Aim</Heading>
        <div className="px-4 md:px-6 h-auto md:h-24 flex items-center justify-center">
          <p
            className="text-center text-white text-lg md:text-2xl cursor-pointer overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {displayText}
          </p>
        </div>
      </main>
    </div>
  );
}

OurAim.propTypes = {
  id: PropTypes.string,
};
