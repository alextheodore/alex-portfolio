"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProjectModal } from "./ProjectModal";
import { projects, projectCategories, type Project } from "@/data/projects";

export function Projects() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const byCat = category === "All" || p.category === category;
      const byQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return byCat && byQuery;
    });
  }, [category, query]);

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="Featured work"
          title="Selected projects."
          description="Each one is a full case study — click through for the problem, architecture, and result."
        />

        {/* Controls */}
        <Reveal index={1}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all ${
                    category === cat
                      ? "border-white/25 bg-white/[0.06] text-ink"
                      : "border-line text-ink-muted hover:text-ink"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative sm:w-64">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="w-full rounded-full border border-line bg-white/[0.03] py-2 pl-9 pr-4 font-mono text-xs text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-white/25"
              />
            </div>
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                layout
                key={p.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: (i % 2) * 0.05 }}
                onClick={() => setActive(p)}
                className="text-left"
              >
                <GlassCard glow={hexToRgb(p.accent)} className="h-full p-1.5">
                  {/* Cover */}
                  <div className="relative h-40 overflow-hidden rounded-[0.9rem]">
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover/glass:scale-105"
                      style={{
                        background: `radial-gradient(circle at 25% 25%, ${p.accent}55, transparent 55%), radial-gradient(circle at 85% 85%, ${p.accent}30, transparent 50%)`,
                      }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px]" />
                    <div className="absolute left-3 top-3">
                      <span
                        className="rounded-full border px-2.5 py-0.5 font-mono text-[10px]"
                        style={{ borderColor: `${p.accent}55`, color: p.accent }}
                      >
                        {p.category}
                      </span>
                    </div>
                    <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-line bg-base/50 text-ink opacity-0 transition-opacity duration-300 group-hover/glass:opacity-100">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {p.title}
                      </h3>
                      <span className="font-mono text-xs text-ink-faint">{p.year}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-line px-2 py-0.5 font-mono text-[10px] text-ink-faint"
                        >
                          {t}
                        </span>
                      ))}
                      {p.tech.length > 4 && (
                        <span className="rounded-md px-2 py-0.5 font-mono text-[10px] text-ink-faint">
                          +{p.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center font-mono text-sm text-ink-faint">
            No projects match that search. Try a different term.
          </p>
        )}

        <Reveal index={1}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/alextheodore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-5 py-2.5 text-sm text-ink transition-colors hover:border-white/25"
            >
              <Github size={16} /> More on GitHub
            </a>
          </div>
        </Reveal>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `${r},${g},${b}`;
}
