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
        primary: "#f9f4c6",
        secondary: "#e67d91",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        noto: ["Noto Serif JP", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
