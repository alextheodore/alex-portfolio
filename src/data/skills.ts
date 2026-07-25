export type SkillGroup = {
  category: string;
  blurb: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Programming",
    blurb: "Languages I reach for depending on the problem.",
    items: ["Go", "JavaScript", "TypeScript", "Python", "Swift", "PHP", "SQL"],
  },
  {
    category: "Frontend",
    blurb: "Interfaces that feel fast and considered.",
    items: ["React", "Next.js", "TailwindCSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    blurb: "Services built to stay predictable under load.",
    items: ["Go", "Node.js", "Fiber", "REST API", "Microservices", "Laravel"],
  },
  {
    category: "Database",
    blurb: "Storage and caching layers, chosen deliberately.",
    items: ["PostgreSQL", "MySQL", "MariaDB", "Supabase", "Redis"],
  },
  {
    category: "AI & ML",
    blurb: "From training loops to LLMs in production.",
    items: [
      "PyTorch",
      "CatBoost",
      "ConvNeXt",
      "LangChain",
      "Ollama",
      "DeepSeek",
      "Qwen",
      "Groq",
      "Machine Learning",
    ],
  },
  {
    category: "DevOps",
    blurb: "Shipping and automation.",
    items: ["Docker", "Git", "GitHub Actions"],
  },
  {
    category: "Tools",
    blurb: "The daily kit.",
    items: ["VS Code", "Postman", "Figma", "Notion"],
  },
];
