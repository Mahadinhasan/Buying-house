import Link from "next/link";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { inquiries, adminProducts, blogPosts, company } from "@/lib/data";

const statusColor: Record<string, string> = {
  New: "bg-stamp/10 text-stamp",
  "In progress": "bg-brass/10 text-brass",
  Resolved: "bg-loom/10 text-loom",
};

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <p className="mono-label text-xs text-loom">Dashboard</p>
          <h1 className="mt-1 font-display text-2xl font-semibold text-ink">
            Good to see you back
          </h1>
        </div>
        <div className="bg-brass/10 text-brass text-xs font-medium rounded-sm px-3 py-2">
          Demo mode — content is stored locally in this browser only
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard label="New inquiries" value={String(inquiries.filter(i => i.status === "New").length)} />
        <StatCard label="Published products" value={String(adminProducts.filter(p => p.status === "Published").length)} />
        <StatCard label="Draft products" value={String(adminProducts.filter(p => p.status === "Draft").length)} />
        <StatCard label="Blog posts live" value={String(blogPosts.length)} />
      </div>

      <div className="mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-6">
        <div className="bg-paper border border-ink/10 rounded-card">
          <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10">
            <h2 className="font-display font-semibold text-ink text-sm">
              Recent customer inquiries
            </h2>
            <Link href="/admin/messages" className="text-xs font-semibold text-loom flex items-center gap-1 hover:gap-1.5 transition-all">
              View all <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="divide-y divide-ink/10">
            {inquiries.slice(0, 4).map((inq) => (
              <div key={inq.id} className="px-6 py-4 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink truncate">{inq.subject}</p>
                  <p className="text-xs text-ink/50 mt-0.5">
                    {inq.name} · {inq.company} · via {inq.channel}
                  </p>
                </div>
                <span className={`shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full ${statusColor[inq.status]}`}>
                  {inq.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-paper border border-ink/10 rounded-card p-6">
          <h2 className="font-display font-semibold text-ink text-sm">
            Quick reply
          </h2>
          <p className="mt-1.5 text-xs text-ink/55 leading-relaxed">
            Jump straight into WhatsApp or Gmail to answer a customer without
            leaving the dashboard.
          </p>
          <div className="mt-5 space-y-3">
            <a
              href={`https://wa.me/${company.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-sm border border-ink/10 px-4 py-3 text-sm font-medium hover:border-loom/40 transition-colors"
            >
              <MessageCircle size={17} className="text-loom" />
              Open WhatsApp
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(company.email)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-sm border border-ink/10 px-4 py-3 text-sm font-medium hover:border-brass/50 transition-colors"
            >
              <Mail size={17} className="text-brass" />
              Open Gmail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-paper border border-ink/10 rounded-card p-5">
      <p className="font-display text-3xl font-semibold text-ink">{value}</p>
      <p className="mt-1 text-xs text-ink/55">{label}</p>
    </div>
  );
}
