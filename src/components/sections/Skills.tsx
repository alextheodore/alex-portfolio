"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { skills } from "@/data/skills";

const glows = [
  "124,92,255",
  "34,211,238",
  "45,212,191",
  "193,92,255",
  "79,70,229",
  "34,211,238",
  "124,92,255",
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="The toolkit, by layer."
          description="Chosen deliberately per problem — from the language up through the deployment."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} index={i % 3}>
              <GlassCard glow={glows[i]} className="h-full p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {group.category}
                  </h3>
                  <span className="font-mono text-xs text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-ink-faint">{group.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-line bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-ink-muted transition-colors hover:border-white/20 hover:text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
