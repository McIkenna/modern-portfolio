export const projects = [
  {
    id: "masqueraiders",
    codename: "Masque Raiders",
    role: "Lead Engineer",
    difficulty: "A",
    year: "2026",
    summary:
      "An action game built to provide an immersive experience with multiple levels and boss encounters.",
    brief:
      "Masque Raiders is an action game built in Unity. Progress through multiple levels, each ending with a boss encounter. Defeat all bosses to liberate the land and claim victory.",
    stack: ["Unity", "C#", "Blender", "Photoshop"],
    outcome: "Successfully launched Itch.io, receiving positive reviews.",
    links: { demo: "https://meriktech.itch.io/masque-raiders", code: "#" },
    accent: "gold",
  },
  {
    id: "Ayo2D",
    codename: "Ayo2D",
    role: "Lead Engineer",
    difficulty: "A",
    year: "2025",
    summary:
      "Ayo2D is a digital adaptation of the traditional African board game Ayo, designed to provide an engaging and educational experience for players of all ages.",
    brief:
      "Ayo2D brings the ancient African board game of strategy and skill to your device! Perfect for players aged 5 and above, this engaging game combines cultural education with fun, challenging gameplay that the whole family can enjoy.",
    stack: ["Unity", "C#", "Blender", "Photoshop", "3D Modeling"],
    outcome: "Successfully launched on Google Play, receiving positive reviews.",
    links: { demo: "https://play.google.com/store/apps/details?id=com.Merike.Ayo", code: "#" },
    accent: "gold",
  },
  {
    id: "ncho",
    codename: "Ncho",
    role: "Lead Engineer",
    difficulty: "A",
    year: "2025",
    summary:
      "A traditional Mancala board game, similar to Ayo, played with seeds and a board of holes carved in wood to capture the opponent's seeds through counting and strategic movement.",
    brief:
      "Ncho game is a popular traditional Mancala board game, similar to Ayo, played with seeds and a board of holes carved in wood to capture the opponent's seeds through counting and strategic movement, fostering math skills and critical thinking",
    stack: ["Unity", "C#", "Blender", "Photoshop", "3D Modeling"],
    outcome: "Successfully launched on Google Play, receiving positive reviews.",
    links: { demo: "https://play.google.com/store/apps/details?id=com.UnityTechnologies.com.unity.merike.ncho", code: "#" },
    accent: "gold",
  },
  {
    id: "merikemart",
    codename: "Merikemart",
    role: "Lead Frontend Engineer",
    difficulty: "A",
    year: "2025",
    summary:
      "A platform for live product launches, customers to perform checkout quicker and more efficiently.",
    brief:
      "An e-commerce platform for live product launches. The platform allows users to experience immersive product presentations and interact with the products in a dynamic way.",
    stack: ["React", "Next.js", "Node.js", "MongoDB", "Zustand", ],
    outcome: "Cut launch-production time from 3 weeks to 4 days, used in 12 live events.",
    links: { demo: "https://merike.vercel.app/", code: "#" },
    accent: "gold",
  },
  {
    id: "panorama-ai",
    codename: "Panorama AI",
    role: "Frontend Engineer",
    difficulty: "A",
    year: "2025",
    summary:
      "A generative AI interface for exploring and visualizing large-scale geospatial data.",
    brief:
      "I built a generative AI interface using React and react-redux, which interacts with the LLM from the backend developed by integrating Llama generative AI in Python, while using FastAPI to expose the endpoints, the response from this LLM is sent via an API using an event stream",
    stack: ["Next.js", "React", "React-AgGrid", "AWS", "FastAPI", "Llama", "LangChain", "Zustand"],
    outcome: "Reduced incident response time by 61% for the ops team.",
    links: { demo: "#", code: "#" },
    accent: "gold",
  },
  {
    id: "Access_and_observability",
    codename: "Access and Observability Portal",
    role: "Application Engineer",
    difficulty: "B",
    year: "2024",
    summary:
      "A portal for discovering data products across the organization, with observability metrics and governance features.",
    brief:
      "Developed the Access and Observability Portal for NAEDAI, enabling teams to discover available data products and monitor observable metrics for improved data governance.",
    stack: ["React", "Material UI", "PostgreSQL", "AWS"],
    outcome: "Adopted by 7 teams, cut new-feature UI review time by 40%.",
    links: { demo: "#", code: "#" },
    accent: "teal",
  },
  {
    id: "nike-data-streaming",
    codename: "Nike Data Streaming",
    role: "Senior Software Engineer",
    difficulty: "B",
    year: "2023",
    summary:
      "A Nike Data Streaming platform for collecting, processing and analyzing data from various sources.",
    brief:
      "This application allows Nike to better understand customer preferences, improve their products and marketing strategies, and make data-driven decisions across the organization.",
    stack: ["TypeScript", "Node.js", "ExpressJS", "Apache Kafka", "AWS"],
    outcome: "Scaled to 500+ concurrent sessions with zero merge conflicts reported.",
    links: { demo: "#", code: "#" },
    accent: "teal",
  },
  {
    id: "capacity-visibility",
    codename: "Capacity Visibility",
    role: "Frontend Engineer",
    difficulty: "S",
    year: "2022",
    summary:
      "A productivity tool for managing and visualizing capacity across distributed facilities.",
    brief:
      "Provides real-time data and analytics on factory performance, enabling the company to make informed decisions on supply chain management and improve overall efficiency",
    stack: ["React", "Node.js", "GraphQL"],
    outcome: "Checkout conversion up 23% in the first quarter post-launch.",
    links: { demo: "#", code: "#" },
    accent: "gold",
  },
  {
    id: "taja-ecommerce",
    codename: "Taja - Ecommerce",
    role: "FullStack Developer",
    difficulty: "B",
    year: "2020",
    summary:
      "A geolocation-based e-commerce platform for retail sellers to connect with customers in their area.",
    brief:
      "The e-commerce platform allows retail sellers to connect with customers within a specific geographic location for easy communication and product delivery. The platform allows sellers to manage inventory, process orders, and handle customer interactions efficiently. Additionally, the platform provides features such as real-time tracking of product delivery, customer reviews and ratings, and secure payment options.",
    stack: ["React", "Java", "Spring Boot", "AWS"],
    outcome: "Launched in 2020, currently serving 10K+ active users with a 4.5-star rating on the app store.",
    links: { demo: "#", code: "#" },
    accent: "teal",
  },
  {
    id: "cybertrain",
    codename: "Cybertrain",
    role: "Web Developer",
    difficulty: "D",
    year: "2020",
    summary:
      "The platform aimed to increase students' awareness and understanding of cyber threats and how to protect themselves from them.",
    brief:
      "Cyber security online learning platform which utilizes external APIs from social media platforms to enhance the platform's functionality and an in-built video storage database to train students on cyber crime awareness.",
    stack: ["Javascript", "HTML", "CSS", "Python"],
    outcome: "Personal R&D project — seeded the visual system used today.",
    links: { demo: "https://cybertrain.netlify.app/", code: "#" },
    accent: "signal",
  },
];
