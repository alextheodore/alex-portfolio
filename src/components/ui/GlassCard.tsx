"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Frosted glass surface. When `interactive`, a soft spotlight tracks the
 * cursor across the card via CSS custom properties (no re-renders).
 */
export function GlassCard({
  children,
  className,
  interactive = true,
  glow = "124,92,255",
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  glow?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      style={{ ["--glow" as string]: glow }}
      className={cn(
        "group/glass relative overflow-hidden rounded-2xl border border-line bg-white/[0.03] shadow-glass backdrop-blur-xl transition-colors duration-300",
        interactive && "hover:border-white/20",
        className,
      )}
    >
      {interactive && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/glass:opacity-100"
          style={{
            background:
              "radial-gradient(300px circle at var(--mx) var(--my), rgba(var(--glow),0.14), transparent 60%)",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
