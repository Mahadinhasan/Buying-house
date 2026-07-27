import Link from "next/link";
import { ArrowLeft, Home, Layers, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5 py-20">
      <div className="max-w-md w-full text-center bg-paper border border-ink/10 rounded-card p-8 shadow-lifted">
        <span className="font-mono text-5xl font-bold text-loom tracking-wider">404</span>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Page Not Found</h1>
        <p className="mt-3 text-sm text-ink/60 leading-relaxed">
          The requested page URL could not be found. Please return to the home page or browse our services &amp; fabrics.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-loom text-paper font-semibold px-5 py-2.5 text-sm hover:bg-loom-dark transition-colors"
          >
            <Home size={16} /> Back to Home Page
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-ink/20 text-ink font-semibold px-5 py-2.5 text-sm hover:border-ink/50 transition-colors"
          >
            <Layers size={16} /> View Fabrics &amp; Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-xs font-mono text-ink/50 hover:text-ink transition-colors mt-2"
          >
            <MessageSquare size={13} /> Need help? Contact Us &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
