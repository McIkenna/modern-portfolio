import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const location = useLocation();
  const controls = useAnimation();

  useEffect(() => {
    controls.set({ opacity: 0, y: 24, filter: "blur(6px)" });
    controls.start({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    });
  }, [location.key, controls]);

  return (
    <motion.main animate={controls} className="relative z-10 min-h-screen pt-32 pb-24">
      {children}
    </motion.main>
  );
}
