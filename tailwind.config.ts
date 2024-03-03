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
        surface: "#171023",
        surfaceprimary: "#2C243B",
        surfaces: "#413A4F",
        purples: "#8A42DB",
        primary: "#F5F6F6",
        secondary: "#CDD0D4",
        buttonprimary: "#F5F6F6",
        strokehigh: "#7DFFAF",
        highlight: "#7DFFAF",
      },
      boxShadow: {
        card: "0px 0px 20px 0px #7DFFAF"
      }
    },
  },
  plugins: [],
};
export default config;
