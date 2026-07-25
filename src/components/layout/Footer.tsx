"use client";

import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: Github, href: site.socials.github, label: "GitHub" },
    { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: site.socials.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-line px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold text-ink">
            {site.preferred} Theodore
          </p>
          <p className="mt-1 font-mono text-xs text-ink-faint">
            © {year} · Built with Next.js, Tailwind & Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-muted transition-all hover:-translate-y-0.5 hover:border-white/20 hover:text-ink"
            >
              <Icon size={17} />
            </a>
          ))}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Back to top"
            className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-ink text-base transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>
    </footer>
  );
}
