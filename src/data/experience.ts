export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  location?: string;
  summary: string;
  points: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    company: "PT Bank Mandiri (Persero) Tbk",
    role: "Software Engineer",
    period: "Mar 2026 — Present",
    current: true,
    location: "Indonesia",
    summary:
      "Building enterprise-grade banking software and folding AI into core business processes at one of Indonesia's largest banks.",
    points: [
      "Build enterprise applications used across banking operations.",
      "Design backend systems for scale, reliability, and security.",
      "Build AI solutions that automate and augment internal workflows.",
      "Improve the banking customer experience through better software.",
      "Integrate AI into business processes end to end.",
    ],
    tags: ["Go", "Backend", "AI", "Enterprise", "Microservices"],
  },
  {
    company: "PT Telkom Indonesia",
    role: "AI Software Developer",
    period: "Nov 2025 — Mar 2026",
    location: "Indonesia",
    summary:
      "Developed internal AI applications and enterprise digital solutions for Indonesia's largest telecommunications company.",
    points: [
      "Developed AI-powered internal applications.",
      "Built enterprise digital solutions from the ground up.",
      "Integrated AI models into existing business systems.",
      "Contributed to backend development and service design.",
    ],
    tags: ["AI", "LangChain", "Backend", "Enterprise"],
  },
  {
    company: "PT Cerberus Sinergi Datasistem",
    role: "Junior Developer",
    period: "Feb 2024 — Feb 2025",
    location: "Indonesia",
    summary:
      "Shipped production web applications with React and built a reusable component foundation for the team.",
    points: [
      "Developed production web applications with React.",
      "Built reusable, well-typed components for reliable delivery.",
      "Integrated REST APIs across multiple client projects.",
      "Collaborated on shipping features to production.",
    ],
    tags: ["React", "TypeScript", "REST API", "Frontend"],
  },
];
