"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Stamp } from "lucide-react";
import { company } from "@/lib/data";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  //{ href: "/products", label: "Products & Factories" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-canvas/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Stamp size={22} className="text-loom" strokeWidth={1.75} />
            <span className="">
              {company.name}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-loom ${
                  pathname === l.href ? "text-loom" : "text-ink/75"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <span className="mono-label text-[11px] text-ink/50">
              {company.city}
            </span>
            <Link
              href="/contact"
              className="rounded-sm bg-ink text-canvas text-sm font-semibold px-4 py-2 hover:bg-loom-dark transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-canvas">
          <nav className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 text-sm font-medium border-b border-ink/5 last:border-0 ${
                  pathname === l.href ? "text-loom" : "text-ink/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-sm bg-ink text-canvas text-sm font-semibold px-4 py-2.5 text-center"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
