import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SelvedgeDivider from "@/components/SelvedgeDivider";
import FabricShowcase from "@/components/FabricShowcase";
import FabricCompanyLogos from "@/components/FabricCompanyLogos";
import { process } from "@/lib/data";
import { CheckCircle2, ShieldCheck, Sparkles, SlidersHorizontal, ArrowRight } from "lucide-react";
import Link from "next/link";

const addOns = [
  {
    title: "Fabric & Trim R&D",
    desc: "Lab-dip matching, wash-down testing, and alternate fiber sourcing when a spec fabric is unavailable at your target cost.",
    tag: "Textile R&D",
  },
  {
    title: "Third-Party Audit Coordination",
    desc: "We schedule and accompany BSCI, WRAP, or Sedex audits, and manage corrective action plans (CAP) afterward.",
    tag: "Compliance",
  },
  {
    title: "Consolidation & Warehousing",
    desc: "Multi-factory orders consolidated at our Dhaka warehouse into a single container shipment, reducing freight cost per unit.",
    tag: "Logistics",
  },
  {
    title: "Design & Tech Pack Support",
    desc: "For brands without an in-house pattern team, we build complete tech packs from sketches or reference garments.",
    tag: "Patterning",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-canvas via-paper to-canvas py-16 sm:py-24 border-b border-ink/10 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-loom/10 text-loom text-xs font-semibold mono-label mb-4 border border-loom/20">
            <Sparkles size={14} className="text-brass" /> End-to-End Sourcing &amp; Merchandising
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink max-w-4xl leading-[1.08]">
            Everything between your design floor and the shipping container.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ink/75 leading-relaxed max-w-2xl">
            Engage us for a single stage or the full order lifecycle — most accounts start with sampling only, then hand us bulk production once the fit is proven.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-loom text-paper font-semibold px-7 py-3.5 text-sm hover:bg-loom-dark transition-all duration-300 shadow-soft"
            >
              Request Sourcing Consultation &rarr;
            </Link>
          </div>
        </div>
      </section>

      <SelvedgeDivider />

      {/* Detailed Process Stage Cards */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Core Process"
            title="The five stages of every order."
            desc="One dedicated merchandiser handles your order from yarn booking to container seal."
          />
        </Reveal>

        <div className="mt-16 space-y-8">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 70}>
              <div className="bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 hover:border-loom/40 hover:shadow-lifted transition-all duration-300">
                <div className="grid sm:grid-cols-[6rem_1fr] gap-6 items-start">
                  <div className="w-20 h-20 rounded-2xl bg-canvas border border-ink/10 flex items-center justify-center font-mono text-3xl font-bold text-loom shadow-xs">
                    {p.step}
                  </div>
                  <div>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="font-display text-2xl font-bold text-ink">
                        {p.title}
                      </h3>
                      <span className="mono-label text-[11px] bg-loom/10 text-loom font-semibold px-3 py-1 rounded-full border border-loom/20">
                        Milestone {p.step}
                      </span>
                    </div>
                    <p className="mt-3 text-base text-ink/70 leading-relaxed max-w-3xl">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Fabric Showcase Section */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 border-t border-ink/10">
        <Reveal>
          <FabricShowcase />
        </Reveal>
      </section>

      {/* Fabric Companies & Mill Logos */}
      <section className="bg-paper border-y border-ink/10 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <FabricCompanyLogos />
          </Reveal>
        </div>
      </section>

      {/* Add-on services */}
      <section className="py-24 mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Specialized Add-on Services"
            title="Extend your engagement as your collection scales."
          />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {addOns.map((a, i) => (
            <Reveal key={a.title} delay={i * 70}>
              <div className="bg-paper border border-ink/10 rounded-2xl p-7 h-full hover:border-loom/40 hover:shadow-lifted transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="mono-label text-[10px] bg-brass/15 text-brass-dark px-3 py-1 rounded-full font-bold">
                    {a.tag}
                  </span>
                  <h3 className="font-display font-bold text-xl text-ink mt-4">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-ink/70 leading-relaxed">
                    {a.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between text-xs font-mono text-loom font-semibold">
                  <span>Available on-demand</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
