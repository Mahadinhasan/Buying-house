"use client";

import Link from "next/link";
import {
  MessageCircle,
  Mail,
  ArrowUpRight,
  Palette,
  Sparkles,
  Layers,
  Wrench,
  Users,
  BookOpen,
  PhoneCall,
  Shirt,
  Newspaper,
  CheckCircle2,
} from "lucide-react";
import { useSiteStore, THEME_PRESETS } from "@/lib/siteStore";
import BrandLogoIcon from "@/components/BrandLogoIcon";

export default function AdminDashboard() {
  const { branding, theme, inquiries, categories, team, processSteps, blogPosts } = useSiteStore();

  const newInquiries = inquiries.filter((i) => i.status === "New");
  const publishedCats = categories.filter((c) => c.status === "Published");
  const publishedPosts = blogPosts.filter((p) => p.published);

  const statusColor: Record<string, string> = {
    New: "bg-stamp/15 text-stamp border-stamp/30",
    "In progress": "bg-brass/15 text-brass-dark border-brass/30",
    Resolved: "bg-loom/15 text-loom border-loom/30",
  };

  const currentPresetName =
    THEME_PRESETS[theme.activePreset]?.label || "Custom Bespoke Colors";

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="flex items-start justify-between flex-wrap gap-4 bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="mono-label text-xs text-loom font-semibold tracking-wider">
              Management Portal
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-medium">
              <CheckCircle2 size={11} /> Real-time Live Sync
            </span>
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink tracking-tight">
            Welcome back to {branding.shortName || branding.name || "Admin"}
          </h1>
          <p className="mt-1 text-sm text-ink/65 max-w-2xl">
            Manage your site branding, design colors, categories, services, merchandiser profiles, about story, and customer inquiries from one central control hub.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/theme"
            className="inline-flex items-center gap-2 rounded-xl bg-loom text-paper font-semibold px-4 py-2.5 text-xs sm:text-sm hover:bg-loom-dark transition-all shadow-xs"
          >
            <Palette size={16} /> Theme &amp; Colors
          </Link>
          <Link
            href="/admin/branding"
            className="inline-flex items-center gap-2 rounded-xl bg-brass/20 text-brass-dark border border-brass/30 font-semibold px-4 py-2.5 text-xs sm:text-sm hover:bg-brass/30 transition-all"
          >
            <Sparkles size={16} /> Brand &amp; Logo
          </Link>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <StatCard
          label="New Inquiries"
          value={String(newInquiries.length)}
          subtext={`${inquiries.length} total inquiries`}
          href="/admin/messages"
          badge={newInquiries.length > 0 ? "Action needed" : "Up to date"}
          badgeColor={newInquiries.length > 0 ? "bg-stamp/10 text-stamp" : "bg-loom/10 text-loom"}
        />
        <StatCard
          label="Product Categories"
          value={String(publishedCats.length)}
          subtext={`${categories.length} total configured`}
          href="/admin/categories"
        />
        <StatCard
          label="Process Milestones"
          value={String(processSteps.length)}
          subtext="Sourcing lifecycle stages"
          href="/admin/services"
        />
        <StatCard
          label="Team Profiles"
          value={String(team.length)}
          subtext="Merchandisers & leads"
          href="/admin/team"
        />
      </div>

      {/* Main Grid: Inquiries & Quick Config Tiles */}
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
        {/* Recent Inquiries List */}
        <div className="bg-paper border border-ink/10 rounded-2xl overflow-hidden shadow-xs flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10">
            <div>
              <h2 className="font-display font-bold text-ink text-base">
                Recent Customer Inquiries
              </h2>
              <p className="text-xs text-ink/50 mt-0.5">
                Submissions from contact form, WhatsApp &amp; RFQs
              </p>
            </div>
            <Link
              href="/admin/messages"
              className="text-xs font-semibold text-loom flex items-center gap-1 hover:gap-1.5 transition-all bg-loom/10 px-3 py-1.5 rounded-lg"
            >
              View all ({inquiries.length}) <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="divide-y divide-ink/10 flex-1">
            {inquiries.slice(0, 5).map((inq) => (
              <div
                key={inq.id}
                className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-canvas/50 transition-colors"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-ink truncate">{inq.subject}</p>
                    <span
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${
                        statusColor[inq.status] || "bg-ink/10 text-ink"
                      }`}
                    >
                      {inq.status}
                    </span>
                  </div>
                  <p className="text-xs text-ink/60 mt-0.5">
                    <span className="font-medium text-ink/80">{inq.name}</span> · {inq.company} · via {inq.channel} ({inq.received})
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Hello ${inq.name}, regarding your sourcing inquiry for ${inq.subject}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-loom/10 text-loom hover:bg-loom/20 transition-colors"
                    title="Quick Reply via WhatsApp"
                  >
                    <MessageCircle size={15} />
                  </a>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(inq.email || branding.email)}&su=${encodeURIComponent(`Re: ${inq.subject}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-brass/15 text-brass-dark hover:bg-brass/25 transition-colors"
                    title="Quick Reply via Gmail"
                  >
                    <Mail size={15} />
                  </a>
                </div>
              </div>
            ))}

            {inquiries.length === 0 && (
              <div className="p-8 text-center text-ink/50 text-sm">
                No inquiries received yet.
              </div>
            )}
          </div>
        </div>

        {/* Live Brand & Theme Snapshot */}
        <div className="space-y-6">
          <div className="bg-paper border border-ink/10 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-ink text-base">
                Active Brand &amp; Palette
              </h2>
              <Link
                href="/admin/theme"
                className="text-xs font-semibold text-loom hover:underline"
              >
                Change &rarr;
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-canvas border border-ink/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-loom/15 border border-loom/25 flex items-center justify-center text-loom">
                  {branding.logoType === "image" && branding.logoUrl ? (
                    <img src={branding.logoUrl} alt="Logo" className="w-6 h-6 object-contain" />
                  ) : (
                    <BrandLogoIcon name={branding.logoIcon} size={20} strokeWidth={2} />
                  )}
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-ink leading-tight">
                    {branding.name}
                  </h3>
                  <p className="text-xs text-ink/55">{branding.tagline}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-ink/10 flex items-center justify-between text-xs">
                <span className="text-ink/60 font-mono">Palette:</span>
                <span className="font-semibold text-ink font-mono text-[11px]">
                  {currentPresetName}
                </span>
              </div>

              {/* Color Swatch chips */}
              <div className="flex items-center gap-2 pt-1">
                <div
                  className="w-6 h-6 rounded-md border border-ink/15 shadow-2xs"
                  style={{ backgroundColor: theme.loom }}
                  title={`Loom Primary: ${theme.loom}`}
                />
                <div
                  className="w-6 h-6 rounded-md border border-ink/15 shadow-2xs"
                  style={{ backgroundColor: theme.brass }}
                  title={`Brass Accent: ${theme.brass}`}
                />
                <div
                  className="w-6 h-6 rounded-md border border-ink/15 shadow-2xs"
                  style={{ backgroundColor: theme.stamp }}
                  title={`Stamp Alert: ${theme.stamp}`}
                />
                <div
                  className="w-6 h-6 rounded-md border border-ink/15 shadow-2xs"
                  style={{ backgroundColor: theme.canvas }}
                  title={`Canvas: ${theme.canvas}`}
                />
                <div
                  className="w-6 h-6 rounded-md border border-ink/15 shadow-2xs"
                  style={{ backgroundColor: theme.paper }}
                  title={`Paper: ${theme.paper}`}
                />
                <div
                  className="w-6 h-6 rounded-md border border-ink/15 shadow-2xs"
                  style={{ backgroundColor: theme.ink }}
                  title={`Ink: ${theme.ink}`}
                />
              </div>
            </div>
          </div>

          {/* Quick Hub Navigation Cards */}
          <div className="bg-paper border border-ink/10 rounded-2xl p-6 shadow-xs">
            <h2 className="font-display font-bold text-ink text-base mb-3">
              Feature Control Hub
            </h2>
            <div className="grid grid-cols-2 gap-2.5 text-xs font-medium">
              <Link
                href="/admin/services"
                className="flex items-center gap-2 p-3 rounded-xl border border-ink/10 bg-canvas hover:border-loom/40 hover:bg-loom/5 transition-all text-ink"
              >
                <Wrench size={15} className="text-loom" />
                <span>Services</span>
              </Link>
              <Link
                href="/admin/team"
                className="flex items-center gap-2 p-3 rounded-xl border border-ink/10 bg-canvas hover:border-loom/40 hover:bg-loom/5 transition-all text-ink"
              >
                <Users size={15} className="text-loom" />
                <span>Team</span>
              </Link>
              <Link
                href="/admin/about"
                className="flex items-center gap-2 p-3 rounded-xl border border-ink/10 bg-canvas hover:border-loom/40 hover:bg-loom/5 transition-all text-ink"
              >
                <BookOpen size={15} className="text-brass" />
                <span>About Us</span>
              </Link>
              <Link
                href="/admin/contact"
                className="flex items-center gap-2 p-3 rounded-xl border border-ink/10 bg-canvas hover:border-loom/40 hover:bg-loom/5 transition-all text-ink"
              >
                <PhoneCall size={15} className="text-stamp" />
                <span>Contact Info</span>
              </Link>
              <Link
                href="/admin/categories"
                className="flex items-center gap-2 p-3 rounded-xl border border-ink/10 bg-canvas hover:border-loom/40 hover:bg-loom/5 transition-all text-ink"
              >
                <Layers size={15} className="text-loom" />
                <span>Categories</span>
              </Link>
              <Link
                href="/admin/blog"
                className="flex items-center gap-2 p-3 rounded-xl border border-ink/10 bg-canvas hover:border-loom/40 hover:bg-loom/5 transition-all text-ink"
              >
                <Newspaper size={15} className="text-brass" />
                <span>Blog Posts</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  subtext,
  href,
  badge,
  badgeColor,
}: {
  label: string;
  value: string;
  subtext: string;
  href: string;
  badge?: string;
  badgeColor?: string;
}) {
  return (
    <Link
      href={href}
      className="bg-paper border border-ink/10 rounded-2xl p-5 hover:border-loom/40 hover:shadow-soft transition-all block group"
    >
      <div className="flex items-start justify-between">
        <p className="text-xs font-mono text-ink/55 uppercase tracking-wider">{label}</p>
        {badge && (
          <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${badgeColor}`}>
            {badge}
          </span>
        )}
      </div>
      <p className="font-display text-3xl sm:text-4xl font-bold text-ink mt-2 group-hover:text-loom transition-colors">
        {value}
      </p>
      <p className="mt-1 text-xs text-ink/50 truncate">{subtext}</p>
    </Link>
  );
}
