"use client";

import { useEffect, useState } from "react";
import { Lock, Menu, ShieldCheck } from "lucide-react";
import AdminSidebar from "./AdminSidebar";
import { useSiteStore } from "@/lib/siteStore";
import BrandLogoIcon from "@/components/BrandLogoIcon";

const DEMO_USER = "demo@gmail.com";
const DEMO_PASS = "demo1234";
const STORAGE_KEY = "Demo Company name_admin_demo_auth";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const { branding } = useSiteStore();
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    try {
      setAuthed(window.localStorage.getItem(STORAGE_KEY) === "true");
    } catch {
      setAuthed(false);
    }
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim().toLowerCase() === DEMO_USER.toLowerCase() && password === DEMO_PASS) {
      try {
        window.localStorage.setItem(STORAGE_KEY, "true");
      } catch {}
      setError("");
      setAuthed(true);
    } else {
      setError("Incorrect email or password. Use the demo credentials shown below.");
    }
  }

  function handleLogout() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {}
    setAuthed(false);
  }

  // Avoid login-flash before checking localStorage
  if (authed === null) {
    return <div className="min-h-screen bg-ink" />;
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-ink text-canvas flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center justify-center mb-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-brass/20 border border-brass/30 flex items-center justify-center text-brass-light mb-3 shadow-lifted">
              {branding.logoType === "image" && branding.logoUrl ? (
                <img src={branding.logoUrl} alt="Logo" className="w-8 h-8 object-contain" />
              ) : (
                <BrandLogoIcon name={branding.logoIcon} size={28} strokeWidth={1.75} />
              )}
            </div>
            <span className="font-display text-2xl font-bold text-canvas">
              {branding.shortName || branding.name || "Apparel Buying House"}
            </span>
            <span className="text-xs font-mono text-brass-light mt-1">
              Admin &amp; Content Management Suite
            </span>
          </div>

          <form
            onSubmit={handleLogin}
            className="bg-canvas/[0.06] border border-canvas/15 rounded-2xl p-8 backdrop-blur-md shadow-lifted"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-canvas/10">
              <Lock size={18} className="text-brass-light" />
              <h1 className="font-display text-lg font-semibold text-canvas">
                Staff Authentication
              </h1>
            </div>

            <label className="text-xs font-semibold text-canvas/80 tracking-wide uppercase font-mono">
              Admin Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-canvas/20 bg-ink/70 px-4 py-3 text-sm text-canvas outline-none focus:border-brass-light focus:ring-1 focus:ring-brass-light transition-all"
              placeholder="demo@gmail.com"
              required
            />

            <label className="mt-5 block text-xs font-semibold text-canvas/80 tracking-wide uppercase font-mono">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-canvas/20 bg-ink/70 px-4 py-3 text-sm text-canvas outline-none focus:border-brass-light focus:ring-1 focus:ring-brass-light transition-all"
              placeholder="••••••••"
              required
            />

            {error && (
              <p className="mt-4 text-xs text-stamp-light bg-stamp/20 border border-stamp/30 rounded-lg px-3.5 py-2.5">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-brass text-ink font-bold py-3.5 text-sm hover:bg-brass-light transition-all shadow-lifted hover:scale-[1.01]"
            >
              Sign In to Admin Panel &rarr;
            </button>

            <div className="mt-6 pt-5 border-t border-canvas/10 text-xs text-canvas/60 font-mono leading-relaxed bg-canvas/[0.03] p-3.5 rounded-lg">
              <div className="flex items-center gap-1.5 text-brass-light font-bold mb-1">
                <ShieldCheck size={14} /> Demo Access Credentials:
              </div>
              <div>Email: <span className="text-canvas font-semibold">{DEMO_USER}</span></div>
              <div>Pass: <span className="text-canvas font-semibold">{DEMO_PASS}</span></div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas flex antialiased">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <AdminSidebar onLogout={handleLogout} />
      </div>

      {/* Mobile Drawer */}
      {mobileNavOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-ink/75 backdrop-blur-xs flex"
          onClick={() => setMobileNavOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-72 h-full shadow-2xl">
            <AdminSidebar onLogout={handleLogout} onNavigate={() => setMobileNavOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content Viewport */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        {/* Mobile Header Bar */}
        <div className="lg:hidden flex items-center justify-between px-5 h-16 border-b border-ink/10 bg-paper sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <BrandLogoIcon name={branding.logoIcon} size={20} className="text-loom" />
            <span className="font-display font-bold text-sm text-ink">
              {branding.shortName || "Admin Panel"}
            </span>
          </div>
          <button
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open admin menu"
            className="p-2 rounded-lg bg-canvas border border-ink/10 text-ink hover:bg-canvas/80"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Content Body */}
        <main className="flex-1 p-5 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
