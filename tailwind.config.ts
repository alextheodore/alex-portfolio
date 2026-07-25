import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Cool near-black base — blue undertone, never pure black
        base: {
          DEFAULT: "#06070A",
          900: "#06070A",
          800: "#0A0C12",
          700: "#0F1219",
          600: "#151925",
        },
        ink: {
          DEFAULT: "#E7E9EE",
          muted: "#9AA0B0",
          faint: "#5B6172",
        },
        aurora: {
          violet: "#7C5CFF",
          indigo: "#4F46E5",
          cyan: "#22D3EE",
          teal: "#2DD4BF",
          magenta: "#C15CFF",
        },
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(2.75rem, 7vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "section": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        glass: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 20px 60px -20px rgba(0,0,0,0.7)",
        glow: "0 0 60px -12px rgba(124,92,255,0.5)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #06070A 80%)",
      },
      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "33%": { transform: "translate3d(4%, -3%, 0) rotate(4deg)" },
          "66%": { transform: "translate3d(-3%, 4%, 0) rotate(-4deg)" },
        },
        "sheen": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "aurora-drift": "aurora-drift 18s ease-in-out infinite",
        "sheen": "sheen 6s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        "fade-in": "fade-in 0.6s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
