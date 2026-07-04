import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Code2 } from "lucide-react";

export default function MissionDetail({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-void/85 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            layoutId={`mission-${project.id}`}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-signal/30 bg-void-panel p-8 shadow-glow sm:p-10"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full border border-line p-2 text-mist transition-colors hover:text-fog focus-ring"
              aria-label="Close mission brief"
            >
              <X size={16} />
            </button>

            <span className="mono-label text-signal-bright">
              Difficulty {project.difficulty} — {project.year}
            </span>
            <h3 className="mt-3 font-display text-3xl font-medium text-fog sm:text-4xl">
              {project.codename}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-mist">
              {project.role}
            </p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-6 leading-relaxed text-mist"
            >
              {project.brief}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 rounded-2xl border border-line bg-void/50 p-4"
            >
              <p className="mono-label mb-1">Outcome</p>
              <p className="text-sm text-fog">{project.outcome}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-6"
            >
              <p className="mono-label mb-3">Loadout</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-mist"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex gap-3"
            >
              <a
                href={project.links.demo}
                className="flex items-center gap-1.5 rounded-full bg-signal px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-void focus-ring"
              >
                Live Demo <ArrowUpRight size={14} />
              </a>
              <a
                href={project.links.code}
                className="flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-fog focus-ring"
              >
                Source <Code2 size={14} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
