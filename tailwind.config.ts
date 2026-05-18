import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#faf9f5",
        "surface-soft": "#f5f0e8",
        "surface-card": "#efe9de",
        "surface-cream-strong": "#e8e0d2",
        "surface-dark": "#181715",
        "surface-dark-elevated": "#252320",
        "surface-dark-soft": "#1f1e1b",
        hairline: "#e6dfd8",
        "hairline-soft": "#ebe6df",
        primary: "#cc785c",
        "primary-active": "#a9583e",
        "primary-disabled": "#e6dfd8",
        "accent-teal": "#5db8a6",
        "accent-amber": "#e8a55a",
        ink: "#141413",
        "body-strong": "#252523",
        body: "#3d3d3a",
        muted: "#6c6a64",
        "muted-soft": "#8e8b82",
        "on-primary": "#ffffff",
        "on-dark": "#faf9f5",
        "on-dark-soft": "#a09d96",
        success: "#5db872",
        warning: "#d4a017",
        error: "#c64545",
      },
      fontFamily: {
        display: [
          "Cormorant Garamond",
          "Noto Serif KR",
          "EB Garamond",
          "Garamond",
          "Times New Roman",
          "serif",
        ],
        sans: [
          "Inter",
          "Noto Sans KR",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      boxShadow: {
        editorial: "0 1px 3px rgba(20,20,19,0.08)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
