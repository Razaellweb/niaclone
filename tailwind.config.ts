import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "ui-sans-serif", "system-ui"],
      },
      colors: {
        background: "#0f172a",
        foreground: "#f1f5f9",
        primary: {
          DEFAULT: "#1e3a8a",
          foreground: "#f1f5f9",
        },
        accent: {
          DEFAULT: "#06f6f6", // Neon cyan accent
          foreground: "#0f172a",
        },
        card: {
          DEFAULT: "#1e293b",
          foreground: "#f1f5f9",
        },
        popover: {
          DEFAULT: "#1e293b",
          foreground: "#f1f5f9",
        },
        secondary: {
          DEFAULT: "#334155",
          foreground: "#f1f5f9",
        },
        muted: {
          DEFAULT: "#334155",
          foreground: "#94a3b8",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#f1f5f9",
        },
        border: "#334155",
        input: "#334155",
        ring: "#06f6f6",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
