import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function EasterEggToast({ message, show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="fixed left-1/2 top-24 z-[120] -translate-x-1/2 rounded-full border border-gold/40 bg-void-panel/95 px-5 py-3 shadow-gold backdrop-blur-xl"
        >
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-fog">
              {message}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
