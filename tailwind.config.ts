import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        primary: "#0ea5e9",
        secondary: "#8b5cf6",
        tertiary: "#ec4899",
        content: "#fafafa",
        dimWhite: "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
      },
    },
    screens: {
      xm: "320px",
      sm: "640px",
      md: "768px",
      lg: "1028px",
      xl: "1280px",
    },
  },
  plugins: [],
} satisfies Config;
