import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SelvedgeDivider from "@/components/SelvedgeDivider";
import StampBadge from "@/components/StampBadge";
import { company, stats, certifications } from "@/lib/data";

const values = [
  {
    title: "Accountability over excuses",
    desc: "When something goes wrong on the line, we tell you before you ask — with a plan to fix it, not a reason it happened.",
  },
  {
    title: "Independent quality control",
    desc: "Our inspectors are on our payroll, not the factory's. Their only job is protecting your standard, not the factory's output number.",
  },
  {
    title: "Transparent costing",
    desc: "You see the same cost breakdown our merchandisers do — fabric, trims, CM, and freight, line by line.",
  },
];

const milestones = [
  { year: "2011", text: "Founded in Dhaka with two partner factories and a single knitwear buyer in Denmark." },
  { year: "2015", text: "Opened an in-house QC lab and grew the factory network to twelve certified partners." },
  { year: "2019", text: "Reached 15 countries served; added dedicated denim and activewear sourcing teams." },
  { year: "2023", text: "Achieved GOTS and OEKO-TEX chain-of-custody certification across our top four mills." },
  { year: "2026", text: "40+ audited factory partners, shipping to 18 countries year-round." },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-20">
        <p className="mono-label text-xs text-loom font-medium">About Meridian</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
          Built by merchandisers who were tired of being the excuse between buyer and factory.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-ink/65 leading-relaxed max-w-2xl">
          {company.name} started in {company.founded} when our founder, a
          garment merchandiser herself, saw the same failure repeat across
          every order: buyers blamed factories, factories blamed buyers, and
          nobody in the middle was accountable to either. We built the
          buying house we wished we'd had — one team, answerable to both
          sides.
        </p>
      </section>

      <SelvedgeDivider />

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="bg-paper border border-ink/10 rounded-card p-6 text-center">
                <p className="font-display text-3xl font-semibold text-loom">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs text-ink/55">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper border-y border-ink/10 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What we hold ourselves to"
              title="Three commitments that don't change with order size."
            />
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
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

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <Reveal>
          <SectionHeading eyebrow="Our record" title="Thirteen years, in five milestones." />
        </Reveal>

        <div className="mt-12 space-y-0">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 60}>
              <div className="flex gap-6 sm:gap-10 py-5 border-b border-ink/10 last:border-0">
                <span className="font-mono text-sm text-brass shrink-0 w-14">
                  {m.year}
                </span>
                <p className="text-sm text-ink/70 leading-relaxed">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center bg-ink text-canvas rounded-card p-10">
          <div>
            <p className="mono-label text-xs text-brass-light">Certified to</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">
              Compliance our buyers can hand straight to their own audit teams.
            </h3>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-canvas/70">
              {certifications.map((c) => (
                <span key={c.code}>{c.code}</span>
              ))}
            </div>
          </div>
          <StampBadge
            eyebrow="Est."
            main={String(company.founded)}
            sub="Dhaka, Bangladesh"
            size={110}
            className="text-brass-light justify-self-center"
          />
        </div>
      </section>
    </>
  );
}
