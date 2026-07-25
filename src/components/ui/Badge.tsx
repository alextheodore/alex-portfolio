import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Small glass chip used for tech tags and labels. */
export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[11px] tracking-wide text-ink-muted transition-colors hover:border-white/20 hover:text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
