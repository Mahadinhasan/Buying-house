import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StampBadge from "@/components/StampBadge";
import SelvedgeDivider from "@/components/SelvedgeDivider";
import {
  certifications,
  company,
  stats,
  process,
  productCategories,
  factories,
  team,
  testimonials,
  blogPosts,
} from "@/lib/data";

export default function HomePage() {
  const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <div>
              <p className="mono-label text-xs text-loom font-medium">
                Sourcing &amp; Compliance Partner · {company.city}
              </p>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold tracking-tight text-ink">
                {company.tagline}
              </h1>
              <p className="mt-6 text-base sm:text-lg text-ink/65 leading-relaxed max-w-xl">
                {company.name} sources, samples, and ships apparel on behalf
                of international brands — matched to audited factories across
                Bangladesh, with our own quality control at every stage.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-loom text-paper font-semibold px-5 py-3 text-sm hover:bg-loom-dark transition-colors"
                >
                  <MessageCircle size={17} /> Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-5 py-3 text-sm font-semibold hover:border-ink/50 transition-colors"
                >
                  Request a quote <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-5">
                <StampBadge
                  eyebrow="Since 2011"
                  main="500+"
                  sub="Shipments Approved"
                  size={92}
                />
                <p className="text-xs text-ink/50 max-w-[13rem] leading-relaxed">
                  Independent QC on every order, in-line and pre-shipment —
                  not just at the factory gate.
                </p>
              </div>
            </div>

            {/* Spec-sheet card */}
            <Reveal>
              <div className="bg-paper border border-ink/10 rounded-card shadow-lifted p-6 sm:p-7 relative">
                <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                  <span className="mono-label text-[11px] text-ink/50">
                    Order Spec Sheet
                  </span>
                  <span className="font-mono text-[11px] text-ink/70">
                    BH-2026-0417
                  </span>
                </div>

                <div className="mt-5">
                  <p className="mono-label text-[10px] text-ink/45">
                    Category Swatches
                  </p>
                  <div className="mt-3 grid grid-cols-6 gap-2">
                    {productCategories.map((p) => (
                      <div
                        key={p.name}
                        title={p.name}
                        className="aspect-square rounded-[3px] swatch-texture border border-ink/10"
                        style={{ backgroundColor: `${p.swatch}22` }}
                      >
                        <div
                          className="w-full h-full rounded-[3px]"
                          style={{ backgroundColor: `${p.swatch}55` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <dl className="mt-6 space-y-3 font-mono text-[13px]">
                  {[
                    ["MOQ", "500 pcs / style"],
                    ["Lead time", "25–45 days"],
                    ["Factories", "40+ audited"],
                    ["Incoterms", "FOB / DDP"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline gap-2">
                      <dt className="text-ink/45 shrink-0">{k}</dt>
                      <span className="flex-1 border-b border-dotted border-ink/25 translate-y-[-3px]" />
                      <dd className="text-ink/80 shrink-0">{v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between">
                  <span className="text-[11px] text-ink/45">
                    QC sign-off required before ship
                  </span>
                  <span className="text-stamp text-[11px] font-semibold mono-label">
                    Pending
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <SelvedgeDivider />
      </section>

      {/* TRUST STRIP */}
      <section className="bg-paper border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10">
          <p className="mono-label text-[11px] text-ink/40 text-center mb-6">
            Audited &amp; certified to
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {certifications.map((c) => (
              <div key={c.code} className="flex items-center gap-2.5 text-ink/60">
                <span className="w-1.5 h-1.5 rounded-full bg-brass" />
                <span className="font-display text-sm font-semibold">{c.code}</span>
                <span className="text-xs hidden sm:inline">— {c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="About Meridian"
              title="One accountable partner between your design floor and the production line."
              desc="Most delays and quality gaps happen in the handoff between buyer and factory. We remove the handoff — sitting inside both, with merchandisers who speak your brand's language and inspectors who answer only to you."
            />
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-loom hover:gap-3 transition-all"
            >
              More about our story <ArrowRight size={15} />
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-paper border border-ink/10 rounded-card p-6"
                >
                  <p className="font-display text-3xl font-semibold text-loom">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-xs text-ink/55 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SelvedgeDivider />

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="How an order moves"
            title="Five stages, one merchandiser accountable throughout."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 80}>
              <div className="relative h-full">
                <span className="font-mono text-4xl font-medium text-ink/10">
                  {p.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-paper border-y border-ink/10 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What we produce"
              title="Six product families, sourced end to end."
              desc="Every category below runs through the same five-stage process — with mills and finishing partners specialized for that fabric type."
            />
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productCategories.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div className="group bg-canvas border border-ink/10 rounded-card overflow-hidden hover:shadow-soft transition-shadow">
                  <div
                    className="h-24 swatch-texture"
                    style={{ backgroundColor: `${p.swatch}33` }}
                  />
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-ink">
                      {p.name}
                    </h3>
                    <div className="mt-3 flex items-center justify-between font-mono text-xs text-ink/55">
                      <span>MOQ {p.moq}</span>
                      <span>{p.lead}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-loom hover:gap-3 transition-all"
            >
              View full product range &amp; factory network <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FACTORY NETWORK STRIP */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Factory network"
            title="Four production clusters we audit personally, every quarter."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {factories.map((f, i) => (
            <Reveal key={f.name} delay={i * 70}>
              <div className="border border-ink/10 rounded-card p-5 h-full bg-paper">
                <p className="mono-label text-[10px] text-brass">{f.location}</p>
                <h3 className="mt-2 font-display font-semibold text-ink leading-snug">
                  {f.name}
                </h3>
                <p className="mt-2 text-xs text-ink/55">{f.specialty}</p>
                <p className="mt-3 font-mono text-xs text-ink/40">
                  {f.workers.toLocaleString()} workers
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SelvedgeDivider />

      {/* TEAM PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Who you'll work with"
              title="A merchandising team, not a middleman."
              desc="Every account gets a named merchandiser, a compliance contact, and a QC lead — reachable directly on WhatsApp or email, not routed through a call center."
            />
            <Link
              href="/team"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-loom hover:gap-3 transition-all"
            >
              Meet the full team <ArrowRight size={15} />
            </Link>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-4">
            {team.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="text-center bg-paper border border-ink/10 rounded-card p-6">
                  <div className="mx-auto w-14 h-14 rounded-full bg-loom/10 text-loom font-display font-semibold flex items-center justify-center text-lg">
                    {t.initials}
                  </div>
                  <p className="mt-4 font-semibold text-sm text-ink">
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs text-ink/55">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink text-canvas py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="mono-label text-xs text-brass-light font-medium text-center">
              Signed off by buyers
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-center">
              What our partners say
            </h2>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.company} delay={i * 90}>
                <div className="bg-canvas/[0.06] border border-canvas/15 rounded-card p-6 h-full">
                  <p className="text-sm leading-relaxed text-canvas/85">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-canvas/15">
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-xs text-canvas/50 mt-0.5">{t.company}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <Reveal>
            <SectionHeading
              eyebrow="From the desk"
              title="Sourcing &amp; compliance insights"
            />
          </Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-loom hover:gap-3 transition-all"
          >
            Read all posts <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 80}>
              <article className="border border-ink/10 rounded-card p-6 h-full bg-paper hover:shadow-soft transition-shadow">
                <div className="flex items-center gap-3 font-mono text-[11px] text-ink/45">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="text-loom">{post.tag}</span>
                </div>
                <h3 className="mt-3 font-display font-semibold text-ink leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <Reveal>
          <div className="bg-loom rounded-card px-8 py-14 sm:px-14 text-center relative overflow-hidden">
            <p className="mono-label text-xs text-canvas/70">
              Ready when you are
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-canvas max-w-xl mx-auto">
              Send us your tech pack — hear back with a costing sheet within
              48 hours.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-canvas text-ink font-semibold px-5 py-3 text-sm hover:bg-paper transition-colors"
              >
                <MessageCircle size={17} /> WhatsApp us
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 rounded-sm border border-canvas/40 text-canvas px-5 py-3 text-sm font-semibold hover:border-canvas transition-colors"
              >
                Email {company.email}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
