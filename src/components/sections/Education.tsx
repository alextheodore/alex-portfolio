"use client";

import { GraduationCap, Award, Apple, Server } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

const certifications = [
  {
    icon: Apple,
    title: "Apple Developer Academy",
    subtitle: "iOS Foundation",
    note: "App design and Swift development fundamentals.",
  },
  {
    icon: Server,
    title: "Backend Engineering Bootcamp",
    subtitle: "APIs & Systems",
    note: "Production backend patterns, APIs, and databases.",
  },
  {
    icon: Award,
    title: "Additional Certifications",
    subtitle: "Ongoing",
    note: "Continuous learning across AI, cloud, and systems.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="06"
          eyebrow="Education & credentials"
          title="Foundations."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          {/* Degree */}
          <Reveal>
            <GlassCard glow="124,92,255" className="h-full p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.04]">
                  <GraduationCap size={20} className="text-aurora-violet" />
                </span>
                <div>
                  <p className="font-mono text-xs text-ink-faint">2020 — 2024</p>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    BINUS University
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-ink-muted">Bachelor of Computer Science</p>

              <div className="mt-6 flex items-center gap-6">
                <div>
                  <p className="font-display text-3xl font-semibold text-ink">3.50</p>
                  <p className="mt-1 font-mono text-xs text-ink-faint">GPA / 4.00</p>
                </div>
                <div className="h-12 w-px bg-line" />
                <div>
                  <p className="text-sm text-ink-muted">Research focus</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge>Artificial Intelligence</Badge>
                    <Badge>Machine Learning</Badge>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          {/* Certifications */}
          <div className="grid gap-4">
            {certifications.map((c, i) => (
              <Reveal key={c.title} index={i}>
                <GlassCard glow="34,211,238" className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-line bg-white/[0.04]">
                      <c.icon size={18} className="text-aurora-cyan" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-display text-base font-semibold text-ink">
                          {c.title}
                        </h4>
                        <span className="font-mono text-[11px] text-ink-faint">
                          {c.subtitle}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-ink-muted">{c.note}</p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
