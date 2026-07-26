import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SelvedgeDivider from "@/components/SelvedgeDivider";
import { process } from "@/lib/data";

const addOns = [
  {
    title: "Fabric & trim R&D",
    desc: "Lab-dip matching, wash-down testing, and alternate fiber sourcing when a spec fabric is unavailable at your target cost.",
  },
  {
    title: "Third-party audit coordination",
    desc: "We schedule and accompany BSCI, WRAP, or Sedex audits, and manage corrective action plans afterward.",
  },
  {
    title: "Consolidation & warehousing",
    desc: "Multi-factory orders consolidated at our Dhaka warehouse into a single shipment, reducing freight cost per unit.",
  },
  {
    title: "Design & tech pack support",
    desc: "For brands without an in-house pattern team, we build tech packs from sketches or reference garments.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-20">
        <p className="mono-label text-xs text-loom font-medium">Services</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
          Everything between your design floor and the shipping container.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-ink/65 leading-relaxed max-w-2xl">
          Engage us for a single stage or the full order lifecycle — most of
          our accounts start with sampling only, then hand us production
          once the fit is proven.
        </p>
      </section>

      <SelvedgeDivider />

      {/* Detailed process */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Core process"
            title="The five stages of every order."
          />
        </Reveal>

        <div className="mt-14 space-y-10">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 70}>
              <div className="grid sm:grid-cols-[5rem_1fr] gap-4 sm:gap-8 pb-10 border-b border-ink/10 last:border-0 last:pb-0">
                <span className="font-mono text-5xl font-medium text-ink/10">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-ink/60 leading-relaxed max-w-2xl">
                    {p.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Add-on services */}
      <section className="bg-paper border-y border-ink/10 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Add-on services"
              title="Extend the engagement as your order grows."
            />
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {addOns.map((a, i) => (
              <Reveal key={a.title} delay={i * 70}>
                <div className="bg-canvas border border-ink/10 rounded-card p-6 h-full">
                  <h3 className="font-display font-semibold text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
