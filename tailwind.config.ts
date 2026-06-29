import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#050508",
        "bg-secondary": "#0a0d1a",
        "bg-card": "#0f1225",
        "accent-blue": "#00c4ff",
        "accent-silver": "#c8d0e0",
        "accent-gold": "#d4a843",
        "text-primary": "#f0f4ff",
        "text-secondary": "#8892a4",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "scan": "scan 3s linear infinite",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 196, 255, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 196, 255, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0, 196, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 196, 255, 0.05) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(0, 196, 255, 0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      boxShadow: {
        "glow-blue": "0 0 30px rgba(0, 196, 255, 0.3)",
        "glow-blue-lg": "0 0 60px rgba(0, 196, 255, 0.4)",
        "card": "0 4px 40px rgba(0, 0, 0, 0.6)",
      },
      dropShadow: {
        "glow": "0 0 10px rgba(0, 196, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
