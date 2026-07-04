import SectionHeader from "../components/ui/SectionHeader";
import Terminal from "../components/contact/Terminal";
import { Code2, Briefcase, AtSign, Globe } from "lucide-react";

const SOCIALS = [
  { label: "GitHub", icon: Code2, href: "https://github.com/McIkenna" },
  { label: "LinkedIn", icon: Briefcase, href: "https://linkedin.com/in/ikenna-ifekaonwu/" },
  { label: "Portfolio", icon: Globe, href: "https://ikennaifek.netlify.app/" },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <SectionHeader
        eyebrow="Comms"
        title="Contact"
        description="If you have a project, idea, or opportunity you'd like to discuss, feel free to reach out. I'm always open to new collaborations and conversations."
      />
      <Terminal />

      <div className="mt-10 flex items-center justify-center gap-4">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-mist transition-colors hover:border-signal/40 hover:text-fog focus-ring"
            aria-label={s.label}
          >
            <s.icon size={16} />
          </a>
        ))}
      </div>
    </div>
  );
}
