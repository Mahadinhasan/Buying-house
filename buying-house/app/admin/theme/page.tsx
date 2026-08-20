"use client";

import { useState } from "react";
import {
  Palette,
  Sparkles,
  Check,
  RotateCcw,
  Download,
  Upload,
  Eye,
  Sliders,
} from "lucide-react";
import { useSiteStore, THEME_PRESETS, ThemeColorsConfig } from "@/lib/siteStore";

export default function AdminThemePage() {
  const { theme, updateTheme, applyThemePreset } = useSiteStore();
  const [savedNotice, setSavedNotice] = useState(false);

  function handleColorChange(key: keyof ThemeColorsConfig, value: string) {
    updateTheme({ [key]: value, activePreset: "custom" });
    showToast();
  }

  function handleSelectPreset(presetKey: string) {
    applyThemePreset(presetKey);
    showToast();
  }

  function showToast() {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="mono-label text-xs text-loom font-semibold">Appearance &amp; Styling</span>
            {savedNotice && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 animate-pulse">
                <Check size={12} /> Live Theme Updated!
              </span>
            )}
          </div>
          <h1 className="mt-1 font-display text-3xl font-bold text-ink tracking-tight">
            Theme &amp; Design Color Customizer
          </h1>
          <p className="mt-1 text-sm text-ink/65 max-w-2xl">
            Select a curated luxury color scheme or fine-tune individual brand colors. Changes immediately apply across all public pages, buttons, cards, and admin menus.
          </p>
        </div>
      </div>

      {/* 1. Curated Luxury Presets */}
      <section className="bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h2 className="font-display font-bold text-ink text-lg flex items-center gap-2">
              <Sparkles size={18} className="text-brass" /> Curated Luxury Theme Presets
            </h2>
            <p className="text-xs text-ink/55 mt-0.5">
              Click any palette to immediately transform the entire site design.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(THEME_PRESETS).map(([key, item]) => {
            const isSelected = theme.activePreset === key;
            const c = item.colors;

            return (
              <button
                key={key}
                onClick={() => handleSelectPreset(key)}
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? "border-loom bg-canvas shadow-soft ring-2 ring-loom/20"
                    : "border-ink/10 bg-canvas/60 hover:border-ink/30 hover:bg-canvas"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-bold text-sm text-ink group-hover:text-loom transition-colors">
                    {item.label}
                  </span>
                  {isSelected && (
                    <span className="w-5 h-5 rounded-full bg-loom text-paper flex items-center justify-center text-[10px]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                  )}
                </div>

                {/* Color Swatch Bars */}
                <div className="grid grid-cols-6 gap-1.5 h-8 rounded-lg overflow-hidden border border-ink/10">
                  <div style={{ backgroundColor: c.loom }} title={`Primary Loom: ${c.loom}`} />
                  <div style={{ backgroundColor: c.loomLight }} title={`Loom Light: ${c.loomLight}`} />
                  <div style={{ backgroundColor: c.brass }} title={`Brass Gold: ${c.brass}`} />
                  <div style={{ backgroundColor: c.stamp }} title={`Stamp Red: ${c.stamp}`} />
                  <div style={{ backgroundColor: c.canvas }} title={`Canvas: ${c.canvas}`} />
                  <div style={{ backgroundColor: c.ink }} title={`Ink: ${c.ink}`} />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Bespoke Color Pickers & Live Preview */}
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        {/* Custom Color Pickers */}
        <section className="bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-ink/10">
            <div>
              <h2 className="font-display font-bold text-ink text-lg flex items-center gap-2">
                <Sliders size={18} className="text-loom" /> Fine-Tune Brand Colors
              </h2>
              <p className="text-xs text-ink/55 mt-0.5">
                Pick custom hex codes or use the native color pickers.
              </p>
            </div>
            <button
              onClick={() => handleSelectPreset("atelier")}
              className="text-xs text-ink/60 hover:text-ink flex items-center gap-1.5 font-medium"
            >
              <RotateCcw size={13} /> Reset to Default
            </button>
          </div>

          <div className="space-y-6">
            {/* Loom (Primary) Group */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink/60 mb-3">
                1. Primary / Loom Brand Colors
              </h3>
              <div className="grid sm:grid-cols-3 gap-3">
                <ColorInputCard
                  label="Loom (Primary)"
                  colorKey="loom"
                  value={theme.loom}
                  onChange={(val) => handleColorChange("loom", val)}
                />
                <ColorInputCard
                  label="Loom Light"
                  colorKey="loomLight"
                  value={theme.loomLight}
                  onChange={(val) => handleColorChange("loomLight", val)}
                />
                <ColorInputCard
                  label="Loom Dark"
                  colorKey="loomDark"
                  value={theme.loomDark}
                  onChange={(val) => handleColorChange("loomDark", val)}
                />
              </div>
            </div>

            {/* Brass (Accent) Group */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink/60 mb-3">
                2. Accent / Brass &amp; Gold Colors
              </h3>
              <div className="grid sm:grid-cols-3 gap-3">
                <ColorInputCard
                  label="Brass (Gold Accent)"
                  colorKey="brass"
                  value={theme.brass}
                  onChange={(val) => handleColorChange("brass", val)}
                />
                <ColorInputCard
                  label="Brass Light"
                  colorKey="brassLight"
                  value={theme.brassLight}
                  onChange={(val) => handleColorChange("brassLight", val)}
                />
                <ColorInputCard
                  label="Brass Dark"
                  colorKey="brassDark"
                  value={theme.brassDark}
                  onChange={(val) => handleColorChange("brassDark", val)}
                />
              </div>
            </div>

            {/* Stamp (Highlight) Group */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink/60 mb-3">
                3. Stamp / Alert &amp; Badge Colors
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <ColorInputCard
                  label="Stamp (Ruby Highlight)"
                  colorKey="stamp"
                  value={theme.stamp}
                  onChange={(val) => handleColorChange("stamp", val)}
                />
                <ColorInputCard
                  label="Stamp Light"
                  colorKey="stampLight"
                  value={theme.stampLight}
                  onChange={(val) => handleColorChange("stampLight", val)}
                />
              </div>
            </div>

            {/* Canvas & Surface Group */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink/60 mb-3">
                4. Surfaces &amp; Typography
              </h3>
              <div className="grid sm:grid-cols-3 gap-3">
                <ColorInputCard
                  label="Canvas (Background)"
                  colorKey="canvas"
                  value={theme.canvas}
                  onChange={(val) => handleColorChange("canvas", val)}
                />
                <ColorInputCard
                  label="Paper (Card Surface)"
                  colorKey="paper"
                  value={theme.paper}
                  onChange={(val) => handleColorChange("paper", val)}
                />
                <ColorInputCard
                  label="Ink (Deep Text)"
                  colorKey="ink"
                  value={theme.ink}
                  onChange={(val) => handleColorChange("ink", val)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Live Interactive Public Preview */}
        <section className="bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col space-y-6">
          <div>
            <h2 className="font-display font-bold text-ink text-lg flex items-center gap-2">
              <Eye size={18} className="text-loom" /> Real-time Component Preview
            </h2>
            <p className="text-xs text-ink/55 mt-0.5">
              See how your customized color palette appears on live UI elements.
            </p>
          </div>

          {/* Interactive Preview Container */}
          <div className="flex-1 bg-canvas border border-ink/15 rounded-2xl p-6 space-y-6 shadow-inner">
            {/* Header simulation */}
            <div className="flex items-center justify-between pb-4 border-b border-ink/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-loom text-paper flex items-center justify-center font-bold text-xs shadow-xs">
                  BH
                </div>
                <span className="font-display font-bold text-sm text-ink">
                  Atelier Sourcing
                </span>
              </div>
              <span className="mono-label text-[10px] bg-brass/20 text-brass-dark font-bold px-2.5 py-1 rounded-full">
                Audit Verified
              </span>
            </div>

            {/* Headline and Buttons */}
            <div className="space-y-3">
              <span className="mono-label text-xs text-loom font-semibold">
                Bangladesh Buying House
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink leading-tight">
                High-volume ethical apparel production &amp; sampling.
              </h3>
              <p className="text-xs text-ink/70 leading-relaxed">
                Connect your collections with Tier-1 certified factories in Dhaka.
              </p>
            </div>

            {/* Buttons Showcase */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <button className="px-4 py-2 rounded-lg bg-loom text-paper text-xs font-semibold hover:bg-loom-dark transition-colors shadow-xs">
                Primary Action (Loom)
              </button>
              <button className="px-4 py-2 rounded-lg bg-brass text-ink text-xs font-semibold hover:bg-brass-light transition-colors shadow-xs">
                Accent Action (Brass)
              </button>
              <button className="px-3.5 py-2 rounded-lg bg-stamp text-paper text-xs font-semibold hover:bg-stamp-light transition-colors">
                Alert (Stamp)
              </button>
            </div>

            {/* Card Mockup */}
            <div className="bg-paper border border-ink/10 rounded-xl p-4 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold text-xs text-ink">
                  Selvedge Denim Line
                </span>
                <span className="text-[10px] font-mono text-loom font-bold">
                  MOQ 500 pcs
                </span>
              </div>
              <p className="text-[11px] text-ink/60">
                13.5 oz Japanese-spec ring-spun denim with customized eco-wash finishes.
              </p>
              <div className="h-1.5 w-full bg-ink/10 rounded-full overflow-hidden">
                <div className="h-full bg-loom w-3/4 rounded-full" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ColorInputCard({
  label,
  value,
  colorKey,
  onChange,
}: {
  label: string;
  value: string;
  colorKey: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="bg-canvas border border-ink/10 rounded-xl p-3 flex flex-col justify-between space-y-2">
      <span className="text-[11px] font-medium text-ink/75 block truncate">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={value.startsWith("#") ? value : "#2F5D50"}
          onChange={(e) => onChange(e.target.value)}
          className="w-8 h-8 rounded-md cursor-pointer border border-ink/20 p-0.5 bg-transparent"
          title={`Choose color for ${label}`}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full text-xs font-mono font-semibold bg-paper border border-ink/15 rounded-md px-2 py-1 text-ink uppercase outline-none focus:border-loom"
          placeholder="#000000"
        />
      </div>
    </div>
  );
}
