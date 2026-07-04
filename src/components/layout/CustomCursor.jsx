import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [isFine, setIsFine] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 400, mass: 0.4 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  const trailX = useSpring(x, { damping: 30, stiffness: 120 });
  const trailY = useSpring(y, { damping: 30, stiffness: 120 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setIsFine(fine);
    if (!fine) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const interactive = el?.closest("a, button, [role='button'], .cursor-none-target");
      setIsPointer(Boolean(interactive));
    };
    const down = () => setIsDown(true);
    const up = () => setIsDown(false);
    const leave = () => setIsVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!isFine) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">
      <motion.div
        className="absolute rounded-full border border-signal/50"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 52 : 32,
          height: isPointer ? 52 : 32,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{ scale: isDown ? 0.8 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="absolute rounded-full bg-fog"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
}
