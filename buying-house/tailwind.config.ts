import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        loom: {
          DEFAULT: "rgb(var(--color-loom) / <alpha-value>)",
          light: "rgb(var(--color-loom-light) / <alpha-value>)",
          dark: "rgb(var(--color-loom-dark) / <alpha-value>)",
        },
        stamp: {
          DEFAULT: "rgb(var(--color-stamp) / <alpha-value>)",
          light: "rgb(var(--color-stamp-light) / <alpha-value>)",
        },
        brass: {
          DEFAULT: "rgb(var(--color-brass) / <alpha-value>)",
          light: "rgb(var(--color-brass-light) / <alpha-value>)",
          dark: "rgb(var(--color-brass-dark) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        card: "0.375rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,24,31,0.04), 0 8px 24px -12px rgba(20,24,31,0.18)",
        lifted: "0 2px 4px rgba(20,24,31,0.06), 0 16px 32px -16px rgba(20,24,31,0.28)",
      },
      backgroundImage: {
        weave: "repeating-linear-gradient(45deg, rgba(20,24,31,0.035) 0, rgba(20,24,31,0.035) 1px, transparent 1px, transparent 6px)",
      },
    },
  },
  plugins: [],
};
export default config;
