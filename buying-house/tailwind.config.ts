import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14181F",
        canvas: "#F1ECE1",
        paper: "#FAF7EF",
        loom: {
          DEFAULT: "#2F5D50",
          light: "#3F7566",
          dark: "#1F3F36",
        },
        stamp: "#B23A2E",
        brass: {
          DEFAULT: "#A9822E",
          light: "#C9A94E",
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
