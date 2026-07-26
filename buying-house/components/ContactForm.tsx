"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Demo only — no backend is connected. In production this would POST
    // to an API route or forward to email / a CRM inbox.
    setTimeout(() => {
      setLoading(false);
      setStatus("sent");
    }, 700);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center text-center py-10 px-6 bg-loom/5 border border-loom/20 rounded-card">
        <CheckCircle2 size={32} className="text-loom" />
        <h3 className="mt-4 font-display text-lg font-semibold text-ink">
          Message received
        </h3>
        <p className="mt-2 text-sm text-ink/60 max-w-sm">
          A merchandiser will reply within one business day. For anything
          urgent, use WhatsApp instead — replies there are usually within the
          hour.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-loom hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="text-xs font-medium text-ink/70">
            Full name
          </label>
          <input
            id="name"
            required
            type="text"
            className="mt-1.5 w-full rounded-sm border border-ink/15 bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-loom"
            placeholder="Elin Karlsson"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-xs font-medium text-ink/70">
            Company
          </label>
          <input
            id="company"
            type="text"
            className="mt-1.5 w-full rounded-sm border border-ink/15 bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-loom"
            placeholder="Nordreise Apparel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-xs font-medium text-ink/70">
          Email
        </label>
        <input
          id="email"
          required
          type="email"
          className="mt-1.5 w-full rounded-sm border border-ink/15 bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-loom"
          placeholder="elin@nordreise.example"
        />
      </div>

      <div>
        <label htmlFor="category" className="text-xs font-medium text-ink/70">
          What's this about?
        </label>
        <select
          id="category"
          className="mt-1.5 w-full rounded-sm border border-ink/15 bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-loom"
          defaultValue="Sourcing a new style"
        >
          <option>Sourcing a new style</option>
          <option>Requesting a factory audit</option>
          <option>Existing order update</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-medium text-ink/70">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="mt-1.5 w-full rounded-sm border border-ink/15 bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-loom resize-none"
          placeholder="Tell us about the style, quantity, and target timeline…"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-sm bg-ink text-canvas font-semibold px-5 py-3 text-sm hover:bg-loom-dark transition-colors disabled:opacity-60"
      >
        <Send size={16} />
        {loading ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
