// Each ring is a distance from center; skills are distributed around the ring.
export const skillRings = [
  {
    ring: 1,
    label: "Core",
    radius: 120,
    skills: [
      {
        id: "react",
        name: "React",
        level: 96,
        detail:
          "Primary tool for the last six years — component architecture, performance profiling, concurrent rendering.",
      },
      {
        id: "ts",
        name: "TypeScript",
        level: 92,
        detail: "Type-safe application design across large frontend and full-stack codebases.",
      },
      {
        id: "css",
        name: "CSS / Motion",
        level: 94,
        detail: "Layout systems, custom animation curves, and GPU-friendly transform choreography.",
      },
      {
        id: "sql",
        name: "SQL",
        level: 88,
        detail: "Database design, query optimization, and data modeling for relational databases.",
      },
      {
        id: "js",
        name: "JavaScript",
        level: 90,
        detail: "ES6+ syntax, functional programming, and asynchronous patterns for web applications.",
      },
      {
        id: "html",
        name: "HTML",
        level: 92,
        detail: "Semantic markup, accessibility best practices, and responsive design principles.",
      },
      {
        id: "noSql",
        name: "NoSQL",
        level: 80,
        detail: "Document and key-value store design, query patterns, and data modeling for NoSQL databases.",
      },
      {
        id: "rest",
        name: "REST APIs",
        level: 85,
        detail: "Designing and consuming RESTful APIs, including authentication, versioning, and error handling.",
      },
      {
        id: "jest",
        name: "Jest",
        level: 80,
        detail: "Unit testing, integration testing, and test-driven development for JavaScript applications.",
      },
      {
        id: "git",
        name: "Git",
        level: 90,
        detail: "Version control, branching strategies, and collaborative workflows for software development.",
      },
     
    ],
  },
  {
    ring: 2,
    label: "Systems",
    radius: 210,
    skills: [
      {
        id: "node",
        name: "Node.js",
        level: 85,
        detail: "API design, background workers, and real-time services with WebSockets.",
      },
      {
        id: "threejs",
        name: "Three.js / WebGL",
        level: 78,
        detail: "Shader-driven visuals and 3D scenes for marketing and product experiences.",
      },
      {
        id: "graphql",
        name: "GraphQL",
        level: 80,
        detail: "Schema design and federated services for multi-team product surfaces.",
      },
      {
        id: "postgres",
        name: "PostgreSQL",
        level: 74,
        detail: "Relational modeling, query optimization, and migration strategy.",
      },
      {
        id: "python",
        name: "Python",
        level: 82,
        detail: "Scripting, data processing, and backend services for web and desktop applications.",
      },
      {
        id: "docker",
        name: "Docker",
        level: 70,
        detail: "Containerization, image optimization, and deployment pipelines for microservices.",
      },
      {
        id: "java",
        name: "Java",
        level: 85,
        detail: "Object-oriented programming and enterprise-level application development.",
      },
      {
        id: "springboot",
        name: "SpringBoot",
        level: 80,
        detail: "Building microservices, REST APIs, and backend applications with Spring Boot framework."
      },
      {
        id: "aws",
        name: "AWS",
        level: 75,
        detail: "Cloud architecture, serverless functions, and deployment strategies for scalable applications.",
      },
      {
        id: "kafka",
        name: "Apache Kafka",
        level: 70,
        detail: "Event streaming, message brokering, and real-time data processing with Apache Kafka.",
      },
      {
        id: "express",
        name: "Express.js",
        level: 80,
        detail: "Building RESTful APIs, middleware, and server-side applications with Express.js framework.",
      },
      {
        id: "springmvc",
        name: "Spring MVC",
        level: 75,
        detail: "Developing web applications, handling requests, and implementing MVC architecture with Spring MVC framework.",
      },
      {
        id: "unity",
        name: "Unity",
        level: 70,
        detail: "Game development, interactive experiences, and 3D simulations using Unity engine.",
      },
      {
        id: "csharp",
        name: "C#",
        level: 75,
        detail: "Object-oriented programming, game development, and application development using C# language.",
      }
    ],
  },
  {
    ring: 3,
    label: "Craft",
    radius: 300,
    skills: [
      {
        id: "figma",
        name: "Figma",
        level: 88,
        detail: "End-to-end interface design, prototyping, and design-system stewardship.",
      },
      {
        id: "blender",
        name: "Blender",
        level: 70,
        detail: "3D modeling, animation, and rendering for product and marketing experiences.",
      },
      {
        id: "photoshop",
        name: "Photoshop",
        level: 80,
        detail: "Image editing, compositing, and visual design for web and print media.",
      },
      {
        id: "illustrator",
        name: "Illustrator",
        level: 75,
        detail: "Vector graphics, illustration, and logo design for branding and marketing materials.",
      }
      
    ],
  },
];

export const skillFlat = skillRings.flatMap((r) => r.skills);
