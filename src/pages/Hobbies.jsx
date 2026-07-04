import SectionHeader from "../components/ui/SectionHeader";
import HobbyGrid from "../components/hobbies/HobbyGrid";

export default function Hobbies() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeader
        eyebrow="Side Quests"
        title="Hobbies"
        description="Optional content — not required to complete the main story, but where a lot of the good ideas come from."
      />
      <HobbyGrid />
    </div>
  );
}
