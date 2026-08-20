"use client";

import { useState } from "react";
import {
  PhoneCall,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Check,
  Save,
  Globe,
} from "lucide-react";
import { useSiteStore } from "@/lib/siteStore";

export default function AdminContactPage() {
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
            <span className="mono-label text-xs text-loom font-semibold">Communication &amp; Headquarters</span>
            {savedNotice && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 animate-pulse">
                <Check size={12} /> Contact Info Updated!
              </span>
            )}
          </div>
          <h1 className="mt-1 font-display text-3xl font-bold text-ink tracking-tight">
            Contact &amp; Sourcing Desk Settings
          </h1>
          <p className="mt-1 text-sm text-ink/65 max-w-2xl">
            Configure your Dhaka office address, WhatsApp hotline, direct contact email, phone, and business hours.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
        {/* Form Inputs */}
        <div className="bg-paper border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <h2 className="font-display font-bold text-ink text-base flex items-center gap-2 pb-3 border-b border-ink/10">
            <PhoneCall size={18} className="text-loom" /> Office &amp; Channel Details
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-ink/75 block mb-1">
                Official Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full rounded-xl border border-ink/20 bg-canvas px-4 py-2.5 text-sm font-semibold text-ink outline-none focus:border-loom"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-ink/75 block mb-1">
                Office Telephone / Hotline
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full rounded-xl border border-ink/20 bg-canvas px-4 py-2.5 text-sm font-semibold text-ink outline-none focus:border-loom"
              />
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="p-4 rounded-xl bg-loom/5 border border-loom/20 space-y-3">
            <div className="flex items-center gap-2 text-loom font-display font-bold text-sm">
              <MessageCircle size={17} /> WhatsApp Quick Sourcing Hotline
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono text-ink/70 block mb-1">
                  WhatsApp Number (with country code, no +)
                </label>
                <input
                  type="text"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  placeholder="8801700000000"
                  className="w-full rounded-lg border border-ink/20 bg-paper px-3 py-2 text-xs font-mono"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono text-ink/70 block mb-1">
                  Pre-filled Greeting Message
                </label>
                <input
                  type="text"
                  value={formData.whatsappMessage}
                  onChange={(e) => setFormData({ ...formData, whatsappMessage: e.target.value })}
                  className="w-full rounded-lg border border-ink/20 bg-paper px-3 py-2 text-xs"
                />
              </div>
            </div>
          </div>

          {/* Physical Address & Hours */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-ink/75 block mb-1">
                Physical Office Address
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows={2}
                className="w-full rounded-xl border border-ink/20 bg-canvas p-3 text-xs text-ink leading-relaxed outline-none focus:border-loom"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink/75 block mb-1">
                  Business / Working Hours
                </label>
                <input
                  type="text"
                  value={formData.officeHours}
                  onChange={(e) => setFormData({ ...formData, officeHours: e.target.value })}
                  placeholder="Sun–Thu, 9:00–18:00 (GMT+6)"
                  className="w-full rounded-xl border border-ink/20 bg-canvas px-4 py-2.5 text-xs text-ink outline-none focus:border-loom"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-ink/75 block mb-1">
                  Map Placeholder Label
                </label>
                <input
                  type="text"
                  value={formData.mapLabel}
                  onChange={(e) => setFormData({ ...formData, mapLabel: e.target.value })}
                  placeholder="Baridhara DOHS, Dhaka"
                  className="w-full rounded-xl border border-ink/20 bg-canvas px-4 py-2.5 text-xs text-ink outline-none focus:border-loom"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-loom text-paper font-semibold px-6 py-3 text-sm hover:bg-loom-dark transition-all shadow-xs"
          >
            <Save size={16} /> Save Contact Settings
          </button>
        </div>

        {/* Live Preview Card */}
        <div className="space-y-6">
          <div className="bg-paper border border-ink/10 rounded-2xl p-6 shadow-xs space-y-5">
            <h2 className="font-display font-bold text-ink text-base flex items-center gap-2">
              <Globe size={18} className="text-loom" /> Live Contact Card Preview
            </h2>

            {/* Dark Office Box preview */}
            <div className="bg-ink text-canvas rounded-xl p-6 space-y-4 shadow-lifted">
              <span className="mono-label text-[10px] text-brass-light font-bold">
                Dhaka Headquarters
              </span>
              <div className="space-y-3.5 text-xs text-canvas/80">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-brass-light" />
                  <span>{formData.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall size={16} className="shrink-0 text-brass-light" />
                  <span className="font-mono">{formData.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-brass-light" />
                  <span className="font-mono">{formData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="shrink-0 text-brass-light" />
                  <span>{formData.officeHours}</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Action Preview */}
            <div className="p-4 rounded-xl bg-loom/10 border border-loom/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-loom text-paper flex items-center justify-center">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <span className="font-display font-bold text-xs text-ink block">
                    Chat on WhatsApp
                  </span>
                  <span className="font-mono text-[10px] text-loom">
                    +{formData.whatsappNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
