"use client";

import { useState } from "react";
import { MessageCircle, Mail, Globe } from "lucide-react";
import { inquiries, company } from "@/lib/data";

const channelIcon: Record<string, React.ElementType> = {
  WhatsApp: MessageCircle,
  Email: Mail,
  "Website form": Globe,
};

const statusColor: Record<string, string> = {
  New: "bg-stamp/10 text-stamp",
  "In progress": "bg-brass/10 text-brass",
  Resolved: "bg-loom/10 text-loom",
};

const filters = ["All", "New", "In progress", "Resolved"] as const;

export default function AdminMessagesPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = inquiries.filter((i) => filter === "All" || i.status === filter);

  return (
    <div>
      <p className="mono-label text-xs text-loom">Inquiries</p>
      <h1 className="mt-1 font-display text-2xl font-semibold text-ink">
        Customer messages
      </h1>
      <p className="mt-1.5 text-sm text-ink/55 max-w-lg">
        Everything coming in from WhatsApp, email, and the website contact
        form, in one place.
      </p>

      <div className="mt-6 flex gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs font-medium px-3.5 py-2 rounded-sm border transition-colors ${
              filter === f
                ? "bg-ink text-canvas border-ink"
                : "border-ink/15 text-ink/60 hover:border-ink/40"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {visible.map((inq) => {
          const Icon = channelIcon[inq.channel] ?? Globe;
          const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            company.email
          )}&su=${encodeURIComponent(`Re: ${inq.subject}`)}`;
          return (
            <div
              key={inq.id}
              className="bg-paper border border-ink/10 rounded-card p-5 flex items-center justify-between gap-4 flex-wrap"
            >
              <div className="flex items-start gap-4 min-w-0">
                <span className="shrink-0 w-9 h-9 rounded-full bg-ink/5 text-ink/60 flex items-center justify-center">
                  <Icon size={16} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink">{inq.subject}</p>
                  <p className="text-xs text-ink/50 mt-0.5">
                    {inq.name} · {inq.company} · {inq.received}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${statusColor[inq.status]}`}>
                  {inq.status}
                </span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`Hi ${inq.name}, following up on: ${inq.subject}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Reply on WhatsApp"
                  className="w-8 h-8 rounded-sm border border-ink/10 flex items-center justify-center text-loom hover:border-loom/40 transition-colors"
                >
                  <MessageCircle size={15} />
                </a>
                <a
                  href={gmailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Reply by email"
                  className="w-8 h-8 rounded-sm border border-ink/10 flex items-center justify-center text-brass hover:border-brass/40 transition-colors"
                >
                  <Mail size={15} />
                </a>
              </div>
            </div>
          );
        })}
        {visible.length === 0 && (
          <p className="text-center text-sm text-ink/45 py-10">
            No {filter.toLowerCase()} messages.
          </p>
        )}
      </div>
    </div>
  );
}
