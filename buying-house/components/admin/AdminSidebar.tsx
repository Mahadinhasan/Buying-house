"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Shirt,
  Inbox,
  Newspaper,
  Stamp,
  LogOut,
  ExternalLink,
} from "lucide-react";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/products", label: "Products", icon: Shirt },
  { href: "/admin/messages", label: "Inquiries", icon: Inbox },
  { href: "/admin/blog", label: "Blog posts", icon: Newspaper },
];

export default function AdminSidebar({
  onLogout,
  onNavigate,
}: {
  onLogout: () => void;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen sticky top-0 bg-ink text-canvas flex flex-col">
      <div className="h-16 flex items-center gap-2 px-6 border-b border-canvas/10 shrink-0">
        <Stamp size={20} className="text-brass-light" strokeWidth={1.75} />
        <span className="font-display font-semibold text-sm">
          Demo Company name Admin
        </span>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-1">
        {links.map((l) => {
          const active = l.exact ? pathname === l.href : pathname?.startsWith(l.href);
          const Icon = l.icon;
          return (
            <Link
              key={l.href}
              href={l.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                active
                  ? "bg-brass/15 text-brass-light"
                  : "text-canvas/65 hover:bg-canvas/[0.06] hover:text-canvas"
              }`}
            >
              <Icon size={17} />
              {l.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-5 border-t border-canvas/10 space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-sm text-sm font-medium text-canvas/65 hover:bg-canvas/[0.06] hover:text-canvas transition-colors"
        >
          <ExternalLink size={17} />
          View public site
        </Link>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-sm text-sm font-medium text-canvas/65 hover:bg-stamp/15 hover:text-stamp transition-colors"
        >
          <LogOut size={17} />
          Log out
        </button>
      </div>
    </aside>
  );
}
