"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Stamp, Sparkles, Sun, Moon, ChevronDown, ArrowRight, Layers } from "lucide-react";
import { company } from "@/lib/data";
import { useCategoriesStore } from "@/lib/categoriesStore";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services & Fabrics" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Insights" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { publishedCategories } = useCategoriesStore();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Close dropdown on outside click
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCatDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Initialize dark mode from localStorage or preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-ink/10 shadow-soft"
          : "bg-canvas/80 backdrop-blur-sm border-b border-ink/5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo & Brand Mark */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-lg bg-loom/10 border border-loom/20 flex items-center justify-center text-loom group-hover:bg-loom group-hover:text-paper transition-all duration-300">
              <Stamp size={22} strokeWidth={2} />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-ink tracking-tight block leading-none">
                {company.shortName || company.name}
              </span>
              <span className="mono-label text-[10px] text-loom font-semibold tracking-wider">
                Apparel Sourcing &amp; Compliance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Integrated Categories Dropdown */}
          <nav className="hidden lg:flex items-center gap-1 bg-paper/60 p-1.5 rounded-full border border-ink/10 relative">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                pathname === "/"
                  ? "bg-loom text-paper shadow-xs"
                  : "text-ink/75 hover:text-ink hover:bg-canvas"
              }`}
            >
              Home
            </Link>

            {/* Single Categories Dropdown Navbar Item */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCatDropdownOpen((v) => !v)}
                onMouseEnter={() => setCatDropdownOpen(true)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  catDropdownOpen || pathname === "/products"
                    ? "bg-loom text-paper shadow-xs"
                    : "text-ink/75 hover:text-ink hover:bg-canvas"
                }`}
              >
                <span>Categories</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${
                    catDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Categories Mega Dropdown Menu */}
              {catDropdownOpen && (
                <div
                  onMouseLeave={() => setCatDropdownOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[520px] bg-paper border border-ink/15 rounded-2xl shadow-lifted p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="flex items-center justify-between pb-2.5 border-b border-ink/10">
                    <div className="flex items-center gap-1.5">
                      <Layers size={14} className="text-brass" />
                      <span className="mono-label text-[11px] text-loom font-bold">
                        Apparel Categories ({publishedCategories.length})
                      </span>
                    </div>
                    <Link
                      href="/products"
                      onClick={() => setCatDropdownOpen(false)}
                      className="text-[11px] font-bold text-ink hover:text-loom flex items-center gap-1"
                    >
                      View All Catalog <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2.5 max-h-[340px] overflow-y-auto pr-1">
                    {publishedCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/products?category=${encodeURIComponent(cat.name)}`}
                        onClick={() => setCatDropdownOpen(false)}
                        className="group flex gap-2.5 p-2 rounded-xl hover:bg-canvas border border-transparent hover:border-ink/10 transition-all"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-canvas border border-ink/10">
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
                          </div>
                          <span className="inline-block text-[9px] mono-label font-bold px-1.5 py-0.2 rounded bg-brass/15 text-brass-dark mt-0.5">
                            {cat.gender}
                          </span>
                          <p className="text-[10px] font-mono text-ink/50 mt-0.5 truncate">
                            MOQ: {cat.moq}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            {links.slice(1).map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-loom text-paper shadow-xs"
                      : "text-ink/75 hover:text-ink hover:bg-canvas"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: Dark Mode Toggle & Get a Quote */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2.5 rounded-full border border-ink/10 bg-paper hover:bg-canvas text-ink transition-all duration-300 shadow-xs flex items-center justify-center"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <Sun size={18} className="text-amber-400 animate-spin-slow" />
              ) : (
                <Moon size={18} className="text-indigo-900" />
              )}
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas text-xs font-semibold px-5 py-2.5 hover:bg-loom transition-all duration-300 shadow-soft"
            >
              <Sparkles size={14} className="text-brass" /> Get a Quote
            </Link>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-lg border border-ink/10 bg-paper text-ink"
            >
              {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-indigo-900" />}
            </button>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="p-2.5 rounded-lg border border-ink/10 bg-paper text-ink hover:bg-canvas transition-colors"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Integrated Categories List */}
      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-paper/95 backdrop-blur-lg shadow-lifted">
          <nav className="mx-auto max-w-7xl px-5 py-5 flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/" ? "bg-loom text-paper" : "text-ink/80 hover:bg-canvas"
              }`}
            >
              Home
            </Link>

            {/* Mobile Categories Collapsable / List */}
            <div className="py-2 border-y border-ink/10 my-1">
              <span className="mono-label text-[11px] text-loom font-bold px-4 block mb-2">
                Apparel Categories ({publishedCategories.length})
              </span>
              <div className="grid grid-cols-2 gap-2 px-2">
                {publishedCategories.map((c) => (
                  <Link
                    key={c.id}
                    href={`/products?category=${encodeURIComponent(c.name)}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-lg bg-canvas text-xs font-semibold text-ink hover:bg-loom/10"
                  >
                    <img src={c.image} alt={c.name} className="w-7 h-7 rounded object-cover" />
                    <span className="truncate">{c.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {links.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === l.href ? "bg-loom text-paper" : "text-ink/80 hover:bg-canvas"
                }`}
              >
                {l.label}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t border-ink/10 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full rounded-lg bg-ink text-canvas text-sm font-semibold px-4 py-3 text-center flex items-center justify-center gap-2"
              >
                <Sparkles size={16} className="text-brass" /> Request Instant RFQ
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
