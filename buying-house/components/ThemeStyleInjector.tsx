"use client";

import { useEffect } from "react";
import { useSiteStore, hexToRgbString } from "@/lib/siteStore";

export default function ThemeStyleInjector() {
  const { theme } = useSiteStore();

  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;

    // Only apply custom canvas/paper/ink if not explicitly forced by dark mode class
    const isDark = root.classList.contains("dark");

    root.style.setProperty("--color-loom", hexToRgbString(theme.loom || "#2F5D50"));
    root.style.setProperty("--color-loom-light", hexToRgbString(theme.loomLight || "#3F7566"));
    root.style.setProperty("--color-loom-dark", hexToRgbString(theme.loomDark || "#1F3F36"));

    root.style.setProperty("--color-brass", hexToRgbString(theme.brass || "#A9822E"));
    root.style.setProperty("--color-brass-light", hexToRgbString(theme.brassLight || "#C9A94E"));
    root.style.setProperty("--color-brass-dark", hexToRgbString(theme.brassDark || "#8C6B1C"));

    root.style.setProperty("--color-stamp", hexToRgbString(theme.stamp || "#B23A2E"));
    root.style.setProperty("--color-stamp-light", hexToRgbString(theme.stampLight || "#D15246"));

    if (!isDark) {
      if (theme.canvas) root.style.setProperty("--color-canvas", hexToRgbString(theme.canvas));
      if (theme.paper) root.style.setProperty("--color-paper", hexToRgbString(theme.paper));
      if (theme.ink) root.style.setProperty("--color-ink", hexToRgbString(theme.ink));
    }
  }, [theme]);

  return null;
}
