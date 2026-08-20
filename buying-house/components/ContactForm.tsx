"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useSiteStore } from "@/lib/siteStore";

export default function ContactForm() {
  const { addInquiry } = useSiteStore();
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [loading, setLoading] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Sourcing a new style");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Save into reactive store so admin sees it immediately in inquiries inbox
    addInquiry({
      name: name.trim(),
      company: company.trim() || "Independent Buyer",
      email: email.trim(),
      phone: phone.trim(),
      channel: "Website form",
      subject: subject.trim(),
      message: message.trim(),
    });

    setTimeout(() => {
      setLoading(false);
      setStatus("sent");
    }, 400);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center text-center py-10 px-6 bg-loom/5 border border-loom/20 rounded-card">
        <CheckCircle2 size={36} className="text-loom" />
        <h3 className="mt-4 font-display text-lg font-bold text-ink">
          Message received &amp; logged!
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-ink/65 max-w-sm leading-relaxed">
          A dedicated garment merchandiser in Dhaka will review your tech pack / specifications and reply promptly.
        </p>
        <button
          onClick={() => {
            setName("");
            setCompany("");
            setEmail("");
            setPhone("");
            setMessage("");
            setStatus("idle");
          }}
          className="mt-5 text-xs sm:text-sm font-semibold text-loom hover:underline"
        >
          Send another inquiry &rarr;
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-xs font-semibold text-ink/75 block mb-1">
            Full name *
          </label>
          <input
            id="name"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-ink/15 bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-loom text-ink"
            placeholder="Elin Karlsson"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-xs font-semibold text-ink/75 block mb-1">
            Brand / Company
          </label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full rounded-xl border border-ink/15 bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-loom text-ink"
            placeholder="Nordreise Apparel"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="text-xs font-semibold text-ink/75 block mb-1">
            Email address *
          </label>
          <input
            id="email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-ink/15 bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-loom text-ink"
            placeholder="elin@nordreise.example"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-xs font-semibold text-ink/75 block mb-1">
            Phone / WhatsApp (optional)
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-ink/15 bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-loom text-ink"
            placeholder="+46 70 123 4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-xs font-semibold text-ink/75 block mb-1">
          What's this about?
        </label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-xl border border-ink/15 bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-loom text-ink"
        >
          <option value="Sourcing a new style">Sourcing a new style / Tech pack costing</option>
          <option value="Requesting a factory audit">Requesting a factory audit / compliance check</option>
          <option value="Denim & Knitwear sampling">Denim &amp; Knitwear sampling request</option>
          <option value="Existing order update">Existing order update</option>
          <option value="Other general inquiry">Other general inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-semibold text-ink/75 block mb-1">
          Message &amp; Order Spec *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-ink/15 bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-loom resize-none text-ink"
          placeholder="Tell us about the fabric GSM, target quantity, target delivery timeline…"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-xl bg-loom text-paper font-semibold px-6 py-3 text-sm hover:bg-loom-dark transition-all disabled:opacity-60 shadow-xs"
      >
        <Send size={16} />
        {loading ? "Transmitting…" : "Send Sourcing Message"}
      </button>
    </form>
  );
}
