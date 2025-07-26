import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        script: ["Dancing Script", "cursive"],
      },
      colors: {
        amber: {
          50: "rgb(var(--bg-tertiary))",
          100: "rgb(var(--secondary-cream))",
          600: "rgb(var(--primary-brown))",
          700: "rgb(var(--accent-gold))",
        },
        gray: {
          100: "rgb(var(--bg-secondary))",
          200: "rgb(var(--border-color))",
          600: "rgb(var(--text-secondary))",
          700: "rgb(var(--text-secondary))",
          800: "rgb(var(--text-primary))",
          900: "rgb(var(--bg-primary))",
        },
        white: "rgb(var(--card-bg))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
