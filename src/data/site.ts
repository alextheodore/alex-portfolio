export const site = {
  name: "Alexander Theodore Hamonangan Pasaribu",
  shortName: "Alex Theodore",
  preferred: "Alex",
  role: "Software Engineer",
  location: "Tangerang, Indonesia",
  email: "alex.theodore26@gmail.com",
  phone: "+62 8111667108",
  url: "https://alextheodore.dev",
  resume: "/resume.pdf",
  portrait: "/portrait.jpg", // ← drop the professional portrait here
  socials: {
    linkedin: "https://www.linkedin.com/in/alexandertheodore",
    github: "https://github.com/alextheodore",
    instagram: "https://www.instagram.com/alxthp",
  },
  githubUser: "alextheodore",
  hero: {
    headline:
      "Software Engineer crafting scalable backend systems, modern web applications, and AI-powered digital solutions.",
    subheadline:
      "I build high-performance software using Go, React, TypeScript, and Artificial Intelligence to solve real-world problems.",
  },
  about: {
    lead: "I engineer systems that stay fast, honest, and maintainable as they grow.",
    body: [
      "I'm a Software Engineer who lives at the intersection of backend engineering and applied AI. Most of my work is the unglamorous, important kind: designing services that hold up under real production load, drawing clean boundaries between systems, and making sure the code that ships today is still readable a year from now.",
      "On the backend I reach for Go, building REST APIs and microservices that are predictable under pressure. On the frontend I build with React, Next.js, and TypeScript to turn those systems into interfaces people actually enjoy using. And increasingly, I fold machine learning and LLMs directly into products — not as a demo, but as a working part of the workflow.",
      "I care about distributed systems, AI engineering, and the craft of writing software that improves people's lives. I treat every project as a reason to learn the next thing.",
    ],
  },
  metrics: [
    { label: "Years shipping software", value: "3+" },
    { label: "Production systems", value: "10+" },
    { label: "Research GPA", value: "3.50" },
    { label: "Core languages", value: "7" },
  ],
} as const;
