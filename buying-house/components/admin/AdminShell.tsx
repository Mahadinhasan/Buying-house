"use client";

import { useEffect, useState } from "react";
import { Stamp, Lock, Menu } from "lucide-react";
import AdminSidebar from "./AdminSidebar";

const DEMO_USER = "demo@gmail.com";
const DEMO_PASS = "demo1234";
const STORAGE_KEY = "Demo Company name_admin_demo_auth";

export default function AdminShell({ children }: { children: React.ReactNode }) {
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
    if (email.trim() === DEMO_USER && password === DEMO_PASS) {
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

  // Avoid a login-flash before we've checked localStorage.
  if (authed === null) {
    return <div className="min-h-screen bg-ink" />;
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-ink text-canvas flex items-center justify-center px-5">
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-2 justify-center mb-8">
            <Stamp size={22} className="text-brass-light" strokeWidth={1.75} />
            <span className="font-display text-lg font-semibold">
              Demo Company name Staff
            </span>
          </div>

          <form
            onSubmit={handleLogin}
            className="bg-canvas/[0.06] border border-canvas/15 rounded-card p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <Lock size={16} className="text-brass-light" />
              <h1 className="font-display text-base font-semibold">
                Staff sign in
              </h1>
            </div>

            <label className="text-xs font-medium text-canvas/70">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-sm border border-canvas/20 bg-ink px-3.5 py-2.5 text-sm outline-none focus:border-brass-light"
              placeholder="you@Demo Company namesourcing.example"
            />

            <label className="mt-4 block text-xs font-medium text-canvas/70">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full rounded-sm border border-canvas/20 bg-ink px-3.5 py-2.5 text-sm outline-none focus:border-brass-light"
              placeholder="••••••••"
            />

            {error && (
              <p className="mt-3 text-xs text-stamp bg-stamp/10 border border-stamp/25 rounded-sm px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 w-full rounded-sm bg-brass text-ink font-semibold py-2.5 text-sm hover:bg-brass-light transition-colors"
            >
              Sign in
            </button>

            <div className="mt-5 pt-5 border-t border-canvas/15 text-xs text-canvas/50 font-mono leading-relaxed">
              Demo mode — no real backend. Use:
              <br />
              {DEMO_USER}
              <br />
              {DEMO_PASS}
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas flex">
      <div className="hidden lg:block">
        <AdminSidebar onLogout={handleLogout} />
      </div>

      {mobileNavOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-ink/60" onClick={() => setMobileNavOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <AdminSidebar onLogout={handleLogout} onNavigate={() => setMobileNavOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="lg:hidden flex items-center justify-between px-5 h-14 border-b border-ink/10 bg-paper">
          <span className="font-display font-semibold text-sm">Demo Company name Admin</span>
          <button onClick={() => setMobileNavOpen(true)} aria-label="Open admin menu">
            <Menu size={20} />
          </button>
        </div>
        <div className="p-6 sm:p-10 max-w-6xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
