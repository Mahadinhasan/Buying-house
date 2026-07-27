import React from "react";
import { Award, Building2, CheckCircle2, MapPin, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { fabricMillsLogos } from "@/lib/data";

function MillLogoIcon({ symbol }: { symbol: string }) {
  switch (symbol) {
    case "envoy":
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-loom fill-current" aria-hidden="true">
          <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M20 10L28 15V25L20 30L12 25V15L20 10Z" fill="currentColor" />
        </svg>
      );
    case "beximco":
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-ink fill-current" aria-hidden="true">
          <rect x="6" y="6" width="13" height="13" rx="3" fill="currentColor" />
          <rect x="21" y="6" width="13" height="13" rx="3" fill="currentColor" fillOpacity="0.4" />
          <rect x="6" y="21" width="13" height="13" rx="3" fill="currentColor" fillOpacity="0.4" />
          <rect x="21" y="21" width="13" height="13" rx="3" fill="currentColor" />
        </svg>
      );
    case "square":
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-brass fill-current" aria-hidden="true">
          <rect x="7" y="7" width="26" height="26" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
          <rect x="15" y="15" width="10" height="10" rx="2" fill="currentColor" />
        </svg>
      );
    case "paramount":
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-loom-dark fill-current" aria-hidden="true">
          <path d="M20 4L34 11V23C34 30 28 35.5 20 37C12 35.5 6 30 6 23V11L20 4Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M20 11L27 15V21C27 24.5 24 27.5 20 28.5C16 27.5 13 24.5 13 21V15L20 11Z" fill="currentColor" />
        </svg>
      );
    case "hameem":
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-ink fill-current" aria-hidden="true">
          <path d="M7 8H14V17H26V8H33V32H26V23H14V32H7V8Z" fill="currentColor" />
        </svg>
      );
    case "viyellatex":
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-emerald-700 fill-current" aria-hidden="true">
          <path d="M20 5C20 5 33 11 33 24C33 30.5 27.5 35 20 35C12.5 35 7 30.5 7 24C7 11 20 5 20 5Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M20 12C20 12 27 16 27 24C27 27.5 24 30 20 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "apex":
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-indigo-950 fill-current" aria-hidden="true">
          <path d="M20 5L36 33H4L20 5Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M20 14L28 29H12L20 14Z" fill="currentColor" />
        </svg>
      );
    case "zy":
    default:
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-loom fill-current" aria-hidden="true">
          <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M12 14H28L14 26H28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function FabricCompanyLogos() {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-loom/10 text-loom text-xs font-semibold mono-label mb-3 border border-loom/20">
            <Building2 size={14} /> Tier-1 Textile Mills &amp; Fabric Manufacturers
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Partner Fabric Mills &amp; Textile Companies
          </h2>
          <p className="text-base text-ink/70 mt-2 max-w-2xl leading-relaxed">
            Direct yarn, woven, denim, and knit mill sourcing with full batch traceability and audited compliance.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-ink/60 font-mono bg-paper px-4 py-2 rounded-xl border border-ink/10 shadow-xs">
          <Sparkles size={15} className="text-brass" /> 100% Direct Mill Price Match
        </div>
      </div>

      {/* Mill Logos Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {fabricMillsLogos.map((mill) => (
          <div
            key={mill.name}
            className="group relative bg-paper border border-ink/10 rounded-2xl p-6 hover:border-loom/50 hover:shadow-lifted transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-14 h-14 rounded-xl bg-canvas border border-ink/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xs">
                  <MillLogoIcon symbol={mill.symbol} />
                </div>
                <span className="mono-label text-[10px] bg-canvas border border-ink/10 px-2.5 py-1 rounded-md text-ink/70 font-semibold">
                  {mill.shortName}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-ink group-hover:text-loom transition-colors">
                {mill.name}
              </h3>
              
              <p className="text-xs font-semibold text-loom mt-1">
                {mill.type}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-ink/60 mt-3 font-mono">
                <MapPin size={13} className="shrink-0 text-brass" />
                <span>{mill.location}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-ink/10 flex flex-wrap gap-1.5">
              {mill.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1 text-[10px] font-mono bg-canvas px-2.5 py-1 rounded-md border border-ink/10 text-ink/80 font-medium"
                >
                  <ShieldCheck size={11} className="text-emerald-600" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Direct Mill Booking Bar */}
      <div className="mt-8 bg-paper border border-ink/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brass/15 text-brass-dark flex items-center justify-center shrink-0">
            <Award size={20} />
          </div>
          <div>
            <h4 className="font-display font-bold text-ink text-base">Custom Mill Sourcing &amp; Lab-Dips</h4>
            <p className="text-xs text-ink/65 mt-0.5">Need a custom yarn blend, shade matching, or wash effect?</p>
          </div>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-loom hover:text-loom-dark transition-colors shrink-0 border-b border-loom/40 pb-0.5"
        >
          Book Direct Mill Lab-Dip <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
