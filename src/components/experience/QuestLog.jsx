import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import { questLog, totalXP, currentLevel, xpIntoLevel } from "../../data/experience";

export default function QuestLog() {
  return (
    <div>
      <div className="panel mb-12 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mono-label">Total Experience</p>
            <p className="mt-1 font-display text-3xl text-fog">{totalXP.toLocaleString()} XP</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-4 py-2">
            <Zap size={14} className="text-signal-bright" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-fog">
              Level {currentLevel}
            </span>
          </div>
        </div>
        <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-void-soft">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${(xpIntoLevel / 1000) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-signal via-signal-bright to-teal"
          />
        </div>
        <p className="mt-2 font-mono text-[11px] text-mist">
          {xpIntoLevel} / 1000 XP to Level {currentLevel + 1}
        </p>
      </div>

      <ol className="relative space-y-10 border-l border-line pl-8 sm:pl-10">
        {questLog.map((quest, i) => (
          <motion.li
            key={quest.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative"
          >
            <span
              className={`absolute -left-[42px] top-1 flex h-5 w-5 items-center justify-center rounded-full border sm:-left-[46px] ${
                quest.status === "active"
                  ? "border-signal bg-signal/20"
                  : "border-teal/50 bg-void"
              }`}
            >
              {quest.status === "active" ? (
                <span className="h-2 w-2 rounded-full bg-signal animate-pulse-slow" />
              ) : (
                <CheckCircle2 size={12} className="text-teal" />
              )}
            </span>

            <div className="panel p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-mist">
                  {quest.period}
                </span>
                {quest.status === "active" && (
                  <span className="rounded-full border border-signal/40 bg-signal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-signal-bright">
                    In Progress
                  </span>
                )}
              </div>
              <h3 className="mt-2 font-display text-xl text-fog">{quest.title}</h3>
              <p className="font-mono text-xs text-mist">{quest.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-mist">{quest.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {quest.rewards.map((r) => (
                  <span
                    key={r}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[10px] text-mist"
                  >
                    ✓ {r}
                  </span>
                ))}
              </div>

              <p className="mt-4 font-mono text-[11px] text-gold">+{quest.xp} XP earned</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
