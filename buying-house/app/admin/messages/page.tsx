"use client";

import { useState } from "react";
import {
  MessageCircle,
  Mail,
  Globe,
  Trash2,
  Phone,
  Building,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
} from "lucide-react";
import { useSiteStore, InquiryItem } from "@/lib/siteStore";

const channelIcon: Record<string, React.ElementType> = {
  WhatsApp: MessageCircle,
  Email: Mail,
  "Website form": Globe,
};

const statusConfig: Record<
  string,
  { label: string; badge: string; icon: React.ElementType }
> = {
  New: {
    label: "New",
    badge: "bg-stamp/15 text-stamp border-stamp/30",
    icon: AlertCircle,
  },
  "In progress": {
    label: "In progress",
    badge: "bg-brass/15 text-brass-dark border-brass/30",
    icon: Clock,
  },
  Resolved: {
    label: "Resolved",
    badge: "bg-loom/15 text-loom border-loom/30",
    icon: CheckCircle2,
  },
};

const filters = ["All", "New", "In progress", "Resolved"] as const;

export default function AdminMessagesPage() {
  const { inquiries, branding, updateInquiryStatus, deleteInquiry } = useSiteStore();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visible = inquiries.filter((i) => filter === "All" || i.status === filter);

  function exportCSV() {
    const headers = ["ID,Name,Company,Email,Phone,Channel,Subject,Received,Status"];
    const rows = inquiries.map((i) =>
      `"${i.id}","${i.name}","${i.company}","${i.email || ""}","${i.phone || ""}","${i.channel}","${i.subject}","${i.received}","${i.status}"`
    );
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `inquiries_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="mono-label text-xs text-loom font-semibold">Customer Inbox</span>
            <span className="text-xs font-mono text-ink/50">
              ({inquiries.length} total messages)
            </span>
          </div>
          <h1 className="mt-1 font-display text-3xl font-bold text-ink tracking-tight">
            Customer Inquiries &amp; RFQs
          </h1>
          <p className="mt-1 text-sm text-ink/65 max-w-2xl">
            Live stream of sample requests, tech pack RFQs, and messages from the contact form, WhatsApp, and email.
          </p>
        </div>

        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-2 rounded-xl border border-ink/15 bg-paper text-ink font-semibold px-4 py-2.5 text-xs hover:border-ink/30 transition-all shadow-xs"
        >
          <Download size={14} /> Export CSV
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 pb-2 overflow-x-auto">
        {filters.map((f) => {
          const count =
            f === "All" ? inquiries.length : inquiries.filter((i) => i.status === f).length;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs font-semibold px-4 py-2 rounded-xl border transition-all flex items-center gap-2 ${
                filter === f
                  ? "bg-loom text-paper border-loom shadow-xs"
                  : "bg-paper border-ink/10 text-ink/70 hover:border-ink/25"
              }`}
            >
              <span>{f}</span>
              <span
                className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full ${
                  filter === f ? "bg-paper/20 text-paper" : "bg-ink/10 text-ink/70"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Inquiries Stream */}
      <div className="space-y-4">
        {visible.map((inq) => {
          const Icon = channelIcon[inq.channel] ?? Globe;
          const statusObj = statusConfig[inq.status] || statusConfig.New;
          const isExpanded = selectedId === inq.id;

          const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            inq.email || branding.email
          )}&su=${encodeURIComponent(`Re: ${inq.subject}`)}`;

          const whatsappHref = `https://wa.me/${inq.phone ? inq.phone.replace(/[^0-9]/g, "") : branding.whatsappNumber}?text=${encodeURIComponent(
            `Hi ${inq.name}, following up on your inquiry: ${inq.subject}`
          )}`;

          return (
            <div
              key={inq.id}
              className={`bg-paper border rounded-2xl transition-all overflow-hidden ${
                isExpanded
                  ? "border-loom shadow-soft ring-1 ring-loom/20"
                  : "border-ink/10 hover:border-ink/30 shadow-xs"
              }`}
            >
              <div
                onClick={() => setSelectedId(isExpanded ? null : inq.id)}
                className="p-5 sm:p-6 cursor-pointer flex items-start justify-between gap-4 flex-wrap select-none"
              >
                <div className="flex items-start gap-4 min-w-0">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-canvas border border-ink/10 text-loom flex items-center justify-center shadow-xs mt-0.5">
                    <Icon size={18} />
                  </span>

                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-mono text-[11px] font-bold text-ink/45">
                        {inq.id}
                      </span>
                      <h3 className="font-display font-bold text-base text-ink truncate">
                        {inq.subject}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-ink/65 flex-wrap font-medium">
                      <span className="font-bold text-ink">{inq.name}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Building size={12} className="text-ink/40" /> {inq.company}
                      </span>
                      <span>·</span>
                      <span className="text-ink/45 font-mono">{inq.received}</span>
                    </div>
                  </div>
                </div>

                {/* Right Status and Action Buttons */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2.5 shrink-0"
                >
                  <select
                    value={inq.status}
                    onChange={(e) =>
                      updateInquiryStatus(inq.id, e.target.value as InquiryItem["status"])
                    }
                    className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg border outline-none cursor-pointer ${statusObj.badge}`}
                  >
                    <option value="New">New</option>
                    <option value="In progress">In progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Reply on WhatsApp"
                    className="p-2 rounded-lg bg-loom/10 text-loom hover:bg-loom/20 transition-colors"
                    title="Quick Reply via WhatsApp"
                  >
                    <MessageCircle size={16} />
                  </a>

                  <a
                    href={gmailHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Reply via Gmail"
                    className="p-2 rounded-lg bg-brass/15 text-brass-dark hover:bg-brass/25 transition-colors"
                    title="Quick Reply via Gmail"
                  >
                    <Mail size={16} />
                  </a>

                  <button
                    onClick={() => {
                      if (confirm("Delete this inquiry record?")) {
                        deleteInquiry(inq.id);
                      }
                    }}
                    className="p-2 rounded-lg text-ink/30 hover:text-stamp transition-colors"
                    title="Delete inquiry"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-ink/10 bg-canvas/60 space-y-4 text-xs">
                  <div className="grid sm:grid-cols-3 gap-3 pt-2">
                    {inq.email && (
                      <div className="p-3 bg-paper rounded-xl border border-ink/10">
                        <span className="text-[10px] font-mono text-ink/50 uppercase block">Email</span>
                        <a href={`mailto:${inq.email}`} className="font-semibold text-loom hover:underline">
                          {inq.email}
                        </a>
                      </div>
                    )}
                    {inq.phone && (
                      <div className="p-3 bg-paper rounded-xl border border-ink/10">
                        <span className="text-[10px] font-mono text-ink/50 uppercase block">Phone / WA</span>
                        <span className="font-semibold text-ink font-mono">{inq.phone}</span>
                      </div>
                    )}
                    <div className="p-3 bg-paper rounded-xl border border-ink/10">
                      <span className="text-[10px] font-mono text-ink/50 uppercase block">Channel</span>
                      <span className="font-semibold text-ink">{inq.channel}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-paper rounded-xl border border-ink/10 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-ink/50 uppercase">
                      Inquiry Message Content
                    </span>
                    <p className="text-xs text-ink/80 leading-relaxed whitespace-pre-wrap">
                      {inq.message || "Customer inquired about tech pack costing and delivery schedules."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {visible.length === 0 && (
          <div className="bg-paper border border-ink/10 rounded-2xl p-12 text-center text-ink/50 space-y-2">
            <Globe size={28} className="mx-auto text-ink/30" />
            <p className="text-sm font-semibold text-ink">No {filter.toLowerCase()} inquiries found.</p>
            <p className="text-xs text-ink/45">
              New submissions from the contact form or WhatsApp hotline will automatically arrive here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
