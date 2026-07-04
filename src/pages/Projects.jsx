import { useState } from "react";
import SectionHeader from "../components/ui/SectionHeader";
import MissionCard from "../components/projects/MissionCard";
import MissionDetail from "../components/projects/MissionDetail";
import { projects } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeader
        eyebrow="Mission Select"
        title="Projects"
        description="A collection of my completed projects, showcasing my skills and experience in various areas of software development, design, and problem-solving."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <MissionCard key={project.id} project={project} index={i} onOpen={setActive} />
        ))}
      </div>

      <MissionDetail project={active} onClose={() => setActive(null)} />
    </div>
  );
}
