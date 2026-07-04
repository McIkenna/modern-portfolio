import { motion } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";
import { achievements } from "../data/experience";
import profilePics from "/profilePic.jpeg";

const STATS = [
  { label: "Years Building", value: "8" },
  { label: "Products Shipped", value: "24" },
  { label: "Education", value: "Computer Science" }
];

const TIMELINE = [
  { year: "2010", label: "Wrote first line of code", note: "A very broken jQuery slider." },
  { year: "2013", label: "Earned my bachelor's degree", note: "A bit relieved it was over." },
  { year: "2015", label: "First professional role", note: "Citrans Telematics Solutions - at least a little programming done here." },
  { year: "2019", label: "Started a master's program", note: "mechatronics and robotics - thought it would be useful." },
  { year: "2021", label: "Finished master's program, and started a senior role", note: "Senior Systems Engineer at Infosys." },
  { year: "2022", label: "Started a lead role", note: "Senior Software Engineer at Kforce inc - working on Nike projects." },
  { year: "2025", label: "Independent Contributor", note: "Started a side projects to explore new technologies." },
  { year: "2026", label: "Launched personal game projects", note: "Developing indie games in my spare time." },
];

const rarityColor = {
  gold: "border-gold/40 text-gold",
  signal: "border-signal/40 text-signal-bright",
  teal: "border-teal/40 text-teal",
};

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <SectionHeader
        eyebrow="Character Profile — Unlocked"
        title="About Ikenna"
        description="A seasoned and results-driven Engineer with experience in software development, system architecture. Here's the profile behind the portfolio."
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr]">
        {/* Portrait / stats panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="panel p-6"
        >
          <div className="relative mx-auto flex h-50 w-50 items-center justify-center rounded-full border border-signal/30 bg-gradient-to-br from-signal/20 to-teal/10">
            {/* <span className="font-display text-4xl text-fog">AD</span>
             */}
             <img src={profilePics} alt="Ikenna Ifekaonwu" className="h-50 w-50 rounded-full object-cover" />
          </div>
          <p className="mt-4 text-center font-display text-lg text-fog">Ikenna Ifekaonwu</p>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
           Software Engineer
          </p>

          <div className="mt-6 space-y-3">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center justify-between border-b border-line pb-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-mist">
                  {s.label}
                </span>
                <span className="font-display text-sm text-fog">{s.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bio + timeline */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel p-6 sm:p-8"
          >
            <p className="mono-label mb-3">Origin Story</p>
            <p className="leading-relaxed text-mist">
              I'm a software engineer who builds thoughtful digital experiences at the intersection of frontend engineering, backend development, and interface design. 
              I believe exceptional software is defined not only by how it performs, but also by how it feels to use. 
              My focus is on creating scalable, high-performance applications with intuitive interactions, refined motion, and clean, maintainable architecture.

              Beyond client and product work, I enjoy exploring generative visuals, building immersive interactive experiences, experimenting with emerging technologies, 
              and refining both hardware projects and the craft of a well-made espresso.
            </p>
          </motion.div>

          <div>
            <p className="mono-label mb-6">Timeline</p>
            <ol className="relative space-y-8 border-l border-line pl-8">
              {TIMELINE.map((item, i) => (
                <motion.li
                  key={item.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[38px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-signal bg-void">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  </span>
                  <span className="font-mono text-xs text-signal-bright">{item.year}</span>
                  <p className="mt-1 font-display text-base text-fog">{item.label}</p>
                  <p className="mt-1 text-sm text-mist">{item.note}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          <div>
            <p className="mono-label mb-6 flex items-center gap-2">
              <Trophy size={13} /> Achievements
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -3 }}
                  className={`panel flex items-start gap-3 p-4 ${rarityColor[a.rarity]}`}
                >
                  <Sparkles size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display text-sm text-fog">{a.label}</p>
                    <p className="mt-0.5 text-xs text-mist">{a.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
