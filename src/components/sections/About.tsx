"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Backend depth, AI on top."
          description={site.about.lead}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5">
            {site.about.body.map((p, i) => (
              <Reveal key={i} index={i}>
                <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal index={1}>
            <GlassCard glow="34,211,238" className="p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                By the numbers
              </p>
              <div className="mt-5 grid grid-cols-2 gap-5">
                {site.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="bg-gradient-to-br from-ink to-ink-muted bg-clip-text font-display text-3xl font-semibold text-transparent">
                      {m.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-ink-faint">{m.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2 border-t border-line pt-5 font-mono text-xs text-ink-muted">
                <p>
                  <span className="text-aurora-cyan">focus</span> — distributed systems,
                  AI engineering
                </p>
                <p>
                  <span className="text-aurora-cyan">based</span> — {site.location}
                </p>
                <p>
                  <span className="text-aurora-cyan">learning</span> — always
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
