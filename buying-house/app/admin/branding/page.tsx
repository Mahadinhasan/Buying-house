"use client";

import { useState } from "react";
import { Sparkles, Check, Image as ImageIcon, Tag, Save, Eye } from "lucide-react";
import { useSiteStore } from "@/lib/siteStore";
import BrandLogoIcon, { BRAND_ICONS } from "@/components/BrandLogoIcon";

export default function AdminBrandingPage() {
  const { branding, updateBranding } = useSiteStore();
  const [formData, setFormData] = useState(branding);
  const [savedNotice, setSavedNotice] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    updateBranding(formData);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="mono-label text-xs text-loom font-semibold">Identity &amp; Branding</span>
            {savedNotice && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 animate-pulse">
                <Check size={12} /> Branding Updated!
              </span>
            )}
          </div>
          <h1 className="mt-1 font-display text-3xl font-bold text-ink tracking-tight">
            Logo, Brand Name &amp; Identity
          </h1>
          <p className="mt-1 text-sm text-ink/65 max-w-2xl">
            Update your company name, logo mark, tagline, and identity. Changes instantly synchronize across the public Navbar, Footer, Hero sections, and staff portal.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
        {/* Form Settings */}
        <form onSubmit={handleSubmit} className="bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          {/* Logo Selection Section */}
          <div className="space-y-4 pb-6 border-b border-ink/10">
            <h2 className="font-display font-bold text-ink text-base flex items-center gap-2">
              <Sparkles size={18} className="text-brass" /> Brand Logo &amp; Emblem Mark
            </h2>
            <p className="text-xs text-ink/55">
              Choose an artisan vector brand emblem or enter an image URL.
            </p>

            <div className="flex gap-3 pt-1">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, logoType: "icon" })}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  formData.logoType === "icon"
                    ? "bg-loom text-paper border-loom shadow-xs"
                    : "bg-canvas border-ink/15 text-ink hover:border-ink/30"
                }`}
              >
                Artisan Vector Icons
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, logoType: "image" })}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  formData.logoType === "image"
                    ? "bg-loom text-paper border-loom shadow-xs"
                    : "bg-canvas border-ink/15 text-ink hover:border-ink/30"
                }`}
              >
                Custom Logo Image URL
              </button>
            </div>

            {formData.logoType === "icon" ? (
              <div className="space-y-2 pt-2">
                <label className="text-xs font-mono font-semibold text-ink/70">
                  Select Brand Vector Icon:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {Object.entries(BRAND_ICONS).map(([key, item]) => {
                    const isSelected = formData.logoIcon === key;
                    const Icon = item.icon;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            logoIcon: key as typeof formData.logoIcon,
                          })
                        }
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                          isSelected
                            ? "bg-loom/10 border-loom text-loom font-bold shadow-xs ring-1 ring-loom"
                            : "bg-canvas border-ink/10 text-ink/70 hover:border-ink/30 hover:text-ink"
                        }`}
                      >
                        <Icon size={22} strokeWidth={isSelected ? 2.2 : 1.75} />
                        <span className="text-[11px] truncate">{item.label.split(" ")[1] || item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="space-y-2 pt-2">
                <label className="text-xs font-mono font-semibold text-ink/70">
                  Logo Image URL (PNG, SVG, or WebP):
                </label>
                <input
                  type="url"
                  value={formData.logoUrl}
                  onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
                  placeholder="https://example.com/logo.png"
                  className="w-full rounded-xl border border-ink/20 bg-canvas px-4 py-2.5 text-sm outline-none focus:border-loom"
                />
                <p className="text-[11px] text-ink/50">
                  Tip: A square transparent PNG or SVG works best.
                </p>
              </div>
            )}
          </div>

          {/* Company Names & Text */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-ink text-base flex items-center gap-2">
              <Tag size={18} className="text-loom" /> Company Details
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink/75 block mb-1">
                  Full Company Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full rounded-xl border border-ink/20 bg-canvas px-4 py-2.5 text-sm outline-none focus:border-loom text-ink"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-ink/75 block mb-1">
                  Short Brand Name / Display Name
                </label>
                <input
                  type="text"
                  value={formData.shortName}
                  onChange={(e) => setFormData({ ...formData, shortName: e.target.value })}
                  required
                  className="w-full rounded-xl border border-ink/20 bg-canvas px-4 py-2.5 text-sm outline-none focus:border-loom text-ink"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink/75 block mb-1">
                Tagline / Slogan
              </label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full rounded-xl border border-ink/20 bg-canvas px-4 py-2.5 text-sm outline-none focus:border-loom text-ink"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink/75 block mb-1">
                  Year Founded
                </label>
                <input
                  type="number"
                  value={formData.founded}
                  onChange={(e) => setFormData({ ...formData, founded: Number(e.target.value) })}
                  className="w-full rounded-xl border border-ink/20 bg-canvas px-4 py-2.5 text-sm outline-none focus:border-loom text-ink"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-ink/75 block mb-1">
                  City &amp; Country
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full rounded-xl border border-ink/20 bg-canvas px-4 py-2.5 text-sm outline-none focus:border-loom text-ink"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-loom text-paper font-semibold px-6 py-3 text-sm hover:bg-loom-dark transition-all shadow-xs"
          >
            <Save size={16} /> Save Branding &amp; Logo Updates
          </button>
        </form>

        {/* Live Brand Preview Card */}
        <div className="space-y-6">
          <div className="bg-paper border border-ink/10 rounded-2xl p-6 shadow-xs space-y-5">
            <h2 className="font-display font-bold text-ink text-base flex items-center gap-2">
              <Eye size={18} className="text-loom" /> Live Navbar &amp; Brand Card Preview
            </h2>

            {/* Navbar simulation */}
            <div className="p-4 rounded-xl bg-canvas border border-ink/10 shadow-xs space-y-3">
              <span className="mono-label text-[10px] text-ink/40 font-bold block">
                Header Simulation
              </span>
              <div className="flex items-center gap-3 p-3 bg-paper rounded-xl border border-ink/10">
                <div className="w-10 h-10 rounded-lg bg-loom/10 border border-loom/20 flex items-center justify-center text-loom shrink-0">
                  {formData.logoType === "image" && formData.logoUrl ? (
                    <img src={formData.logoUrl} alt="Logo" className="w-6 h-6 object-contain" />
                  ) : (
                    <BrandLogoIcon name={formData.logoIcon} size={22} strokeWidth={2} />
                  )}
                </div>
                <div>
                  <span className="font-display font-bold text-base text-ink block leading-tight">
                    {formData.shortName || formData.name || "Brand Name"}
                  </span>
                  <span className="mono-label text-[9px] text-loom font-semibold tracking-wider block">
                    Apparel Sourcing &amp; Compliance
                  </span>
                </div>
              </div>
            </div>

            {/* Footer / Stamp badge preview */}
            <div className="p-5 rounded-xl bg-ink text-canvas space-y-4">
              <span className="mono-label text-[10px] text-brass-light font-bold block">
                Footer Emblem Simulation
              </span>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brass/20 border border-brass/30 flex items-center justify-center text-brass-light shrink-0">
                  {formData.logoType === "image" && formData.logoUrl ? (
                    <img src={formData.logoUrl} alt="Logo" className="w-7 h-7 object-contain" />
                  ) : (
                    <BrandLogoIcon name={formData.logoIcon} size={26} strokeWidth={1.75} />
                  )}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-canvas leading-tight">
                    {formData.name}
                  </h4>
                  <p className="mono-label text-[10px] text-brass-light mt-0.5">
                    Est. {formData.founded} · {formData.city}
                  </p>
                </div>
              </div>
              <p className="text-xs text-canvas/70 leading-relaxed italic">
                "{formData.tagline}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
