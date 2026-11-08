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
        brand: {
          dark: "#0a192f",
          navy: "#0f2852",
          navyLight: "#1a3668",
          blue: "#0284c7",
          amber: "#d97706",
          gold: "#f59e0b",
          light: "#f8fafc",
          surface: "#f1f5f9",
          slate: "#334155"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
