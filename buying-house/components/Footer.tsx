"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Stamp } from "lucide-react";
import { company } from "@/lib/data";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-ink text-canvas mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Stamp size={20} className="text-brass-light" strokeWidth={1.75} />
              <span className="font-display text-base font-semibold">
                {company.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-canvas/60 leading-relaxed">
              Apparel sourcing and compliance partner, matching global brands
              with audited factories across Bangladesh since {company.founded}.
            </p>
          </div>

          <div>
            <p className="mono-label text-xs text-brass-light">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm text-canvas/70">
              <li><Link href="/about" className="hover:text-canvas">About us</Link></li>
              <li><Link href="/team" className="hover:text-canvas">Team &amp; certifications</Link></li>
              <li><Link href="/blog" className="hover:text-canvas">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-canvas">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="mono-label text-xs text-brass-light">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm text-canvas/70">
              <li><Link href="/services" className="hover:text-canvas">Sourcing &amp; sampling</Link></li>
              <li><Link href="/services" className="hover:text-canvas">Production management</Link></li>
              <li><Link href="/services" className="hover:text-canvas">Quality control</Link></li>
              <li><Link href="/products" className="hover:text-canvas">Factory network</Link></li>
            </ul>
          </div>

          <div>
            <p className="mono-label text-xs text-brass-light">Reach us</p>
            <ul className="mt-4 space-y-3 text-sm text-canvas/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>{company.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-canvas"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-canvas/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-canvas/45">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <Link
            href="/admin"
            className="mono-label text-xs text-canvas/45 hover:text-brass-light transition-colors"
          >
            Staff login →
          </Link>
        </div>
      </div>
    </footer>
  );
}
