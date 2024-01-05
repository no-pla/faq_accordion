import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      darkPurple: "#301534",
      purple: "#AD28EB",
      palePurple: "#8B6990",
      lightPink: "#F8EEFF",
      white: "#FFFFFF",
    },
    extend: {
      boxShadow: {
        cardShadow: "0 23px 56px rgba(80, 0, 118, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
