"use client";

import { MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import SelvedgeDivider from "@/components/SelvedgeDivider";
import ContactForm from "@/components/ContactForm";
import { useSiteStore } from "@/lib/siteStore";

export default function ContactPage() {
  const { branding } = useSiteStore();

  const whatsappHref = `https://wa.me/${branding.whatsappNumber}?text=${encodeURIComponent(
    branding.whatsappMessage
  )}`;
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    branding.email
  )}&su=${encodeURIComponent(`Sourcing enquiry — ${branding.name}`)}`;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-20">
        <p className="mono-label text-xs text-loom font-medium">Contact &amp; RFQs</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
          Talk to a merchandiser, not an automated chatbot.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-ink/65 leading-relaxed max-w-2xl">
          WhatsApp is the fastest way to reach us — most messages get a reply
          within the hour during business hours. Prefer email? Gmail works
          just as well for tech packs and sample specs.
        </p>
      </section>

      <SelvedgeDivider />

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-6 mb-14">
          <Reveal>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 bg-paper border border-ink/10 rounded-2xl p-6 h-full hover:border-loom/40 hover:shadow-soft transition-all"
            >
              <span className="shrink-0 w-12 h-12 rounded-xl bg-loom/10 text-loom flex items-center justify-center">
                <MessageCircle size={22} />
              </span>
              <div>
                <span className="block font-display font-bold text-lg text-ink">
                  Chat on WhatsApp
                </span>
                <span className="block mt-1 text-xs sm:text-sm text-ink/60">
                  Fastest response — direct line to our Dhaka merchandising team.
                </span>
                <span className="mt-3 inline-block font-mono text-xs text-loom font-bold group-hover:underline">
                  +{branding.whatsappNumber}
                </span>
              </div>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <a
              href={gmailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 bg-paper border border-ink/10 rounded-2xl p-6 h-full hover:border-loom/40 hover:shadow-soft transition-all"
            >
              <span className="shrink-0 w-12 h-12 rounded-xl bg-brass/15 text-brass-dark flex items-center justify-center">
                <Mail size={22} />
              </span>
              <div>
                <span className="block font-display font-bold text-lg text-ink">
                  Email via Gmail
                </span>
                <span className="block mt-1 text-xs sm:text-sm text-ink/60">
                  Opens a pre-filled message in Gmail — ideal for tech packs and artwork attachments.
                </span>
                <span className="mt-3 inline-block font-mono text-xs text-brass-dark font-bold group-hover:underline">
                  {branding.email}
                </span>
              </div>
            </a>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <Reveal>
            <div className="bg-paper border border-ink/10 rounded-2xl p-7 sm:p-8 shadow-xs">
              <h2 className="font-display text-xl font-bold text-ink">
                Submit a Sourcing Inquiry / RFQ
              </h2>
              <p className="mt-1.5 text-xs text-ink/55">
                Submissions automatically route to our Dhaka merchandising desk in real time.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5">
              <div className="bg-ink text-canvas rounded-2xl p-7 shadow-lifted">
                <p className="mono-label text-xs text-brass-light font-bold">Headquarters &amp; Lab</p>
                <div className="mt-5 space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-brass-light" />
                    <span className="text-canvas/85">{branding.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="shrink-0 text-brass-light" />
                    <span className="text-canvas/85 font-mono">{branding.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="shrink-0 text-brass-light" />
                    <span className="text-canvas/85">
                      {branding.officeHours || "Sun–Thu, 9:00–18:00 (GMT+6)"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-ink/10 rounded-2xl overflow-hidden h-48 swatch-texture relative flex items-center justify-center p-4 text-center">
                <div className="bg-paper/90 backdrop-blur-xs border border-ink/15 px-4 py-2.5 rounded-xl shadow-xs">
                  <p className="mono-label text-xs text-loom font-bold">
                    {branding.mapLabel || "Dhaka Sourcing Hub"}
                  </p>
                  <p className="text-[11px] text-ink/50 mt-0.5 font-mono">{branding.city}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
