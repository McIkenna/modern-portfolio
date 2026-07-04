import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { skillRings } from "../../data/skills";

const ringDuration = { 1: 50, 2: 70, 3: 95 };
const ringDirection = { 1: 1, 2: -1, 3: 1 };
const maxRingRadius = Math.max(...skillRings.map((ring) => ring.radius));
const constellationSize = maxRingRadius * 2;
const constellationCenter = constellationSize / 2;

const getRingStyle = (radius) => ({
  width: radius * 2,
  height: radius * 2,
  left: constellationCenter - radius,
  top: constellationCenter - radius,
});

export default function SkillConstellation() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative">
      <div className="relative mx-auto aspect-square w-full overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.48] sm:scale-[0.75] md:scale-90 lg:scale-100"
          style={{ width: constellationSize, height: constellationSize }}
        >
          {/* core */}
          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-signal/50 bg-void-panel/80 backdrop-blur-xl shadow-glow">
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-mist">Core</span>
          </div>

          {skillRings.map((ring) => (
            <div key={ring.ring}>
              <motion.div
                className="pointer-events-none absolute rounded-full border border-line"
                style={getRingStyle(ring.radius)}
                animate={{ rotate: 360 * ringDirection[ring.ring] }}
                transition={{ duration: ringDuration[ring.ring], repeat: Infinity, ease: "linear" }}
              >
                {ring.skills.map((skill, i) => {
                  const angle = (360 / ring.skills.length) * i;
                  const rad = (angle * Math.PI) / 180;
                  const x = ring.radius + ring.radius * Math.cos(rad);
                  const y = ring.radius + ring.radius * Math.sin(rad);
                  return (
                    <div
                      key={skill.id}
                      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                      style={{ left: x, top: y }}
                    >
                      <motion.button
                        onClick={() => setActive(skill)}
                        className="pointer-events-auto focus-ring"
                        whileHover={{ scale: 1.15 }}
                        aria-label={`View ${skill.name} details`}
                      >
                        <motion.span
                          className="flex h-14 w-14 items-center justify-center rounded-full border border-signal/40 bg-void-panel/80 text-center font-display text-[11px] text-fog shadow-glow-sm backdrop-blur-xl transition-colors hover:border-signal hover:bg-signal/10"
                          animate={{ rotate: -360 * ringDirection[ring.ring] }}
                          transition={{
                            duration: ringDuration[ring.ring],
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          {skill.name.split(" ")[0]}
                        </motion.span>
                      </motion.button>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {skillRings.map((ring) => (
          <span key={ring.ring} className="mono-label">
            Ring {ring.ring} — {ring.label}
          </span>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-void/85 backdrop-blur-md p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-3xl border border-signal/30 bg-void-panel p-8 shadow-glow"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-5 top-5 rounded-full border border-line p-2 text-mist hover:text-fog focus-ring"
                aria-label="Close"
              >
                <X size={14} />
              </button>
              <h3 className="font-display text-2xl text-fog">{active.name}</h3>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-void-soft">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${active.level}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-signal to-teal"
                />
              </div>
              <p className="mt-2 font-mono text-xs text-mist">{active.level}% Mastery</p>
              <p className="mt-4 text-sm leading-relaxed text-mist">{active.detail}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
