import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import logo from "../assets/AAVESH_B_WBG.svg";
import { HERO_WORDS } from "../constants/hero";
import ElectricBorder from "./ElectricBorder";

// Lightweight interactive constellation background using a single canvas
const ConstellationCanvas = ({ color = "rgba(34, 211, 238, 0.8)", maxPoints = 90 }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const pointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const DPR = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    let width = 0;
    let height = 0;

    const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
    const POINTS = Math.max(40, Math.min(maxPoints, isMobile() ? 55 : maxPoints));
    const LINK_DIST = isMobile() ? 90 : 130;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const random = (min, max) => Math.random() * (max - min) + min;

    const spawnPoints = () => {
      pointsRef.current = new Array(POINTS).fill(0).map(() => ({
        x: random(0, width),
        y: random(0, height),
        vx: random(-0.4, 0.4),
        vy: random(-0.4, 0.4),
        r: random(0.6, 1.8),
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      // subtle grid backdrop
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 1;
      const grid = 40;
      for (let x = 0; x < width; x += grid) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += grid) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // update & draw points
      const pts = pointsRef.current;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;

        // bounce at edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // mouse repulsion
        if (mouse.current.active) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist2 = dx * dx + dy * dy;
          const radius = 120;
          if (dist2 < radius * radius) {
            const dist = Math.sqrt(dist2) || 0.001;
            const force = (radius - dist) / radius;
            p.vx += (dx / dist) * force * 0.12;
            p.vy += (dy / dist) * force * 0.12;
          }
        }

        // draw point
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // draw connections
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = 1 - Math.sqrt(d2) / LINK_DIST;
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.25 * alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // mouse halo
      if (mouse.current.active) {
        const g = ctx.createRadialGradient(
          mouse.current.x,
          mouse.current.y,
          0,
          mouse.current.x,
          mouse.current.y,
          120
        );
        g.addColorStop(0, "rgba(34, 211, 238, 0.18)");
        g.addColorStop(1, "rgba(34, 211, 238, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(mouse.current.x, mouse.current.y, 120, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    };
    const onMouseLeave = () => (mouse.current.active = false);
    const onResize = () => {
      resize();
      spawnPoints();
    };

    resize();
    spawnPoints();
    rafRef.current = requestAnimationFrame(step);
    window.addEventListener("resize", onResize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [color, maxPoints]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

ConstellationCanvas.propTypes = {
  color: PropTypes.string,
  maxPoints: PropTypes.number,
};

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

      {/* content with ElectricBorder */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className="absolute top-3 right-4">
          <img src={logo} alt="AAVESH Logo" className="w-28 md:w-32 logo select-none" draggable="false" />
        </div>
        <ElectricBorder color="#7df9ff" speed={1.2} chaos={0.7} thickness={3} style={{ borderRadius: 24, padding: 0 }}>
          <div className="m-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight tracking-tight">
              <span className="opacity-90">We</span>
              <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]"> {text}</span>
            </h1>
            <p className="mt-4 m-4 max-w-2xl text-cyan-100/80 text-base sm:text-lg md:text-xl">
              Robotics, AI, and innovation—crafted by the AAVESH team.
            </p>
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
        </ElectricBorder>
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
