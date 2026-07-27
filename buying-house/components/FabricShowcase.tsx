"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Layers, ShieldCheck, Tag, ZoomIn, Check, Info, Sparkles, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import { fabricGallery } from "@/lib/data";

export default function FabricShowcase() {
  const [selectedFabric, setSelectedFabric] = useState(fabricGallery[0]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Knitwear", "Denim", "Sweaters", "Activewear"];

  const filteredFabrics = activeCategory === "All"
    ? fabricGallery
    : fabricGallery.filter(f => f.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="w-full">
      {/* Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brass/15 text-brass-dark text-xs font-semibold mono-label mb-3 border border-brass/30">
            <Layers size={14} className="text-brass" /> Certified Fabric &amp; Textile Collection
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Premium Fabric Sourcing Library
          </h2>
          <p className="text-base text-ink/70 mt-2 max-w-2xl leading-relaxed">
            High-count organic knits, heavyweight selvedge denim, fine merino ribs, and technical activewear meshes inspected before cutting.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 bg-paper p-1.5 rounded-xl border border-ink/10 shadow-soft">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-loom text-paper font-semibold shadow-xs"
                  : "text-ink/70 hover:text-ink hover:bg-canvas"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Featured Fabric Card (7 Cols) */}
        <div className="lg:col-span-7 bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-lifted relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-loom/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-canvas border border-ink/10 group">
            <Image
              src={selectedFabric.image}
              alt={selectedFabric.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
            <div className="absolute top-4 left-4 bg-ink/85 backdrop-blur-md text-paper text-xs font-mono px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-paper/20">
              <ShieldCheck size={14} className="text-emerald-400" /> Inspected &amp; Lab-Tested
            </div>
            <div className="absolute bottom-4 right-4 bg-paper/90 backdrop-blur-md text-ink text-xs font-mono px-3.5 py-1.5 rounded-full border border-ink/10 flex items-center gap-1.5 shadow-soft">
              <ZoomIn size={14} className="text-loom" /> High Precision Weave
            </div>
          </div>

          {/* Selected Fabric Info & Spec Dashboard */}
          <div className="mt-7">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-5">
              <div>
                <span className="mono-label text-xs text-loom font-semibold">{selectedFabric.category}</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mt-1">
                  {selectedFabric.name}
                </h3>
              </div>
              <div className="text-right bg-canvas px-4 py-2 rounded-xl border border-ink/10">
                <span className="font-mono text-[11px] text-ink/50 block">Weight / Density</span>
                <span className="font-mono text-base font-bold text-loom">{selectedFabric.gsm}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-ink/75 leading-relaxed mt-5">
              {selectedFabric.description}
            </p>

            {/* Spec Cards */}
            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="bg-canvas p-3.5 rounded-xl border border-ink/10">
                <dt className="text-ink/45 text-[11px]">Fiber Composition</dt>
                <dd className="text-ink font-bold mt-1 text-sm">{selectedFabric.composition}</dd>
              </div>
              <div className="bg-canvas p-3.5 rounded-xl border border-ink/10">
                <dt className="text-ink/45 text-[11px]">Recommended For</dt>
                <dd className="text-ink font-bold mt-1 text-sm">{selectedFabric.recommendedFor}</dd>
              </div>
              <div className="bg-canvas p-3.5 rounded-xl border border-ink/10">
                <dt className="text-ink/45 text-[11px]">Minimum Booking</dt>
                <dd className="text-ink font-bold mt-1 text-sm">{selectedFabric.moq}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-ink/10">
              <span className="text-xs text-ink/50 font-mono flex items-center gap-1.5 mr-2">
                <Tag size={14} className="text-brass" /> Certified Features:
              </span>
              {selectedFabric.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-loom/10 text-loom-dark border border-loom/20 px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Selection List (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-ink/50 uppercase tracking-wider">
              Select fabric swatch to inspect ({filteredFabrics.length}):
            </span>
            <Sparkles size={14} className="text-brass" />
          </div>

          {filteredFabrics.map((fabric) => {
            const isSelected = selectedFabric.id === fabric.id;
            return (
              <div
                key={fabric.id}
                onClick={() => setSelectedFabric(fabric)}
                className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border flex items-center gap-4 ${
                  isSelected
                    ? "bg-paper border-loom shadow-soft ring-2 ring-loom/20 scale-[1.01]"
                    : "bg-canvas hover:bg-paper border-ink/10 hover:border-ink/25"
                }`}
              >
                <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden border border-ink/10">
                  <Image
                    src={fabric.image}
                    alt={fabric.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-loom/25 backdrop-blur-[1px] flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-loom text-paper flex items-center justify-center shadow-xs">
                        <Check size={16} strokeWidth={3} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="mono-label text-[10px] text-loom font-semibold">{fabric.category}</span>
                    <span className="font-mono text-xs font-bold text-ink/60">{fabric.gsm}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-ink truncate mt-0.5">
                    {fabric.name}
                  </h4>
                  <p className="text-xs text-ink/65 truncate mt-1">
                    {fabric.composition}
                  </p>
                  <div className="mt-2.5 flex items-center gap-2 text-[11px] font-mono text-loom font-medium">
                    <span>View Specs</span>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
