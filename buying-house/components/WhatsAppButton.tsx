"use client";

import { MessageCircle } from "lucide-react";
import { useSiteStore } from "@/lib/siteStore";

export default function WhatsAppButton() {
  const { branding } = useSiteStore();
  const href = `https://wa.me/${branding.whatsappNumber}?text=${encodeURIComponent(
    branding.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-loom text-paper pl-4 pr-5 py-3 shadow-lifted hover:bg-loom-dark transition-all duration-300 hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-loom animate-ping opacity-25 motion-reduce:hidden" />
      <MessageCircle size={20} className="relative shrink-0" />
      <span className="relative text-xs sm:text-sm font-semibold hidden sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}
