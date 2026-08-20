"use client";

import { useState } from "react";
import {
  BookOpen,
  Plus,
  Trash2,
  Check,
  Save,
  ShieldCheck,
  Sparkles,
  Layers,
  History,
  TrendingUp,
} from "lucide-react";
import { useSiteStore, AboutConfig } from "@/lib/siteStore";

export default function AdminAboutPage() {
  const { about, updateAbout } = useSiteStore();
  const [formData, setFormData] = useState<AboutConfig>(about);
  const [savedNotice, setSavedNotice] = useState(false);

  function handleSaveAll(e?: React.FormEvent) {
    if (e) e.preventDefault();
    updateAbout(formData);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="mono-label text-xs text-loom font-semibold">Company Story &amp; Record</span>
            {savedNotice && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 animate-pulse">
                <Check size={12} /> About Us Updated!
              </span>
            )}
          </div>
          <h1 className="mt-1 font-display text-3xl font-bold text-ink tracking-tight">
            About Us &amp; Record Manager
          </h1>
          <p className="mt-1 text-sm text-ink/65 max-w-2xl">
            Update your company story, core values, milestone timeline, factory stats, and compliance certifications.
          </p>
        </div>

        <button
          onClick={handleSaveAll}
          className="inline-flex items-center gap-2 rounded-xl bg-loom text-paper font-semibold px-5 py-2.5 text-sm hover:bg-loom-dark transition-all shadow-xs"
        >
          <Save size={16} /> Save Changes
        </button>
      </div>

      {/* 1. Hero & Story Paragraphs */}
      <section className="bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <h2 className="font-display font-bold text-ink text-lg flex items-center gap-2 pb-3 border-b border-ink/10">
          <BookOpen size={18} className="text-loom" /> Headline &amp; Story Intro
        </h2>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-ink/75 block mb-1">
              Hero Eyebrow Tagline
            </label>
            <input
              type="text"
              value={formData.heroTagline}
              onChange={(e) => setFormData({ ...formData, heroTagline: e.target.value })}
              className="w-full rounded-xl border border-ink/20 bg-canvas px-4 py-2.5 text-sm font-semibold text-ink outline-none focus:border-loom"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-ink/75 block mb-1">
              Main Bold Headline
            </label>
            <input
              type="text"
              value={formData.headline}
              onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
              className="w-full rounded-xl border border-ink/20 bg-canvas px-4 py-2.5 text-sm font-semibold text-ink outline-none focus:border-loom"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-ink/75 block mb-1">
              Story Paragraph 1
            </label>
            <textarea
              value={formData.story[0] || ""}
              onChange={(e) => {
                const copy = [...formData.story];
                copy[0] = e.target.value;
                setFormData({ ...formData, story: copy });
              }}
              rows={3}
              className="w-full rounded-xl border border-ink/20 bg-canvas p-3.5 text-xs text-ink leading-relaxed outline-none focus:border-loom"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-ink/75 block mb-1">
              Story Paragraph 2
            </label>
            <textarea
              value={formData.story[1] || ""}
              onChange={(e) => {
                const copy = [...formData.story];
                copy[1] = e.target.value;
                setFormData({ ...formData, story: copy });
              }}
              rows={3}
              className="w-full rounded-xl border border-ink/20 bg-canvas p-3.5 text-xs text-ink leading-relaxed outline-none focus:border-loom"
            />
          </div>
        </div>
      </section>

      {/* 2. Key Stats Cards */}
      <section className="bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-ink/10">
          <h2 className="font-display font-bold text-ink text-lg flex items-center gap-2">
            <TrendingUp size={18} className="text-brass" /> Key Performance Stats
          </h2>
          <button
            onClick={() => {
              setFormData({
                ...formData,
                stats: [
                  ...formData.stats,
                  { id: `STAT-${Date.now()}`, value: "100%", label: "New Stat Label" },
                ],
              });
            }}
            className="text-xs font-semibold text-loom flex items-center gap-1 hover:underline"
          >
            <Plus size={14} /> Add Stat
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {formData.stats.map((stat, idx) => (
            <div key={stat.id || idx} className="p-4 rounded-xl bg-canvas border border-ink/10 relative space-y-2">
              <button
                onClick={() => {
                  setFormData({
                    ...formData,
                    stats: formData.stats.filter((_, i) => i !== idx),
                  });
                }}
                className="absolute top-3 right-3 text-ink/30 hover:text-stamp"
                title="Delete stat"
              >
                <Trash2 size={13} />
              </button>
              <div>
                <label className="text-[10px] font-mono text-ink/50 uppercase">Value</label>
                <input
                  type="text"
                  value={stat.value}
                  onChange={(e) => {
                    const copy = [...formData.stats];
                    copy[idx].value = e.target.value;
                    setFormData({ ...formData, stats: copy });
                  }}
                  className="w-full font-display font-bold text-xl text-loom bg-paper border border-ink/20 rounded-lg px-2 py-1"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono text-ink/50 uppercase">Label</label>
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => {
                    const copy = [...formData.stats];
                    copy[idx].label = e.target.value;
                    setFormData({ ...formData, stats: copy });
                  }}
                  className="w-full text-xs text-ink bg-paper border border-ink/20 rounded-lg px-2 py-1"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <h2 className="font-display font-bold text-ink text-lg flex items-center gap-2 pb-3 border-b border-ink/10">
          <Sparkles size={18} className="text-loom" /> Three Core Commitments / Values
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          {formData.values.map((val, idx) => (
            <div key={val.id || idx} className="p-4 rounded-xl bg-canvas border border-ink/10 space-y-2">
              <label className="text-[10px] font-mono font-bold text-brass uppercase">
                Value {idx + 1}
              </label>
              <input
                type="text"
                value={val.title}
                onChange={(e) => {
                  const copy = [...formData.values];
                  copy[idx].title = e.target.value;
                  setFormData({ ...formData, values: copy });
                }}
                className="w-full font-display font-bold text-sm text-ink bg-paper border border-ink/20 rounded-lg px-2.5 py-1.5"
              />
              <textarea
                value={val.desc}
                onChange={(e) => {
                  const copy = [...formData.values];
                  copy[idx].desc = e.target.value;
                  setFormData({ ...formData, values: copy });
                }}
                rows={3}
                className="w-full text-xs text-ink bg-paper border border-ink/20 rounded-lg p-2.5 leading-relaxed"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Milestones Timeline */}
      <section className="bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-ink/10">
          <h2 className="font-display font-bold text-ink text-lg flex items-center gap-2">
            <History size={18} className="text-brass" /> Milestones Timeline
          </h2>
          <button
            onClick={() => {
              setFormData({
                ...formData,
                milestones: [
                  ...formData.milestones,
                  {
                    id: `MIL-${Date.now()}`,
                    year: new Date().getFullYear().toString(),
                    text: "New company milestone achievement.",
                  },
                ],
              });
            }}
            className="text-xs font-semibold text-loom flex items-center gap-1 hover:underline"
          >
            <Plus size={14} /> Add Milestone
          </button>
        </div>

        <div className="space-y-3">
          {formData.milestones.map((m, idx) => (
            <div key={m.id || idx} className="p-3.5 rounded-xl bg-canvas border border-ink/10 flex items-center gap-3">
              <input
                type="text"
                value={m.year}
                onChange={(e) => {
                  const copy = [...formData.milestones];
                  copy[idx].year = e.target.value;
                  setFormData({ ...formData, milestones: copy });
                }}
                className="w-20 font-mono font-bold text-xs text-brass bg-paper border border-ink/20 rounded-lg px-2.5 py-1.5 shrink-0"
              />
              <input
                type="text"
                value={m.text}
                onChange={(e) => {
                  const copy = [...formData.milestones];
                  copy[idx].text = e.target.value;
                  setFormData({ ...formData, milestones: copy });
                }}
                className="flex-1 text-xs text-ink bg-paper border border-ink/20 rounded-lg px-3 py-1.5"
              />
              <button
                onClick={() => {
                  setFormData({
                    ...formData,
                    milestones: formData.milestones.filter((_, i) => i !== idx),
                  });
                }}
                className="text-ink/30 hover:text-stamp p-1.5"
                title="Delete milestone"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Compliance Certifications */}
      <section className="bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-ink/10">
          <h2 className="font-display font-bold text-ink text-lg flex items-center gap-2">
            <ShieldCheck size={18} className="text-loom" /> Compliance Certifications
          </h2>
          <button
            onClick={() => {
              setFormData({
                ...formData,
                certifications: [
                  ...formData.certifications,
                  {
                    id: `CERT-${Date.now()}`,
                    code: "NEW-CERT",
                    label: "Standard Description",
                  },
                ],
              });
            }}
            className="text-xs font-semibold text-loom flex items-center gap-1 hover:underline"
          >
            <Plus size={14} /> Add Certification
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {formData.certifications.map((cert, idx) => (
            <div key={cert.id || idx} className="p-3 rounded-xl bg-canvas border border-ink/10 flex items-center gap-2">
              <input
                type="text"
                value={cert.code}
                onChange={(e) => {
                  const copy = [...formData.certifications];
                  copy[idx].code = e.target.value;
                  setFormData({ ...formData, certifications: copy });
                }}
                className="w-24 font-mono font-bold text-xs text-loom bg-paper border border-ink/20 rounded-lg px-2 py-1"
                placeholder="Code"
              />
              <input
                type="text"
                value={cert.label}
                onChange={(e) => {
                  const copy = [...formData.certifications];
                  copy[idx].label = e.target.value;
                  setFormData({ ...formData, certifications: copy });
                }}
                className="flex-1 text-xs text-ink bg-paper border border-ink/20 rounded-lg px-2 py-1"
                placeholder="Label"
              />
              <button
                onClick={() => {
                  setFormData({
                    ...formData,
                    certifications: formData.certifications.filter((_, i) => i !== idx),
                  });
                }}
                className="text-ink/30 hover:text-stamp p-1"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
