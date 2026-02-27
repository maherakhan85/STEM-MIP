import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* MIP-style: dark base with crisp accent */
        mip: {
          dark: "#0f1419",
          charcoal: "#1a1f26",
          slate: "#252b33",
          muted: "#6b7280",
          accent: "#3b82f6",
          "accent-light": "#60a5fa",
        },
        gold: "#D4AF37",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
