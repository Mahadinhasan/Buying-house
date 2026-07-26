import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SelvedgeDivider from "@/components/SelvedgeDivider";
import { productCategories, factories } from "@/lib/data";

const portfolio = [
  { title: "Organic Cotton Basics Capsule", client: "Harlow Basics, Canada", category: "Knitwear", units: "180,000 pcs", swatch: "#2F5D50" },
  { title: "Selvedge Denim Reissue", client: "Atelier Rive, France", category: "Denim", units: "60,000 pcs", swatch: "#14181F" },
  { title: "Performance Run Line", client: "Fielding & Co., UK", category: "Activewear", units: "95,000 pcs", swatch: "#3F7566" },
  { title: "Merino Blend Knitwear", client: "Nordreise Apparel, Sweden", category: "Sweaters", units: "40,000 pcs", swatch: "#B23A2E" },
  { title: "Oxford Shirting Program", client: "Whitfield Menswear, UK", category: "Woven Shirts", units: "70,000 pcs", swatch: "#A9822E" },
  { title: "Kids Playwear Bundle", client: "Little Harlow, Canada", category: "Kidswear", units: "120,000 pcs", swatch: "#C9A94E" },
];

export default function ProductsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-20">
        <p className="mono-label text-xs text-loom font-medium">Products &amp; Factories</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
          Six product families. Four production clusters. One network we
          audit ourselves.
        </h1>
      </section>

      <SelvedgeDivider />

      {/* Product categories detail */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <Reveal>
          <SectionHeading eyebrow="Product range" title="What we source and produce." />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {productCategories.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <div className="bg-paper border border-ink/10 rounded-card overflow-hidden hover:shadow-soft transition-shadow">
                <div className="h-28 swatch-texture" style={{ backgroundColor: `${p.swatch}33` }} />
                <div className="p-5">
                  <h3 className="font-display font-semibold text-ink">{p.name}</h3>
                  <div className="mt-4 space-y-1.5 font-mono text-xs text-ink/55">
                    <div className="flex justify-between"><span>MOQ</span><span className="text-ink/80">{p.moq}</span></div>
                    <div className="flex justify-between"><span>Lead time</span><span className="text-ink/80">{p.lead}</span></div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Factory network detail */}
      <section className="bg-paper border-y border-ink/10 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Factory network"
              title="Every partner audited by our own compliance team, every quarter."
              desc="We work with a fixed roster rather than the lowest bidder on each order — so quality and timelines stay predictable across seasons."
            />
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {factories.map((f, i) => (
              <Reveal key={f.name} delay={i * 70}>
                <div className="bg-canvas border border-ink/10 rounded-card p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold text-ink">{f.name}</h3>
                    <span className="mono-label text-[10px] text-brass">{f.location}</span>
                  </div>
                  <p className="mt-2 text-sm text-ink/60">{f.specialty}</p>
                  <div className="mt-4 pt-4 border-t border-ink/10 flex items-center justify-between font-mono text-xs text-ink/45">
                    <span>{f.workers.toLocaleString()} workers</span>
                    <span className="text-loom">Audited Q2 2026</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Programs we've run for buyers like yours."
          />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolio.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="border border-ink/10 rounded-card overflow-hidden bg-paper hover:shadow-soft transition-shadow">
                <div
                  className="h-32 swatch-texture flex items-end p-4"
                  style={{ backgroundColor: `${item.swatch}26` }}
                >
                  <span className="mono-label text-[10px] bg-canvas/80 px-2 py-1 rounded-sm text-ink/70">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-ink leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-ink/55">{item.client}</p>
                  <p className="mt-3 font-mono text-xs text-loom">{item.units}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
