export const questLog = [
  {
    id: "q0",
    period: "2026 — Present",
    title: "Game Developer",
    org: "Merike Games.",
    status: "active",
    xp: 5000,
    description:
      "Developing indie games in my spare time using Unity and C#. Focused on creating engaging gameplay experiences and exploring new technologies.",
    rewards: ["Published 3 games in Google Play and Itch.io", "Game recieved 10K+ downloads and positive reviews"],
  },
  {
    id: "q1",
    period: "2025 — Present",
    title: "Independent Contributor",
    org: "Snorkel inc.",
    status: "active",
    xp: 4200,
    description:
      "Implemented a Node.js, Apollo, and GraphQL server that integrates REST services into a unified schema with User, Transaction, and Summary types. ",
    rewards: ["Achieved 95% test coverage with Jest and Supertest"],
  },
  {
    id: "q2",
    period: "2022 — 2025",
    title: "Senior Software Engineer",
    org: "Infosys Limited",
    status: "complete",
    xp: 3600,
    description:
      "Designed and develop a generive AI system for Nike's e-commerce platform using React, Node.js, and AWS services",
    rewards: ["Shipped 5 major products", "Improved data processing efficiency by 90%"],
  },
  {
    id: "q3",
    period: "2021 — 2022",
    title: "Senior Systems Engineer",
    org: "Infosys Limited",
    status: "complete",
    xp: 2400,
    description:
      "Designed and developed multi-tier applications using web-based technologies such as Spring MVC and Spring Boot, ReactJS and AWS serverless applications",
    rewards: ["Built scalable backend services", "Design system adopted org-wide"],
  },
  {
    id: "q4",
    period: "2020 — 2021",
    title: "Full Stack Developer",
    org: "Aipalbot LLC",
    status: "complete",
    xp: 1800,
    description:
      "Superintended the development of REST API using Java, Spring, and MySQL databases and conducted the implementation of MVC pattern using React JS and spring controller.",
    rewards: ["Shipped 3 major features", "Improved API performance by 40%", "migrated legacy codebase to React and Spring Boot"],
  },
  {
    id: "q5",
    period: "2019 — 2021",
    title: "Graduate Research Assistant",
    org: "Georgia Southern University",
    status: "complete",
    xp: 1200,
    description:
      "Conducted a spatial decomposition of video signal with a phase-based motion magnification technique and reconstruction of the magnified output with exceptional attention to detail using a MATLAB algorithm",
    rewards: ["Designed and developed the cybertrain website", "Published 2 academic articles"],
  },
  {
    id: "q6",
    period: "2015 — 2019",
    title: "Software and Hardware Tech",
    org: "Citrans Telematics Solutions",
    status: "complete",
    xp: 700,
    description:
      "First professional role — Initiated and implemented an automated vehicle report delivery system for end-user using a Python algorithm and Spreadsheet.",
    rewards: ["Performed hardware configurations and troubleshooting", "Learned the fundamentals of human computer interaction and interface design", "Shipped globe-based tracking dashboard"],
  },
];

export const achievements = [
  { id: "a1", label: "Shipped at Scale", detail: "Product used by 500K+ monthly users", rarity: "gold" },
  { id: "a2", label: "Mentor", detail: "Onboarded and mentored more than 10 engineers", rarity: "gold" },
  { id: "a3", label: "Speaker", detail: "Presented at 3 conferences", rarity: "teal" },
  { id: "a4", label: "Open Source", detail: "Maintainer of 2 published npm packages", rarity: "signal" },
  { id: "a5", label: "Author", detail: "Published 2 academic articles", rarity: "signal" },
  { id: "a6", label: "Night Owl", detail: "Shipped 12 releases after midnight", rarity: "teal" },
];

export const totalXP = questLog.reduce((sum, q) => sum + q.xp, 0);
export const currentLevel = Math.floor(totalXP / 1000) + 1;
export const xpIntoLevel = totalXP % 1000;
