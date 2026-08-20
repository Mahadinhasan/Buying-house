"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SelvedgeDivider from "@/components/SelvedgeDivider";
import StampBadge from "@/components/StampBadge";
import { useSiteStore } from "@/lib/siteStore";

export default function TeamPage() {
  const { team, about } = useSiteStore();

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-20">
        <p className="mono-label text-xs text-loom font-medium">Team &amp; Certifications</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
          Named people you can reach directly, backed by audits you can verify.
        </h1>
      </section>

      <SelvedgeDivider />

      {/* Team grid */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <Reveal>
          <SectionHeading eyebrow="Leadership & merchandising" title="Who runs your account." />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((t, i) => (
            <Reveal key={t.id || t.name} delay={i * 60}>
              <div className="bg-paper border border-ink/10 rounded-2xl p-6 text-center h-full shadow-xs hover:border-loom/40 hover:shadow-soft transition-all">
                <div className="mx-auto w-16 h-16 rounded-full bg-loom/10 border border-loom/20 text-loom font-display font-bold flex items-center justify-center text-xl overflow-hidden">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    t.initials || "MD"
                  )}
                </div>
                <p className="mt-4 font-display font-bold text-lg text-ink">{t.name}</p>
                <p className="mt-1 text-xs text-loom font-medium">{t.role}</p>
                {t.bio && (
                  <p className="mt-3 text-xs text-ink/65 leading-relaxed">{t.bio}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-ink text-canvas py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="mono-label text-xs text-brass-light text-center">Certifications</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-center">
              Audited to the standards your compliance team already checks.
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(about.certifications || []).map((c, i) => (
              <Reveal key={c.id || c.code} delay={i * 60}>
                <div className="flex items-center gap-4 bg-canvas/[0.06] border border-canvas/15 rounded-card p-5">
                  <StampBadge
                    eyebrow="Certified"
                    main={c.code}
                    sub="Verified"
                    size={72}
                    className="text-brass-light shrink-0 text-[8px]"
                  />
                  <p className="text-sm text-canvas/75">{c.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
