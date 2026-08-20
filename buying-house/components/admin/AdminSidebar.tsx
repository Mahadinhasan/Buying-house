"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Palette,
  Sparkles,
  Layers,
  Wrench,
  Users,
  BookOpen,
  PhoneCall,
  Inbox,
  Shirt,
  Newspaper,
  LogOut,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import { useSiteStore } from "@/lib/siteStore";
import BrandLogoIcon from "@/components/BrandLogoIcon";

const navGroups = [
  {
    group: "Overview",
    links: [
      { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
    ],
  },
  {
    group: "Appearance & Brand",
    links: [
      { href: "/admin/theme", label: "Theme & Design Colors", icon: Palette },
      { href: "/admin/branding", label: "Logo & Brand Identity", icon: Sparkles },
    ],
  },
  {
    group: "Content & Operations",
    links: [
      { href: "/admin/categories", label: "Categories & Nav", icon: Layers },
      { href: "/admin/services", label: "Services & Sourcing", icon: Wrench },
      { href: "/admin/team", label: "Team & Merchandisers", icon: Users },
      { href: "/admin/about", label: "About Us & Milestones", icon: BookOpen },
      { href: "/admin/contact", label: "Contact Information", icon: PhoneCall },
      { href: "/admin/messages", label: "Inquiries Inbox", icon: Inbox },
    ],
  },
  {
    group: "Catalogue & Media",
    links: [
      { href: "/admin/products", label: "Products Overview", icon: Shirt },
      { href: "/admin/blog", label: "Blog & Insights", icon: Newspaper },
    ],
  },
];

export default function AdminSidebar({
  onLogout,
  onNavigate,
}: {
  onLogout: () => void;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const { branding, inquiries, resetAll } = useSiteStore();
  const newInquiriesCount = inquiries.filter((i) => i.status === "New").length;

  return (
    <aside className="w-72 h-screen sticky top-0 bg-ink text-canvas flex flex-col border-r border-canvas/10 select-none">
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-5 border-b border-canvas/10 shrink-0">
        <Link href="/admin" className="flex items-center gap-2.5 min-w-0" onClick={onNavigate}>
          <div className="w-8 h-8 rounded-lg bg-brass/20 border border-brass/30 flex items-center justify-center text-brass-light shrink-0">
            {branding.logoType === "image" && branding.logoUrl ? (
              <img src={branding.logoUrl} alt="Logo" className="w-5 h-5 object-contain" />
            ) : (
              <BrandLogoIcon name={branding.logoIcon} size={17} strokeWidth={2} />
            )}
          </div>
          <div className="min-w-0">
            <span className="font-display font-bold text-sm text-canvas truncate block leading-tight">
              {branding.shortName || branding.name || "Admin Panel"}
            </span>
            <span className="text-[10px] text-brass-light/80 font-mono tracking-wider block">
              Staff Control Center
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation Groups */}
      <nav className="flex-1 px-3 py-4 space-y-5 overflow-y-auto custom-scrollbar">
        {navGroups.map((group) => (
          <div key={group.group}>
            <p className="px-3 text-[10px] font-mono font-semibold uppercase tracking-wider text-canvas/40 mb-1.5">
              {group.group}
            </p>
            <div className="space-y-0.5">
              {group.links.map((l) => {
                const active = l.href === "/admin" ? pathname === "/admin" : pathname?.startsWith(l.href);
                const Icon = l.icon;
                const isMessages = l.href === "/admin/messages";

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={onNavigate}
                    className={`flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition-all ${
                      active
                        ? "bg-brass/20 text-brass-light font-semibold border-l-2 border-brass-light"
                        : "text-canvas/70 hover:bg-canvas/[0.07] hover:text-canvas"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={16} className={active ? "text-brass-light" : "text-canvas/50"} />
                      <span>{l.label}</span>
                    </div>

                    {isMessages && newInquiriesCount > 0 && (
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-stamp text-canvas">
                        {newInquiriesCount}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Quick Action Footer */}
      <div className="p-3 border-t border-canvas/10 space-y-1 bg-ink/80">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium text-canvas/75 hover:bg-canvas/[0.08] hover:text-canvas transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <ExternalLink size={15} className="text-canvas/50" />
            <span>Open Public Site</span>
          </div>
          <span className="text-[10px] font-mono text-brass-light">Live &rarr;</span>
        </Link>

        <button
          onClick={() => {
            if (confirm("Reset all customizations back to factory default demo data?")) {
              resetAll();
              alert("All customizations have been reset to default.");
            }
          }}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-medium text-canvas/50 hover:bg-canvas/[0.06] hover:text-canvas transition-colors"
        >
          <RotateCcw size={15} />
          Reset All Defaults
        </button>

        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-medium text-canvas/70 hover:bg-stamp/20 hover:text-stamp-light transition-colors"
        >
          <LogOut size={15} />
          Sign out
        </button>
      </div>
    </aside>
  );
}
