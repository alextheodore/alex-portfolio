"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Brief page-load sequence: a counter fills to 100 while the monogram
 * settles, then the whole overlay lifts away.
 */
export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDone(true);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1200;
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(step);
      else setTimeout(() => setDone(true), 220);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative grid h-20 w-20 place-items-center rounded-2xl border border-line bg-white/[0.03]"
          >
            <span className="bg-gradient-to-br from-aurora-violet via-aurora-cyan to-aurora-teal bg-clip-text font-display text-3xl font-bold text-transparent">
              A
            </span>
            <div className="absolute inset-0 animate-spin-slow rounded-2xl bg-[conic-gradient(from_0deg,transparent,rgba(124,92,255,0.5),transparent_40%)]" />
          </motion.div>
          <div className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-ink-muted">
            Loading — {count}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
