import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Swords,
  Radar,
  ScrollText,
  Gamepad2,
  Radio,
} from "lucide-react";

const NODES = [
  { id: "about", label: "About", tag: "Profile", to: "/about", icon: User, angle: -90 },
  { id: "projects", label: "Projects", tag: "Missions", to: "/projects", icon: Swords, angle: -30 },
  { id: "skills", label: "Skills", tag: "Stats", to: "/skills", icon: Radar, angle: 30 },
  { id: "experience", label: "Experience", tag: "Quest Log", to: "/experience", icon: ScrollText, angle: 90 },
  { id: "hobbies", label: "Hobbies", tag: "Side Quests", to: "/hobbies", icon: Gamepad2, angle: 150 },
  { id: "contact", label: "Contact", tag: "Comms", to: "/contact", icon: Radio, angle: 210 },
];

const RADIUS = 40; // percent of container

export default function WorldMap() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="world-map" className="relative px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mono-label mb-4 justify-center flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-signal shadow-glow-sm" />
          World Map
        </p>
        <h2 className="font-display text-3xl font-medium tracking-tight text-fog sm:text-4xl">
          Choose your destination
        </h2>
        <p className="mt-3 text-mist">
          Every node leads somewhere real. Hover to preview, click to travel.
        </p>
      </div>

      <div className="relative mx-auto mt-16 aspect-square w-full max-w-[560px]">
        {/* radar sweep */}
        <div className="absolute inset-0 rounded-full border border-line" />
        <div className="absolute inset-[12%] rounded-full border border-line" />
        <div className="absolute inset-[24%] rounded-full border border-line" />
        <motion.div
          className="absolute inset-0 rounded-full opacity-40"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(139,127,255,0.35), transparent 30%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />

        {/* connecting lines */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
          {NODES.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = 50 + RADIUS * Math.cos(rad);
            const y = 50 + RADIUS * Math.sin(rad);
            return (
              <line
                key={node.id}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke={hovered === node.id ? "rgba(139,127,255,0.6)" : "rgba(244,243,239,0.08)"}
                strokeWidth="0.3"
              />
            );
          })}
        </svg>

        {/* center core */}
        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-signal/50 bg-void-panel/80 text-center backdrop-blur-xl shadow-glow">
          <span className="h-2 w-2 rounded-full bg-signal animate-pulse-slow" />
          <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-mist">
            You Are Here
          </span>
        </div>

        {/* nodes */}
        {NODES.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 50 + RADIUS * Math.cos(rad);
          const y = 50 + RADIUS * Math.sin(rad);
          const Icon = node.icon;
          const isHovered = hovered === node.id;
          return (
            <motion.button
              key={node.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 20 }}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate(node.to)}
              className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center focus-ring"
              style={{ left: `${x}%`, top: `${y}%` }}
              aria-label={`Travel to ${node.label}`}
            >
              <motion.span
                animate={{ scale: isHovered ? 1.15 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-xl transition-colors ${
                  isHovered
                    ? "border-signal bg-signal/15 shadow-glow"
                    : "border-line bg-void-panel/70"
                }`}
              >
                <Icon size={20} className={isHovered ? "text-signal-bright" : "text-mist"} />
              </motion.span>
              <span className="mt-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.15em] text-mist">
                {node.tag}
              </span>
              <motion.span
                animate={{ opacity: 1, y: 0 }}
                className="mt-0.5 whitespace-nowrap font-display text-xs text-fog"
              >
                [{node.label}]
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
