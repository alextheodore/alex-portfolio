"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/experience";

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Where I've built."
          description="Three roles, one throughline: shipping software that has to work in production."
        />

        <div ref={trackRef} className="relative mt-14 pl-8 sm:pl-10">
          {/* Rail */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-line sm:left-[11px]" />
          <motion.div
            style={{ height }}
            className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-aurora-violet via-aurora-cyan to-aurora-teal sm:left-[11px]"
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} index={i} className="relative">
                {/* Node */}
                <span
                  className={`absolute -left-8 top-2 grid h-4 w-4 place-items-center rounded-full border-2 sm:-left-10 ${
                    exp.current
                      ? "border-aurora-teal bg-aurora-teal/20"
                      : "border-line bg-base"
                  }`}
                >
                  {exp.current && (
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-aurora-teal" />
                  )}
                </span>

                <GlassCard glow="124,92,255" className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-ink-faint">
                        <Briefcase size={14} />
                        <span className="font-mono text-xs">{exp.company}</span>
                      </div>
                      <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">
                        {exp.role}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block rounded-full border px-3 py-1 font-mono text-xs ${
                          exp.current
                            ? "border-aurora-teal/40 bg-aurora-teal/10 text-aurora-teal"
                            : "border-line text-ink-muted"
                        }`}
                      >
                        {exp.period}
                      </span>
                      {exp.location && (
                        <p className="mt-1.5 inline-flex items-center gap-1 font-mono text-[11px] text-ink-faint">
                          <MapPin size={11} /> {exp.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {exp.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-2.5 text-sm text-ink-muted"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-aurora-cyan" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
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
