import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import HeroScene from "./HeroScene";

const TITLES = ["Design Engineer", "Frontend Architect", "Creative Developer", "Systems Thinker", "Motion Designer", "UI/UX Engineer", "Web Developer", "Software Engineer", "Game Developer", "Digital Craftsman", "Interface Designer", "Interaction Designer", "Visual Designer", "Product Designer", "Creative Technologist", "Full-Stack Developer", "Web Engineer", "Application Developer", "Software Architect", "User Experience Designer"];

const DESC = [
  "I build immersive, high-performance interfaces at the intersection of design and engineering — currently exploring the outer edges of motion, systems, and craft.",
  "Innovative, solution-driven, and results-driven professional with technical experience in project management, automated testing, system architecture, software engineering, systems programming, product design & development, and building highly scalable applications across various industries.",
  "I engineer immersive digital experiences at the intersection of design, technology, and innovation—crafting interfaces that are intelligent, performant, and built for the future.",
  "Highly skilled in contributing to a highly collaborative work environment, solving technical issues, and enhancing software builds through consistent development practices.",
  "I craft immersive digital products where exceptional design meets robust engineering, transforming complex ideas into elegant, high-performance experiences.",
  "Strong advocate for best practices, clean architecture, and continuous improvement. Passionate about delivering high- performance, user-centric solutions and driving innovation",
  "Adept at leading teams, managing projects, and solving complex technical challenges in collaborative environments."
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [descIndex, setDescIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTitleIndex((i) => (i + 1) % TITLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const d = setInterval(() => setDescIndex((i) => (i + 1) % DESC.length), 8000);
    return () => clearInterval(d);
  }, []);
  

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <HeroScene />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.span
          className="absolute left-[8%] top-[22%] h-16 w-16 rounded-xl border border-signal/25"
          animate={{ y: [0, -18, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute right-[10%] top-[35%] h-10 w-10 rounded-full border border-teal/25"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute bottom-[20%] left-[16%] h-6 w-6 rotate-45 border border-gold/25"
          animate={{ y: [0, -14, 0], rotate: [45, 90, 45] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mono-label relative z-10 mb-6 flex items-center gap-2"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-glow-sm animate-pulse-slow" />
        Player Save Loaded — Welcome Back
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 font-display text-5xl font-medium leading-[1.05] tracking-tight text-fog sm:text-7xl lg:text-8xl"
      >
        Ikenna Ifekaonwu
      </motion.h1>

      <div className="relative z-10 mt-6 h-10 sm:h-12">
        <AnimatePresence mode="wait">
          <motion.p
            key={titleIndex}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45 }}
            className="font-mono text-lg text-signal-bright sm:text-2xl"
          >
            {TITLES[titleIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-10 mt-8 max-w-xl text-balance text-mist"
      >
        {DESC[descIndex]}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <MagneticButton
          as="a"
          href="#world-map"
          className="rounded-full bg-signal px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-void shadow-glow focus-ring"
        >
          Enter My World
        </MagneticButton>
        <MagneticButton
          as={Link}
          to="/projects"
          className="rounded-full border border-line px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors hover:border-signal/50 focus-ring"
        >
          View Missions
        </MagneticButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 z-10 flex flex-col items-center gap-2 text-mist"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.div>
    </section>
  );
}
