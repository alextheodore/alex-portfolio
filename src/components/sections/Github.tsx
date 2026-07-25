"use client";

/* eslint-disable @next/next/no-img-element */
import { Github as GithubIcon, GitCommit, Star, GitBranch } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { site } from "@/data/site";

const user = site.githubUser;

/**
 * Live GitHub surface. Stats/graph are rendered by public stat services
 * (github-readme-stats, ghchart) so no token or API route is required.
 * For a fully self-hosted contribution graph, swap these for the GitHub
 * GraphQL API in an /app/api route.
 */
export function Github() {
  const stats = [
    { icon: GitCommit, label: "Commits", hint: "Consistent contributor" },
    { icon: Star, label: "Stars", hint: "Across public repos" },
    { icon: GitBranch, label: "Repositories", hint: "Public projects" },
  ];

  return (
    <section id="github" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="07"
          eyebrow="Open source"
          title="On GitHub."
          description="Live activity, pinned work, and the language mix — pulled straight from @alextheodore."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Stats card */}
          <Reveal>
            <GlassCard glow="124,92,255" className="h-full p-6">
              <div className="flex items-center gap-2 font-mono text-xs text-ink-faint">
                <GithubIcon size={14} /> @{user}
              </div>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&bg_color=00000000&title_color=22D3EE&text_color=9AA0B0&icon_color=7C5CFF&hide=contribs`}
                alt="GitHub stats"
                loading="lazy"
                className="mt-4 w-full"
              />
              <div className="mt-4 space-y-2">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-3 py-2"
                  >
                    <s.icon size={15} className="text-aurora-cyan" />
                    <span className="text-sm text-ink">{s.label}</span>
                    <span className="ml-auto font-mono text-[11px] text-ink-faint">
                      {s.hint}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          {/* Languages */}
          <Reveal index={1}>
            <GlassCard glow="45,212,191" className="h-full p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Top languages
              </p>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&hide_border=true&bg_color=00000000&title_color=2DD4BF&text_color=9AA0B0&langs_count=8`}
                alt="Top languages"
                loading="lazy"
                className="mt-4 w-full"
              />
            </GlassCard>
          </Reveal>

          {/* Streak */}
          <Reveal index={2}>
            <GlassCard glow="193,92,255" className="h-full p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Contribution streak
              </p>
              <img
                src={`https://streak-stats.demolab.com?user=${user}&hide_border=true&background=00000000&stroke=22D3EE&ring=7C5CFF&fire=C15CFF&currStreakLabel=9AA0B0&sideLabels=9AA0B0&dates=5B6172&currStreakNum=E7E9EE&sideNums=E7E9EE`}
                alt="Contribution streak"
                loading="lazy"
                className="mt-4 w-full"
              />
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2.5 text-sm text-ink transition-colors hover:border-white/25"
              >
                <GithubIcon size={16} /> View profile
              </a>
            </GlassCard>
          </Reveal>
        </div>

        {/* Contribution graph */}
        <Reveal index={1} className="mt-5">
          <GlassCard glow="34,211,238" className="p-6 sm:p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Contribution graph
            </p>
            <div className="overflow-x-auto">
              <img
                src={`https://ghchart.rshah.org/7C5CFF/${user}`}
                alt="GitHub contribution graph"
                loading="lazy"
                className="min-w-[640px] opacity-90"
              />
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
