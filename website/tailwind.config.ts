import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#071827",
        ocean: "#075EA8",
        azure: "#1B8CE3",
        emerald: "#14B884",
        mist: "#EEF7FB",
        graphite: "#233142"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(7, 24, 39, 0.14)",
        glow: "0 18px 55px rgba(20, 184, 132, 0.22)"
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
