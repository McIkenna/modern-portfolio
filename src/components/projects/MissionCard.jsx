import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const accentMap = {
  signal: { border: "border-signal/40", text: "text-signal-bright", glow: "shadow-glow" },
  teal: { border: "border-teal/40", text: "text-teal", glow: "shadow-[0_0_40px_rgba(94,234,212,0.2)]" },
  gold: { border: "border-gold/40", text: "text-gold", glow: "shadow-gold" },
};

export default function MissionCard({ project, index, onOpen }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  const accent = accentMap[project.accent] ?? accentMap.signal;

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      layoutId={`mission-${project.id}`}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      style={{ perspective: 1000 }}
      className="group relative text-left focus-ring"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`panel relative h-full overflow-hidden p-6 transition-colors group-hover:${accent.border}`}
      >
        <div
          className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-current opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10 ${accent.text}`}
        />

        <div className="flex items-start justify-between">
          <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${accent.text}`}>
            Difficulty {project.difficulty}
          </span>
          <span className="font-mono text-[10px] text-mist">{project.year}</span>
        </div>

        <h3 className="mt-4 font-display text-xl font-medium text-fog">{project.codename}</h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-mist">
          {project.role}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-mist">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-mist"
            >
              {s}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-mist">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileHover={{ opacity: 1, y: 0 }}
          className={`mt-5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] ${accent.text}`}
        >
          View Mission Brief →
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
