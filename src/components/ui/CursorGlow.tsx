"use client";

import { useEffect, useRef } from "react";

/**
 * A soft radial glow that trails the cursor. Disabled for touch devices
 * and when the user prefers reduced motion. Uses a rAF lerp for smoothness.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      el.style.opacity = "1";
    };

    const loop = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 [transform:translate3d(-50%,-50%,0)]"
      style={{
        marginLeft: "-210px",
        marginTop: "-210px",
        background:
          "radial-gradient(circle, rgba(124,92,255,0.14), rgba(34,211,238,0.06) 40%, transparent 70%)",
      }}
    />
  );
}
