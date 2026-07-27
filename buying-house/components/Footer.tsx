"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Stamp, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";
import { company, certifications } from "@/lib/data";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-ink text-canvas mt-28 border-t border-ink/20 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-weave opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-12 relative z-10">
        {/* Top Newsletter / RFQ Banner */}
        <div className="bg-canvas/5 border border-canvas/10 rounded-2xl p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brass/20 text-brass-light text-xs font-mono mb-2">
              <Sparkles size={13} /> Direct Factory Booking
            </div>
            <h3 className="font-display text-2xl font-semibold text-canvas">
              Ready to sample your next apparel line?
            </h3>
            <p className="text-sm text-canvas/60 mt-1 max-w-xl">
              Connect directly with our merchandisers in Dhaka for cost estimation, fabric swatches, and factory auditing.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brass text-ink font-semibold px-6 py-3.5 text-sm hover:bg-brass-light transition-all duration-300 shadow-lifted shrink-0"
          >
            Submit Tech Pack RFQ &rarr;
          </Link>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brass/20 border border-brass/30 flex items-center justify-center text-brass-light">
                <Stamp size={22} strokeWidth={1.75} />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight text-canvas">
                  {company.name}
                </span>
                <span className="mono-label text-[10px] text-brass-light block">
                  Est. {company.founded} · {company.city}
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-canvas/65 leading-relaxed">
              Full-service apparel buying house and compliance manager. Matching international fashion brands with Tier-1 audited garment factories.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <ShieldCheck size={16} /> 100% Independent AQL 2.5 QC Inspected
            </div>
          </div>

          <div>
            <p className="mono-label text-xs text-brass-light font-semibold tracking-wider">
              Navigation
            </p>
            <ul className="mt-5 space-y-3 text-sm text-canvas/70 font-medium">
              <li>
                <Link href="/" className="hover:text-brass-light transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brass-light transition-colors">
                  Services &amp; Fabric Library
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brass-light transition-colors">
                  Products &amp; Factory Network
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-brass-light transition-colors">
                  Team &amp; Merchandisers
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brass-light transition-colors">
                  About Our Sourcing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mono-label text-xs text-brass-light font-semibold tracking-wider">
              Compliance Standards
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c.code}
                  className="inline-flex items-center gap-1.5 text-xs font-mono bg-canvas/10 border border-canvas/15 px-3 py-1.5 rounded-md text-canvas/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brass-light" />
                  {c.code}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mono-label text-xs text-brass-light font-semibold tracking-wider">
              Dhaka Headquarters
            </p>
            <ul className="mt-5 space-y-3.5 text-sm text-canvas/75">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brass-light" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-brass-light" />
                <span>{company.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-brass-light" />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-brass-light transition-colors border-b border-canvas/20 pb-0.5"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-canvas/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-canvas/50">
          <p>© {new Date().getFullYear()} {company.name}. Precision apparel sourcing &amp; quality control.</p>
          <Link
            href="/admin"
            className="inline-flex items-center gap-1 hover:text-brass-light transition-colors"
          >
            Staff Dashboard <ExternalLink size={12} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
