import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Award, Factory, CheckCircle2, FileText, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StampBadge from "@/components/StampBadge";
import SelvedgeDivider from "@/components/SelvedgeDivider";
import FabricShowcase from "@/components/FabricShowcase";
import FabricCompanyLogos from "@/components/FabricCompanyLogos";
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
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-canvas via-paper to-canvas pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-ink/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-loom/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brass/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper border border-ink/15 text-xs font-mono text-ink/80 shadow-xs mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Audited Sourcing &amp; Compliance Hub · {company.city}
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.06] font-bold tracking-tight text-ink">
                Precision Apparel Sourcing, <span className="text-loom">Tag to Shipment.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-ink/75 leading-relaxed max-w-2xl">
                {company.name} sources, samples, and ships high-volume apparel for international brands — directly connected to audited textile mills and compliance-checked factories across Bangladesh.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-loom text-paper font-semibold px-7 py-3.5 text-sm hover:bg-loom-dark transition-all duration-300 shadow-soft"
                >
                  <MessageCircle size={18} /> Chat with Merchandiser
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-paper border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink hover:border-ink/50 hover:bg-canvas transition-all duration-300 shadow-xs"
                >
                  Submit Tech Pack RFQ <ArrowRight size={16} />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-12 pt-8 border-t border-ink/10 flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-4">
                  <StampBadge
                    eyebrow="Since 2011"
                    main="500+"
                    sub="Shipments Approved"
                    size={88}
                  />
                  <div>
                    <p className="text-sm font-bold text-ink font-display">AQL 2.5 QC Sign-off</p>
                    <p className="text-xs text-ink/60 mt-0.5 max-w-[14rem] leading-relaxed">
                      Independent in-line and pre-shipment inspections on every batch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Interactive Order Spec Sheet */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="bg-paper border border-ink/10 rounded-2xl shadow-lifted p-6 sm:p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brass/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-loom" />
                      <span className="mono-label text-xs font-bold text-ink/60">
                        Order Spec Sheet
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-loom bg-canvas px-2.5 py-1 rounded border border-ink/10">
                      BH-2026-0417
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <p className="mono-label text-[11px] text-ink/50">
                        Fabric Category Swatches
                      </p>
                      <span className="text-[11px] font-mono text-brass font-semibold">6 Active Mills</span>
                    </div>
                    <div className="mt-3 grid grid-cols-6 gap-2">
                      {productCategories.map((p) => (
                        <div
                          key={p.name}
                          title={p.name}
                          className="aspect-square rounded-lg swatch-texture border border-ink/15 shadow-xs relative group/swatch cursor-pointer overflow-hidden"
                          style={{ backgroundColor: `${p.swatch}22` }}
                        >
                          <div
                            className="w-full h-full rounded-lg transition-transform duration-300 group-hover/swatch:scale-110"
                            style={{ backgroundColor: `${p.swatch}66` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <dl className="mt-7 space-y-3.5 font-mono text-xs">
                    {[
                      ["Order MOQ", "500 pcs / style"],
                      ["Sampling Lead Time", "7–10 days"],
                      ["Bulk Lead Time", "25–45 days"],
                      ["Audited Factories", "40+ vetted partners"],
                      ["Incoterms", "FOB Chittagong / DDP Door"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-baseline gap-2">
                        <dt className="text-ink/50 shrink-0">{k}</dt>
                        <span className="flex-1 border-b border-dotted border-ink/25 translate-y-[-3px]" />
                        <dd className="text-ink font-bold shrink-0">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-7 pt-4 border-t border-ink/10 flex items-center justify-between bg-canvas p-3.5 rounded-xl border border-ink/10">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-emerald-600" />
                      <span className="text-xs text-ink/75 font-medium">
                        Lab-dip &amp; Pre-ship Inspection
                      </span>
                    </div>
                    <span className="text-stamp text-xs font-bold mono-label bg-stamp/10 px-2.5 py-1 rounded border border-stamp/20">
                      100% Passed
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & COMPLIANCE STRIP */}
      <section className="bg-paper border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
          <p className="mono-label text-xs text-ink/45 text-center mb-6 font-semibold">
            Factories Audited &amp; Certified to International Standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {certifications.map((c) => (
              <div key={c.code} className="flex items-center gap-2.5 text-ink/75 bg-canvas px-4 py-2 rounded-xl border border-ink/10 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-brass" />
                <span className="font-display text-sm font-bold">{c.code}</span>
                <span className="text-xs text-ink/60 hidden sm:inline">— {c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT & METRICS PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                eyebrow="About Demo Company"
                title="One accountable team sitting inside the factory and your design room."
                desc="Most delays and quality gaps happen in the handoff between buyer and factory. We remove the handoff — with dedicated merchandisers, fabric R&D specialists, and inspectors who answer directly to you."
              />
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-loom hover:gap-3 transition-all"
                >
                  Read our sourcing methodology &rarr;
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-paper border border-ink/10 rounded-2xl p-6 shadow-soft hover:shadow-lifted transition-shadow"
                  >
                    <p className="font-display text-4xl font-bold text-loom">
                      {s.value}
                    </p>
                    <p className="mt-2 text-xs font-mono text-ink/65 leading-snug">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SelvedgeDivider />

      {/* PROCESS SECTION */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Order Lifecycle"
            title="Five stages. Guaranteed quality at every seam."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 80}>
              <div className="bg-paper border border-ink/10 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-loom/40 hover:shadow-soft transition-all duration-300 relative group">
                <div>
                  <span className="font-mono text-4xl font-bold text-ink/15 group-hover:text-loom/30 transition-colors">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs text-ink/65 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-ink/10 flex items-center gap-1.5 text-[11px] font-mono text-loom font-semibold">
                  <span>Stage {p.step} Verified</span>
                  <CheckCircle2 size={12} className="text-emerald-600" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FABRICS IMAGE GALLERY & SHOWCASE */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 border-t border-ink/10">
        <Reveal>
          <FabricShowcase />
        </Reveal>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-paper border-y border-ink/10 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Apparel Categories"
              title="Six specialized apparel product families."
              desc="Every category below is matched to audited mills with specialized knitting, weaving, and wash capabilities."
            />
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((p, i) => (
              <Reveal key={p.name} delay={i * 50}>
                <div className="group bg-canvas border border-ink/10 rounded-2xl overflow-hidden hover:shadow-lifted hover:border-loom/40 transition-all duration-300 flex flex-col h-full">
                  <div className="h-36 relative overflow-hidden bg-paper border-b border-ink/10">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="mono-label text-[10px] bg-paper/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-ink font-bold shadow-xs">
                        {p.gender}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-base text-ink">
                        {p.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-ink/65 line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-ink/10 flex items-center justify-between font-mono text-[11px] text-ink/60">
                      <span>MOQ: <strong className="text-ink">{p.moq}</strong></span>
                      <span>Lead: <strong className="text-ink">{p.lead}</strong></span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-loom text-paper font-semibold px-7 py-3 text-sm hover:bg-loom-dark transition-all duration-300 shadow-soft"
            >
              View Full Product Portfolio &amp; Factory Network <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FABRIC MILLS & COMPANY LOGOS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <Reveal>
          <FabricCompanyLogos />
        </Reveal>
      </section>

      <SelvedgeDivider />

      {/* FACTORY NETWORK */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Factory Roster"
            title="Four production clusters audited quarterly."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {factories.map((f, i) => (
            <Reveal key={f.name} delay={i * 70}>
              <div className="border border-ink/10 rounded-2xl p-6 h-full bg-paper hover:shadow-lifted transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="mono-label text-[10px] bg-brass/15 text-brass-dark px-2.5 py-0.5 rounded-full font-bold">{f.location}</span>
                    <Factory size={16} className="text-loom" />
                  </div>
                  <h3 className="font-display font-bold text-base text-ink leading-snug">
                    {f.name}
                  </h3>
                  <p className="mt-2 text-xs text-ink/65">{f.specialty}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-ink/10 font-mono text-xs text-ink/50 flex justify-between items-center">
                  <span>Capacity</span>
                  <span className="font-bold text-ink">{f.workers.toLocaleString()} workers</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink text-canvas py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
          <Reveal>
            <p className="mono-label text-xs text-brass-light font-semibold text-center tracking-wider">
              Signed Off by International Sourcing Managers
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-center">
              What Our Apparel Brand Partners Say
            </h2>
          </Reveal>

          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.company} delay={i * 90}>
                <div className="bg-canvas/[0.07] border border-canvas/15 rounded-2xl p-8 h-full flex flex-col justify-between backdrop-blur-sm">
                  <p className="text-base leading-relaxed text-canvas/90 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-5 border-t border-canvas/15">
                    <p className="text-sm font-bold text-canvas font-display">{t.author}</p>
                    <p className="text-xs text-brass-light mt-0.5 font-mono">{t.company}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <Reveal>
          <div className="bg-loom rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden shadow-lifted">
            <div className="absolute top-0 right-0 w-64 h-64 bg-paper/10 rounded-full blur-3xl pointer-events-none" />

            <span className="mono-label text-xs text-paper/80 font-bold bg-loom-dark/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Get Sample Costing Within 48 Hours
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-paper max-w-2xl mx-auto leading-tight">
              Send us your tech pack or reference garment — receive a line-item costing sheet.
            </h2>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-paper text-ink font-semibold px-7 py-3.5 text-sm hover:bg-canvas transition-all duration-300 shadow-soft"
              >
                <MessageCircle size={18} /> WhatsApp Merchandiser Direct
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-paper/40 text-paper px-7 py-3.5 text-sm font-semibold hover:border-paper hover:bg-loom-dark transition-all duration-300"
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
