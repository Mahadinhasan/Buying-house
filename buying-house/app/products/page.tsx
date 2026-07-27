"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SelvedgeDivider from "@/components/SelvedgeDivider";
import FabricShowcase from "@/components/FabricShowcase";
import FabricCompanyLogos from "@/components/FabricCompanyLogos";
import { factories } from "@/lib/data";
import { useCategoriesStore } from "@/lib/categoriesStore";
import { Factory, ShieldCheck, Sparkles, ArrowRight, Tag } from "lucide-react";

const portfolio = [
  { title: "Organic Cotton Basics Capsule", client: "Harlow Basics, Canada", category: "Knitwear", units: "180,000 pcs", swatch: "#2F5D50" },
  { title: "Selvedge Denim Reissue", client: "Atelier Rive, France", category: "Denim", units: "60,000 pcs", swatch: "#14181F" },
  { title: "Performance Run Line", client: "Fielding & Co., UK", category: "Activewear", units: "95,000 pcs", swatch: "#3F7566" },
  { title: "Merino Blend Knitwear", client: "Nordreise Apparel, Sweden", category: "Sweaters", units: "40,000 pcs", swatch: "#B23A2E" },
  { title: "Oxford Shirting Program", client: "Whitfield Menswear, UK", category: "Woven Shirts", units: "70,000 pcs", swatch: "#A9822E" },
  { title: "Kids Playwear Bundle", client: "Little Harlow, Canada", category: "Kidswear", units: "120,000 pcs", swatch: "#C9A94E" },
];

export default function ProductsPage() {
  const { publishedCategories } = useCategoriesStore();
  const [selectedGender, setSelectedGender] = useState<string>("ALL");

  const categoriesToDisplay =
    selectedGender === "ALL"
      ? publishedCategories
      : publishedCategories.filter((c) => c.gender === selectedGender);

  return (
    <>
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-canvas via-paper to-canvas py-16 sm:py-24 border-b border-ink/10 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-loom/10 text-loom text-xs font-semibold mono-label mb-4 border border-loom/20">
            <Factory size={14} className="text-brass" /> Buying House Sourcing &amp; Categories
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink max-w-4xl leading-[1.08]">
            Full garment range. Men, Women, Kids, Workwear &amp; Fabrics.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ink/75 leading-relaxed max-w-2xl">
            We operate audited manufacturing clusters for woven shirts, knitwear, denim, activewear, kidswear, industrial workwear, and mill fabric rolls.
          </p>
        </div>
      </section>

      <SelvedgeDivider />

      {/* Product Categories Section */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Category Catalog"
              title="What we source, sample, and ship."
              desc="Browse categories by garment classification. Each program comes with dedicated merchandising and independent AQL inspection."
            />

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-paper p-1.5 rounded-2xl border border-ink/10 shrink-0">
              {["ALL", "Men", "Women", "Kids", "Workwear", "Unisex", "Fabrics"].map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGender(g)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedGender === g
                      ? "bg-ink text-canvas shadow-xs"
                      : "text-ink/70 hover:bg-canvas hover:text-ink"
                  }`}
                >
                  {g === "ALL" ? "All Categories" : g}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Categories Grid with Garment Images */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {categoriesToDisplay.map((p, i) => (
            <Reveal key={p.id} delay={i * 50}>
              <div className="group bg-paper border border-ink/10 rounded-2xl overflow-hidden hover:shadow-lifted hover:border-loom/40 transition-all duration-300 flex flex-col h-full">
                {/* Category Image Header */}
                <div className="h-48 relative overflow-hidden bg-canvas border-b border-ink/10">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="mono-label text-[10px] bg-paper/95 backdrop-blur-md px-3 py-1 rounded-full text-ink font-bold shadow-xs">
                      {p.gender}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-display font-bold text-xl text-paper drop-shadow-sm">
                      {p.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-ink/70 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-ink/10 space-y-2 font-mono text-xs text-ink/65">
                    <div className="flex justify-between">
                      <span>Minimum Order:</span>
                      <strong className="text-ink">{p.moq}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Production Lead:</span>
                      <strong className="text-ink">{p.lead}</strong>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={`/contact?subject=${encodeURIComponent("RFQ for " + p.name)}`}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-ink/15 bg-canvas hover:bg-ink hover:text-canvas text-ink text-xs font-semibold py-2.5 transition-all duration-300"
                    >
                      Request RFQ for {p.name} <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Fabric Showcase Section */}
      <section className="bg-canvas border-t border-ink/10 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <FabricShowcase />
          </Reveal>
        </div>
      </section>

      {/* Fabric Companies & Mill Logos */}
      <section className="bg-paper border-y border-ink/10 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <FabricCompanyLogos />
          </Reveal>
        </div>
      </section>

      {/* Factory Network Detail */}
      <section className="bg-canvas border-b border-ink/10 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Factory Network"
              title="Audited by our own compliance team, every quarter."
              desc="Fixed partnerships mean predictable timelines, strict labor standards, and certified environmental compliance."
            />
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {factories.map((f, i) => (
              <Reveal key={f.name} delay={i * 70}>
                <div className="bg-paper border border-ink/10 rounded-2xl p-7 hover:shadow-lifted hover:border-loom/40 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-xl text-ink">{f.name}</h3>
                    <span className="mono-label text-xs bg-brass/15 text-brass-dark px-3 py-1 rounded-full font-bold">{f.location}</span>
                  </div>
                  <p className="mt-3 text-sm sm:text-base text-ink/70">{f.specialty}</p>
                  <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between font-mono text-xs text-ink/50">
                    <span>{f.workers.toLocaleString()} workforce</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <ShieldCheck size={14} /> Audited Q2 2026
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Selected Work */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Track Record"
            title="Selected programs delivered to global buyers."
          />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="border border-ink/10 rounded-2xl overflow-hidden bg-paper hover:shadow-lifted hover:border-loom/40 transition-all duration-300">
                <div
                  className="h-32 swatch-texture flex items-end p-4"
                  style={{ backgroundColor: `${item.swatch}26` }}
                >
                  <span className="mono-label text-[10px] bg-canvas px-3 py-1 rounded-full text-ink font-bold shadow-xs">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-ink leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs font-mono text-ink/60">{item.client}</p>
                  <p className="mt-4 pt-3 border-t border-ink/10 font-mono text-xs font-bold text-loom">{item.units} Produced &amp; Shipped</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
