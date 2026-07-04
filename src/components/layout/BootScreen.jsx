import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  "INITIALIZING SYSTEM",
  "LOADING VISUAL CORTEX",
  "CALIBRATING LIGHT ENGINE",
  "READY",
];

export default function BootScreen({ onEnter }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setLineIndex(LINES.length - 1);
      setReady(true);
      return;
    }
    if (lineIndex < LINES.length - 1) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 420);
      return () => clearTimeout(t);
    } else {
      setReady(true);
    }
  }, [lineIndex]);

  useEffect(() => {
    const handleKey = (e) => {
      if (ready && (e.key === "Enter" || e.key === " ")) onEnter();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [ready, onEnter]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void bg-grid"
      exit={{ opacity: 0, filter: "blur(12px)" }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="relative flex flex-col items-center gap-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex h-20 w-20 items-center justify-center rounded-full border border-signal/40"
        >
          <span className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-signal/30" />
          <span className="h-3 w-3 rounded-full bg-signal shadow-glow animate-pulse-slow" />
        </motion.div>

        <div className="h-6 font-mono text-xs tracking-[0.3em] text-mist">
          <AnimatePresence mode="wait">
            <motion.span
              key={lineIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {LINES[lineIndex]}
              {lineIndex < LINES.length - 1 && (
                <span className="animate-pulse-slow">…</span>
              )}
            </motion.span>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {ready && (
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={onEnter}
              className="group relative mt-2 rounded-full border border-signal/50 px-10 py-4 font-display text-sm uppercase tracking-[0.3em] text-fog focus-ring"
            >
              <span className="absolute inset-0 rounded-full bg-signal/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative animate-pulse-slow">Press Start</span>
            </motion.button>
          )}
        </AnimatePresence>

        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist/60">
          {ready ? "Enter · Space · or Click to Continue" : "Please Wait"}
        </p>
      </div>
    </motion.div>
  );
}
