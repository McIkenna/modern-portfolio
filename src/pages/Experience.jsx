import SectionHeader from "../components/ui/SectionHeader";
import QuestLog from "../components/experience/QuestLog";

export default function Experience() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <SectionHeader
        eyebrow="Quest Log"
        title="Experience"
        description="A career told as a sequence of completed and ongoing quests, each one worth its own experience points."
      />
      <QuestLog />
    </div>
  );
}
