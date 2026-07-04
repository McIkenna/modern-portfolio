import SectionHeader from "../components/ui/SectionHeader";
import Terminal from "../components/contact/Terminal";
import { Code2, Briefcase, AtSign } from "lucide-react";

const SOCIALS = [
  { label: "GitHub", icon: Code2, href: "#" },
  { label: "LinkedIn", icon: Briefcase, href: "#" },
  { label: "Twitter / X", icon: AtSign, href: "#" },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <SectionHeader
        eyebrow="Comms"
        title="Contact"
        description="Open a channel — whether it's a project, a role, or just a good conversation about interfaces."
      />
      <Terminal />

      <div className="mt-10 flex items-center justify-center gap-4">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
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
