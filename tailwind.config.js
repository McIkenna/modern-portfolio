/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "rgb(var(--color-void) / <alpha-value>)",
          soft: "rgb(var(--color-void-soft) / <alpha-value>)",
          panel: "rgb(var(--color-void-panel) / <alpha-value>)",
        },
        fog: "rgb(var(--color-fog) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        signal: {
          DEFAULT: "#8B7FFF",
          dim: "#5B4FCC",
          bright: "#A99BFF",
        },
        teal: {
          DEFAULT: "#5EEAD4",
        },
        gold: {
          DEFAULT: "#E8C468",
        },
        danger: "#FF6B6B",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at center, rgba(139,127,255,0.15), transparent 70%)",
        "grid-lines":
          "linear-gradient(rgba(244,243,239,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(244,243,239,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139,127,255,0.25)",
        "glow-sm": "0 0 20px rgba(139,127,255,0.18)",
        gold: "0 0 30px rgba(232,196,104,0.25)",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.9 },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        spinSlowReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "pulse-slow": "pulseSlow 3.5s ease-in-out infinite",
        scanline: "scanline 4s linear infinite",
        "spin-slow": "spinSlow 40s linear infinite",
        "spin-slow-reverse": "spinSlowReverse 55s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
