export type Project = {
  slug: string;
  title: string;
  category: "Artificial Intelligence" | "Full Stack" | "Dashboard";
  year: string;
  tagline: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  tech: string[];
  features: string[];
  challenges: string[];
  result: string;
  gallery: string[]; // paths under /public/projects/<slug>/
  accent: string; // hex used for card glow
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "respiratory-disease-detection",
    title: "Respiratory Disease Detection",
    category: "Artificial Intelligence",
    year: "2025",
    tagline: "CatBoost + ConvNeXt on imbalanced lung sounds",
    description:
      "Deep learning research for respiratory disease detection using lung-sound classification on limited, imbalanced datasets.",
    overview:
      "A research project that classifies respiratory conditions directly from lung-sound recordings. It combines a ConvNeXt vision backbone with a CatBoost gradient-boosting head to squeeze reliable performance out of a small, heavily imbalanced clinical dataset.",
    problem:
      "Clinical lung-sound datasets are tiny and lopsided — a handful of healthy recordings for every rare pathology. Standard deep networks overfit fast and collapse toward the majority class, which is exactly the wrong failure mode for a diagnostic aid.",
    solution:
      "Audio is transformed into log-Mel spectrograms via STFT, augmented with Audiomentations, and rebalanced with SMOTE. A pretrained ConvNeXt learns rich spectral representations; those embeddings feed a CatBoost classifier that handles the tabular, imbalanced decision boundary far better than a softmax head alone.",
    architecture: [
      "Raw audio → STFT → log-Mel spectrogram",
      "Audiomentations for time/frequency augmentation",
      "SMOTE to rebalance minority classes",
      "ConvNeXt backbone → embedding extraction",
      "CatBoost classifier head on embeddings",
    ],
    tech: [
      "Python",
      "PyTorch",
      "ConvNeXt",
      "CatBoost",
      "ICBHI Dataset",
      "Log-Mel Spectrogram",
      "STFT",
      "SMOTE",
      "Audiomentations",
    ],
    features: [
      "Spectrogram pipeline tuned for respiratory sounds",
      "Hybrid deep + gradient-boosting classifier",
      "Imbalance handling with SMOTE and augmentation",
      "Reproducible training and evaluation on ICBHI",
    ],
    challenges: [
      "Extreme class imbalance in the ICBHI dataset",
      "Very limited labelled clinical audio",
      "Preventing the vision backbone from overfitting",
    ],
    result:
      "The CatBoost-on-ConvNeXt hybrid outperformed a plain deep-learning baseline on the imbalanced classes, and became the basis for a published undergraduate thesis on respiratory disease detection.",
    gallery: ["cover.jpg", "spectrogram.jpg", "architecture.jpg"],
    accent: "#22D3EE",
    github: "https://github.com/alextheodore",
    featured: true,
  },
  {
    slug: "umkm-naik-kelas",
    title: "UMKM Naik Kelas",
    category: "Full Stack",
    year: "2024",
    tagline: "A growth platform for Indonesian MSMEs",
    description:
      "Digital platform helping MSMEs manage a marketplace, run events, and grow community engagement in one place.",
    overview:
      "A full-stack platform that gives small and medium enterprises the tooling larger businesses take for granted — a storefront, an events system, a community forum, and a CMS — all behind a single account.",
    problem:
      "Indonesian MSMEs are scattered across chat apps, spreadsheets, and social media. There was no single place to sell, organise events, and build a community without stitching five tools together.",
    solution:
      "One integrated Next.js application with authentication, a marketplace, a community forum, a content CMS, and an owner dashboard — backed by Supabase for auth, database, and storage.",
    architecture: [
      "Next.js app router frontend + API routes",
      "Supabase Postgres, Auth, and Storage",
      "Row-level security for multi-tenant data",
      "CMS-driven content surfaces",
    ],
    tech: ["Next.js", "Supabase", "TypeScript", "TailwindCSS"],
    features: [
      "Authentication and account management",
      "Marketplace for products and services",
      "Community forum for engagement",
      "Content CMS for articles and events",
      "Owner dashboard with key metrics",
    ],
    challenges: [
      "Modeling multi-tenant data safely with RLS",
      "Keeping the UX simple for non-technical owners",
      "Unifying marketplace, forum, and CMS in one flow",
    ],
    result:
      "Delivered a working platform that lets an MSME sell, publish, and grow a community from a single dashboard instead of juggling separate tools.",
    gallery: ["cover.jpg", "marketplace.jpg", "dashboard.jpg"],
    accent: "#2DD4BF",
    github: "https://github.com/alextheodore",
    demo: "#",
    featured: true,
  },
  {
    slug: "enterprise-ai-agent",
    title: "Enterprise AI Agent",
    category: "Artificial Intelligence",
    year: "2025",
    tagline: "LLM-powered assistant for enterprise workflows",
    description:
      "AI-powered assistant integrating modern LLMs to automate and augment enterprise workflows.",
    overview:
      "A production-oriented AI agent that plugs modern open and hosted LLMs into real enterprise workflows — routing between models, calling tools, and running locally or in the cloud depending on the sensitivity of the data.",
    problem:
      "Enterprises want LLM automation but can't send everything to a single external API — they need model choice, tool use, and the option to run on-prem for sensitive workloads.",
    solution:
      "A FastAPI service orchestrated with LangChain that switches between DeepSeek, Qwen, and Groq-hosted models, falls back to local Ollama models when needed, and packages the whole thing in Docker for repeatable deployment.",
    architecture: [
      "FastAPI service exposing the agent API",
      "LangChain orchestration + tool calling",
      "Model routing across DeepSeek / Qwen / Groq",
      "Ollama for local, private inference",
      "Docker for reproducible deployment",
    ],
    tech: ["FastAPI", "LangChain", "Docker", "DeepSeek", "Qwen", "Groq", "Ollama"],
    features: [
      "Multi-model routing with graceful fallback",
      "Tool-calling for real workflow actions",
      "Local inference option for sensitive data",
      "Containerised, deploy-anywhere setup",
    ],
    challenges: [
      "Normalising behaviour across very different models",
      "Balancing latency, cost, and privacy per request",
      "Keeping tool calls reliable in production",
    ],
    result:
      "A flexible agent foundation that lets a team adopt LLM automation without locking into one provider or leaking sensitive data.",
    gallery: ["cover.jpg", "flow.jpg"],
    accent: "#7C5CFF",
    github: "https://github.com/alextheodore",
    featured: true,
  },
  {
    slug: "ternak-klip-dashboard",
    title: "Ternak Klip Dashboard",
    category: "Dashboard",
    year: "2024",
    tagline: "Content automation, wired to Discord",
    description:
      "Admin dashboard integrated with a Discord bot and analytics for content automation.",
    overview:
      "An operations dashboard for a content-automation pipeline, connected to a Discord bot so the whole workflow — triggering jobs, watching analytics, managing content — can be driven from one panel.",
    problem:
      "Content automation was being run from scattered scripts and manual Discord commands, with no single view of what was happening or how it was performing.",
    solution:
      "A unified admin dashboard that surfaces analytics, controls the automation jobs, and talks to a Discord bot for triggering and notifications.",
    architecture: [
      "Admin dashboard frontend",
      "Discord bot integration for control + alerts",
      "Analytics layer over the automation pipeline",
    ],
    tech: ["React", "Discord Bot", "Analytics", "REST API"],
    features: [
      "Central control panel for automation jobs",
      "Discord bot integration",
      "Content analytics and reporting",
    ],
    challenges: [
      "Syncing dashboard state with a live Discord bot",
      "Making automation observable end to end",
    ],
    result:
      "Turned a set of ad-hoc scripts into an observable, controllable content-automation product with a single operator dashboard.",
    gallery: ["cover.jpg"],
    accent: "#C15CFF",
    github: "https://github.com/alextheodore",
    featured: false,
  },
];

export const projectCategories = [
  "All",
  "Artificial Intelligence",
  "Full Stack",
  "Dashboard",
] as const;
