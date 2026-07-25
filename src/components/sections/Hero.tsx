"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Instagram, MapPin } from "lucide-react";
import { Particles } from "@/components/ui/Particles";
import { site } from "@/data/site";

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element, o?: object) => void } })
    .lenis;
  if (lenis) lenis.scrollTo(el, { offset: -80 });
  else el.scrollIntoView({ behavior: "smooth" });
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28"
    >
      <div className="absolute inset-0 -z-10">
        <Particles count={40} />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_0.9fr]">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-ink-muted backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aurora-teal opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aurora-teal" />
            </span>
            Available for select work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="font-display text-hero font-bold text-ink"
          >
            <span className="block">Alexander</span>
            <span className="block bg-[linear-gradient(110deg,#7C5CFF,#22D3EE,#2DD4BF,#7C5CFF)] bg-[length:200%_auto] bg-clip-text text-transparent animate-sheen">
              Theodore
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
          >
            {site.hero.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-3 max-w-xl text-sm leading-relaxed text-ink-faint"
          >
            {site.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-base transition-transform hover:scale-[1.03]"
            >
              View projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href={site.resume}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-5 py-3 text-sm font-medium text-ink backdrop-blur-md transition-colors hover:border-white/25"
            >
              <Download size={16} />
              Download resume
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              Contact me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex items-center gap-4"
          >
            {[
              { icon: Github, href: site.socials.github },
              { icon: Linkedin, href: site.socials.linkedin },
              { icon: Instagram, href: site.socials.instagram },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-faint transition-colors hover:text-ink"
              >
                <Icon size={18} />
              </a>
            ))}
            <span className="h-4 w-px bg-line" />
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-faint">
              <MapPin size={13} /> {site.location}
            </span>
          </motion.div>
        </div>

        {/* Right — portrait + metrics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative animate-float rounded-3xl border border-line bg-white/[0.03] p-2 shadow-glass backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              {/* Drop the real portrait at /public/portrait.jpg to replace this. */}
              <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(124,92,255,0.35),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.3),transparent_55%)]">
                <span className="font-display text-8xl font-bold text-white/85">AT</span>
              </div>
              <Image
                src={site.portrait}
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 360px"
                className="object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="flex items-center justify-between px-3 py-3">
              <div>
                <p className="font-mono text-[11px] text-ink-faint">CURRENTLY</p>
                <p className="text-sm text-ink">Software Engineer</p>
              </div>
              <p className="font-mono text-[11px] text-aurora-cyan">@ Bank Mandiri</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {site.metrics.slice(0, 2).map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-line bg-white/[0.03] p-4 backdrop-blur-md"
              >
                <p className="font-display text-2xl font-semibold text-ink">{m.value}</p>
                <p className="mt-1 text-xs text-ink-faint">{m.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-ink-muted"
          />
        </div>
      </div>
    </section>
  );
}
