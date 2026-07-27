"use client";

import Link from "next/link";
import { useState } from "react";
import { useCategoriesStore } from "@/lib/categoriesStore";
import { ChevronDown, Tag, ArrowRight, Layers, Sparkles } from "lucide-react";

const GENDER_FILTERS = [
  { id: "ALL", label: "All Categories" },
  { id: "Men", label: "Men's Wear" },
  { id: "Women", label: "Women's Wear" },
  { id: "Kids", label: "Kids & Baby" },
  { id: "Workwear", label: "Workwear & Safety" },
  { id: "Unisex", label: "Denim & Knits" },
  { id: "Fabrics", label: "Mill Fabrics" },
] as const;

export default function CategoryNavbar() {
  const { publishedCategories } = useCategoriesStore();
  const [activeGender, setActiveGender] = useState<string>("ALL");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [megaOpen, setMegaOpen] = useState<boolean>(false);

  const filteredCategories =
    activeGender === "ALL"
      ? publishedCategories
      : publishedCategories.filter((c) => c.gender === activeGender);

  return (
    <div className="border-t border-ink/10 bg-paper/70 backdrop-blur-md relative z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex items-center justify-between gap-4 py-2 overflow-x-auto no-scrollbar scroll-smooth">
          {/* Left: Category Dropdown / Mega Menu Button */}
          <div className="relative shrink-0">
            <button
              onClick={() => setMegaOpen((v) => !v)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                megaOpen
                  ? "bg-ink text-canvas shadow-xs"
                  : "bg-canvas hover:bg-loom/10 text-ink border border-ink/15"
              }`}
            >
              <Layers size={14} className="text-brass" />
              <span>Browse Categories</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Mega Dropdown Panel */}
            {megaOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-[340px] sm:w-[580px] bg-paper border border-ink/15 rounded-2xl shadow-lifted p-4 sm:p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="flex items-center justify-between pb-3 border-b border-ink/10">
                  <span className="mono-label text-[11px] text-loom font-bold">
                    Garment &amp; Fabric Roster ({publishedCategories.length})
                  </span>
                  <Link
                    href="/products"
                    onClick={() => setMegaOpen(false)}
                    className="text-xs font-semibold text-ink hover:text-loom flex items-center gap-1"
                  >
                    View All <ArrowRight size={12} />
                  </Link>
                </div>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
                  {publishedCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/products?category=${encodeURIComponent(cat.name)}`}
                      onClick={() => setMegaOpen(false)}
                      onMouseEnter={() => setHoveredCategory(cat.id)}
                      className="group flex gap-3 p-2.5 rounded-xl hover:bg-canvas border border-transparent hover:border-ink/10 transition-all"
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-canvas border border-ink/10 relative">
                        {/* Category Garment Image */}
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="text-xs font-bold text-ink truncate group-hover:text-loom">
                            {cat.name}
                          </h4>
                          <span className="text-[10px] mono-label font-bold px-1.5 py-0.5 rounded bg-brass/10 text-brass-dark shrink-0">
                            {cat.gender}
                          </span>
                        </div>
                        <p className="text-[11px] text-ink/60 line-clamp-1 mt-0.5">
                          {cat.description}
                        </p>
                        <div className="mt-1 flex items-center gap-3 text-[10px] font-mono text-ink/50">
                          <span>MOQ: {cat.moq}</span>
                          <span>Lead: {cat.lead}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Center: Category Filter Pills */}
          <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto no-scrollbar py-0.5">
            {GENDER_FILTERS.map((f) => {
              const isActive = activeGender === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveGender(f.id)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-loom text-paper shadow-xs"
                      : "text-ink/75 hover:bg-canvas hover:text-ink border border-transparent"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Right: Category Count Badge & Direct Link */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-mono text-ink/50 flex items-center gap-1">
              <Tag size={12} className="text-brass" />
              Showing <strong>{filteredCategories.length}</strong> categories
            </span>
            <Link
              href="/products"
              className="text-xs font-bold text-loom hover:text-ink transition-colors flex items-center gap-1 ml-2"
            >
              Catalog <Sparkles size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
