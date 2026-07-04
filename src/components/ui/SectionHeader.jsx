import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`mb-14 ${align === "center" ? "text-center mx-auto" : ""} max-w-2xl`}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mono-label mb-4 flex items-center gap-2 justify-start"
        style={{ justifyContent: align === "center" ? "center" : "flex-start" }}
      >
        <span className="h-1 w-1 rounded-full bg-signal shadow-glow-sm" />
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-fog"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-mist leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
