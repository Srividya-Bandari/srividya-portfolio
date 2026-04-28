import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0a0a0a",
          light: "#fafafa",
        },
        surface: {
          DEFAULT: "#111111",
          light: "#ffffff",
        },
        border: {
          DEFAULT: "#222222",
          light: "#e5e5e5",
        },
        accent: {
          DEFAULT: "#06b6d4",
          hover: "#0891b2",
        },
        foreground: {
          DEFAULT: "#fafafa",
          light: "#0a0a0a",
        },
        muted: {
          DEFAULT: "#a1a1aa",
          light: "#52525b",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
