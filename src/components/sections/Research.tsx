"use client";

import { FileText, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

const metrics = [
  { k: "Backbone", v: "ConvNeXt" },
  { k: "Classifier", v: "CatBoost" },
  { k: "Dataset", v: "ICBHI 2017" },
  { k: "Features", v: "Log-Mel" },
];

export function Research() {
  return (
    <section id="research" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="05"
          eyebrow="Research"
          title="Published work."
          description="Undergraduate research on making deep learning reliable when clinical data is scarce and imbalanced."
        />

        <Reveal index={1} className="mt-12">
          <GlassCard glow="34,211,238" className="p-8 sm:p-10">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-aurora-cyan">
              <FileText size={14} />
              Journal Article · BINUS University
            </div>

            <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              CatBoost Implementation on ConvNeXt for Respiratory Disease
              Detection Using Limited Imbalanced Lung Sounds
            </h3>

            <p className="mt-3 font-mono text-sm text-ink-faint">
              Alexander Theodore H. Pasaribu · Computer Science
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Deep Learning", "Audio Classification", "Medical AI", "Imbalanced Data"].map(
                (t) => (
                  <Badge key={t}>{t}</Badge>
                ),
              )}
            </div>

            {/* Abstract */}
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  Abstract
                </p>
                <div className="relative mt-3">
                  <Quote size={22} className="absolute -left-1 -top-1 text-white/5" />
                  <p className="pl-6 text-sm leading-relaxed text-ink-muted">
                    Respiratory disease detection from lung sounds is hampered by
                    small, heavily imbalanced clinical datasets that cause deep
                    networks to overfit and bias toward majority classes. This work
                    pairs a ConvNeXt vision backbone with a CatBoost gradient-boosting
                    classifier over log-Mel spectrogram features, combining STFT-based
                    representation, Audiomentations, and SMOTE to counter data scarcity
                    and imbalance. The hybrid outperforms a conventional deep-learning
                    baseline on minority classes of the ICBHI dataset.
                  </p>
                </div>

                <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  Methodology
                </p>
                <ol className="mt-3 space-y-2 text-sm text-ink-muted">
                  {[
                    "Transform lung-sound audio to log-Mel spectrograms via STFT.",
                    "Augment with Audiomentations; rebalance with SMOTE.",
                    "Extract embeddings from a pretrained ConvNeXt backbone.",
                    "Classify with CatBoost tuned for imbalanced targets.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-mono text-xs text-aurora-cyan">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-line bg-white/[0.02] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                    At a glance
                  </p>
                  <dl className="mt-3 space-y-2.5">
                    {metrics.map((m) => (
                      <div key={m.k} className="flex items-center justify-between">
                        <dt className="font-mono text-xs text-ink-faint">{m.k}</dt>
                        <dd className="font-mono text-sm text-ink">{m.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="rounded-2xl border border-aurora-cyan/25 bg-aurora-cyan/[0.06] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                    Key result
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">
                    Improved minority-class detection over a deep-learning baseline,
                    demonstrating a practical route to clinical audio AI under real
                    data constraints.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
