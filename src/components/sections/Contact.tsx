"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { site } from "@/data/site";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const socials = [
    { icon: Github, label: "GitHub", value: "@alextheodore", href: site.socials.github },
    { icon: Linkedin, label: "LinkedIn", value: "alexandertheodore", href: site.socials.linkedin },
    { icon: Instagram, label: "Instagram", value: "@alxthp", href: site.socials.instagram },
  ];

  const send = () => {
    const subject = encodeURIComponent(`Hello from ${form.name || "your site"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-line bg-white/[0.02] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-white/25";

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="08"
          eyebrow="Contact"
          title="Let's build something."
          description="Have a system to design, a product to ship, or an AI idea to explore? My inbox is open."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
          {/* Info */}
          <div className="space-y-4">
            <Reveal>
              <GlassCard glow="124,92,255" className="p-6">
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.04]">
                    <Mail size={18} className="text-aurora-violet" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-ink-faint">Email</p>
                    <p className="truncate text-sm text-ink group-hover:text-aurora-cyan">
                      {site.email}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="ml-auto text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </a>
              </GlassCard>
            </Reveal>

            <Reveal index={1}>
              <div className="grid grid-cols-2 gap-4">
                <GlassCard glow="45,212,191" className="p-5">
                  <Phone size={18} className="text-aurora-teal" />
                  <p className="mt-3 font-mono text-xs text-ink-faint">Phone</p>
                  <p className="mt-0.5 text-sm text-ink">{site.phone}</p>
                </GlassCard>
                <GlassCard glow="34,211,238" className="p-5">
                  <MapPin size={18} className="text-aurora-cyan" />
                  <p className="mt-3 font-mono text-xs text-ink-faint">Location</p>
                  <p className="mt-0.5 text-sm text-ink">{site.location}</p>
                </GlassCard>
              </div>
            </Reveal>

            <Reveal index={2}>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-white/[0.02] p-4 transition-colors hover:border-white/20"
                  >
                    <s.icon size={18} className="text-ink-muted group-hover:text-ink" />
                    <div>
                      <p className="font-mono text-xs text-ink-faint">{s.label}</p>
                      <p className="text-sm text-ink">{s.value}</p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-ink"
                    />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal index={1}>
            <GlassCard glow="124,92,255" className="p-7 sm:p-8">
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-mono text-xs text-ink-faint">
                      Name
                    </label>
                    <input
                      className={field}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-mono text-xs text-ink-faint">
                      Email
                    </label>
                    <input
                      type="email"
                      className={field}
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-xs text-ink-faint">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className={`${field} resize-none`}
                    placeholder="Tell me about the project…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={send}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aurora-violet to-aurora-cyan px-5 py-3.5 text-sm font-semibold text-base transition-shadow hover:shadow-glow"
                >
                  Send message
                  <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                </motion.button>
                <p className="text-center font-mono text-[11px] text-ink-faint">
                  Opens your mail app — no data stored.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
