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
        /* MIP palette: #091057, #024CAA, #EC8305, #DBD3D3 */
        mip: {
          dark: "#091057",
          "dark-blue": "#091057",
          "medium-blue": "#024CAA",
          "royal-blue": "#024CAA",
          accent: "#EC8305",
          "accent-light": "#f09428",
          silver: "#DBD3D3",
        },
        primary: {
          50: "#e8eef9",
          200: "#7ba8e8",
          500: "#024CAA",
          600: "#023d88",
          700: "#091057",
        },
        accent: {
          teal: "#EC8305",
          500: "#EC8305",
          600: "#d47404",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
