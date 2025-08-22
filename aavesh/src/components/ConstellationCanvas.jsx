import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

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

export default ConstellationCanvas;
