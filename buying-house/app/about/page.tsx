"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SelvedgeDivider from "@/components/SelvedgeDivider";
import StampBadge from "@/components/StampBadge";
import { useSiteStore } from "@/lib/siteStore";

export default function AboutPage() {
  const { branding, about } = useSiteStore();

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-20">
        <p className="mono-label text-xs text-loom font-medium">{about.heroTagline || `About ${branding.name}`}</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
          {about.headline || "Built by merchandisers who were tired of being the excuse between buyer and factory."}
        </h1>
        <div className="mt-6 space-y-4 max-w-2xl">
          {(about.story || []).map((p, idx) => (
            <p key={idx} className="text-base sm:text-lg text-ink/65 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      <SelvedgeDivider />

      {/* Stats Cards */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(about.stats || []).map((s, i) => (
            <Reveal key={s.id || s.label} delay={i * 60}>
              <div className="bg-paper border border-ink/10 rounded-card p-6 text-center shadow-xs">
                <p className="font-display text-3xl font-semibold text-loom">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs text-ink/55">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-paper border-y border-ink/10 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What we hold ourselves to"
              title="Three commitments that don't change with order size."
            />
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {(about.values || []).map((v, i) => (
              <Reveal key={v.id || v.title} delay={i * 80}>
                <div className="h-full">
                  <h3 className="font-display font-semibold text-ink text-lg">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <Reveal>
          <SectionHeading eyebrow="Our record" title="Proven track record in milestones." />
        </Reveal>

        <div className="mt-12 space-y-0">
          {(about.milestones || []).map((m, i) => (
            <Reveal key={m.id || m.year} delay={i * 60}>
              <div className="flex gap-6 sm:gap-10 py-5 border-b border-ink/10 last:border-0">
                <span className="font-mono text-sm text-brass shrink-0 w-14 font-bold">
                  {m.year}
                </span>
                <p className="text-sm text-ink/70 leading-relaxed">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center bg-ink text-canvas rounded-card p-10 shadow-lifted">
          <div>
            <p className="mono-label text-xs text-brass-light">Certified to</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">
              Compliance our buyers can hand straight to their own audit teams.
            </h3>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-canvas/70 font-mono">
              {(about.certifications || []).map((c) => (
                <span key={c.id || c.code} className="hover:text-brass-light transition-colors">
                  {c.code}
                </span>
              ))}
            </div>
          </div>
          <StampBadge
            eyebrow="Est."
            main={String(branding.founded)}
            sub={branding.city}
            size={110}
            className="text-brass-light justify-self-center"
          />
        </div>
      </section>
    </>
  );
}
