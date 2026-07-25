"use client";

import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

/**
 * Section header with a monospaced "// NN — label" eyebrow. The numbering
 * encodes reading order through the page, engineer-vernacular style.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <div
          className={cn(
            "mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ink-muted",
            align === "center" && "justify-center",
          )}
        >
          <span className="text-aurora-cyan">{"//"} {index}</span>
          <span className="h-px w-8 bg-line" />
          <span>{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal index={1}>
        <h2 className="font-display text-section font-semibold text-ink">{title}</h2>
      </Reveal>
      {description && (
        <Reveal index={2}>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
