import SectionHeader from "../components/ui/SectionHeader";
import SkillConstellation from "../components/skills/SkillConstellation";

export default function Skills() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <SectionHeader
        eyebrow="Character Stats"
        title="Skills"
        description="No progress bars here — every skill orbits the core at a distance that reflects how central it is to my work. Click any node to expand it."
        align="center"
      />
      <SkillConstellation />
    </div>
  );
}
