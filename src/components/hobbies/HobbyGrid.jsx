import { motion } from "framer-motion";
import { Camera, Waves, Mountain, Boxes, Server, Coffee, Gamepad, Toolbox, Drill} from "lucide-react";
import { hobbies } from "../../data/hobbies";

const icons = { camera: Camera, waves: Waves, mountain: Mountain, boxes: Boxes, server: Server, coffee: Coffee, gamepad: Gamepad, toolbox: Toolbox, drill: Drill};

export default function HobbyGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {hobbies.map((hobby, i) => {
        const Icon = icons[hobby.icon];
        return (
          <motion.div
            key={hobby.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="panel group relative overflow-hidden p-6"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-signal opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-void-soft transition-colors group-hover:border-signal/40">
                <Icon size={18} className="text-signal-bright" />
              </span>
              <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-mist">
                {hobby.tag}
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg text-fog">{hobby.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{hobby.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
