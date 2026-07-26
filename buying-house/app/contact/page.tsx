import { MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import SelvedgeDivider from "@/components/SelvedgeDivider";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/data";

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    company.email
  )}&su=${encodeURIComponent("Sourcing enquiry — Demo")}`;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-20">
        <p className="mono-label text-xs text-loom font-medium">Contact</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
          Talk to a merchandiser, not a form.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-ink/65 leading-relaxed max-w-2xl">
          WhatsApp is the fastest way to reach us — most messages get a reply
          within the hour during business hours. Prefer email? Gmail works
          just as well.
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
              className="group flex items-start gap-4 bg-paper border border-ink/10 rounded-card p-6 h-full hover:border-loom/40 hover:shadow-soft transition-all"
            >
              <span className="shrink-0 w-11 h-11 rounded-full bg-loom/10 text-loom flex items-center justify-center">
                <MessageCircle size={20} />
              </span>
              <span>
                <span className="block font-display font-semibold text-ink">
                  Chat on WhatsApp
                </span>
                <span className="block mt-1 text-sm text-ink/60">
                  Fastest response — usually within the hour.
                </span>
                <span className="mt-3 inline-block font-mono text-xs text-loom group-hover:underline">
                  {company.phone}
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <a
              href={gmailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 bg-paper border border-ink/10 rounded-card p-6 h-full hover:border-loom/40 hover:shadow-soft transition-all"
            >
              <span className="shrink-0 w-11 h-11 rounded-full bg-brass/10 text-brass flex items-center justify-center">
                <Mail size={20} />
              </span>
              <span>
                <span className="block font-display font-semibold text-ink">
                  Email via Gmail
                </span>
                <span className="block mt-1 text-sm text-ink/60">
                  Opens a pre-filled message in Gmail — good for tech packs
                  and attachments.
                </span>
                <span className="mt-3 inline-block font-mono text-xs text-brass group-hover:underline">
                  {company.email}
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <Reveal>
            <div className="bg-paper border border-ink/10 rounded-card p-7 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-ink">
                Or send a message directly
              </h2>
              <p className="mt-1.5 text-sm text-ink/55">
                This form is a demo — wire it to your inbox or CRM when you
                deploy.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5">
              <div className="bg-ink text-canvas rounded-card p-6">
                <p className="mono-label text-xs text-brass-light">Office</p>
                <div className="mt-4 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-canvas/60" />
                    <span className="text-canvas/85">{company.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="shrink-0 text-canvas/60" />
                    <span className="text-canvas/85">{company.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="shrink-0 text-canvas/60" />
                    <span className="text-canvas/85">
                      Sun–Thu, 9:00–18:00 (GMT+6)
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-ink/10 rounded-card overflow-hidden h-48 swatch-texture relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="mono-label text-xs text-ink/40 bg-canvas/80 px-3 py-1.5 rounded-sm">
                    Map placeholder — Baridhara, Dhaka
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
