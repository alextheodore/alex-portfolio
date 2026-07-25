"use client";

/**
 * Ambient aurora field: three drifting, blurred gradient blobs over the
 * base colour. The blob layer dims in light mode (via --aurora-opacity).
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base"
    >
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: "var(--aurora-opacity)" }}
      >
        <div className="absolute left-[8%] top-[-10%] h-[46rem] w-[46rem] animate-aurora-drift rounded-full bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.55),transparent_60%)] blur-[90px]" />
        <div className="absolute right-[2%] top-[6%] h-[40rem] w-[40rem] animate-aurora-drift rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.42),transparent_60%)] blur-[100px] [animation-delay:-6s]" />
        <div className="absolute bottom-[-14%] left-[28%] h-[44rem] w-[44rem] animate-aurora-drift rounded-full bg-[radial-gradient(circle_at_center,rgba(193,92,255,0.32),transparent_62%)] blur-[110px] [animation-delay:-12s]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgb(var(--c-vignette)) 100%)",
        }}
      />
    </div>
  );
}