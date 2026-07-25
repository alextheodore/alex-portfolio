"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-aurora-cyan">
        {label}
      </p>
      <div className="mt-2 text-sm leading-relaxed text-ink-muted">{children}</div>
    </div>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-end justify-center overflow-y-auto bg-base/70 p-0 backdrop-blur-md sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.article
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: "spring", damping: 30, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-6 w-full max-w-3xl overflow-hidden rounded-t-3xl border border-line bg-base-800/95 shadow-glass backdrop-blur-2xl sm:rounded-3xl"
          >
            {/* Hero */}
            <div className="relative h-44 overflow-hidden sm:h-56">
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${project.accent}55, transparent 55%), radial-gradient(circle at 80% 90%, ${project.accent}33, transparent 50%)`,
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-base-800 to-transparent" />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-line bg-base/60 text-ink transition-colors hover:bg-base/90"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span
                  className="inline-block rounded-full border px-3 py-1 font-mono text-xs"
                  style={{ borderColor: `${project.accent}55`, color: project.accent }}
                >
                  {project.category} · {project.year}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-muted">{project.tagline}</p>
              </div>
            </div>

            {/* Body */}
            <div className="max-h-[62vh] space-y-7 overflow-y-auto p-6 sm:p-8">
              <Block label="Overview">{project.overview}</Block>

              <div className="grid gap-6 sm:grid-cols-2">
                <Block label="Problem">{project.problem}</Block>
                <Block label="Solution">{project.solution}</Block>
              </div>

              <Block label="Architecture">
                <ol className="space-y-1.5">
                  {project.architecture.map((step, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="font-mono text-xs text-ink-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Block>

              <div className="grid gap-6 sm:grid-cols-2">
                <Block label="Features">
                  <ul className="space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span
                          className="mt-2 h-1 w-1 flex-shrink-0 rounded-full"
                          style={{ background: project.accent }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Block>
                <Block label="Challenges">
                  <ul className="space-y-1.5">
                    {project.challenges.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink-faint" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </Block>
              </div>

              <div
                className="rounded-2xl border p-5"
                style={{
                  borderColor: `${project.accent}33`,
                  background: `${project.accent}0d`,
                }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  Result
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink">{project.result}</p>
              </div>

              <Block label="Tech stack">
                <div className="mt-1 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Block>

              <div className="flex flex-wrap gap-3 border-t border-line pt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm text-ink transition-colors hover:border-white/25"
                  >
                    <Github size={16} /> Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-base transition-transform hover:scale-[1.03]"
                  >
                    <ExternalLink size={16} /> Live demo
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
